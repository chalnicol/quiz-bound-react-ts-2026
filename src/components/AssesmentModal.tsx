import gsap from "gsap";
import { useEffect, useRef } from "react";

type ModalType = "none" | "exit" | "forceFinish" | "noAnswer" | "timeExpired";

interface AssessmentModalProps {
	modalType: ModalType;
	onClose: () => void;
	onConfirm: () => void;
}

export default function AssessmentModal({
	modalType,
	onClose,
	onConfirm,
}: AssessmentModalProps) {
	const contRef = useRef<HTMLDivElement>(null);

	if (modalType === "none") return null;

	useEffect(() => {
		if (contRef.current) {
			gsap.fromTo(
				contRef.current,
				{
					scale: 0,
				},
				{
					scale: 1,
					delay: 0.2,
					ease: "elastic.out(1, 0.4)",
					duration: 0.8,
				},
			);
		}
		return () => {
			if (contRef.current) {
				gsap.killTweensOf(contRef.current);
			}
		};
	}, []);

	return (
		<div className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
			<div
				ref={contRef}
				className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 p-6 rounded-2xl shadow-2xl max-w-sm w-full"
			>
				<h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-50">
					{modalType === "exit"
						? "Exit Assessment?"
						: modalType === "forceFinish"
							? "Submit Assessment?"
							: modalType === "timeExpired"
								? "Time's Up!"
								: "Incomplete Response"}
				</h3>
				<p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm">
					{modalType === "exit"
						? "Are you sure you want to quit? All progress will be lost."
						: modalType === "forceFinish"
							? "You have unanswered questions. Are you sure you want to finish the test now?"
							: modalType === "timeExpired"
								? "Your time has expired. Click below to see your results."
								: "Please select an answer before moving to the next question."}
				</p>
				<div className="flex gap-3">
					{modalType !== "noAnswer" && modalType !== "timeExpired" && (
						<button
							onClick={onClose}
							className="flex-1 py-2.5 rounded-xl border border-zinc-400 dark:border-zinc-600 font-semibold text-zinc-700 dark:text-zinc-300 text-sm"
						>
							Cancel
						</button>
					)}
					<button
						onClick={onConfirm}
						className="flex-1 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-bold text-sm"
					>
						{modalType === "forceFinish"
							? "Submit Anyway"
							: modalType === "timeExpired"
								? "See Results"
								: "Confirm"}
					</button>
				</div>
			</div>
		</div>
	);
}
