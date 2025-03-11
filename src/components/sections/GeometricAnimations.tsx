// "use client";
// import { useEffect, useRef } from "react";

// export default function GeometricAnimations() {
//   const vantaRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     let vantaEffect: any;
//     const loadVanta = async () => {
//       // Dynamically import Vanta and Three.js so that they only run on the client.
//       const VANTA = (await import("vanta/dist/vanta.net.min")).default;
//       const THREE = (await import("three")).default;
//       vantaEffect = VANTA({
//         el: vantaRef.current,
//         THREE: THREE,
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.0,
//         minWidth: 200.0,
//         scale: 1.0,
//         scaleMobile: 1.0,
//         // Customize colors as desired:
//         color: 0x1e1e1e, // color for lines and points
//         backgroundColor: 0x000000, // background color
//       });
//     };

//     loadVanta();

//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, []);

//   return <div ref={vantaRef} className="w-full h-screen"></div>;
// }
