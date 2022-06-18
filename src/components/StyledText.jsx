import React from "react";
import { Text, StyleSheet } from 'react-native';
import theme from '../theme.js';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },  
  colorSecondary: {
    color: theme.colors.secondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  language: {    
    marginTop: 7,
    marginBottom: 7,
    padding: 6,
    borderRadius: 5,
    overflow: 'hidden',
    color: 'white',
    backgroundColor: 'blue',
    alignSelf: 'flex-start'      
  },    
  blue: {
    color: 'blue'
  },
  big: {
    fontSize: 20
  },
  small: {
    fontSize: 10
  },
});

export default function StyledText ({ children, color, fontSize, fontWeight, style, align, type, ...restOfProps }) {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subHeading,
    fontWeight === 'bold' && styles.bold,
    align === 'center' && styles.textAlignCenter,
    type === 'language' && styles.language,
  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
};
