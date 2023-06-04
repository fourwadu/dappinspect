import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

const Panel = () => {
	useEffect(() => {
		const handleMessage = () => {};

		chrome.runtime.onMessage.addListener(handleMessage);

		return () => {
			chrome.runtime.onMessage.removeListener(handleMessage);
		};
	}, []);

	return <div className="h-screen w-screen bg-black text-white">Test!23</div>;
};

const root = createRoot(document.getElementById("root")!);

root.render(
	<React.StrictMode>
		<Panel />
	</React.StrictMode>
);
