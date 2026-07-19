const ListCard = ({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) => {
	return (
		<div className="p-4 bg-white dark:bg-zinc-800 border border-zinc-300 shadow-sm dark:border-zinc-700 rounded-xl space-y-1 flex flex-col">
			<div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
				{title}
			</div>
			<div className="grow text-zinc-900 max-h-32 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-400 dark:scrollbar-thumb-zinc-400 dark:text-zinc-50 border dark:border-zinc-600 border-zinc-300 rounded-lg">
				{children}
			</div>
		</div>
	);
};

export default ListCard;
