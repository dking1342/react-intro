import React, { useState, memo, useMemo, useCallback } from "react";
import "./App.css";

function Swatch({ color }) {
  console.log("swatch rendered", color);
  return (
    <div
      style={{ margin: 2, width: 75, height: 75, backgroundColor: color }}
    ></div>
  );
}
const MemoSwatch = memo(Swatch);

function SwatchObject({ params, onClick }) {
  console.log("swatch rendered", params.color);
  return (
    <div
      style={{
        margin: 2,
        width: 75,
        height: 75,
        backgroundColor: params.color,
      }}
      onClick={onClick}
    ></div>
  );
}
// various ways to memoize
const MemoSwatchObject = memo(SwatchObject);
const MemoSwatchObjectProps = memo(SwatchObject, (prevProps, nextProps) => {
  return prevProps.params.color === nextProps.params.color;
});

const App = () => {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState("red");

  // memoized
  const params = useMemo(() => ({ color }), [color]);
  const onClick = useCallback(() => {}, []);

  // useMemo has a better use case with objects or arrays
  // example
  const numbers = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9], []);
  const value = useMemo(() => {
    console.log("numbers");
    return numbers.reduce((acc, val) => (acc += val), 0);
  }, [numbers]);

  // useMemo is not a good use case with primitive data (string,boolean,number)
  // example
  const firstName = "John";
  const lastName = "Doe";
  const fullName = useMemo(() => {
    console.log("fullName");
    return `${firstName} ${lastName}`;
  }, [firstName, lastName]);

  // useMemo is really checking to see if props are the same between renders
  // useMemo will only change if the props change between renders
  // useCallback is checking to see if the function is exactly the same
  // use the useMemo hook for computations use cases

  console.log("app rendered", appRenderIndex);
  return (
    <div className="app">
      <h1>Hello World!</h1>
      <h3>
        Value: {value} | {fullName}
      </h3>
      <div className="render">
        <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
          Re-Render App
        </button>
        <button onClick={() => setColor(color === "red" ? "green" : "red")}>
          Change Color
        </button>
        <div>
          <Swatch color="red" />
          <MemoSwatch color="gold" />
          <MemoSwatch color={color} />
          <MemoSwatch color={color === "red" ? "green" : "red"} />
          <MemoSwatchObject params={{ color }} />
          <MemoSwatchObjectProps params={{ color }} />
          <MemoSwatchObjectProps params={params} />
          <MemoSwatchObjectProps params={params} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default App;
