import React, { useMemo, useState } from "react";
import { useCouter } from "../hooks/useCouter";
import { procesoPesado } from "../../helpers/procesoPesado";

import "../02-useEffect/effects.css";

export const MemoHook = () => {
   const { counter, increment } = useCouter(3000);
   const [show, setShow] = useState(true);

   const memoProcesoPesado = useMemo(
      () => procesoPesado(counter),
      [counter]
   );

   return (
      <div>
         <h1>MemoHook</h1>
         <h3>
            Counter: <small> {counter} </small>
         </h3>
         <hr />

         <p> {memoProcesoPesado} </p>

         <button className="btn btn-primary" onClick={increment}>
            +1
         </button>

         <button
            className="btn btn-outline-primary ml-3"
            onClick={() => {
               setShow(!show);
            }}>
            Show/Hide {JSON.stringify(show)}
         </button>
      </div>
   );
};
