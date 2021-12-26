import { useState } from "react";
import "./styles/main.css";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3> Color Generator </h3>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your color value"
            className={`${error ? "error" : null}`}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn" type="submit">
            {" "}
            Go{" "}
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          );
        })}
      </section>
    </>
  );
}

export default App;
