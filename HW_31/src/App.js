import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import image from "./img/1.jpg";

class App extends React.Component {
    helpText = "HelpText";
    render() {
        return (<div className="name">
            <Header title = "This is Header"/>
            <h1>{this.helpText}</h1>
            <input placeholder={this.helpText} onClick={this.inputClick} onMouseEnter={this.mouseOver}/>
            <p>{this.helpText === "HelpText " ? "Yes" : "No"}</p>
            <Image image={image} />
        </div>)
    }

    inputClick() {
        console.log("Clicked");
    }

    mouseOver() {
        console.log("Mouse over");
    }
}

export default App;