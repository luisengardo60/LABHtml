$(document).on("ready",configurarApp);

function configurarApp ()
{
  var canvas = document.getElementById("miCanvas");
  var ctx = canvas.getContext("2d");
  canvas.width = screen.availWidth;  
  dibujaFooter(canvas,ctx);
}
function dibujaFooter(canvas,contexto)
{
  contexto.fillStyle = "rgba(0,0,0,0.6)";
  contexto.moveTo(0,0);
  contexto.quadraticCurveTo(100,-40,canvas.width-20,canvas.height-100);
  contexto.fill();
  
  // contexto.stroke();  una recta

  // quadraticCurveTo(cpx,cpy,x,y)
}