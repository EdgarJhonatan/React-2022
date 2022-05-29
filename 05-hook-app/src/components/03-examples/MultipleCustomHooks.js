import React from "react";
import "../02-useEffect/effects.css";
import { useCouter } from "../hooks/useCouter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
   const { counter, increment } = useCouter(1);

   const { loading, data } = useFetch(
      `https://www.breakingbadapi.com/api/quotes/${counter}`
   );

   const { author, quote } = !!data && data[0];

   return (
      <div>
         <h1>BreakingBad Quotes</h1>
         <hr />

         {loading ? (
            <div className="alert alert-info text-center">
               loading...
            </div>
         ) : (
            <blockquote className="blockquote text-rigth">
               <p className="mb-0"> {quote} </p>
               <br />
               <footer className="blockquote-footer">
                  {" "}
                  {author}{" "}
               </footer>
            </blockquote>
         )}

         <button className="btn btn-primary" onClick={increment}>
            Siguiente quote
         </button>
      </div>
   );
};
