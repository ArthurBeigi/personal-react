import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState<number>(0);

  return (
    <div className="w-full h-screen space-y-2 flex flex-col justify-center items-center">
      <button
        onClick={() => {
          setNum(num + 1);
          console.log();
        }}
        className="w-40 h-20 rounded-xl border-2 border-red-200 bg-gray-200 transition-none focus:border-[3px] focus:border-pink-300 hover:border-green-200"
      >
        add number
      </button>
      <div className="bg-blue-200">the number is : {num +1}</div>
    </div>
  );
}

export default App;
