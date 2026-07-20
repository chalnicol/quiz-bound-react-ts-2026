const SliderToggle = ({
	label,
	checked,
	onChange,
}: {
	label: string;
	checked: boolean;
	onChange: (checked: boolean) => void;
}) => {
	return (
		<div className="flex items-center gap-2 flex-1 dark:border-zinc-600">
			<label className="relative inline-flex items-center cursor-pointer">
				<input
					type="checkbox"
					checked={checked}
					onChange={(e) => onChange(e.target.checked)}
					className="sr-only peer"
				/>
				<div className="w-11 h-6 border dark:border-zinc-600 border-zinc-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full bg-zinc-400 dark:bg-zinc-600 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-500 dark:peer-checked:bg-zinc-700"></div>
			</label>
			<span className="font-medium text-zinc-600 dark:text-zinc-400 text-sm">
				{label || "Label Here"}
			</span>
		</div>
	);
};

export default SliderToggle;
