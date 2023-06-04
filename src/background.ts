chrome.webRequest.onBeforeRequest.addListener(
	(details) => {
		chrome.runtime.sendMessage({ url: details.url });
	},
	{ urls: ["<all_urls>"] }
);
