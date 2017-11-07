import React, {Component} from 'react';
import { StyleSheet, TextInput } from 'react-native';
import multipleStyles from 'react-native-multiple-styles'
const Dimensions = require('Dimensions');
import PropTypes from 'prop-types';

const viewport = {
  fullWidth: Dimensions.get('window').width,
  fullHeight: Dimensions.get('window').height,
};

export default class InputText extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  static propTypes = {
    placeholder: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    inputFieldValue: PropTypes.func,
  };


  static defaultProps = {
    secureTextEntry: false,
  }

  inputValue = (text)=> {
    this.setState({
      text
    })
   this.props.inputFieldValue(text);
  }

  render() {
    const {
      placeholder,
      secureTextEntry
    } = this.props;
    return (
      <TextInput
        secureTextEntry={secureTextEntry}
        underlineColorAndroid="transparent"
        value={this.state.text}
        style={styles.textInput}
        onChangeText={this.inputValue}
        placeholder={placeholder}
      />
    );
  }
}


const styles = StyleSheet.create({
  textInput:{
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 10,
    width: viewport.fullWidth* 0.80,
  }
});