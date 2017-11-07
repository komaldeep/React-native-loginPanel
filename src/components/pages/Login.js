import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import multipleStyles from 'react-native-multiple-styles';
import Button from './../atoms/Button/Button';
import InputText from './../atoms/InputText/InputText';
import {bindActionCreators} from 'redux';
import * as counterActions from '../../actions/index';
import { connect } from 'react-redux';
const Dimensions = require('Dimensions');

const viewport = {
  fullWidth: Dimensions.get('window').width,
  fullHeight: Dimensions.get('window').height,
};

class Login extends PureComponent {

  componentDidMount(){
    this.props.actions.actionCheck();
  }

  loginClick = () =>{
    console.log('Login click');
  }

  registerClick = () => {
    console.log('Register click')
  }

  username=(value)=>{
    console.log('username')
  }

  password=(value)=>{
    console.log('password')
  }

  render() {
    return (
      <View style={styles.container}>

        <InputText
          placeholder="Enter the username"
          inputFieldValue={this.username}
        />

        <InputText
          placeholder="Enter the password"
          secureTextEntry={true}
          inputFieldValue={this.password}
        />

        <Button
          onClick={this.loginClick}
        >
          LOGIN
        </Button>
        <Button
          onClick={this.registerClick}
        >
          REGISTER
        </Button>
      </View>
    );
  }
}

export default connect(state => ({
    count : state.freiraum,
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    display: 'flex',
    backgroundColor:'#000000',
    width: viewport.fullWidth* 0.80,
    padding: viewport.fullWidth * 0.03,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText:{
    color:'#fff',
    fontSize:20,
  }
});