// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        progress={'bar'}
        theme={theme}
      >
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Brady Hurlburt
          </Heading>
          <Text margin="10px 0 0" textColor="quartenary" size={1} fit bold>
            Senior Software Engineer
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Genesys Telecoms Laboratory
          </Text>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Clif Barnes
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Senior Software Engineer
          </Text>
          <Text margin="10px 0 0" textColor="quartenary" size={1} fit bold>
            SmartFile
          </Text>
        </Slide>
        <Slide transition={['slide']} bgColor="quartenary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Will Laws
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Senior Operations Engineer
          </Text>
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            SmartFile
          </Text>
        </Slide>
      </Deck>
    );
  }
}
