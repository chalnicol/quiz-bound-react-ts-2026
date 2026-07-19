import { useTheme } from "../context/ThemeProvider";

export default function Navbar() {
	const { theme, toggleTheme } = useTheme();

	return (
		// Changed 'fixed' to 'sticky'
		<nav className="sticky top-0 w-full z-40 bg-zinc-100 dark:bg-zinc-900 h-14 border-b border-zinc-400 dark:border-zinc-700 transition-colors">
			<div className="max-w-7xl mx-auto flex items-center justify-between w-full h-full items-center px-4">
				<h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
					OnlineReviewer (CSE)
				</h1>

				<button
					onClick={toggleTheme}
					className="flex cursor-pointer items-center w-8 aspect-square justify-center rounded-lg border border-zinc-400 dark:border-zinc-500 bg-white dark:bg-zinc-900 shadow-md text-zinc-800 dark:text-zinc-200 transition-colors"
				>
					<span className="material-icons !text-xl">
						{theme === "light" ? "dark_mode" : "light_mode"}
					</span>
				</button>
			</div>
		</nav>
	);
}
