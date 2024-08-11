import React, { useEffect, useRef, useState } from "react";
import "./DrawingCanvas.css";

export default function DrawingCanvas() {
  const canvasRef = useRef(null);
  const canvasContextRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas is not null
    canvas.width = 500;
    canvas.height = 500;

    const context = canvas.getContext("2d");
    if (!context) return; // Ensure context is not null
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = lineWidth; // Set initial lineWidth
    canvasContextRef.current = context;
  }, []); // Update effect dependency to include lineWidth

  const startDrawing = ({ nativeEvent }) => {
    if (!canvasContextRef.current) return; // Check if context is available
    const { offsetX, offsetY } = nativeEvent;
    canvasContextRef.current.beginPath();
    canvasContextRef.current.moveTo(offsetX, offsetY);
    canvasContextRef.current.lineTo(offsetX, offsetY);
    canvasContextRef.current.stroke();
    setIsDrawing(true);
    nativeEvent.preventDefault();
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing || !canvasContextRef.current) return; // Check if context is available
    const { offsetX, offsetY } = nativeEvent;
    canvasContextRef.current.lineTo(offsetX, offsetY);
    canvasContextRef.current.stroke();
    nativeEvent.preventDefault();
  };

  const stopDrawing = () => {
    if (canvasContextRef.current) {
      canvasContextRef.current.closePath();
    }
    setIsDrawing(false);
  };

  const drawNow = () => {
    if (!canvasContextRef.current) return; // Check if context is available
    canvasContextRef.current.globalCompositeOperation = "source-over";
    canvasContextRef.current.lineWidth = lineWidth;
  };

  const eraseNow = () => {
    if (!canvasContextRef.current) return; // Check if context is available
    canvasContextRef.current.globalCompositeOperation = "destination-out";
    canvasContextRef.current.lineWidth = lineWidth;
  };

  const eraseAll = () => {
    if (!canvasContextRef.current) return; // Check if context is available
    canvasContextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const handleLineWidthChange = (event) => {
    setLineWidth(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    if (canvasContextRef.current) {
      canvasContextRef.current.lineWidth = lineWidth; // Update lineWidth directly
    }
  }, [lineWidth]);

  return (
    <>
      <canvas
        className="canvas-container"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        onMouseLeave={stopDrawing}
      >
        Ink-Spill
      </canvas>
      <div>
        <button onClick={drawNow}>Pencil</button>
        <button onClick={eraseNow}>Eraser</button>
        <button onClick={eraseAll}>Erase All</button>
        <label>
          Stroke Width:
          <select value={lineWidth} onChange={handleLineWidthChange}>
            <option value={5}>5px</option>
            <option value={10}>10px</option>
            <option value={15}>15px</option>
            <option value={20}>20px</option>
          </select>
        </label>
      </div>
    </>
  );
}
