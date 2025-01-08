// "use client"
// import React, { useEffect } from 'react'

// export default function error({error, reset}) {
//     useEffect(()=>{
//         console.log(error)
//     }, [error])
//   return (
//     <div className='text-center mt-10'>
//         <h1>Something went wrong. please try again later.</h1>
//         <button className='hover:text-amber-600' onClick={()=> reset()}>Try Again</button>
//     </div>
//   )
// }

"use client";
import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Error caught by boundary:", error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later.</h1>
      <button
        className="hover:text-amber-600 mt-4 px-4 py-2 border rounded"
        onClick={reset}
      >
        Try Again
      </button>
    </div>
  );
}
