// Define the structure for individual questions
export interface Question {
	text: string;
	options: string[]; // This is
	answer: string;
	fixedOptions?: boolean;
}

// Define the structure for the topic
export interface Topic {
	id: string | number;
	name: string;
	brief: string;
	timeLimit: string; // in minutes
	sampleQuestion: Question;
	questions: Question[];
	direction?: string;
	highestScore?: number | null;
}
