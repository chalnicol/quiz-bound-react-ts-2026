import { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { topics } from "../data";
import AssessmentModal from "../components/AssesmentModal";
import PrepPhase from "../components/PrepPhase";
import { formatTime, timeToSeconds } from "../lib/utils";
import QuestionCarousel from "../components/QuestionCarousel";
import DOMPurify from "dompurify";
import SelectDropdown from "../components/SelectDropdown";
import CustomButton from "../components/CustomButton";

// const DEFAULT_TIME_LIMIT = 600; // 10:00, swap for topic?.timeLimit if you add that field

type ModalType = "none" | "exit" | "forceFinish" | "noAnswer" | "timeExpired";

export default function AssessmentPage() {
	const { topicId } = useParams();
	const navigate = useNavigate();
	const topic = topics.find((t) => t.id === topicId);

	const [status, setStatus] = useState<"prep" | "active" | "result">("prep");
	const [currentIdx, setCurrentIdx] = useState(0);
	const [modalType, setModalType] = useState<ModalType>("none");
	const [isTimed, setIsTimed] = useState(true);
	const [timeLeft, setTimeLeft] = useState<number>(0);
	const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);

	const shuffledData = useMemo(() => {
		if (!topic) return [];
		return topic.questions.map((q: any) => ({
			...q,
			shuffledOptions: [...q.options].sort(() => Math.random() - 0.5),
		}));
	}, [topic]);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, [status]);

	useEffect(() => {
		if (topic) setUserAnswers(Array(topic.questions.length).fill(null));
	}, [topic]);

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
		return (
			<PrepPhase
				topicName={topic.name}
				topicBrief={topic.brief ?? ""}
				// timeLimit={formatTime(DEFAULT_TIME_LIMIT)}
				timeLimit={topic.timeLimit}
				onProceed={(timed) => {
					setIsTimed(timed);
					setTimeLeft(timeToSeconds(topic.timeLimit));
					setStatus("active");
				}}
			/>
		);
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
					className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-full font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all shadow-sm justify-self-start"
				>
					<span className="material-icons !text-sm">arrow_back</span> Back
					to Dashboard
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
				{(() => {
					const answeredCount = userAnswers.filter(
						(a) => a !== null,
					).length;
					const total = shuffledData.length;
					const progressPercentage = total
						? (answeredCount / total) * 100
						: 0;

					return (
						<>
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
						</>
					);
				})()}

				{status === "result" &&
					// ... your existing result code remains the same
					(() => {
						const correctCount = userAnswers.filter(
							(a, i) => a === shuffledData[i].answer,
						).length;
						const total = shuffledData.length;
						const percentage = total
							? Math.round((correctCount / total) * 100)
							: 0;

						return (
							<div className="mb-4 px-3 md:px-4 py-3 bg-zinc-200 dark:bg-zinc-800 rounded-xl border-2 border-zinc-400 dark:border-zinc-600 flex items-center justify-between gap-4 sm:gap-2">
								<div>
									<div className="text-[10px] md:text-xs font-semibold text-zinc-500 mb-1 uppercase tracking-wider">
										Score
									</div>
									<div className="text-2xl font-black text-zinc-900 dark:text-zinc-50">
										{correctCount}/{total}
									</div>
								</div>
								<div className="text-right">
									<div className="text-[10px] md:text-xs  font-semibold text-zinc-500 mb-1 uppercase tracking-wider">
										Percentage
									</div>
									<div className="text-2xl font-black text-zinc-900 dark:text-zinc-50">
										{percentage}%
									</div>
								</div>
							</div>
						);
					})()}
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
			<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-2 dark:border-zinc-800 mt-4">
				<div className="flex gap-2">
					{/* prev */}
					<CustomButton
						className="flex items-center justify-center gap-1 flex-1 sm:flex-none"
						onClick={() => setCurrentIdx((prev) => prev - 1)}
						disabled={currentIdx === 0}
					>
						<span className="material-icons !text-base sm:!text-lg">
							chevron_left
						</span>
						Prev
					</CustomButton>

					{/* next */}
					<CustomButton
						className="flex items-center justify-center gap-1 flex-1 sm:flex-none"
						onClick={() => {
							setCurrentIdx((prev) => prev + 1);
						}}
						disabled={currentIdx === shuffledData.length - 1}
					>
						Next
						<span className="material-icons !text-base sm:!text-lg">
							chevron_right
						</span>
					</CustomButton>

					<SelectDropdown
						label="Jump To"
						questionsLength={topic.questions.length || 0}
						className="flex-1 sm:flex-none"
						currentIndex={currentIdx}
						onChange={(index: number) => {
							//..
							console.log(index);
							setCurrentIdx(index);
						}}
					/>
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
