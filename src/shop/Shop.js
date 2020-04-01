import React, {Component,useState}from 'react';
import {Router, Scene} from "react-native-router-flux";
import {Grid , Icon} from '@ant-design/react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Button } from '@ant-design/react-native';
const styles = StyleSheet.create({
    box1:{
      width:30,height:20,backgroundColor:'white',marginTop:10,marginBottom:10
    },//导航栏
    box2:{
        width:'45%',height:250,backgroundColor:'white',marginTop:10
    },//商品盒子
    img1:{
        width: 100, height: 140,marginLeft:'23%',marginTop:20
    },//商品图片
    box3:{
        marginTop:10,fontSize:14,marginLeft:10
    },//商品名称
    box4:{
        marginLeft:10,marginTop:10,fontSize:14,color:'red'
    }
   });//商品价格
//    const {width} = Dimensions.get('window');
//    const {height} = Dimensions.get('window');
// console.log(width,height);
export default class Shop extends Component {
    constructor(){
        super();
        this.state={
            txtcolor1:'red',
            txtcolor2:'black',
            txtcolor3:'black',
            txtcolor4:'black',
            txtcolor5:'black',
        }
    }
    render(){
        return(
            <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView>

                    {/* {搜索框} */}
                    <View style={{flexDirection:'row',height:50,justifyContent:'center',backgroundColor:'white'}}>
                    <View style={{
                        width:'80%',
                        height:36,
                        marginTop:6,
                        marginRight:10,
                        backgroundColor:'#ccc',
                        flexDirection:'row',
                        alignItems:'center',
                        paddingLeft:20
                    }}>
                        <TextInput placeholder="请输入商品名称" ></TextInput>
                        <Icon name='search'  style={{marginLeft:200}} color='white'/>
                    </View>
                   
                </View>



                    {/* 导航 */}
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',backgroundColor:'white'}}>
                    <TouchableOpacity style={styles.box1} onPress={()=>this.setState({txtcolor1:'red',txtcolor2:'black',txtcolor3:'black',txtcolor4:'black',txtcolor5:'black'})}><Text style={{color:`${this.state.txtcolor1}`}}>综合</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.box1} onPress={()=>this.setState({txtcolor1:'black',txtcolor2:'red',txtcolor3:'black',txtcolor4:'black',txtcolor5:'black'})}><Text style={{color:`${this.state.txtcolor2}`}}>销量</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.box1} onPress={()=>this.setState({txtcolor1:'black',txtcolor2:'black',txtcolor3:'red',txtcolor4:'black',txtcolor5:'black'})}><Text style={{color:`${this.state.txtcolor3}`}}>新品</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.box1} onPress={()=>this.setState({txtcolor1:'black',txtcolor2:'black',txtcolor3:'black',txtcolor4:'red',txtcolor5:'black'})}><Text style={{color:`${this.state.txtcolor4}`}}>价格</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.box1} onPress={()=>this.setState({txtcolor1:'black',txtcolor2:'black',txtcolor3:'black',txtcolor4:'black',txtcolor5:'red'})}><Text style={{color:`${this.state.txtcolor5}`}}>信用</Text></TouchableOpacity>


                        {/* <View style={styles.box1}><Text style={{color:'red'}}>综合</Text></View>
                        <View style={styles.box1}><Text onPress={(props)=>{this.props.style.color='red'}}>销量</Text></View>
                        <View style={styles.box1}><Text>新品</Text></View>
                        <View style={styles.box1}><Text>价格</Text></View>
                        <View style={styles.box1}><Text>信用</Text></View> */}
                    </View>



                    {/* 商品 */}
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',flexWrap:'wrap'}}>
                        <View  style={styles.box2}>
                            <Image
                                style={styles.img1}
                                source={require('../../images/list_03.jpg')}
                            />
                            <Text style={styles.box3}>Oishi/上好佳玉米卷20包膨化休闲商品Oishi/上好佳</Text>
                            <Text style={styles.box4}>36.00</Text>
                        </View>
                        <View  style={styles.box2}>
                            <Image
                                style={styles.img1}
                                source={require('../../images/list_05.jpg')}
                            />
                            <Text style={styles.box3}>Oishi/上好佳玉米卷20包膨化休闲商品Oishi/上好佳</Text>
                            <Text style={styles.box4}>36.00</Text>
                        </View>
                        <View  style={styles.box2}>
                            <Image
                                style={styles.img1}
                                source={require('../../images/list_03.jpg')}
                            />
                            <Text style={styles.box3}>Oishi/上好佳玉米卷20包膨化休闲商品Oishi/上好佳</Text>
                            <Text style={styles.box4}>36.00</Text>
                        </View>
                        <View  style={styles.box2}>
                            <Image
                                style={styles.img1}
                                source={require('../../images/list_05.jpg')}
                            />
                            <Text style={styles.box3}>Oishi/上好佳玉米卷20包膨化休闲商品Oishi/上好佳</Text>
                            <Text style={styles.box4}>36.00</Text>
                        </View>
                        <View  style={styles.box2}>
                            <Image
                                style={styles.img1}
                                source={require('../../images/list_03.jpg')}
                            />
                            <Text style={styles.box3}>Oishi/上好佳玉米卷20包膨化休闲商品Oishi/上好佳</Text>
                            <Text style={styles.box4}>36.00</Text>
                        </View>
                        <View  style={styles.box2}>
                            <Image
                                style={styles.img1}
                                source={require('../../images/list_05.jpg')}
                            />
                            <Text style={styles.box3}>Oishi/上好佳玉米卷20包膨化休闲商品Oishi/上好佳</Text>
                            <Text style={styles.box4}>36.00</Text>
                        </View>
                    </View>




                </ScrollView>
            </SafeAreaView>
            </>
        )
    }
}
