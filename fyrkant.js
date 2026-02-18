const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
let x = 190, y = 140;
// Startposition för fyrkanten (x = vänster/höger, y = upp/ner)
const size = 20;
// Fyrkantens storlek: 20 pixlar bred och 20 pixlar hög
const speed = 4;
// Hur många pixlar fyrkanten flyttas per knapptryck
function ritning() { 
// En funktion som ritar om spelplanen (kallas många gånger per sekund)
  c.clearRect(0, 0, 400, 300);
  // Suddar hela canvasytan (400x300) så det inte blir spår efter fyrkanten
  c.fillRect(x, y, size, size);
  // Ritar fyrkanten på positionen (x, y) med storleken size×size
  requestAnimationFrame(ritning); // rätt namn
  // Ber webbläsaren köra ritning() igen vid nästa bildruta (ca 60 fps)
}
window.addEventListener("keydown", tangent => {
// Lyssnar på tangenttryckningar på hela fönstret (window)
  if (tangent.key === "ArrowLeft"){
    x = x-speed; // vänster
  }
  // Om vänsterpil trycks: minska x → fyrkanten går åt vänster
  if (tangent.key === "ArrowRight"){
    x = x+speed; // höger
  }
  // Om högerpil trycks: öka x → fyrkanten går åt höger
  if (tangent.key === "ArrowUp"){
    y = y-speed; // upp
  }
  // Om uppåtpil trycks: minska y → fyrkanten går uppåt (y-axeln går neråt på canvas)
  if (tangent.key === "ArrowDown"){
    y = y+speed; // ner
  }
  // Om nedåtpil trycks: öka y → fyrkanten går neråt
  x = Math.max(0, Math.min(400 - size, x));
  // Begränsar x så fyrkanten inte kan gå utanför vänster/höger kant
  // x blir minst 0 och högst 400-size
  y = Math.max(0, Math.min(300 - size, y));
  // Begränsar y så fyrkanten inte kan gå utanför topp/botten kant
  // y blir minst 0 och högst 300-size
});
ritning();// Startar ritloopen
