import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="h-screen duration-200 w-full" style={{ background: color }}>
      <div className="flex flex-wrap justify-center bottom-10 inset-x-0 px-2 fixed">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-6 py-2 rounded-xl">
          <button
            onClick={() => setColor("Red")}
            className="outlined-none px-4 py-1 rounded-full text-white shadow-2xl "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outlined-none px-4 py-1 rounded-full text-white shadow-2xl "
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outlined-none px-4 py-1 rounded-full text-white shadow-2xl "
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
