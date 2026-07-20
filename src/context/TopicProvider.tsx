import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import type { Topic } from "../type";

interface TopicContextType {
	topics: Topic[];
	getTopic: (id: string) => Topic | null;
	updateTopicData: (id: string, value: number) => void;
}

const TopicContext = createContext<TopicContextType | null>(null);

export function TopicProvider({ children }: { children: React.ReactNode }) {
	const [topics, setTopics] = useState<Topic[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/data/exam.json"); // Fetch JSON data
				const result = await response.json();

				const topicsWithScores = result.map((topic: Topic) => {
					// console.log(topic.name);
					const stored = localStorage.getItem(`topic_val_${topic.id}`);
					return {
						...topic,
						highestScore: stored ? JSON.parse(stored) : null,
					};
				});

				setTopics(topicsWithScores); // Set fetched data

				// console.log("data loaded successfully");
			} catch (error) {
				console.error("Error fetching the JSON:", error); // Handle any errors
			} finally {
				//setLoading(false); // Stop loading regardless of success or failure
				console.log("topic loaded..");
			}
		};
		fetchData();
	}, []);

	const getTopic = useCallback(
		(id: string) => {
			// if (topics.length > 0) return null;

			return topics.find((t) => t.id === id) || null;
		},
		[topics],
	);

	// SET: Store the number
	const updateTopicData = useCallback((id: string, value: number) => {
		// 1. Update localStorage
		localStorage.setItem(`topic_val_${id}`, JSON.stringify(value));

		// 2. Update the React State
		setTopics((prevTopics) =>
			prevTopics.map(
				(topic) =>
					topic.id === id
						? { ...topic, highestScore: value } // Update the matching topic
						: topic, // Keep others as they are
			),
		);
	}, []);

	return (
		<TopicContext.Provider value={{ topics, getTopic, updateTopicData }}>
			{children}
		</TopicContext.Provider>
	);
}

// export const useTopic = () => useContext(TopicContext);

export function useTopic() {
	const context = useContext(TopicContext);

	if (!context) {
		throw new Error("useTopic must be used within TopicProvider");
	}

	return context;
}
