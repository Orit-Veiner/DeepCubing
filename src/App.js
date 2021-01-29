import React, { Component } from 'react';
import './App.css';
import Form from './components/Form.js';

class App extends Component {

  state = {
    apiResults: null,
    selectedNetwork: 'select',
    batchSizes: [],
    NumberOfCores: [],
    validationMessagesElements:  [],
  }

  setMessagesElements = (messages) => {
    this.setState({ validationMessagesElements: messages})
  }

  addButtonSelection = (selectedButton, batchOrCore) => {
    if (batchOrCore === 'batch') {
      this.addBatchSizeSelection(selectedButton);
    }

    else {
      this.addNumberOfCoresSelection(selectedButton);
    }
  };

  removeButtonSelection = (selectedButton, batchOrCore) => {
    if (batchOrCore === 'batch') {
      this.removeBatchSizeSelection(selectedButton);
    }

    else {
      this.removeNumberOfCoresSelection(selectedButton);
    }
  };


  addBatchSizeSelection = (batchSize) => {
    let batchSizes = this.state.batchSizes;
    batchSizes.push(batchSize);

    this.setState({
      batchSizes: batchSizes
    })
  };

  removeBatchSizeSelection = (batchSize) => {
    let batchSizes = this.state.batchSizes;
    const batchSizeToRemoveIndex = batchSizes.indexOf(batchSize);

    if (batchSizeToRemoveIndex > -1) {
      batchSizes.splice(batchSizeToRemoveIndex, 1);    
    }

    this.setState({
      batchSizes: batchSizes
    })
  };

  addNumberOfCoresSelection = (NumberOfCore) => {
    let NumberOfCores = this.state.NumberOfCores;
    NumberOfCores.push(NumberOfCore);

    this.setState({
      NumberOfCores: NumberOfCores
    })
  };

  removeNumberOfCoresSelection = (NumberOfCore) => {
    let NumberOfCores = this.state.NumberOfCores;
    const NumberOfCoreToRemoveIndex = NumberOfCores.indexOf(NumberOfCore);

    if (NumberOfCoreToRemoveIndex > -1) {
      NumberOfCores.splice(NumberOfCoreToRemoveIndex, 1);    
    }

    this.setState({
      NumberOfCores: NumberOfCores
    })
  };

  setApiResults = (results) => {
    this.setState({ 
      apiResults: results
    })
  };

  setNetwork = (network) => {
    this.setState({ 
      selectedNetwork: network
    })
  };  

  render() {
    console.log(this.state);

    return (
          <Form 
            setApiResults={this.setApiResults}
            setNetwork={this.setNetwork}
            addButtonSelection={this.addButtonSelection}
            setMessagesElements={this.setMessagesElements}
            setDisplayMessages={this.setDisplayMessages}
            removeButtonSelection={this.removeButtonSelection}
            {...this.state}
          />
    )}
}

export default App;
