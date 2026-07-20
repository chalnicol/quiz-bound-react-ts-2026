import { useState } from "react";
import { Link } from "react-router-dom";
import type { Topic } from "../type";
import HtmlRenderer from "./HtmlRenderer";
import { ArrowLeft, Timer } from "lucide-react";
import SliderToggle from "./SliderToggle";

interface PrepPhaseProps {
	topic: Topic;
	onProceed: (
		isTimed: boolean,
		isOrderShuffled: boolean,
		isOptionsOrderShuffled: boolean,
	) => void;
}

export default function PrepPhase({ topic, onProceed }: PrepPhaseProps) {
	const [isTimed, setIsTimed] = useState(true);
	const [isOrderShuffled, setIsOrderShuffled] = useState(false);
	const [isOptionsOrderShuffled, setIsOptionsOrderShuffled] = useState(false);

	const handleProceed = () => {
		onProceed(isTimed, isOrderShuffled, isOptionsOrderShuffled);
	};

	return (
		<div className="max-w-7xl mx-auto transition-colors px-4 py-8">
			{/* Prominent Back Navigation */}
			<Link
				to="/"
				className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-full font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all mb-2 shadow-sm"
			>
				<span className="flex gap-1 items-center">
					<ArrowLeft size={18} />
					<span>Back to Dashboard</span>
				</span>
			</Link>

			<div className="flex flex-col md:flex-row gap-6 lg:gap-8 mt-4">
				{/* Left: Placeholder Image */}
				<div className="w-full md:w-1/3 lg:w-1/2 bg-zinc-200 h-44 md:h-auto dark:bg-zinc-800 rounded-lg overflow-hidden flex items-center justify-center border-4 border-zinc-300 dark:border-zinc-700 transition-colors relative">
					{/* <span className="material-icons !text-6xl text-zinc-300 dark:text-zinc-600">
						image
					</span> */}

					<img
						src="/generic_photo.jpg"
						className="md:w-2/3 md:h-auto h-2/3 w-auto aspect-square rounded-full absolute z-10 object-contain shadow-2xl border-2 border-zinc-400 dark:border-zinc-500"
					/>
				</div>

				{/* Right: Details */}
				<div className="w-full md:w-2/3 lg:w-1/2 space-y-6">
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

					<div className="space-y-1.5">
						<p className="text-[10px] uppercase tracking-wider font-bold text-zinc-500">
							Preview
						</p>

						<div className="bg-zinc-200 text-sm text-zinc-600 dark:text-zinc-400 dark:bg-zinc-800 px-4 pt-3 pb-5 rounded border border-zinc-300 dark:border-zinc-600  transition-colors space-y-4 shadow-sm dark:shadow-zinc-600">
							<div className="flex flex-col gap-0.5">
								<span className="font-bold text-[10px] uppercase tracking-wider text-zinc-600 dark:text-zinc-500 shrink-0">
									Direction:
								</span>
								<HtmlRenderer
									content={topic.direction ?? ""}
									className="tracking-wide leading-normal"
								/>
							</div>

							<div className="flex gap-x-1">
								<span className="font-mono">1.</span>
								<HtmlRenderer
									content={topic.sampleQuestion.text ?? ""}
									className="font-semibold"
								/>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-1">
								{topic.sampleQuestion.options.map((opt, i) => (
									<div
										className="border border-zinc-400 dark:border-zinc-600 px-2 py-1 rounded"
										key={i}
									>
										<HtmlRenderer content={opt} />
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Slider / Toggle Form */}
					<div className="flex flex-col md:flex-row gap-x-2 gap-y-3">
						{/* Shuffle Question Order Toggle */}
						<SliderToggle
							label="Shuffle Question Order"
							checked={isOrderShuffled}
							onChange={(isChecked: boolean) =>
								setIsOrderShuffled(isChecked)
							}
						/>

						{/* Shuffle Options Order Toggle */}
						{topic.randomOptions && (
							<SliderToggle
								label="Shuffle Options Order"
								checked={isOptionsOrderShuffled}
								onChange={(isChecked: boolean) =>
									setIsOptionsOrderShuffled(isChecked)
								}
							/>
						)}
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
								className={`w-1/2 py-2 px-4 rounded-full font-bold text-sm transition-colors z-10 flex flex-col items-center justify-center ${
									isTimed
										? "text-white"
										: "text-zinc-600 dark:text-zinc-400"
								}`}
							>
								<p>Timed</p>
								<p className="text-xs flex items-center gap-1">
									<Timer size={14} />
									<span>{topic.timeLimit}</span>
								</p>
							</button>

							<button
								onClick={() => setIsTimed(false)}
								className={`w-1/2 py-2 px-4 rounded-full font-bold text-sm transition-colors z-10 flex flex-col items-center justify-center ${
									!isTimed
										? "text-white"
										: "text-zinc-600 dark:text-zinc-400"
								}`}
							>
								<p>Practice</p>
								<p className="text-xs font-normal opacity-80">
									Unlimited time
								</p>
							</button>
						</div>
					</div>

					<button
						onClick={handleProceed}
						className="w-full py-4 bg-zinc-700 dark:bg-zinc-50 hover:bg-zinc-600 cursor-pointer active:scale-95 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-bold rounded-xl transition-all shadow-lg"
					>
						Start Assessment
					</button>
				</div>
			</div>
		</div>
	);
}
