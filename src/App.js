// import { Component } from "react";
// import Info_plus_UseInputs from "./8_Hooks/Info_plus_UseInputs";
//
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Info_plus_UseInputs />
//             </div>
//         );
//     }
//
// }
//
// export default App;
//
import { Component } from "react";
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
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

export default App;