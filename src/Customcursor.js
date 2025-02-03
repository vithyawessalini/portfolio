import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  useEffect(() => {
    const move = (e) => {
      const x = e.pageX; // Use pageX instead of clientX
      const y = e.pageY; // Use pageY instead of clientY

      setCursorX(x);
      setCursorY(y);

      // Set the cursor border's position directly
      const cursorBorder = document.getElementById('cursor-border');
      if (cursorBorder) {
        cursorBorder.style.left = `${x}px`;
        cursorBorder.style.top = `${y}px`;
      }
    };

    document.addEventListener('mousemove', move);

    return () => {
      document.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            cursor: none;
          }

          body {
            display: flex;
            justify-content: center;
          }

          #cursor {
            position: absolute;
            background-color: #7f8daa;
            height: 7px;
            width: 7px;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            transition: background-color 0.2s ease;
            left: ${cursorX}px;
            top: ${cursorY}px;
          }

          #cursor-border {
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: transparent;
            border: 3px solid #7f8daa;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            transition: all 0.2s ease-out;
            left: ${cursorX}px;
            top: ${cursorY}px;
          }
        `}
      </style>
      <div id="cursor"></div>
      <div id="cursor-border"></div>
    </>
  );
};

export default CustomCursor;
