// src/App.tsx
import { ThemeProvider } from "./context/ThemeProvider";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
	return (
		<ThemeProvider>
			<div className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
				<Navbar />
				<main>
					<AppRoutes />
				</main>
			</div>
		</ThemeProvider>
	);
}
