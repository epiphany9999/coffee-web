const manageFooterEvent = () => {
  let manageFooter = document.querySelector(".Footer");
  let htmlFilePath = "../footer.html";

  if (manageFooter) {
    fetch(htmlFilePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((html) => {
        manageFooter.innerHTML = html;
        let footerscripts = manageFooter.getElementsByTagName("script");
        for (let script of footerscripts) {
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
      .catch((error) => console.error("Error loading the footer:", error));

    console.log("푸터가 연결되었습니다");
  }
};

export { manageFooterEvent };
