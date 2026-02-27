const square =document.getElementById('squareId');

function getRandomColor() {
            const color1 = Math.floor(Math.random() * 256);
            const color2 = Math.floor(Math.random() * 256);
            const color3 = Math.floor(Math.random() * 256);
            return `rgb(${color1},${color2},${color3})`;
        }

        square.addEventListener('mousemove',()=>{
        square.style.backgroundColor=getRandomColor();
        })