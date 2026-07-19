import { cn } from "../lib/utils";
import type { Question } from "../type";
import OptionBox from "./OptionBox";
import DOMPurify from "dompurify";

interface QuestionCardProps {
	question: Question & { shuffledOptions: string[] };
	selectedAnswer: string | null;
	status: "active" | "result";
	onAnswer: (option: string) => void;
	index: number;
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

export default function QuestionCard({
	question,
	selectedAnswer,
	status,
	onAnswer,
	index,
}: QuestionCardProps) {
	const isCorrect = selectedAnswer === question.answer;
	const isUnanswered = selectedAnswer === null;

	return (
		<div className="p-4">
			{status === "result" && (
				<div
					className={cn(
						"mb-6 p-3 rounded-lg font-bold flex items-center gap-2 border",
						isUnanswered
							? "bg-amber-100/50 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400 border-amber-200 dark:border-amber-900"
							: isCorrect
								? "bg-emerald-100/50 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900"
								: "bg-red-100/50 text-red-800 dark:bg-red-900/20 dark:text-red-400 border-red-200 dark:border-red-900",
					)}
				>
					<span className="material-icons">
						{isUnanswered
							? "warning"
							: isCorrect
								? "check_circle"
								: "cancel"}
					</span>
					{isUnanswered
						? "You have no answer"
						: isCorrect
							? "You are correct"
							: "You are incorrect"}
				</div>
			)}

			<div className="mb-6 text-zinc-900 dark:text-zinc-50 flex items-start gap-2">
				<p className="px-1 font-bold min-w-7 rounded flex items-center justify-center bg-zinc-700 text-white dark:bg-zinc-400 dark:text-zinc-900">
					{index + 1}.
				</p>
				<p
					className="[&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_img]:my-2 [&_img]:border [&_img]:border-zinc-200 [&_img]:dark:border-zinc-700"
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(question.text, SANITIZE_CONFIG),
					}}
				/>
			</div>

			<div className="grid gap-3">
				{question.shuffledOptions.map((opt, idx) => (
					<OptionBox
						key={`${opt}_${idx}`}
						text={opt}
						isCorrect={opt === question.answer}
						isSelected={selectedAnswer === opt}
						isResult={status === "result"}
						onSelect={() => onAnswer(opt)}
					/>
				))}
			</div>
		</div>
	);
}
