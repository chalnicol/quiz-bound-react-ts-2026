import { useMemo } from "react";
import TopicCard from "../components/TopicCard";
import { useTopic } from "../context/TopicProvider";
import DetailCard from "../components/DetailCard";
import ListCard from "../components/ListCard";
import { Link } from "react-router-dom";

const PASSING_MARK = 75;

export default function Dashboard() {
	const { topics } = useTopic();

	const { averagePercentage, topPerformers, underperformers, attemptedCount } =
		useMemo(() => {
			const attempted = topics
				.filter((t) => typeof t.highestScore === "number")
				.map((t) => ({
					...t,
					percentage: t.questions.length
						? Math.round((t.highestScore! / t.questions.length) * 100)
						: 0,
				}));

			const avg = attempted.length
				? Math.round(
						attempted.reduce((sum, t) => sum + t.percentage, 0) /
							attempted.length,
					)
				: 0;

			const top = [...attempted]
				.filter((t) => t.percentage >= PASSING_MARK)
				.sort((a, b) => b.percentage - a.percentage)
				.slice(0, 5);

			const under = [...attempted]
				.filter((t) => t.percentage < PASSING_MARK)
				.sort((a, b) => b.percentage - a.percentage)
				.slice(0, 5);

			return {
				averagePercentage: avg,
				topPerformers: top,
				underperformers: under,
				attemptedCount: attempted.length,
			};
		}, [topics]);

	return (
		<div className="px-4 py-8 max-w-7xl mx-auto transition-colors">
			<div className="mb-10">
				<h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
					Assessment Dashboard
				</h1>
				<p className="text-zinc-600 dark:text-zinc-400 mt-1">
					Track your progress and pick a topic to continue.
				</p>
			</div>

			{/* ===== Section: Your Performance ===== */}
			{attemptedCount > 0 && (
				<section className="mb-12">
					<h2 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
						Your Performance
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
						<DetailCard
							title="Average Score"
							value={`${averagePercentage}%`}
						/>

						<DetailCard
							title="Topics Attempted"
							value={`${attemptedCount}/${topics.length}`}
						/>

						<DetailCard
							title="Needs Review"
							value={underperformers.length}
						/>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<ListCard title="Top 5 Topics">
							{topPerformers.length ? (
								<div>
									{topPerformers.map((t, idx) => (
										<Link
											key={t.id}
											to={`/assessment/${t.id}`}
											className="text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/40 dark:hover:bg-zinc-700/20 flex items-center justify-between text-sm px-2 py-1"
										>
											<span>
												<span className="text-zinc-400 font-mono mr-2">
													{idx + 1}.
												</span>
												{t.name}
											</span>
											<span className="font-bold text-emerald-600 dark:text-emerald-400">
												{t.percentage}%
											</span>
										</Link>
									))}
								</div>
							) : (
								<p className="text-sm text-zinc-500">
									{attemptedCount > 0
										? "No topics above the passing mark yet."
										: "No attempts yet."}
								</p>
							)}
						</ListCard>

						<ListCard title="Needs Review (Less 75%)">
							{underperformers.length ? (
								<div>
									{underperformers.map((t, idx) => (
										<Link
											key={t.id}
											to={`/assessment/${t.id}`}
											className="text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/40 dark:hover:bg-zinc-700/20 flex items-center justify-between text-sm px-2 py-1"
										>
											<span>
												<span className="text-zinc-400 mr-1 font-mono">
													{idx + 1}.
												</span>
												{t.name}
											</span>
											<span className="font-bold text-red-600 dark:text-red-400">
												{t.percentage}%
											</span>
										</Link>
									))}
								</div>
							) : (
								<p className="text-sm text-zinc-500">
									Nothing below the passing mark. 🎉
								</p>
							)}
						</ListCard>
					</div>
				</section>
			)}

			{/* ===== Section: All Topics ===== */}
			<section className="mb-12">
				<h2 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
					All Topics
				</h2>

				{topics.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
						{topics.map((topic) => (
							<TopicCard key={topic.id} topic={topic} />
						))}
					</div>
				) : (
					<p className="text-zinc-900 dark:text-zinc-100">
						No topics to display!
					</p>
				)}
			</section>
		</div>
	);
}
