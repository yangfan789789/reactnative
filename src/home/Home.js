import React, {Component}from 'react';
import {Router, Scene, Tabs} from "react-native-router-flux";
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
} from 'react-native';
import { Button } from '@ant-design/react-native';
const styles = StyleSheet.create({
    img1:{
        width: 80, height: 80,marginLeft:10
    },
    box1:{
        paddingTop:30,fontSize:20,marginLeft:40
    },
    box2:{
        backgroundColor:'white',width:'100%',height:80,flexDirection:'row',marginTop:10
    }
});
export default class Home extends Component {
    render(){
        return(
            <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView>

                    {/* {搜索框} */}
                    <View style={{flexDirection:'row',height:50,justifyContent:'center',backgroundColor:'red'}}>
                    <View style={{
                        width:'80%',
                        height:36,
                        marginTop:7,
                        marginRight:10,
                        backgroundColor:'#fbb8b8',
                        flexDirection:'row',
                        alignItems:'center',
                        borderRadius:20,
                        paddingLeft:20
                    }}>
                        <Icon name='search'  color='white' style={{marginLeft:10}}/>
                        <TextInput placeholder="请输入您要输入的关键字" ></TextInput>
                    </View>
                    <TouchableOpacity
                        style={{
                            width:40,
                            height:40,
                            marginTop:7,
                            alignItems:'center',
                            justifyContent:'center',
                        }
                        }
                    >
                        <Icon name='shopping-cart' color='white'/>
                        </TouchableOpacity>  
                </View>



                    {/* 轮播图 */}
                    <View style={{backgroundColor:'blue',width:"100%",height:200}}>
                        {/* <ScrollView></ScrollView> */}
                        <Image
                                style={{width: '100%', height: 200}}
                                source={require('../../images/bgimg.jpg')}
                            />
                    </View>



                    {/* 链接 */}
                    <View>
                        <View style={styles.box2}>
                            <Image
                                style={styles.img1}
                                source={require('../../images/introduce_06.jpg')}
                            />
                            <Text style={styles.box1}>居家维修保养</Text>
                            <Text style={{marginLeft:170,paddingTop:30,fontSize:20}}>></Text>
                        </View>
                        <View style={styles.box2}>
                            <Image
                                style={styles.img1}
                                source={require('../../images/introduce_09.jpg')}
                            />
                            <Text style={styles.box1}>住宿优惠</Text>
                            <Text style={{marginLeft:210,paddingTop:30,fontSize:20}}>></Text>
                        </View>
                        <View style={styles.box2}>
                            <Image
                                style={styles.img1}
                                source={require('../../images/introduce_11.jpg')}
                            />
                            <Text style={styles.box1}>出行接送</Text>
                            <Text style={{marginLeft:210,paddingTop:30,fontSize:20}}>></Text>
                        </View>
                        <View style={styles.box2}>
                            <Image
                                style={styles.img1}
                                source={require('../../images/introduce_13.jpg')}
                            />
                            <Text style={styles.box1}>E族活动</Text>
                            <Text style={{marginLeft:220,paddingTop:30,fontSize:20}}>></Text>
                        </View>
                    </View>

                    {/* 按钮 */}
                        <View style={{marginTop:30,justifyContent:'center',marginLeft:60}}>
                            <Button style={{backgroundColor:'red',width:'80%',height:40,borderRadius:10}}>发布需求</Button>
                        </View>
                    

                    {/* 尾部 */}
                        <View style={{marginTop:60,justifyContent:'center',marginLeft:180}}>
                            <Text style={{fontSize:12}}>oe之家，版权所有</Text>
                        </View>




                </ScrollView>
            </SafeAreaView>
            </>
        )
    }
}
