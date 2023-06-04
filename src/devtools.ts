chrome.devtools.panels.create(
	"webinsp3ctor",
	"icon.png",
	"panel.html",

	(panel) => {
		console.log("Panel triggered");
	}
);
