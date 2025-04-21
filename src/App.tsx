import Circle from "./components/Circle";
import "./styles/app.css";

const App = () => {
  const noOfDots = 4;
  return (
    <div className="container">
      {Array.from({ length: noOfDots }).map((_, index) => (
        <Circle key={index} />
      ))}
    </div>
  );
};

export default App;
