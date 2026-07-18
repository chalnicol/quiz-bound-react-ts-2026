import { cn } from "../lib/utils";

const CustomButton = ({
	disabled,
	onClick,
	className,
	children,
}: {
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={cn(
				"px-3 py-2 bg-white dark:bg-zinc-800 sm:px-6 sm:py-3 text-sm sm:text-base border border-zinc-300 dark:border-zinc-700 rounded-xl font-bold disabled:opacity-40",
				className,
			)}
		>
			{children}
		</button>
	);
};

export default CustomButton;
