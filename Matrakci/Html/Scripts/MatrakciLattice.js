function drawCell(tents, units,row_num,col_num, i, j)
{
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    var width = canvas.width / col_num;
    var height = canvas.height / row_num;
   
    var col1 = "white";
    var col2 = "black"

    var fontSize = 2 * height / 7.0;
    ctx.font = "Bold " + fontSize.toString() + "px sans-serif";

    //
    if(j%2!=0 || i%2==0)
    {
        if (i % 2 == 0 && j % 2 != 0) {
            ctx.fillStyle = col1;

           
        }
        else {
            ctx.fillStyle = col2;
        }
    }
    else
    {
        if (i % 2 == 0 && j % 2 != 0) {
            ctx.fillStyle = col2;
        }
        else {
            ctx.fillStyle = col1;
        }
    }
    
   
    ctx.beginPath();
    ctx.moveTo(i * width, j * height);
    ctx.lineTo(i * width + width, j * height);
    ctx.lineTo(i * width, j * height + height);
    ctx.lineTo(i * width, j * height);
    ctx.closePath();
    ctx.strokeStyle = '#ff0000';
    ctx.stroke();
    ctx.fill();

    //
    if (j % 2 != 0 || i % 2 == 0) {
        if (i % 2 == 0 && j % 2 != 0) {
            ctx.fillStyle = col2;
        }
        else {
            ctx.fillStyle = col1;
        }
    }
    else {

        if (i % 2 == 0 && j % 2 != 0) {
            ctx.fillStyle = col1;
        }
        else {
            ctx.fillStyle = col2;
        }
    }
    

    ctx.beginPath();
    ctx.moveTo(i * width + width, j * height);
    ctx.lineTo(i * width + width, j * height + height);
    ctx.lineTo(i * width, j * height + height);
    ctx.lineTo(i * width + width, j * height);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();


    //
    if (j % 2 != 0 || i % 2 == 0) {
        if (i % 2 == 0 && j % 2 != 0) {
          
            ctx.fillStyle = col2;
            ctx.fillText(tents, i * width + width * 0.05, j * height + height * 0.55);

          
        }
        else {

            ctx.fillStyle = col1;
            ctx.fillText(tents, i * width + width * 0.05, j * height + height * 0.55);

           
        }
    }
    else {
        if (i % 2 == 0 && j % 2 != 0) {
            

            ctx.fillStyle = col1;
            ctx.fillText(tents, i * width + width * 0.05, j * height + height * 0.55);

        }
        else {
            ctx.fillStyle = col2;
            ctx.fillText(tents, i * width + width * 0.05, j * height + height * 0.55);
        }
    }

    //
    if (j % 2 != 0 || i % 2 == 0) {
        if (i % 2 == 0 && j % 2 != 0) {

            ctx.fillStyle = col1;
            
            ctx.fillText(units, i * width + width * 0.55, j * height + height * 0.95);
        }
        else {

            ctx.fillStyle = col2;
            
            ctx.fillText(units, i * width + width * 0.55, j * height + height * 0.95);
        }
    }
    else {
        if (i % 2 == 0 && j % 2 != 0) {


            ctx.fillStyle = col2;
            
            ctx.fillText(units, i * width + width * 0.55, j * height + height * 0.95);
        }
        else {
            ctx.fillStyle = col1;
            
            ctx.fillText(units, i * width + width * 0.55, j * height + height * 0.95);
        }
    }


   
   

   
    
    
}

function drawNumberCell(text,row_num,col_num, i,j) {
  
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    var width = canvas.width / col_num;
    var height = canvas.height / row_num;

    var fontSize = 5 * height / 15.0;
    ctx.font = "Bold " + fontSize.toString() + "px sans-serif";

    ctx.fillStyle = "black";
    ctx.fillText(text, i * width + width * 0.35, j * height + height * 0.75);
    
}

function drawLeftResultCell(text, row_num, col_num, i, j) {

    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    var width = canvas.width / col_num;
    var height = canvas.height / row_num;


    var fontSize = 5 * height / 15.0;
    //ctx.moveTo(i * width + width, j * height);
    //ctx.lineTo(i * width+width, j * height + height);
    //ctx.lineTo(i * width, j * height + height);
    ////ctx.lineTo(i * width + width, j * height);

    //ctx.stroke();
    ctx.fillStyle = 'red';
    ctx.font = "Bold " + fontSize.toString() + "px sans-serif";
    ctx.fillText(text,i * width+ width * 0.45, j * height+height * 0.65);

}

