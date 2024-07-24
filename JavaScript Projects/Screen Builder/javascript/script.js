const emptyContainer = document.getElementById("empty-container");
document.getElementById('insert-button').addEventListener('click', function () {
    const elementType = document.getElementById("element-type").value;
    const elementWidth = document.getElementById("element-width").value + "px";
    const elementHeight = document.getElementById("element-height").value + "px";
    const elementContent = document.getElementById("element-content").value;
    const backgroundColor = document.getElementById("background-color").value;
    const fontColor = document.getElementById("font-color").value;
    const fontSize = document.getElementById("font-size").value + "px";
    const fontFamily = document.getElementById("font-family").value;
    const newElement = document.createElement(elementType);
    newElement.style.width = elementWidth;
    newElement.style.height = elementHeight;
    newElement.textContent = elementContent;
    newElement.style.backgroundColor = backgroundColor;
    newElement.style.color = fontColor;
    newElement.style.fontSize = fontSize;
    newElement.style.fontFamily = fontFamily;
    emptyContainer.appendChild(newElement);
});

document.getElementById('cleanup-button').addEventListener('click', function () {
    emptyContainer.innerHTML = '';
});
