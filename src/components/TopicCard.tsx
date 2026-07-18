import { useNavigate } from "react-router-dom";
// import { formatTime } from "../lib/utils";

export default function TopicCard({ topic }: { topic: any }) {
	const navigate = useNavigate();

	// Safety check for duration
	// const durationInSeconds = (topic.timeLimit || 0) * 60;

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
						<span>Mastery</span>
					</span>
					<span className="font-bold text-zinc-900 dark:text-zinc-200 text-sm">
						0%
					</span>
				</div>
			</div>

			<button
				onClick={() => navigate(`/assessment/${topic.id}`)}
				className="w-full cursor-pointer py-2.5 bg-zinc-700 dark:bg-zinc-100 hover:bg-zinc-700 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-medium rounded-lg transition-colors"
			>
				View Assessment
			</button>
		</div>
	);
}
