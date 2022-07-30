import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

import { colors } from './colors';
import { styles } from './styles';
import { Heading, Text, fonts, textStyles } from './typography';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '90em',
  '3xl': '120em'
});
const overrides = {
  colors,
  styles,
  fonts,
  textStyles,
  breakpoints,
  // Other foundational style overrides go here
  components: {
    Heading,
    Text,
    // Other components go here
  },
}

export default extendTheme(overrides)