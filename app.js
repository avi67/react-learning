
/*
<div id="parent">
    <div id="child">
        <h1>This is h1 tag inside react</h1>
        <h2>This is h2 tag inside react</h2>
    </div>
</div>
*/

const parent = React.createElement(
    "div",
    {id: "parent"}, 
    React.createElement(
     "div", 
    {id: "child"}, [
    React.createElement("h1",{}, "This is h1 tag inside react"),
    React.createElement("h2",{}, "This is h2 tag inside react")
]
)
);


const heading = React.createElement("h1", {id: "heading"}, "Hello world from react");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);