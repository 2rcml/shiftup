import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
render() {
    return <iframe  title="shift"  src="http://localhost:3000/Jqschedule.html" width="800" height="500"></iframe>;
}
}
ReactDOM.render(<App />, document.getElementById("shift"));