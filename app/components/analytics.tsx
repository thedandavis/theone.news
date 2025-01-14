"use client";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react"

export function Analytics() {
	const token = process.env.NEXT_PUBLIC_BEAM_TOKEN;
	if (!token) {
		return null;
	}
	return (
		<>
		<script
			src="https://beamanalytics.b-cdn.net/beam.min.js"
			data-token={token}
			async
		/>
		<VercelAnalytics />
		</>
	);
}
