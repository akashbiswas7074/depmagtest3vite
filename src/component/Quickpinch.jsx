import React, { useCallback, useRef } from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";

function Quickpinch() {
  const imgRef = useRef();
  const onUpdate = useCallback(({ x, y, scale }) => {
    const { current: img } = imgRef;
    // check if image exists
    if (img) {
      const value = make3dTransformValue({ x, y, scale });
      img.style.setProperty("transform", value);
    }
  }, []);

  return (
    <QuickPinchZoom
      onUpdate={onUpdate}
      tapZoomFactor={2}
      zoomOutFactor={4}
      inertiaFriction={0}
      maxZoom={10}
      minZoom={1}
    >
      <img
        width="100%"
        ref={imgRef}
        alt="img"
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
    </QuickPinchZoom>
  );
}
export default Quickpinch