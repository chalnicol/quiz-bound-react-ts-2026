import { useNavigate } from "react-router-dom";
// import { formatTime } from "../lib/utils";

export default function TopicCard({ topic }: { topic: any }) {
	const navigate = useNavigate();

	// Safety check for duration
	// const durationInSeconds = (topic.timeLimit || 0) * 60;

	return (
		<div className="bg-white flex flex-col dark:bg-zinc-800 p-6 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-md transition-all hover:shadow-lg">
			<h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
				{topic.name}
			</h2>
			<p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
				{topic.brief}
			</p>

			<div className="space-y-2 mb-6 mt-auto">
				{/* Duration */}
				<div className="flex justify-between text-sm">
					<span className="text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
						<span className="material-icons text-sm">timer</span> Duration
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
						<span className="material-icons text-sm">list_alt</span>{" "}
						Questions
					</span>
					<span className="font-medium text-zinc-900 dark:text-zinc-200">
						{topic.questions?.length || 0}
					</span>
				</div>

				{/* Mastery */}
				<div className="flex justify-between text-sm">
					<span className="text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
						<span className="material-icons text-sm">emoji_events</span>{" "}
						Mastery
					</span>
					<span className="font-bold text-zinc-900 dark:text-zinc-200">
						0%
					</span>
				</div>
			</div>

			<button
				onClick={() => navigate(`/assessment/${topic.id}`)}
				className="w-full cursor-pointer py-2.5 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-medium rounded-lg transition-colors"
			>
				Enter Assessment
			</button>
		</div>
	);
}
