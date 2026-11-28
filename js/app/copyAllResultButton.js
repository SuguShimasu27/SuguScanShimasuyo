const buttonAll = document.getElementById("copyAllButton")

buttonAll.addEventListener("click", () =>{
  const copyAll = document.querySelectorAll("#cameraScannerResults scan-result");
  const copyVal = Array.from(copyAll).map(copyOne => {
    const ID = copyOne.shadowRoot.querySelector(".result__content").textContent;
    const Date = copyOne.shadowRoot.querySelector(".result__datetime").textContent;
    return `${ID}\t${Date}`;
    
  });
  const end = copyVal.join("\n");

  navigator.clipboard.writeText(end);
});
