import { Link } from "react-router-dom";
import type { Topic } from "../type";
// import { formatTime } from "../lib/utils";

export default function TopicCard({ topic }: { topic: Topic }) {
	const hasAttempted = typeof topic.highestScore === "number";
	const scorePercentage = hasAttempted
		? Math.round((topic.highestScore! / topic.questions.length) * 100)
		: null;

	return (
		<div className="bg-white flex flex-col dark:bg-zinc-800 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-md transition-all hover:shadow-lg">
			<h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
				{topic.name}
			</h2>
			{/* <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
				{topic.brief.length > 100 ? (
					<span>{topic.brief.substring(0, 100)}...</span>
				) : (
					<span>{topic.brief}</span>
				)}
			</p> */}

			<div className="space-y-2 mb-4 mt-auto border dark:border-zinc-600 border-zinc-300 rounded-lg px-3 py-2">
				{/* Duration */}
				<div className="flex justify-between text-sm">
					<span className="text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
						<span className="material-icons !text-lg">timer</span>{" "}
						Duration
					</span>
					<span className="font-medium text-zinc-900 dark:text-zinc-200">
						{/* {formatTime(timeLimit * 60)} */}
						{topic.timeLimit}
						<span className="text-[10px] ms-1 tracking-widest uppercase text-slate-400">
							(hh:mm:ss)
						</span>
					</span>
				</div>

				{/* Questions */}
				<div className="flex justify-between text-sm">
					<span className="text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
						<span className="material-icons !text-lg">list_alt</span>{" "}
						Questions
					</span>
					<span className="font-medium text-zinc-900 dark:text-zinc-200">
						{topic.questions?.length || 0}
					</span>
				</div>

				{/* Mastery */}
				<div className="flex justify-between text-sm">
					<span className="text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
						<span className="material-icons !text-lg">emoji_events</span>{" "}
						<span>Best Score</span>
					</span>
					<span className="font-bold text-zinc-900 dark:text-zinc-200 text-sm">
						{hasAttempted ? `${scorePercentage}%` : "—"}
					</span>
				</div>
			</div>

			<Link
				to={`/assessment/${topic.id}`}
				className="w-full cursor-pointer py-2.5 text-center bg-zinc-700 dark:bg-zinc-100 hover:bg-zinc-600 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-bold tracking-wider rounded-lg transition-colors text-sm uppercase"
			>
				View Assessment
			</Link>
		</div>
	);
}
