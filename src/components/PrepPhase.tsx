import { useState } from "react";
import { Link } from "react-router-dom";

interface PrepPhaseProps {
	topicName: string;
	topicBrief: string;
	timeLimit: string;
	onProceed: (isTimed: boolean) => void;
}

export default function PrepPhase({
	topicName,
	topicBrief,
	timeLimit,
	onProceed,
}: PrepPhaseProps) {
	const [isTimed, setIsTimed] = useState(true);

	return (
		<div className="max-w-5xl mx-auto p-6 transition-colors">
			{/* Prominent Back Navigation */}
			<Link
				to="/"
				className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-full font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all mb-2 shadow-sm"
			>
				<span className="material-icons !text-sm">arrow_back</span> Back to
				Dashboard
			</Link>

			<div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 mt-4 lg:mt-2">
				{/* Left: Placeholder Image */}
				<div className="w-full md:w-1/3 max-w-sm aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden flex items-center justify-center border-4 border-zinc-300 dark:border-zinc-400 transition-colors relative">
					<span className="material-icons !text-6xl text-zinc-300 dark:text-zinc-600">
						image
					</span>

					{/* <img
						src="/generic_photo.jpg"
						className="w-full h-full absolute z-10"
					/> */}
				</div>

				{/* Right: Details */}
				<div className="w-full md:w-2/3 space-y-8">
					<div>
						<h1 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 mb-2">
							{topicName}
						</h1>
						<p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
							{topicBrief}
						</p>
					</div>

					{/* Theme-Adaptive Directions with matching muted colors */}
					<div className="bg-zinc-200 dark:bg-zinc-800 px-6 py-4 rounded-lg border border-zinc-300 dark:border-zinc-700  transition-colors">
						<h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-3 text-lg">
							Assessment Directions
						</h3>
						<ul className="text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside space-y-2">
							<li>Navigate freely between questions.</li>
							<li>Your responses are saved as you go.</li>
							<li>
								You have{" "}
								<span className="font-mono font-bold text-zinc-900 dark:text-zinc-100">
									{timeLimit}
								</span>{" "}
								<span className="text-[10px] tracking-widest font-semibold">
									(HH:MM:SS)
								</span>{" "}
								if timer is enabled.
							</li>
						</ul>
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
