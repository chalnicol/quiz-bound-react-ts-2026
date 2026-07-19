import { cn } from "../lib/utils";
import DOMPurify from "dompurify";

interface OptionProps {
	text: string;
	isCorrect: boolean;
	isSelected: boolean;
	isResult: boolean;
	onSelect: () => void;
}

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

export default function OptionBox({
	text,
	isCorrect,
	isSelected,
	isResult,
	onSelect,
}: OptionProps) {
	const showUserLabel = isResult && isSelected && !isCorrect;

	const buttonStyles = isResult
		? isCorrect
			? "border-emerald-600 bg-emerald-50 dark:bg-emerald-950 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200"
			: isSelected
				? "border-red-300 bg-red-50 dark:bg-red-950/20 dark:border-red-900 text-red-800 dark:text-red-400"
				: "border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-500"
		: isSelected
			? "border-zinc-900 dark:border-zinc-100 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
			: "border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 text-zinc-700 dark:text-zinc-300";

	return (
		<div className="w-full relative">
			<button
				onClick={onSelect}
				disabled={isResult}
				className={cn(
					"w-full p-3 border-2 text-left transition-all relative z-10 rounded-xl font-medium",
					buttonStyles,
				)}
			>
				<p
					className="[&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_img]:my-1 [&_img]:inline-block"
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(text, SANITIZE_CONFIG),
					}}
				/>
			</button>

			{isResult && isCorrect && (
				<div className="flex justify-start z-0">
					<p className="text-[10px] font-bold uppercase tracking-wider text-white dark:text-zinc-300 px-2 bg-emerald-600 dark:bg-emerald-800 rounded-b ms-2.5">
						Correct Answer
					</p>
				</div>
			)}

			{showUserLabel && (
				<div className="flex justify-start z-0">
					<p className="text-[10px] font-bold uppercase tracking-wider text-white dark:text-zinc-300 px-2 bg-red-300 dark:bg-red-900 rounded-b ms-2.5">
						Your Answer
					</p>
				</div>
			)}
		</div>
	);
}
