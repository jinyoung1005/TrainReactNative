/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  Text,
  TouchableOpacity,//터치할수 있는 투명도 영역
  KeyboardAvoidingView,
} from 'react-native';

class MyTextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password:'',
    };
  }

  handleEmail = (email) => {
    this.setState({email : email});
  };

  handlePassword = (password) => {
    this.setState({password : password});
  };

  handleLogin = () => {
    alert(`email: ${this.state.email}\npassword: ${this.state.password}`);
    //this.setState({login : login});
  };

  render() {
    return (
        <KeyboardAvoidingView behavior="padding" enabled>
        <TextInput
          style={style.abc}
          placeholder={'Email'}
          value={this.state.email}
          onChangeText={this.handleEmail}
        />
        <TextInput  
          style={style.abc}
          placeholder={'Password'}
          value={this.state.password}
          onChangeText={this.handlePassword}
          secureTextEntry //암호화변경해줌
        />  
        {/* <Button title="로그인" onPress={this.handleLogin}/> */}
        <TouchableOpacity style={style.submitButton} onPress={this.handleLogin}>
          <Text children={'Submit'} style={style.submitText}/>
        </TouchableOpacity>
        {/* TouchableOpacity 사용함으로서 ios,안드로이드 submit모습을 동일화시킴 */}
        </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  submitButton:{
    padding:10,
    margin:14,
    height:40,
    backgroundColor:'#7a42f4',
  },
  submitText:{
    textAlign:'center',
    textAlignVertical:'center',
    color:'white',
    fontWeight:'bold',
  },
  abc: {margin: 10, height: 40, borderBottomColor: 'gray', borderBottomWidth: 1},
});

export default MyTextInput;
