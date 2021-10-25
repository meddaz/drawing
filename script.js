window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');
const color = document.getElementById('color-picker');
/*setColor();
color.addEventListener('input', setColor);

function setColor() {
	context.style.backgroundColor = color.value;
context.style.cursor = color.value;
}*/
    canvas.width = 800;
    canvas.height = 300;
    canvas.style.width = '800px';
    canvas.style.height = '600px';
    canvas.style = 'display: block';
 
  
    let painting = false;

    function draw(e) {
        if (!painting) return;
        context.lineWidth = 10;
        context.lineCap = 'round';
        context.lineTo(e.clientX, e.clientY);
     context.stroke();
     context.strokeStyle = color.value;
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);

    }
    function startPosition(e) {
        painting = true;
        draw(e);

    }
    function finishedPosition() {
        painting = false;
        context.beginPath();
    }


    function reset() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);
erase.addEventListener('click', eraser); document.getElementById('reset').addEventListener('click', reset);
 


});


