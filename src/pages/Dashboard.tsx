import { topics } from "../data";
import TopicCard from "../components/TopicCard";

export default function Dashboard() {
	return (
		// Removed min-h-screen as the app-wide main container handles this
		<div className="px-4 py-12 max-w-7xl mx-auto transition-colors">
			<header className="mb-10">
				<h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
					Assessment Dashboard
				</h1>
				<p className="text-zinc-600 dark:text-zinc-400 mt-1">
					Select a topic to begin your assessment.
				</p>
			</header>

			<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{topics.map((topic) => (
					<TopicCard key={topic.id} topic={topic} />
				))}
			</main>
		</div>
	);
}
