async function oui(CodePostal) {
    const response = await fetch("https://geo.api.gouv.fr/communes?codePostal="+CodePostal)
    const data = await response.json() 
    console.log(data)
}
// Favicon.js
oui(50440)
const faviconAnimation = (() => {
  const favicon = document.querySelector('link[rel="icon"]') || document.createElement("link");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const size = 32;

  canvas.width = size;
  canvas.height = size;
  favicon.rel = "icon";
  favicon.type = "image/png";

  if (!favicon.parentNode) {
    document.head.appendChild(favicon);
  }

  function clear() {
    ctx.clearRect(0, 0, size, size);
  }

  function drawSun() {
    clear();

    ctx.fillStyle = "#ffd45a";
    ctx.beginPath();
    ctx.arc(16, 16, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#ffb428";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";

    for (let i = 0; i < 8; i += 1) {
      const angle = (Math.PI * 2 * i) / 8;
      const start = 11;
      const end = 14;

      ctx.beginPath();
      ctx.moveTo(16 + Math.cos(angle) * start, 16 + Math.sin(angle) * start);
      ctx.lineTo(16 + Math.cos(angle) * end, 16 + Math.sin(angle) * end);
      ctx.stroke();
    }

    return canvas.toDataURL("image/png");
  }

  function drawCloud() {
    clear();

    ctx.fillStyle = "#ffffff";
    ctx.shadowColor = "rgba(25, 88, 135, 0.22)";
    ctx.shadowBlur = 2;
    ctx.shadowOffsetY = 1;

    ctx.beginPath();
    ctx.arc(11, 18, 5, 0, Math.PI * 2);
    ctx.arc(16, 14, 7, 0, Math.PI * 2);
    ctx.arc(22, 18, 5, 0, Math.PI * 2);
    ctx.ellipse(16, 20, 12, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowColor = "transparent";
    return canvas.toDataURL("image/png");
  }

  function drawRain() {
    clear();

    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(11, 13, 5, 0, Math.PI * 2);
    ctx.arc(16, 10, 7, 0, Math.PI * 2);
    ctx.arc(22, 13, 5, 0, Math.PI * 2);
    ctx.ellipse(16, 15, 12, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#2f9be7";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";

    [[10, 22], [16, 24], [22, 22]].forEach(([x, y]) => {
      ctx.beginPath();
      ctx.moveTo(x, y - 4);
      ctx.lineTo(x - 2, y + 1);
      ctx.stroke();
    });

    return canvas.toDataURL("image/png");
  }

  const frames = [drawSun(), drawCloud(), drawRain()];
  let currentFrame = 0;

  function animate() {
    favicon.href = frames[currentFrame];
    currentFrame = (currentFrame + 1) % frames.length;
  }

  animate();
  return window.setInterval(animate, 850);
})();
>>>>>>> d22b68d (Ajout Matthieu JS et CSS)
