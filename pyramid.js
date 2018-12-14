init();

function init() {
    drawPyramid();

    let rangeslider = document.querySelector("#rangeslider");
    rangeslider.oninput = function() {
        drawPyramid();
    }

    let symbol = document.querySelector("#symbol");
    symbol.onchange = function() {
        drawPyramid();
    }
}

 function drawPyramid() {
     let viewport = document.querySelector(".viewport");
     // before drawing, clear the old content
     viewport.innerHTML = "";
    
    let height = document.querySelector("#rangeslider").value;
    let elemSliderValue = document.querySelector("#slidervalue");

    // show pyramid height
    elemSliderValue.innerHTML = height;
    
    // get block symbol value
    let symbol = document.querySelector("#symbol").value;
    
     // for each row....
     for (let row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         let numBricks = row + 2;
         let numSpaces = height - row - 1;

         // build up a string for this row
         let rowStr = "";
         for (let i = 0; i < numSpaces; i++) {
             rowStr += "&nbsp;";
         }
         for (let i = 0; i < numBricks; i++) {
             rowStr += symbol;
         }

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;

        // insert the paragraph as a child of the container <div>
        viewport.appendChild(rowElem);
    }
}