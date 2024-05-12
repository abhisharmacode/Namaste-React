// *One Element
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World form React!"
// );

// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(heading);

// *Nested elements
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hi im a H1 tag"),
    React.createElement("h2", { id: "heading" }, "Hi im a H2 tag"),
  ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(parent);
