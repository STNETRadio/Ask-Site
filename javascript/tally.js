document.addEventListener("DOMContentLoaded", function() {
    console.log("Page content has loaded");

    let tallyScript = document.createElement("script");
    tallyScript.src = "https://tally.so/widgets/embed.js";
    tallyScript.async = true;
    document.body.appendChild(tallyScript);
});

window.addEventListener("load", function() {
    console.log("Tally embed should now be visible");

    let tallyFrame = document.querySelector(".tally-embed");
    if (tallyFrame) {
        tallyFrame.onload = function() {
            console.log("Tally embed loaded successfully");
        };
    }
});
