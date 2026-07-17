import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatTime = (seconds: number) => {
	const hrs = Math.floor(seconds / 3600);
	const mins = Math.floor((seconds % 3600) / 60);
	const secs = seconds % 60;

	return [hrs, mins, secs]
		.map((val) => val.toString().padStart(2, "0"))
		.join(":");
};

export const timeToSeconds = (timeString: string) => {
	const [hours, minutes, seconds] = timeString.split(":").map(Number);
	return hours * 3600 + minutes * 60 + seconds;
};
