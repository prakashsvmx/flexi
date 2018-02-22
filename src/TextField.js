import React from 'react';
import PropTypes from 'prop-types';


const propTypes={

};

class TextField extends React.Component {
  //state = { text: '' };

  constructor (props) {
    super(props);
    //this.state = { text:props.fieldValue };
  }
/*
  componentWillUpdate = () =>{
    console.log("componentWillUpdate");
}*/
  shouldComponentUpdate = () => {
    console.log("shouldComponentUpdate");
    return true;
}


   shouldComponentUpdate( nextProps,  nextState){

     console.log("Hell::",nextProps);
     //debugger;

     return true;

}

  componentWillReceiveProps = (nextProps) =>{
    console.log("componentWillReceiveProps");
    debugger;
    this.setState({text:nextProps.fieldValue});
    /*if(nextProps.value !== this.props.value){
      this.setState({text:nextProps.value});
    }*/
  }

  valueChange=(event)=> {
    const text = event.target.value;
    this.setState({text:text});
    this.props.handleFieldChange(this.props.name, text);
  }



  render() {
    return (<input type="text" value={this.props.fieldValue} onChange={this.valueChange}  name={this.props.name} id={this.props.name}/>);
  }
}

TextField.propTypes = propTypes;

export default TextField;
