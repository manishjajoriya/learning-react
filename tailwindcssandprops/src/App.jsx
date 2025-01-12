import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-500 text-4xl text-white rounded-md p-4">
        Tailwind Test
      </h1>
      <div className = "flex flex-row">
        <Card location="Mountains" tag={["photography", "travel", "summer"]} />
        <Card location="Sea" tag={["photography", "travel", "winter"]} />
        <Card />
      </div>
    </>
  );
}

export default App;
