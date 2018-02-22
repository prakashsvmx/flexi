import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

class NumberField extends React.Component {
  //state = { text: '' };

  constructor (props) {
    super(props);
    //this.state = { text:props.fieldValue };
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ text: nextProps.fieldValue });
  };

  valueChange = (event) => {
    const text = event.target.value;
    this.setState({ text: text });
    this.props.handleFieldChange(this.props.name, text);
  };

  render () {
    return (<input type="number"
                   autoComplete=''
                   value={this.props.fieldValue} onChange={this.valueChange}
                   name={this.props.name} id={this.props.name}
                   {...this.props.fieldHtmlAttibutes}
    />);
  }
}

NumberField.propTypes = propTypes;

export default NumberField;
