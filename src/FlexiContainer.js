import React from 'react';
import LayoutRow from './LayoutRow';
import LayoutColumn from './LayoutColumn';
import Flexi from './Flexi';

export class FlexiContainer extends React.Component {

  state = {
    config: {
      items: [
        {
          'name': 'personname',
          'label': 'Person\'s Name',
          'type': 'TextField'
        },
        {
          'name': 'states',
          'label': 'Person\'s state',
          'type': 'DropDown',
          'values': [
            'Maharashtra',
            'Kerala',
            'Tamil Nadu'
          ]
        },
        {
          'name': 'personage',
          'label': 'Person\'s Age',
          'type': 'NumberField',
          'validationHtmlAttrs': {
            required: true,
            min: 1,
            max: 100
          }
        }
      ]
    },

    config2: {

      items: [
        {
          'name': 'personname',
          'label': 'New  Name',
          'type': 'TextField'
        },
        {
          'name': 'states',
          'label': 'New \'s state',
          'type': 'DropDown',
          'values': [
            'Maharashtra',
            'Kerala',
            'Tamil Nadu'
          ]
        },
        {
          'name': 'personfirstname',
          'label': 'First  Name',
          'type': 'TextField'
        },
        {
          'name': 'personlasttname',
          'label': 'Last  Name',
          'type': 'TextField'
        }
      ]
    }
  };

  onSubmit = (params) => {
    this.props.displayValuesOnSubmit(params);
  };

  onClear = () => {
    this.props.claerFormData();
  };

  render () {
    return (
        <div>
          <div>
            <LayoutRow> Config 1</LayoutRow>
            <LayoutRow>
              <Flexi config={this.state.config} onSubmit={this.onSubmit} onClear={this.onClear}/>
            </LayoutRow>
          </div>

          <div>
            <LayoutRow> Config 2</LayoutRow>
            <LayoutRow>
              <Flexi config={this.state.config2} onSubmit={this.onSubmit} onClear={this.onClear}/>
            </LayoutRow>
          </div>
        </div>
    );
  }
}

export default FlexiContainer;
