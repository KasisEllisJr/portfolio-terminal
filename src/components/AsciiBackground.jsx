import { useEffect, useRef } from "react";

const pattern = "K4Z3R0k4z3r0═|+:/\\._ ";

export default function AsciiBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;
    const startTime = performance.now();

    const charWidth = 11;
    const charHeight = 14;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function draw(time) {
      const elapsed = time - startTime;

      const columns = Math.ceil(canvas.width / charWidth);
      const rows = Math.ceil(canvas.height / charHeight);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = "12px monospace";
      ctx.textBaseline = "top";

      ctx.fillStyle = "rgba(0, 255, 190, 0.08)";

      const t = elapsed * 0.0001;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
          const offset =
            Math.sin(
              y * Math.sin(t) * 0.2 +
              x * 0.04 +
              t
            ) * 20;

          const index =
            Math.round(Math.abs(x + y + offset)) %
            pattern.length;

          const char = pattern[index];

          ctx.fillText(
            char,
            x * charWidth,
            y * charHeight
          );
        }
      }

      animationFrame = requestAnimationFrame(draw);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="ascii-background" />;
}