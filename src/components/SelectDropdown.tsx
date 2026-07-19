import { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { cn } from "../lib/utils";
import CustomButton from "./CustomButton";

const SelectDropdown = ({
	label,
	onChange,
	questionsLength,
	className,
	currentIndex = 0,
}: {
	label: string;
	questionsLength: number;
	onChange: (value: number) => void;
	className?: string;
	currentIndex?: number;
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const mainRef = useOutsideClick<HTMLDivElement>(() => {
		setIsOpen(false);
	});

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

			return () => clearTimeout(timer);
		}
	}, [isOpen, currentIndex]);

	return (
		<div ref={mainRef} className={cn("relative", className)}>
			<CustomButton
				className="flex items-center justify-center gap-1 w-full"
				onClick={() => setIsOpen((prev) => !prev)}
			>
				{label}
				<span className="material-icons !text-lg sm:!text-xl">
					arrow_drop_up
				</span>
			</CustomButton>

			{isOpen && (
				<div className="bg-white border border-zinc-400 p-2 start-0 gap-1 dark:bg-zinc-800 dark:border-zinc-700 absolute min-w-full overflow-x-hidden bottom-full h-44 mb-2 overflow-y-auto grid grid-cols-[repeat(3,_minmax(50px,_1fr))] shadow-lg dark:shadow-zinc-800 scrollbar-thin dark:scrollbar-track-zinc-700 dark:scrollbar-thumb-zinc-500 scrollbar-track-zinc-100 scrollbar-thumb-zinc-400">
					{Array.from({ length: questionsLength }).map((_, i) => (
						<button
							key={i}
							className={cn(
								"border text-sm border-zinc-400 dark:border-zinc-600 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700 disabled:pointer-events-none",
								currentIndex == i
									? "bg-zinc-300 dark:bg-zinc-600"
									: "bg-white dark:bg-zinc-800",
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
							{i + 1}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default SelectDropdown;