function drawBottomResultCell(text, row_num, col_num, i, j) {

    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    var width = canvas.width / col_num;
    var height = canvas.height / row_num;

    var fontSize = 5 * height / 15.0;

    //ctx.moveTo(i * width, j * height);
    //ctx.lineTo(i * width + width, j * height);
    //ctx.lineTo(i * width, j * height + height);
    ////ctx.lineTo(i * width, j * height);

    //ctx.stroke();
    ctx.fillStyle = 'red';
    ctx.font = "Bold " + fontSize.toString() + "px sans-serif";
    ctx.fillText(text, i * width + width * 0.35, j * height + height * 0.35);

}

function resizeCanvas() {

    var isIPhone = (/iphone/gi).test(navigator.appVersion);
    var viewportWidth = $(window).width()-10;
    var hHeight = $('header').outerHeight() || 0;
    var fHeight = $('footer').outerHeight() || 0;

    var viewportHeight = $(window).height() + (isIPhone ? 60 : 0)-hHeight-fHeight-220;
     
    if (viewportWidth >= viewportHeight)
        viewportWidth = viewportHeight;

    //$("#myCanvas").width = viewportWidth;
    //$("#myCanvas").height = viewportHeight;
    $("#myCanvas").attr({
        width: viewportWidth,
        height: viewportHeight
    });
}

function makeTable(colNumText,rowNumText) {

    row = new Array();
    cell = new Array();
   
    var num1=parseInt(rowNumText);
    var num2 = parseInt(colNumText);
    rowNumText = num1.toString();
    colNumText = num2.toString();

    if(isNaN(num1) || isNaN(num2))
    {
        alert("Please enter corect numbers, with maximum 5 digits!");
        return;
    }
    if (num1>99999 || num2>99999) {
        alert("Please enter corect numbers, with maximum 5 digits!");
        return;
    }
    result = num1 * num2;

    row_num = rowNumText.length + 2;
    col_num = colNumText.length + 2;
    $("#result").value = result;

    //canvas object;
    //first resizeCanvas
   
    var canv = $("canvas")[0];
    var ctx = $("canvas")[0].getContext("2d");
    var w = canv.width;
    var h = canv.height;

    resizeCanvas();
    //ctx.fillStyle = "white";
    //ctx.fillRect = (0, 0, canv.width, canv.height);
    ctx.clearRect(1, 1, canv.width, canv.height);

    

    
    
    ////draw grid around canvas
    //for (i = 1; i < col_num ; i++) {
        
    //    ctx.moveTo(i * w / col_num, h / row_num);
    //    if(i==col_num-1)
    //        ctx.lineTo(i * w / col_num, h - h / row_num);
    //    else
    //        ctx.lineTo(i * w / col_num, h);

    //    ctx.lineWidth = 1;
    //    ctx.stroke();
       
    //}
   
    ////draw grid around canvas
    //for (j = 1; j < row_num ; j++) {

    //    if(j==1)
    //        ctx.moveTo(w / col_num, j * h / row_num);
    //    else
    //        ctx.moveTo(0, j * h / row_num);

    //    ctx.lineTo(w - w / col_num, j * h / row_num);
    //    ctx.lineWidth = 1;
    //    ctx.stroke();

    //}
    
    //cells
    for (var i = 1; i < col_num; i++) {
        //iterate through rows
        for (var j = 0; j < row_num-1; j++) {

            if (j == 0) {
                //iterate through columns
                if (i < col_num - 1) {
                   
                    drawNumberCell(colNumText[i - 1], row_num, col_num, i, j);
                }
                else {
                    drawNumberCell("*", row_num, col_num, i, j);
                }
            }
            else {
                //iterate through columns
                if (i < col_num - 1) {
                    
                    var p = parseInt(rowNumText[j - 1]);
                    var d = parseInt(colNumText[i - 1]);
                    var r = p * d;
                    drawCell((Math.floor(r / 10)).toString(), (r % 10).toString(),row_num,col_num, i,j);
                }
                else {

                    drawNumberCell(rowNumText[j - 1],row_num,col_num, i,j);

                }


            }
        }
    }
    
    //write results
    var res = result.toString();
    var length = res.length;
    var j = row_num - 1;
    //iterate through rows
    length--;
    for (var i = col_num - 2; i > 0; i--) {

        drawBottomResultCell(res[length], row_num, col_num, i, j);
        length--;
       
    }
    var i = 0;
    for (var j = row_num - 2; j > 0; j--) {

        if (length >= 0)
            drawLeftResultCell(res[length], row_num, col_num, i, j);
        else
            drawLeftResultCell("0", row_num, col_num, i, j);
        length--;
       
    }


}