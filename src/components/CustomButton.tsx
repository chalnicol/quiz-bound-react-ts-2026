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
				"bg-white dark:bg-zinc-800 px-3 sm:px-6 py-3  border border-zinc-300 dark:border-zinc-700 rounded-lg lg:rounded-xl font-bold disabled:pointer-events-none disabled:opacity-50 cursor-pointer dark:hover:border-zinc-600 hover:border-zinc-400  shadow dark:shadow-zinc-800 active:scale-95",
				className,
			)}
		>
			{children}
		</button>
	);
};

export default CustomButton;
