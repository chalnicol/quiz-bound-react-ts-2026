import { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { cn } from "../lib/utils";
import CustomButton from "./CustomButton";
import gsap from "gsap";
import {
	ChevronUp,
	Circle,
	CircleCheck,
	OctagonX,
	TriangleAlert,
} from "lucide-react";

const SelectDropdown = ({
	label,
	questionStatuses,
	className,
	currentIndex = 0,
	onChange,
}: {
	label: string;
	questionStatuses: string[];
	className?: string;
	currentIndex?: number;
	onChange: (value: number) => void;
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const mainRef = useOutsideClick<HTMLDivElement>(() => {
		setIsOpen(false);
	});

	const contRef = useRef<HTMLDivElement>(null);

	const buttonsRef = useRef<Record<number, HTMLButtonElement | null>>({});

	// 2. Watch for the dropdown opening to scroll the active item into view
	useEffect(() => {
		if (isOpen) {
			// Small timeout ensures the DOM has fully rendered the open dropdown
			const timer = setTimeout(() => {
				const activeNode = buttonsRef.current[currentIndex];
				if (activeNode) {
					activeNode.scrollIntoView({
						behavior: "smooth",
						block: "center", // Vertical alignment inside the container
					});
				}
			}, 50);

			if (contRef.current) {
				gsap.fromTo(
					contRef.current,
					{
						scale: 0,
					},
					{
						scale: 1,
						duration: 0.4,
						delay: 0.2,
						ease: "elastic.out(1, 0.8)",
					},
				);
			}

			return () => {
				clearTimeout(timer);
				if (contRef.current) {
					gsap.killTweensOf(contRef.current);
				}
			};
		}
	}, [isOpen, currentIndex]);

	return (
		<div ref={mainRef} className={cn("relative", className)}>
			<CustomButton
				className="w-full"
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<p className="flex items-center gap-1 justify-between">
					<span>{label}</span>
					<ChevronUp size={18} />
				</p>
			</CustomButton>

			{isOpen && (
				<div
					ref={contRef}
					className="bg-white border border-zinc-400 p-2 start-0 gap-x-1.5 gap-y-1 dark:bg-zinc-800 dark:border-zinc-700 absolute min-w-full overflow-x-hidden bottom-full h-54 mb-2 overflow-y-auto grid grid-cols-[repeat(3,_minmax(52px,_1fr))] shadow-lg dark:shadow-zinc-800 scrollbar-thin dark:scrollbar-track-zinc-700 dark:scrollbar-thumb-zinc-500 scrollbar-track-zinc-100 scrollbar-thumb-zinc-400"
				>
					{questionStatuses.map((status, i) => (
						<button
							key={i}
							className={cn(
								"border text-sm rounded disabled:pointer-events-none cursor-pointer flex items-center px-1 py-0.5 justify-between",
								currentIndex == i
									? "border-zinc-900 dark:border-zinc-400 bg-zinc-200 dark:bg-zinc-700"
									: "border-zinc-400 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-700",
							)}
							ref={(el) => {
								buttonsRef.current[i] = el;
							}}
							onClick={() => {
								onChange(i);
								setIsOpen(false);
							}}
							disabled={currentIndex == i}
						>
							<span>{i + 1}</span>

							{status == "unanswered" ? (
								<TriangleAlert
									size={14}
									className="text-amber-700 dark:text-amber-500"
								/>
							) : status == "filled" ? (
								<Circle
									size={14}
									className="text-zinc-600 dark:text-zinc-400 fill-current"
								/>
							) : status == "correct" ? (
								<CircleCheck
									size={14}
									className="text-green-600 dark:text-green-400"
								/>
							) : status == "incorrect" ? (
								<OctagonX
									size={14}
									className="text-red-600 dark:text-red-400"
								/>
							) : (
								<Circle
									size={14}
									className="text-zinc-700 dark:text-zinc-500"
								/>
							)}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default SelectDropdown;
