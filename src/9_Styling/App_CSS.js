import { Component } from "react";
import logo from "./logo.svg"
import "./App.css"

class App_CSS extends Component {
    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        This is Test Page. Welcome!
                    </p>
                    <a
                        className="App-link"
                        href="https://github.com/Kang-Seonggyu"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Go to git : Seong-gyu
                    </a>
                </header>
            </div>
        );
    }
}

export default App_CSS;