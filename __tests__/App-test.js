import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import App from '../App';

// Mocks the react-native-maps element which has our maps.
jest.mock('react-native-maps', () => {
  const React = require('react');
  return class MockMapView extends React.Component {
    static Marker = props => React.createElement('Marker', props, props.children);
    render() {
      return React.createElement('MapView', this.props, this.props.children);
    }
  };
});

describe('App snapshot', () => {
  jest.useFakeTimers();
  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it('renders the loading screen', async () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
