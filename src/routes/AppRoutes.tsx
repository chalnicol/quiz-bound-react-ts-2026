// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AssessmentPage from "../pages/AssessmentPage";

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/assessment/:topicId" element={<AssessmentPage />} />
		</Routes>
	);
}
