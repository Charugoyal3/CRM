function showBox(text, obj, e) {
    obj.onmouseout = hideBox;
    obj.onmousemove = moveBox;
    node = document.createElement('div');
    node.style.left = e.layerX + 'px';
    node.style.top = e.layerY + 'px';
    node.id = 'popBox';
    node.innerHTML = text;
    obj.appendChild(node);
}
function moveBox(e) {
node = document.getElementById('popBox');
node.style.left = e.layerX + 'px';
node.style.top = e.layerY + 'px';
}
function hideBox() {
node = document.getElementById('popBox');
node.parentNode.removeChild(node);
}
// JavaScript Document