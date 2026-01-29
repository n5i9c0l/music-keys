import { useState } from "react";

export default function Counter(){
    const[count, setCount] = useState(0);

    return(
        <button onClick={() => setCount(count+1)} className="bg-blue-500 text-white px-6 py-2 hover:bg-blue-400 transition-colors m-6 rounded-full">
            Contador: {count}
        </button>
    )
}