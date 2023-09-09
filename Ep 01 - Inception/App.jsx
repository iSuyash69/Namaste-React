const root=ReactDOM.createRoot(document.querySelector(".root"));


const section01=React.createElement(
    "div",
    {className:"parent"},[
        React.createElement(
            "div",
            {className:"child"},[
                React.createElement("h1",{},"I am child01 - H1"),
                React.createElement("h2",{},"I am child01 - H2")
            ]
        ),
        React.createElement(
            "div",
            {className:"child"},[
                React.createElement("h1",{},"I am child02 - H1"),
                React.createElement("h2",{},"I am child02 - H2")
            ]
        ),
        React.createElement(
            "div",
            {className:"child"},[
                React.createElement("h1",{},"I am child03 - H1"),
                React.createElement("h2",{},"I am child03 - H2")
            ]
        )
    ]
);


root.render(section01);
