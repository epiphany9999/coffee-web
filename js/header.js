const manageHeaderEvent = () => {
  let manageHeader = document.querySelector(".Header");
  let htmlFilePath = "../header.html";

  if (manageHeader) {
    fetch(htmlFilePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((html) => {
        manageHeader.innerHTML = html;
        let headerscripts = manageHeader.getElementsByTagName("script");
        for (let script of headerscripts) {
          let newScript = document.createElement("script");
          if (script.src) {
            newScript.src = script.src;
          } else {
            newScript.textContent = script.textContent;
          }
          document.body
            .appendChild(newScript)
            .parentNode.removeChild(newScript);
        }
      })
      .catch((error) => console.error("Error loading the header:", error));

    console.log("Header is being loaded");
  }
};

export { manageHeaderEvent };
