import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import Word from "./word/Word";
import getMockText from './text.service';

const makeTextComponents = (text) => text.split(' ').map(w => ({ onClick }) => (
  <Word onClick={ onClick }> { w } </Word>
));

class App extends Component {

    state = {
      text: [],
      selected: null,
    };

    componentDidMount() {
      this.getText().then(text => this.setState({
        text: makeTextComponents(text),
      }));
    }

    getText = async () => await getMockText();

    onWordSelect = (selected) => {
      this.setState({ selected });
    }

    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel selected={this.state.selected}/>
                    <FileZone text={this.state.text} onWordSelect={this.onWordSelect} />
                </main>
            </div>
        );
    }
}

export default App;
