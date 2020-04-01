import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
export default class Sign extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            issigning:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    sign = ()=>{
        this.setState({issigning:true})
        myFetch.post('/sign',{
            username:this.state.username,
            pwd:this.state.pwd}
        ).then(res=>{
            AsyncStorage.setItem('usersign',JSON.stringify(res.data))
                .then(()=>{
                    console.log(JSON.stringify(res.data))
                    this.setState({issigning:false})
                    Actions.login();
                })
        })
    } 
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput placeholder="用户名" 
                onChangeText={this.userhandle}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput 
                onChangeText={this.pwdhandle}
                placeholder="密码" 
                secureTextEntry={true}
            />
          </View>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.sign}>
                <Text>注册</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{
                    width: '60%',
                    height: 20,
                    backgroundColor: '#ccc',
                    marginTop: 60,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={()=>Actions.login()}>
                <Text>已有账户，点击登陆</Text>
            </TouchableOpacity>

        </View>
        {
            this.state.issigning
            ?<View><Text>正在注册。。。</Text></View>
            :null
        }
      </View>
    );
  }
}