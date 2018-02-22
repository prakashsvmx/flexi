import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

class SelectField extends React.Component {

  constructor (props) {
    super(props);
  }

  valueChange = (event) => {
    const text = event.target.value;
    this.setState({ text: text });
    this.props.handleFieldChange(this.props.name, text);
  };

  getOptionList = () => {

    let optionList = this.props.optionList.map((value) => {
      return <option key={value} value={value}>{value}</option>;
    });

    return optionList;
  };

  render () {
    return (

        <select
            autoComplete=''
            value={this.props.fieldValue} onChange={this.valueChange} name={this.props.name} id={this.props.name}>
          <option value='' key={'sel-blank-0'}>-- Select a {this.props.name} --</option>
          {this.getOptionList()}
        </select>
    );
  }
}

SelectField.propTypes = propTypes;

export default SelectField;
