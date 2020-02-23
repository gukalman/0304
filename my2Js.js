var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var canvasWidth = myCanvas.width;
var canvasHeight = myCanvas.height;

var x_st = 0;
var y_st_2 = 0;
var y_st_1 = 0;




function drawCheckeredPattern(row, col){
var x = canvasWidth / row;
var y = canvasHeight / col;
var v = row/2;

  for(var j=0; j<4;j++){


            for(var i=0; i<v; i++){
              context.beginPath();
              context.fillRect(x_st, y_st_2+y, x, y);
                context.fillStyle = "black";
                x_st = x_st + x*2;
             }
                y_st_2 = y_st_2+y+y;
                x_st = 0;

              for(var i=0; i<v; i++){
                context.fillRect(x_st+x, y_st_1, x, y);
                context.fillStyle = "black";
                 x_st = x_st + x*2;

               }
                  y_st_1 = y_st_1+y+y;
                  x_st = 0;

        }
    }


drawCheckeredPattern(8,8);
