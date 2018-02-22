import React from 'react';
import PropTypes from 'prop-types';
import FieldLabel from './FieldLabel';
import TextField from './TextField';
import NumberField from './NumberField';
import SelectField from './SelectField';
import LayoutRow from './LayoutRow';
import LayoutColumn from './LayoutColumn';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  config: PropTypes.object
};

class Flexi extends React.Component {

  constructor (props) {

    super(props);
    this.state = {
      formElements: [],
      fieldValues: {}
    };
  }

  handleFieldChange = (fieldName, value) => {

    const fieldValues = {
      fieldValues: {
        ...this.state.fieldValues,
        [fieldName]: value
      }
    };

    this.setState(fieldValues);
  };

  getNumberField (field) {

    const fieldName = field.name;
    return (
        <LayoutRow key={'field-row-' + fieldName} className="form-row">
          <FieldLabel labelFor={fieldName} labelText={field.label} labelClassName=""/>
          <NumberField key={fieldName} id={fieldName} name={fieldName} handleFieldChange={this.handleFieldChange}
                       fieldValue={this.state.fieldValues[fieldName]}
                       fieldHtmlAttibutes={field.validationHtmlAttrs}
          ></NumberField>
        </LayoutRow>
    );
  }

  getTextField (field) {

    const fieldName = field.name;
    return (
        <LayoutRow key={'field-row-' + fieldName} className="form-row">
          <FieldLabel labelFor={fieldName} labelText={field.label} labelClassName=""/>
          <TextField key={fieldName} id={fieldName} name={fieldName} handleFieldChange={this.handleFieldChange} fieldValue={this.state.fieldValues[fieldName]}></TextField>
        </LayoutRow>
    );
  }

  getDropDownField (field) {

    const optionList = field.values;
    const fieldName = field.name;
    return (
        <LayoutRow key={'field-row-' + fieldName} className="form-row">
          <FieldLabel labelFor={fieldName} labelText={field.label} labelClassName=""/>
          <SelectField key={fieldName}
                       id={fieldName} name={fieldName} handleFieldChange={this.handleFieldChange}
                       fieldValue={this.state.fieldValues[fieldName]}
                       optionList={field.values}
          ></SelectField>
        </LayoutRow>
    );
  }

  getFieldByType = (field, i) => {

    let fieldByConfig = <div key={'field-row-un-supported' + i} className="un-supported-field-error"> Un Supported Field Type Configuration</div>;

    if (field.type === 'TextField') {
      fieldByConfig = this.getTextField(field);
    }
    else if (field.type === 'DropDown') {
      fieldByConfig = this.getDropDownField(field);
    }
    else if (field.type === 'NumberField') {
      fieldByConfig = this.getNumberField(field);
    }

    return fieldByConfig;

  };
  buildForm = () => {

    let fields = this.props.config.items;
    let formElements = [];
    let fieldDefaultValues = {};
    for (let i = 0; i < fields.length; i++) {
      fieldDefaultValues[fields[i].name] = '';
      formElements.push(this.getFieldByType(fields[i], i));
    }

    this.setState({
      fieldValues: fieldDefaultValues,
      formElements: formElements
    });

  };

  componentDidMount () {
    this.buildForm();
  }

  prepareAndSubmit = (event) => {

    this.props.onSubmit({ ...this.state.fieldValues });
    event.preventDefault();
  };

  resetForm = (event) => {

    const fieldValues = {
      fieldValues: {}
    };

    this.setState(fieldValues);
    this.myFormWrapper.reset();

    this.props.onClear();
    event.preventDefault();

  };

  render () {
    return (
        <div className="Flexi-form-container">
          <form onSubmit={this.prepareAndSubmit} ref={(elem) => {
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
