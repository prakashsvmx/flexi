import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

class TextField extends React.Component {
  constructor (props) {
    super(props);
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
    return (<input type="text"
                   autoComplete=''
                   value={this.props.fieldValue} onChange={this.valueChange}
                   name={this.props.name} id={this.props.name}
                   {...this.props.fieldHtmlAttibutes}/>);
  }
}

TextField.propTypes = propTypes;

export default TextField;
