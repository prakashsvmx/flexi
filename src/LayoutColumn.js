import React from 'react';

class LayoutColumn extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
        <div className={'column ' + (this.props.className || '')}>
          {
            this.props.children
          }
        </div>
    );
  }
}

export default LayoutColumn;
