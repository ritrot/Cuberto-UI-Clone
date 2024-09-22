// src/CursorFollower.js
import React, { useRef, useEffect , useState } from "react";
import { gsap } from "gsap";

const CursorFollower = (params) => {
  const followerRef = useRef(null);
  const [entry, setentry] = useState(true);

  useEffect(() => {

    const handleMouseMove = (event) => {
      // Animate the follower to follow the cursor
      gsap.to(followerRef.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.4, // Adjust duration for smoother or faster animations
        ease: "power1.out", // Smooth easing function
      });
    };

    // Add mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {
        params.enter? <div
        ref={followerRef}
        className="fixed z-50 top-0 left-0 w-[9px] h-[9px] bg-black rounded-full pointer-events-none"
      />:<div
      ref={followerRef}
      className="fixed z-50 top-0 left-0 w-2 h-2  bg-white rounded-full pointer-events-none"
    />
      }
</div>
  );
};

export default CursorFollower;