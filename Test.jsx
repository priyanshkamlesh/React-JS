// import React, { useState } from 'react'

// export const Test = () => {

//     const [first, setfirst] = useState(false);

//     const check = () => {

//         if (first === true) {
//             return "Hello World....";
//             setfirst(false)
//         }
//         else {
//             return "By world"
//             setfirst(true)
//         }
//     }
//     return (
//         <div>
//             <div>
//                 <button
//                     onClick={check}
//                     className='h-20 w-20 cursor-pointer bg-amber-600 text-2xl p-5 m-20 '
//                 >Click it</button>
//             </div>
//         </div>
//     )
// }

import { useState, useEffect } from "react";

export const Test = () => {
  const [showLoader, setShowLoader] = useState(false); // loader visibility
  const [showContent, setShowContent] = useState(false); // main content visibility

  const handleClick = () => {
    setShowLoader(true);  // show loader
    setShowContent(false); // hide content

    // after 3 seconds, hide loader and show content
    setTimeout(() => {
      setShowLoader(false);
      setShowContent(true);
      alert("Entering new world of game...");
    }, 3000);
  };

  return (
    <div className="min-h-screen w-full bg-cover bg-center relative flex flex-col items-center justify-center p-10">
      {/* Loader Section */}
      {showLoader && (
        <div className="h-screen w-full flex flex-col items-center justify-center gap-10 bg-black/80 absolute top-0 left-0 z-50">
          {/* Bat Image */}
          <div
            className="h-40 w-40 bg-contain bg-center bg-no-repeat animate-pulse"
            style={{
              backgroundImage:
                "url('https://pngimg.com/uploads/cricket/cricket_PNG19.png')",
            }}
          ></div>

          {/* Ball Image (bouncing) */}
          <div
            className="h-20 w-20 rounded-full bg-contain bg-center bg-no-repeat animate-bounce"
            style={{
              backgroundImage:
                "url('https://pngimg.com/uploads/cricket/cricket_PNG3.png')",
            }}
          ></div>

          <p className="text-white text-2xl font-semibold animate-pulse">
            Loading Game Zone...
          </p>
        </div>
      )}

      {/* Main Content */}
      {!showLoader && !showContent && (
        <div className="flex flex-col items-center text-center text-amber-50 gap-15">
          <div className="text-5xl font-bold px-8 py-6 rounded-2xl bg-gray-800 shadow-2xl border border-amber-400">
            Welcome To My Game Zone
          </div>
          <div className="max-w text-xl px-6 py-4 bg-gray-800 shadow-2xl rounded-2xl border border-amber-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            aliquid. Illo repellat, sequi minus nisi molestiae quidem.
          </div>
          <button
            onClick={handleClick}
            className="px-10 py-3 text-2xl font-semibold rounded-full shadow-2xl bg-gradient-to-r from-amber-400 to-orange-600 text-white hover:scale-110 cursor-pointer hover:shadow-amber-500 transition-all duration-700"
          >
            ENTER
          </button>
          <div className="max-w text-lg italic px-6 py-3 shadow-2xl bg-gray-800 rounded-xl border border-amber-300">
            To experience the best feeling of happiness, just click on Enter
            and dive into the adventure...
          </div>
        </div>
      )}

      {/* After Loader, Game UI shows */}
      {showContent && (
        <div className="h-screen w-screen p-20 bg-black/60 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-amber-400 animate-pulse">
            🎉 Game Started! Enjoy 🎮
          </h1>
        </div>
      )}
    </div>
  );
};
