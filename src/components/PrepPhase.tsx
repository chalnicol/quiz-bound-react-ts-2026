import { useState } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import type { Topic } from "../type";

interface PrepPhaseProps {
	topic: Topic;
	onProceed: (isTimed: boolean) => void;
}

export default function PrepPhase({ topic, onProceed }: PrepPhaseProps) {
	const [isTimed, setIsTimed] = useState(true);

	const SANITIZE_CONFIG = {
		ALLOWED_TAGS: [
			"p",
			"b",
			"strong",
			"i",
			"em",
			"br",
			"img",
			"span",
			"sup",
			"sub",
		],
		ALLOWED_ATTR: ["src", "alt", "class"],
	};

	return (
		<div className="max-w-7xl mx-auto transition-colors px-4 py-8">
			{/* Prominent Back Navigation */}
			<Link
				to="/"
				className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-full font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all mb-2 shadow-sm"
			>
				<span className="material-icons !text-sm">arrow_back</span> Back to
				Dashboard
			</Link>

			<div className="flex flex-col md:flex-row gap-6 lg:gap-8 mt-4">
				{/* Left: Placeholder Image */}
				<div className="w-full md:w-1/3 lg:w-1/2 bg-zinc-200 h-44 md:h-auto dark:bg-zinc-800 rounded-lg overflow-hidden flex items-center justify-center border-4 border-zinc-700 dark:border-zinc-600 transition-colors relative">
					<span className="material-icons !text-6xl text-zinc-300 dark:text-zinc-600">
						image
					</span>

					<img
						src="/generic_photo.jpg"
						className="md:w-2/3 md:h-auto h-2/3 w-auto aspect-square rounded-full absolute z-10 object-contain shadow-2xl border-2 border-zinc-400 dark:border-zinc-500"
					/>
				</div>

				{/* Right: Details */}
				<div className="w-full md:w-2/3 lg:w-1/2 space-y-4">
					<div>
						<h1 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 mb-0.5">
							{topic.name}
						</h1>
						{topic.brief && (
							<p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
								{topic.brief}
							</p>
						)}
					</div>

					<div className="bg-zinc-200 text-zinc-600 dark:text-zinc-400 text-sm dark:bg-zinc-800 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700  transition-colors">
						<span className="text-xs text-slate-400 uppercase tracking-wider font-bold">
							Example:
						</span>
						<p
							className="[&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_img]:my-2 [&_img]:border [&_img]:border-zinc-200 [&_img]:dark:border-zinc-700"
							dangerouslySetInnerHTML={{
								__html: DOMPurify.sanitize(
									topic.direction ?? "",
									SANITIZE_CONFIG,
								),
							}}
						/>
					</div>

					{/* Pill Toggle */}

					<div className="flex flex-col gap-2">
						<p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
							Select Session Mode
						</p>

						<div className="flex items-center justify-between p-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full w-full relative border border-zinc-300 dark:border-zinc-700 transition-colors">
							{/* Animating shade: Muted zinc with a subtle border */}
							<div
								className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-zinc-600 dark:bg-zinc-600 border border-zinc-500 rounded-full shadow-sm transition-transform duration-300 ease-in-out ${
									isTimed ? "translate-x-0" : "translate-x-full"
								}`}
							/>

							<button
								onClick={() => setIsTimed(true)}
								className={`w-1/2 py-3 px-4 rounded-full font-bold text-sm transition-colors z-10 flex flex-col items-center justify-center ${
									isTimed
										? "text-white"
										: "text-zinc-600 dark:text-zinc-400"
								}`}
							>
								<span>Timed</span>
								<span className="text-[10px] font-normal opacity-80">
									Strict deadline
								</span>
							</button>

							<button
								onClick={() => setIsTimed(false)}
								className={`w-1/2 py-3 px-4 rounded-full font-bold text-sm transition-colors z-10 flex flex-col items-center justify-center ${
									!isTimed
										? "text-white"
										: "text-zinc-600 dark:text-zinc-400"
								}`}
							>
								<span>Practice</span>
								<span className="text-[10px] font-normal opacity-80">
									Unlimited time
								</span>
							</button>
						</div>
					</div>

					<button
						onClick={() => onProceed(isTimed)}
						className="w-full py-4 bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-bold rounded-xl transition-all shadow-lg"
					>
						Initialize Assessment
					</button>
				</div>
			</div>
		</div>
	);
}
