import {Component} from "react";
import ValidationSample from "./5_ref_namingDom/1_ValidationSample";
import ScrollBox from "./5_ref_namingDom/ScrollBox";

class App extends Component {
    render() {
        return (
        <div className="App">
          <header className="App-header">
            <ValidationSample/>
            <ScrollBox ref={(ref) => this.scrollBox=ref} />
              <button onClick={() => this.scrollBox.scrollToBottom()}>
                  맨 밑으로
              </button>
          </header>
        </div>
      );
    }
}

export default App;
