import { useState, useMemo, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AssessmentModal from "../components/AssesmentModal";
import PrepPhase from "../components/PrepPhase";
import { formatTime, timeToSeconds } from "../lib/utils";
import QuestionCarousel from "../components/QuestionCarousel";
import DOMPurify from "dompurify";
import SelectDropdown from "../components/SelectDropdown";
import CustomButton from "../components/CustomButton";
import { useTopic } from "../context/TopicProvider";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import type { Question } from "../type";

// const DEFAULT_TIME_LIMIT = 600; // 10:00, swap for topic?.timeLimit if you add that field

type ModalType = "none" | "exit" | "forceFinish" | "noAnswer" | "timeExpired";

export default function AssessmentPage() {
	const { topicId } = useParams();
	const navigate = useNavigate();
	const { getTopic, updateTopicData } = useTopic();

	const topic = getTopic(topicId || "");

	const [shuffleOrder, setShuffleOrder] = useState(true);
	const [shuffleOptionsOrder, setShuffleOptionsOrder] = useState(false);

	const [status, setStatus] = useState<"prep" | "active" | "result">("prep");
	const [currentIdx, setCurrentIdx] = useState(0);
	const [modalType, setModalType] = useState<ModalType>("none");
	const [isTimed, setIsTimed] = useState(true);
	const [timeLeft, setTimeLeft] = useState<number>(0);
	const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);

	const prevTopicIdRef = useRef<string | null>(null);

	const shuffledData = useMemo(() => {
		if (!topic || !topic.questions) return [];

		const fisherYatesShuffle = <T,>(array: T[]): T[] => {
			const arr = [...array];
			for (let i = arr.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
			return arr;
		};

		const questionsToProcess = shuffleOrder
			? fisherYatesShuffle(topic.questions)
			: [...topic.questions];

		return questionsToProcess.map((q: Question) => ({
			...q,
			options: shuffleOptionsOrder
				? fisherYatesShuffle(q.options)
				: [...q.options],
		}));
	}, [topic, shuffleOrder, shuffleOptionsOrder]);

	// 1. Memoize just the heavy processing / statuses array
	const questionStatuses = useMemo(() => {
		return shuffledData.map((q, i) => {
			const userAnswer = userAnswers[i];
			const isAnswered = userAnswer !== null && userAnswer !== undefined;

			if (status === "result") {
				if (!isAnswered) return "unanswered";
				return userAnswer === q.answer ? "correct" : "incorrect";
			}

			return isAnswered ? "filled" : "empty";
		});
	}, [userAnswers, shuffledData, status]);

	// 2. Memoize the lightweight metrics derived from user answers
	const { score, percentage, answeredCount, total, progressPercentage } =
		useMemo(() => {
			const totalCount = shuffledData.length;
			const answered = userAnswers.filter(
				(a) => a !== null && a !== undefined,
			).length;

			const correctCount = userAnswers.filter(
				(a, i) => shuffledData[i] && a === shuffledData[i].answer,
			).length;

			return {
				score: correctCount,
				percentage: totalCount
					? Math.round((correctCount / totalCount) * 100)
					: 0,
				answeredCount: answered,
				total: totalCount,
				progressPercentage: totalCount ? (answered / totalCount) * 100 : 0,
			};
		}, [userAnswers, shuffledData]);

	//.....................

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, [status]);

	useEffect(() => {
		if (!topic || !topicId) return;
		if (prevTopicIdRef.current === topicId) return;

		prevTopicIdRef.current = topicId;
		setUserAnswers(Array(topic.questions.length).fill(null));
	}, [topic, topicId]);

	// Countdown — only runs in timed mode, and stops cleanly at 0 instead of
	// silently ticking past into negative numbers.
	useEffect(() => {
		if (status !== "active" || !isTimed) return;
		if (timeLeft <= 0) {
			setModalType("timeExpired");
			return;
		}
		const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
		return () => clearInterval(timer);
	}, [status, isTimed, timeLeft]);

	useEffect(() => {
		if (status !== "result" || !topic) return;

		const hasNoPreviousScore =
			topic.highestScore === null || topic.highestScore === undefined;

		if (hasNoPreviousScore || score > topic.highestScore!) {
			updateTopicData(String(topic.id), score);
		}
	}, [status, topic, score, updateTopicData]);

	const handleModalConfirm = () => {
		if (modalType === "exit") navigate("/");
		if (modalType === "forceFinish") setStatus("result");
		if (modalType === "timeExpired") setStatus("result");
		setModalType("none");
	};

	const handleBack = () => {
		if (status === "active") {
			setModalType("exit");
		} else {
			navigate("/");
		}
	};

	const handleProceed = (
		isTimed: boolean,
		isOrderShuffled: boolean,
		isOptionsOrderShuffled: boolean,
	) => {
		if (!topic) return;
		setIsTimed(isTimed);
		setShuffleOrder(isOrderShuffled);
		setShuffleOptionsOrder(isOptionsOrderShuffled);
		setTimeLeft(timeToSeconds(topic.timeLimit));
		setStatus("active");
	};

	if (!topic) {
		return (
			<div className="max-w-xl mx-auto px-4 py-20 text-center">
				<h1 className="text-2xl font-bold mb-4">Topic not found</h1>
				<button
					onClick={() => navigate("/")}
					className="px-6 py-3 bg-zinc-900 text-white rounded-xl font-bold"
				>
					Back to Dashboard
				</button>
			</div>
		);
	}

	// --- PREP VIEW ---
	if (status === "prep") {
		return <PrepPhase topic={topic} onProceed={handleProceed} />;
	}

	// --- ASSESSMENT VIEW (Persistent Layout) ---
	return (
		// <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
		<div className="max-w-7xl w-full mx-auto px-4 py-8 bg-transparent text-zinc-900 dark:text-zinc-100">
			{modalType !== "none" && (
				<AssessmentModal
					modalType={modalType}
					onClose={() => setModalType("none")}
					onConfirm={handleModalConfirm}
				/>
			)}

			{/* Header */}
			<div className="mb-8 space-y-4">
				<button
					onClick={handleBack}
					className="inline-flex items-center cursor-pointer gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-full font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all shadow-sm justify-self-start"
				>
					<span className="flex gap-1 items-center">
						<ArrowLeft size={18} />
						<span>Back to Dashboard</span>
					</span>
				</button>

				<div className="space-y-1">
					<h1 className="font-bold text-lg text-zinc-900 dark:text-zinc-50">
						{topic.name}
					</h1>
					{topic.direction && (
						<div className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 leading-normal">
							{/* {topic.brief} */}
							<p
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(topic.direction),
								}}
							/>
						</div>
					)}
				</div>

				{/* Empty third column balances the grid so title stays centered */}
				<div className="hidden sm:block" />
			</div>

			{/* Progress, Timer, and Score */}
			<div>
				{/* Calculate progress once to use everywhere */}
				{status !== "result" && (
					<div className="mb-6">
						<div className="flex justify-between text-sm font-bold text-zinc-500 mb-2">
							<span>Assessment Progress</span>
							<span>
								{answeredCount} / {total}
							</span>
						</div>
						<div className="h-2 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full mb-3">
							<div
								className="h-full bg-zinc-700 dark:bg-zinc-400 rounded-full transition-all"
								style={{ width: `${progressPercentage}%` }}
							/>
						</div>

						{status === "active" && isTimed && (
							<div
								className={`font-bold px-3 py-2 rounded-lg border border-zinc-300 shadow-sm dark:border-zinc-700 bg-white dark:bg-zinc-900 transition-colors ${
									timeLeft <= 10
										? "text-red-600 dark:text-red-400"
										: "text-zinc-500 dark:text-zinc-400"
								}`}
							>
								<p className="text-xs uppercase tracking-wider font-mono text-slate-400">
									Remaining Time:
								</p>
								<p className="text-lg lg:text-xl">
									{formatTime(timeLeft)}
								</p>
							</div>
						)}

						{status === "active" && !isTimed && (
							<div className="font-mono text-sm font-bold text-zinc-400">
								Practice Mode — Unlimited Time
							</div>
						)}
					</div>
				)}

				{status === "result" && (
					<div className="mb-4 px-3 md:px-4 py-3 bg-zinc-200 dark:bg-zinc-800 rounded-xl border-2 border-zinc-400 dark:border-zinc-600 flex items-center justify-between gap-4 sm:gap-2">
						<div>
							<div className="text-[10px] md:text-xs font-semibold text-zinc-500 mb-1 uppercase tracking-wider">
								Score
							</div>
							<div className="text-2xl font-black text-zinc-900 dark:text-zinc-50">
								{score}/{total}
							</div>
						</div>
						<div className="text-right">
							<div className="text-[10px] md:text-xs font-semibold text-zinc-500 mb-1 uppercase tracking-wider">
								Percentage
							</div>
							<div className="text-2xl font-black text-zinc-900 dark:text-zinc-50">
								{percentage}%
							</div>
						</div>
					</div>
				)}
			</div>

			{/* Question Card */}
			<div>
				<QuestionCarousel
					questions={shuffledData}
					currentIdx={currentIdx}
					userAnswers={userAnswers}
					status={status === "result" ? "result" : "active"}
					onAnswer={(ans) => {
						if (status !== "active") return;
						const n = [...userAnswers];
						n[currentIdx] = ans;
						setUserAnswers(n);
					}}
				/>
			</div>

			{/* Navigation */}
			<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-3 dark:border-zinc-800 mt-4">
				<div className="flex gap-2">
					<SelectDropdown
						label="Jump To"
						questionStatuses={questionStatuses}
						className="flex-1 min-w-30 sm:flex-none"
						currentIndex={currentIdx}
						onChange={(index: number) => {
							//..
							console.log(index);
							setCurrentIdx(index);
						}}
					/>

					{/* prev */}
					<CustomButton
						className="flex flex-1 items-center justify-center gap-1sm:flex-none"
						onClick={() => setCurrentIdx((prev) => prev - 1)}
						disabled={currentIdx === 0}
					>
						<span className="flex items-center gap-1">
							<ChevronLeft size={18} />
							<span>Previous</span>
						</span>
					</CustomButton>

					{/* next */}
					<CustomButton
						className="flex flex-1 items-center justify-center gap-1 sm:flex-none"
						onClick={() => {
							setCurrentIdx((prev) => prev + 1);
						}}
						disabled={currentIdx === shuffledData.length - 1}
					>
						<span className="flex items-center gap-1">
							<span>Next</span>
							<ChevronRight size={18} />
						</span>
					</CustomButton>
				</div>

				{status === "active" && (
					<CustomButton
						onClick={() =>
							userAnswers.every((a) => a !== null)
								? setStatus("result")
								: setModalType("forceFinish")
						}
						className="py-3 sm:py-3.5"
					>
						{userAnswers.every((a) => a !== null)
							? "Check Results"
							: "Submit"}
					</CustomButton>
				)}
			</div>
		</div>
	);
}
