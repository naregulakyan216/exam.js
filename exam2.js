let size = 20;
const textElement = document.getElementById('new-text');

function changeFontSize(step){
    size += step;
    if(size<10) size =10;
    textElement.style.fontSize = size + 'px';
}