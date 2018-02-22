import React, {Component} from 'react';
import logo from './logo.svg';
import FlexiContainer from './FlexiContainer';

import LayoutRow from './LayoutRow';
import LayoutColumn from './LayoutColumn';
import queryString from 'query-string';
import './App.css';

class App extends Component {

  state = {
    formSubmitParams: null
  };

  displayValuesOnSubmit = (formValuesAsParams) => {
    this.setState({ formSubmitParams: formValuesAsParams });
  };

  claerFormData = () => {

    this.setState({ formSubmitParams: null });
  };

  render () {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Flexi - Dynamic Form</h1>
          </header>
          <div className="App-intro">


            <LayoutRow>
              <LayoutColumn className="input-panel">
                <FlexiContainer displayValuesOnSubmit={this.displayValuesOnSubmit} claerFormData={this.claerFormData}/>
              </LayoutColumn>
              {this.state.formSubmitParams ? (
                      <LayoutColumn className="result-panel">
                        <h2>1. JSON Payload(POST BODY)</h2>
                        <div>{JSON.stringify(this.state.formSubmitParams, null, 2)}</div>

                        <h2>2. URL Encoded (GET Method)</h2>
                        <div className="url-params-container">{queryString.stringify(this.state.formSubmitParams, { arrayFormat: 'index' })}</div>
                      </LayoutColumn>)
                  : <div className="form-submit-info">Click on submit to see the values</div>}
            </LayoutRow>


          </div>
        </div>
    );
  }
}

export default App;
