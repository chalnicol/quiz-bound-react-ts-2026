import { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { topics } from "../data";
import AssessmentModal from "../components/AssesmentModal";
import PrepPhase from "../components/PrepPhase";
import { formatTime, timeToSeconds } from "../lib/utils";
import QuestionCarousel from "../components/QuestionCarousel";

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
			{/* Header */}
			<div className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-center gap-4 mb-8">
				<button
					onClick={handleBack}
					className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-full font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all shadow-sm justify-self-start"
				>
					<span className="material-icons !text-sm">arrow_back</span> Back
				</button>

				<div className="text-left sm:text-center">
					<h1 className="font-bold text-lg text-zinc-900 dark:text-zinc-50">
						{topic.name}
					</h1>
					{topic.brief && (
						<p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
							{topic.brief}
						</p>
					)}
				</div>

				{/* Empty third column balances the grid so title stays centered */}
				<div className="hidden sm:block" />
			</div>

			{/* Progress, Timer, and Score */}
			<div className="mb-8">
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
								<div className="mb-8">
									<div className="flex justify-between text-sm font-bold text-zinc-500 mb-2">
										<span>Assessment Progress</span>
										<span>
											{answeredCount} / {total}
										</span>
									</div>
									<div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800/50 rounded-full mb-3">
										<div
											className="h-full bg-zinc-900 dark:bg-zinc-50 rounded-full transition-all"
											style={{ width: `${progressPercentage}%` }}
										/>
									</div>

									{status === "active" && isTimed && (
										<div
											className={`text-center font-mono text-lg font-bold px-4 py-2 rounded-lg border transition-colors ${
												timeLeft <= 10
													? "text-red-600 dark:text-red-400 border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/30"
													: "text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800"
											}`}
										>
											{formatTime(timeLeft)}
										</div>
									)}
									{status === "active" && !isTimed && (
										<div className="text-center font-mono text-sm font-bold text-zinc-400">
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
							<div className="p-6 bg-white shadow-sm dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2">
								<div className="text-center sm:text-left">
									<div className="text-xs font-semibold text-zinc-500 mb-1">
										Score
									</div>
									<div className="text-2xl font-black text-zinc-900 dark:text-zinc-50">
										{correctCount} / {total}
									</div>
								</div>
								<div className="text-center sm:text-right">
									<div className="text-xs font-semibold text-zinc-500 mb-1">
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
			<div className="mb-8">
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
			<div className="flex justify-between items-center pt-6 border-t border-zinc-200 dark:border-zinc-800">
				<div className="flex gap-2">
					<button
						disabled={currentIdx === 0}
						onClick={() => setCurrentIdx((prev) => prev - 1)}
						className="flex items-center gap-1 px-3 py-2 bg-white dark:bg-zinc-800 sm:px-6 sm:py-3 text-sm sm:text-base border border-zinc-300 dark:border-zinc-700 rounded-xl font-bold disabled:opacity-40"
					>
						<span className="material-icons !text-base sm:!text-lg">
							chevron_left
						</span>
						Prev
					</button>
					<button
						disabled={currentIdx === shuffledData.length - 1}
						onClick={() => setCurrentIdx((prev) => prev + 1)}
						className="flex items-center gap-1 px-3 py-2 bg-white dark:bg-zinc-800 sm:px-6 sm:py-3 text-sm sm:text-base border border-zinc-300 dark:border-zinc-700 rounded-xl font-bold disabled:opacity-40"
					>
						Next
						<span className="material-icons !text-base sm:!text-lg">
							chevron_right
						</span>
					</button>
				</div>
				{status === "active" && (
					<button
						onClick={() =>
							userAnswers.every((a) => a !== null)
								? setStatus("result")
								: setModalType("forceFinish")
						}
						className="px-4 py-2 sm:px-8 sm:py-3 text-sm sm:text-base bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-xl font-bold"
					>
						{userAnswers.every((a) => a !== null)
							? "Check Results"
							: "Submit"}
					</button>
				)}
			</div>
		</div>
	);
}
