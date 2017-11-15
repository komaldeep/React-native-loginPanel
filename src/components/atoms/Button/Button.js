import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import multipleStyles from 'react-native-multiple-styles'
const Dimensions = require('Dimensions');
import PropTypes from 'prop-types';

const viewport = {
  fullWidth: Dimensions.get('window').width,
  fullHeight: Dimensions.get('window').height,
};

const Button = ({ children, onClick }) => {

  return (
    <TouchableOpacity
      testID={'button'}
      onPress={onClick}
      style={styles.button}
    >
      <Text style={styles.buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}


Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  onClick: () => {},
}

export default Button;

const styles = StyleSheet.create({
  button:{
    display: 'flex',
    backgroundColor:'#000000',
    width: viewport.fullWidth* 0.80,
    padding: viewport.fullWidth * 0.02,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10,
  },
  buttonText:{
    color:'#fff',
    fontSize:20,
  }
});