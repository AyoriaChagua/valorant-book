import { useEffect, useRef } from "react";

export const useHome = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const container = canvas.parentElement;
        if (container) {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
            ctx.beginPath();
            ctx.moveTo(canvas.width - 700, canvas.height - 0);
            ctx.lineTo(canvas.width - 0, canvas.height - 0);
            ctx.lineTo(canvas.width - 0, canvas.height - 200);
            ctx.lineTo(canvas.width - 500, canvas.height - 200);
            ctx.closePath();
            ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.fill();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.stroke();
        }
    }, []);

    return { canvasRef }
}