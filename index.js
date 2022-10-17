document.querySelector("#main").remove();
const newHeader = document.createElement("h1");
newHeader.setAttribute('id','victory');
newHeader.textContent = "Shahla is the champion";
document.body.append(newHeader);