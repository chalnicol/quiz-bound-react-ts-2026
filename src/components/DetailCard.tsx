const DetailCard = ({
	title,
	value,
}: {
	title: string;
	value: string | number;
}) => {
	return (
		<div className="p-4 bg-white dark:bg-zinc-800 border border-zinc-300 shadow-sm dark:border-zinc-700 rounded-xl space-y-1">
			<div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
				{title}
			</div>
			<div className="text-3xl font-black text-zinc-900 dark:text-zinc-50 border dark:border-zinc-600 border-zinc-300 px-2 py-1 rounded-lg">
				{value}
			</div>
		</div>
	);
};

export default DetailCard;
