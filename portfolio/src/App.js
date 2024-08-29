import classNames from "classnames";
import "./App.scss";

function App() {
  return (
    <div className={classNames("content")}>
      <text x="40" ></text>
      <svg width="600" height="200" viewBox="0 0 600 200">
        <text x="40" y="60%">S</text> 
        <text x="100" y="60%">E</text>
        <text x="160" y="60%">O</text>
        <text x="240" y="60%">N</text>
        <text x="320" y="60%">G</text>
        <text x="430" y="60%">M</text>
        <text x="525" y="60%">O</text>
      </svg>
    </div>
  );
}

export default App;
