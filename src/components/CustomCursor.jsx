import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.body.style.cursor = 'none';

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      // document.body.style.cursor = 'auto';
      document.body.style.cursor = 'none';
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-4 h-4 rounded-full z-50 pointer-events-none"
      style={{
        background: '#0070f3',
        mixBlendMode: 'difference'
      }}
    />
  );
};

export default CustomCursor;