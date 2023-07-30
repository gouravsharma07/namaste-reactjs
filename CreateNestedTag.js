const element = React.createElement(
  "div",
  { className: "main" },
    [
        React.createElement("div", {className: "main-child" }, 
            [
                React.createElement("h1", {className: "h1"}, "H1 Tags"),
                React.createElement("h2", {className: "h2"}, "H2 Tags")
            ]
        )
    ],
    [
        React.createElement("div", {className: "main-secondchild"}, 
        [
            React.createElement("h3", {className: "h3"}, "H3 Tags"),
            React.createElement("h4", {className: "h4"}, "H4 Tags" )
        ]
        )
    ]
);

console.log("element", element);

const nestedRoot = ReactDOM.createRoot(document.getElementById("nestedRoot"));

nestedRoot.render(element);
