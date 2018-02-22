import React from 'react';

class LayoutRow extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
        <div className={'row ' + (this.props.className || '')}>
          {
            this.props.children
          }
        </div>
    );
  }
}

export default LayoutRow;
