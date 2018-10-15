var direction = 2;
var directionVert = 1;
var img = document.getElementById('cat');

function catWalk() {
  var currentLeft = parseInt(img.style.left);
  
  if (currentLeft > (window.innerWidth-img.width) && direction > 0) {
    direction *= -1;
    img.style.transform = "scalex(-1)"
  } 
  
  if (currentLeft < 0) {
    direction *= -1;
    img.style.transform = "scalex(1)"
  }

  img.style.left = (currentLeft + direction) + 'px';
}

setInterval(catWalk, 1);


function catWalkVert() {
    var currentTop = parseInt(img.style.top);

    if ((currentTop > (window.innerHeight-img.height) && directionVert > 0) || (currentTop < 0)) {
        directionVert *= -1;
      }

    img.style.top = (currentTop + directionVert) + 'px';
}

setInterval(catWalkVert, 30);

