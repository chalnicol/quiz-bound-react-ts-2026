import DOMPurify from "dompurify";
import { cn } from "../lib/utils";

const SANITIZE_CONFIG = {
	ALLOWED_TAGS: [
		"div",
		"p",
		"b",
		"strong",
		"i",
		"em",
		"br",
		"img",
		"span",
		"sup",
		"sub",
	],
	ALLOWED_ATTR: ["src", "alt", "class"],
};

const HtmlRenderer = ({
	content,
	className,
}: {
	content: string;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"[&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_img]:my-2 [&_img]:border [&_img]:border-zinc-200 [&_img]:dark:border-zinc-700",
				className,
			)}
			dangerouslySetInnerHTML={{
				__html: DOMPurify.sanitize(content, SANITIZE_CONFIG),
			}}
		/>
	);
};

export default HtmlRenderer;
