const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "7anafi"),
        React.createElement("h2", {}, "Rat"),
        React.createElement("h2", {}, "Super rat"),
    ]);
};

// code
const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet)
        ]);
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);