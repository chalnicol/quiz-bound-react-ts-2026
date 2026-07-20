import { BadgeCheck, OctagonX, TriangleAlert } from "lucide-react";
import { cn } from "../lib/utils";
import type { Question } from "../type";
import HtmlRenderer from "./HtmlRenderer";
import OptionBox from "./OptionBox";

interface QuestionCardProps {
	// question: Question & { shuffledOptions: string[] };
	question: Question;
	selectedAnswer: string | null;
	status: "active" | "result";
	onAnswer: (option: string) => void;
	index: number;
}

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
		<div className="p-4 space-y-4">
			<p>
				<span className="uppercase tracking-wide bg-zinc-200 dark:bg-zinc-700/50 dark:text-zinc-400 px-1.5 py-1 text-sm text-zinc-400 font-semibold dark:border-zinc-400 rounded">
					#{index + 1}
				</span>
			</p>

			{status === "result" && (
				<div
					className={cn(
						"p-3 rounded-lg font-bold flex items-center gap-2 border",
						isUnanswered
							? "bg-amber-100/50 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400 border-amber-200 dark:border-amber-900"
							: isCorrect
								? "bg-emerald-100/50 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900"
								: "bg-red-100/50 text-red-800 dark:bg-red-900/20 dark:text-red-400 border-red-200 dark:border-red-900",
					)}
				>
					{isUnanswered ? (
						<TriangleAlert size={24} />
					) : isCorrect ? (
						<BadgeCheck size={24} />
					) : (
						<OctagonX size={24} />
					)}
					{isUnanswered
						? "You have no answer"
						: isCorrect
							? "You are correct"
							: "You are incorrect"}
				</div>
			)}

			<div className="text-zinc-900 dark:text-zinc-50 flex items-start gap-2">
				<HtmlRenderer content={question.text} />
			</div>

			<div className="grid gap-3">
				{question.options.map((opt, idx) => (
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
