// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  // Minimize abstract content
  const abstract = document.querySelector("main div div p:nth-of-type(2)");
  const fullContent = abstract.textContent;
  abstract.textContent = abstract.textContent.substring(0, 200);
  const button = document.createElement("button");
  button.onclick = () => {
    abstract.textContent = fullContent;
  };
  button.textContent = "Show more...";
  abstract.insertAdjacentElement("beforeend", button);

  // Add security assumptions section
  const assumptions = document.createElement("div");
  abstract.inset("afterend", assumptions);

  // Delete these!
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
