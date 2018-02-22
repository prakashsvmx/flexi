import React from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';


const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  config:PropTypes.object
};

class Flexi extends React.Component {

  constructor (props) {

    super(props)
    this.state = {
      formElements: [],
      fieldValues: {}
    };
  }


  handleFieldChange =(fieldName, value) =>{

    const fieldValues={fieldValues:{
      ...this.state.fieldValues,
      [fieldName]:value
    }};

    this.setState(fieldValues);
  }

  buildForm = () =>{

    let fields = this.props.config.items;
    let formElements = [];
    for(let i=0;i<fields.length;i++){
      const field= fields[i];
      const fieldName=field.name;
      formElements.push(<TextField  key={fieldName} name={fieldName} handleFieldChange={this.handleFieldChange} fieldValue={this.state.fieldValues[fieldName]} ></TextField> )
    }

    this.setState({
      formElements:formElements
    });

  }
  componentDidMount(){
    this.buildForm();
  }

  prepareAndSubmit = (event) =>{
    event.preventDefault();
    this.props.onSubmit();
  }

  resetForm =(event) =>{

    const fieldValues={fieldValues:{
      }};

    this.setState(fieldValues);
    this.myFormWrapper.reset();
    event.preventDefault();

  }

  render() {
    return (
      <div className="Hello">
        <form onSubmit={this.prepareAndSubmit}  ref={(elem)=> {
          this.myFormWrapper = elem;
        }
        }>
          {this.state.formElements}
          <button>Submit</button>
          <button type="reset" onClick={this.resetForm}>Clear</button>
        </form>
      </div>
    );
  }
}

Flexi.propTypes = propTypes;

export default Flexi;
