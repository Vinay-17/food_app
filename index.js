{/* <div id="container">
    <div id="parent1">
         <h1 id="child1">i am child1 from parent1</h1>
          <h1 id="child2">i am child2 from parent1</h1>
    </div>
    <div id="parent2">
         <h1 id="child1">i am child1 from parent2</h1>
          <h1 id="child2">i am child2 from parent2</h1>
    </div>
</div> */}
const heading = React.createElement("div", {id:"container"},
     [ React.createElement
        ("div",{id:"parent1"},
        [
        React.createElement("h1",{id:"child1"},"i am child1 from parent1"),
        React.createElement("h1",{id:"child2"},"i am child2 from parent1"),
        ]
         ),
          React.createElement
        ("div",{id:"parent2"},
        [
        React.createElement("h1",{id:"child1"},"i am child1 from parent2"),
        React.createElement("h1",{id:"child2"},"i am child2 from parent2"),
        ],
         )]
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);