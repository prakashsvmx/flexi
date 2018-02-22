import React from 'react';

import Flexi from './Flexi'
export class FlexiContainer extends React.Component {
state={
  config:{
    items: [
      {
        "name": "personname",
        "label": "Person's Name",
        "type":"TextField",
      },
      {
        "name": "states",
        "label": "Person's state",
        "type": "DropDown",
        "values": [
          "Maharashtra",
          "Kerala",
          "Tamil Nadu"
        ]
      }
    ]
  }

}
  onSubmit = (params)  =>{
    console.log("Your submit call...",params)
  }

  render() {
    return <Flexi  config={this.state.config} onSubmit={this.onSubmit} />;
  }
}

export default FlexiContainer;
