import { useRef, useEffect } from "react";
import gsap from "gsap";
import QuestionCard from "./QuestionCard";
import type { Question } from "../type";

interface QuestionCarouselProps {
	questions: (Question & { shuffledOptions: string[] })[];
	currentIdx: number;
	userAnswers: (string | null)[];
	status: "active" | "result";
	onAnswer: (option: string) => void;
}

export default function QuestionCarousel({
	questions,
	currentIdx,
	userAnswers,
	status,
	onAnswer,
}: QuestionCarouselProps) {
	const trackRef = useRef<HTMLDivElement>(null);
	const isFirstRender = useRef(true);
	const stepPercent = 100 / questions.length;

	useEffect(() => {
		const track = trackRef.current;
		if (!track) return;

		if (isFirstRender.current) {
			gsap.set(track, { xPercent: -currentIdx * stepPercent });
			isFirstRender.current = false;
			return;
		}

		gsap.to(track, {
			xPercent: -currentIdx * stepPercent,
			duration: 0.45,
			ease: "power3.inOut",
		});
	}, [currentIdx, stepPercent]);

	return (
		<div className="relative overflow-hidden">
			<div
				ref={trackRef}
				className="flex"
				style={{ width: `${questions.length * 100}%` }}
			>
				{questions.map((question, idx) => (
					<div
						key={idx}
						className="w-full shrink-0"
						style={{ width: `${100 / questions.length}%` }}
					>
						<QuestionCard
							question={question}
							selectedAnswer={userAnswers[idx]}
							status={status}
							index={idx}
							onAnswer={onAnswer}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
