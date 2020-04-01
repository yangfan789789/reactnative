import React, {Component}from 'react';
import {Router, Scene, Tabs, Actions} from "react-native-router-flux";
import {Grid , Icon} from '@ant-design/react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import Button from 'react-native-button';

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
  Animated,
  AsyncStorage,
} from 'react-native';

const styles = StyleSheet.create({
    box2:{
        width:'33%',height:100,backgroundColor:'white'
    },
    box3:{
        width: 40, height: 40,marginLeft:60,marginTop:20
    },
    box1:{
        fontSize:14,marginLeft:40
    }
   });



   
export default class Person extends Component {
    constructor(){
        super();
        this.state={
            imageUrl:require('../../images/headimg.jpg')
        }
    }

    componentDidMount(){
        this.getData();
    }

    storeData = async ()=>{
        await AsyncStorage.setItem('imageUrl',this.state.imageUrl.uri,
            ()=>{console.log('ok')}
        )
    }
    getData = async ()=>{
        await AsyncStorage.getItem('imageUrl')
        .then((res)=>{
            console.log(res);
            // this.setState({imageUrl:{uri:res}})}
            this.setState((state)=>{
                return {
                    imageUrl:{uri:res}
                }
            }
            ,()=>{
                console.log('ok');
            })
        })
    };
    
    takephoto=()=>{
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            this.setState((state)=>{
                return {
                    imageUrl:{
                        uri:image.path
                    }
                }   
            }
            // this.setState({imageUrl:{uri:image.path}})}
            ,()=>{
                this.storeData();
            })
        })
    };
    render(){
        return(
            <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView>

                    {/* 首部 */}
                    <View style={{backgroundColor:'red',width:'100%',height:200}}>


                    <Button 
                        style={{
                            width:100, height: 100,borderRadius:50,marginLeft:'40%',marginTop:"6%",
                            textAlignVertical: 'center',
                        }}
                        onPress={()=>{this.takephoto()}}
                    >
                          <Image
                                    style={{width:100, height: 100,borderRadius:50,marginLeft:'40%',marginTop:"6%"}}
                                    source={this.state.imageUrl}
                                />
                    </Button>
                        <Text style={{marginLeft:"37%",marginTop:"3%",color:'white',fontSize:16}}>BINNU DHTLLON</Text>
                        <Image
                            style={{width:'100%', height: 20,marginTop:'3.75%'}}
                            // source={require('../images/bgimg_02.jpg')}
                        />
                    </View>



                    {/* 导航 */}
                    <View style={{flexDirection:'row',height:40,justifyContent:'center',backgroundColor:'white'}}>
                        <View style={{
                            width:'100%',
                            marginLeft:10,
                            backgroundColor:'white',
                            flexDirection:'row',
                            alignItems:'center',
                        }}>
                            <Icon name='user' />
                            <Text style={{marginLeft:10}}>我的个人中心</Text>
                        </View>
                   
                    </View>



                    {/* 商品 */}
                    <View style={{flexDirection:'row',flexWrap:'wrap',backgroundColor:'white'}}>
                        <View  style={styles.box2}>
                            <Icon name='setting' style={styles.box3}/>
                            <Text style={styles.box1}>账户管理</Text>
                        </View>
                        <View  style={styles.box2}>
                            <Icon name='plus-square' style={styles.box3}/>
                            <Text style={styles.box1}>收获地址</Text>
                        </View>
                        <View  style={styles.box2}>
                            <Icon name='message' style={styles.box3}/>
                            <Text style={styles.box1}>我的信息</Text>
                        </View>
                        <View  style={styles.box2}>
                            <Icon name='file-protect' style={styles.box3}/>
                            <Text style={styles.box1}>我的订单</Text>
                        </View>
                        <View  style={styles.box2}>
                            <Icon name='qrcode' style={styles.box3}/>
                            <Text style={styles.box1}>我的二维码</Text>
                        </View>
                        <View  style={styles.box2}>
                            <Icon name='pay-circle' style={styles.box3}/>
                            <Text style={styles.box1}>我的积分</Text>
                        </View>
                        <View  style={styles.box2}>
                            <Icon name='star' style={styles.box3}/>
                            <Text style={styles.box1}>我的收藏</Text>
                        </View>
                        <View  style={styles.box2}>
                            <Button onPress={()=>{
                                Actions.login()
                                AsyncStorage.removeItem('user')
                                
                            }}>
                                <Icon name='edit' style={styles.box3}/>
                            </Button>
                            <Text style={styles.box1}>退出登陆</Text>
                        </View>
                    </View>



                    {/* 导航 */}
                    <View style={{flexDirection:'row',height:40,justifyContent:'center',backgroundColor:'white',marginTop:10}}>
                        <View style={{
                            width:'100%',
                            marginLeft:10,
                            backgroundColor:'white',
                            flexDirection:'row',
                            alignItems:'center',
                        }}>
                            <Icon name='select' />
                            <Text style={{marginLeft:10}}>E族活动</Text>
                        </View>
                   
                    </View>



                    {/* 商品 */}
                    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                        <View  style={styles.box2}>
                            <Icon name='tool' style={styles.box3}/>
                            <Text style={styles.box1}>居家维修保养</Text>
                        </View>
                        <View  style={styles.box2}>
                            <Icon name='car' style={styles.box3}/>
                            <Text style={styles.box1}>出行推送</Text>
                        </View>
                        <View  style={styles.box2}>
                            <Icon name='user' style={styles.box3}/>
                            <Text style={styles.box1}>我的受赠人</Text>
                        </View>
                        <View  style={styles.box2}>
                            <Icon name='gift' style={styles.box3}/>
                            <Text style={styles.box1}>我的住宿优惠</Text>
                        </View>
                        <View  style={styles.box2}>
                            <Icon name='flag' style={styles.box3}/>
                            <Text style={styles.box1}>我的活动</Text>
                        </View>
                        <View  style={styles.box2}>
                            <Button onPress={()=>Actions.Mypublish()}>
                                <Icon name='edit' style={styles.box3}/>
                            </Button>
                            <Text style={styles.box1}>我的发布</Text>
                        </View>
                    </View>


                    {/* 尾部 */}
                        <View style={{marginTop:"8%",justifyContent:'center',marginLeft:'40%'}}>
                            <Text style={{fontSize:10}}>BINNU DHLLON | 退出</Text>
                        </View>

                </ScrollView>
            </SafeAreaView>
            </>
        )
    }
}





















// import React, {Component}from 'react';
// import {Router, Scene, Tabs, Actions} from "react-native-router-flux";
// import {Grid , Icon} from '@ant-design/react-native';
// import ImageCropPicker from 'react-native-image-crop-picker';
// import Button from 'react-native-button';

// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   TextInput,
//   Image,
//   TouchableOpacity,
//   Animated,
//   AsyncStorage,
// } from 'react-native';

// const styles = StyleSheet.create({
//     box2:{
//         width:160,height:100,backgroundColor:'white'
//     },
//     box3:{
//         width: 40, height: 40,marginLeft:60,marginTop:30
//     },
//     box1:{
//         fontSize:14,marginLeft:40
//     }
//    });



   
// export default class Person extends Component {
//     constructor(){
//         super();
//         this.state = {
//             imageUrl:require('../images/headimg.jpg')
//         }
//     }

//     // storeData = async ()=>{
//     //     await AsyncStorage.setItem('imageUrl',{uri:image.path},
//     //         ()=>{console.log('ok')}
//     //     )
//     // }
//     // getData = ()=>{
//     //     AsyncStorage.getItem('imageUrl')
//     //     .then((res)=>console.log(res));
//     // }


//     takephoto = ()=>{
//         ImageCropPicker.openCamera({
//             width: 300,
//             height: 400,
//             cropping: true,
//           }).then(
//               image => {
//             this.setState({imageUrl:{uri:image.path}})}
//           );
//     }


//     render(){
//         return(
//             <>
//             <StatusBar barStyle="dark-content" />
//             <SafeAreaView>
//                 <ScrollView>

//                     {/* 首部 */}
//                     <View style={{backgroundColor:'red',width:'100%',height:200}}>


//                     <Button 
//                         style={{
//                             width:100, height: 100,borderRadius:50,marginLeft:'40%',marginTop:"6%",
//                             textAlignVertical: 'center',
//                         }}
//                         onPress={()=>{this.takephoto()}}
//                     >
//                          <Image
//                             style={{width:100, height: 100,borderRadius:50,marginLeft:'40%',marginTop:"6%"}}
//                             source={this.state.imageUrl}
//                         />
//                     </Button>

//                         <Text style={{marginLeft:"37%",marginTop:"3%",color:'white',fontSize:16}}>BINNU DHTLLON</Text>
//                         <Image
//                             style={{width:'100%', height: 20,marginTop:'3.75%'}}
//                             source={require('../images/bgimg_02.jpg')}
//                         />
//                     </View>



//                     {/* 导航 */}
//                     <View style={{flexDirection:'row',height:40,justifyContent:'center',backgroundColor:'white'}}>
//                         <View style={{
//                             width:'100%',
//                             marginLeft:10,
//                             backgroundColor:'white',
//                             flexDirection:'row',
//                             alignItems:'center',
//                         }}>
//                             <Icon name='user' />
//                             <Text style={{marginLeft:10}}>我的个人中心</Text>
//                         </View>
                   
//                     </View>



//                     {/* 商品 */}
//                     <View style={{flexDirection:'row',flexWrap:'wrap',backgroundColor:'white'}}>
//                         <View  style={styles.box2}>
//                             <Icon name='setting' style={styles.box3}/>
//                             <Text style={styles.box1}>账户管理</Text>
//                         </View>
//                         <View  style={styles.box2}>
//                             <Icon name='plus-square' style={styles.box3}/>
//                             <Text style={styles.box1}>收获地址</Text>
//                         </View>
//                         <View  style={styles.box2}>
//                             <Icon name='message' style={styles.box3}/>
//                             <Text style={styles.box1}>我的信息</Text>
//                         </View>
//                         <View  style={styles.box2}>
//                             <Icon name='file-protect' style={styles.box3}/>
//                             <Text style={styles.box1}>我的订单</Text>
//                         </View>
//                         <View  style={styles.box2}>
//                             <Icon name='qrcode' style={styles.box3}/>
//                             <Text style={styles.box1}>我的二维码</Text>
//                         </View>
//                         <View  style={styles.box2}>
//                             <Icon name='pay-circle' style={styles.box3}/>
//                             <Text style={styles.box1}>我的积分</Text>
//                         </View>
//                         <View  style={styles.box2}>
//                             <Icon name='star' style={styles.box3}/>
//                             <Text style={styles.box1}>我的收藏</Text>
//                         </View>
//                     </View>



//                     {/* 导航 */}
//                     <View style={{flexDirection:'row',height:40,justifyContent:'center',backgroundColor:'white',marginTop:10}}>
//                         <View style={{
//                             width:'100%',
//                             marginLeft:10,
//                             backgroundColor:'white',
//                             flexDirection:'row',
//                             alignItems:'center',
//                         }}>
//                             <Icon name='select' />
//                             <Text style={{marginLeft:10}}>E族活动</Text>
//                         </View>
                   
//                     </View>



//                     {/* 商品 */}
//                     <View style={{flexDirection:'row',flexWrap:'wrap'}}>
//                         <View  style={styles.box2}>
//                             <Icon name='tool' style={styles.box3}/>
//                             <Text style={styles.box1}>居家维修保养</Text>
//                         </View>
//                         <View  style={styles.box2}>
//                             <Icon name='car' style={styles.box3}/>
//                             <Text style={styles.box1}>出行推送</Text>
//                         </View>
//                         <View  style={styles.box2}>
//                             <Icon name='user' style={styles.box3}/>
//                             <Text style={styles.box1}>我的受赠人</Text>
//                         </View>
//                         <View  style={styles.box2}>
//                             <Icon name='gift' style={styles.box3}/>
//                             <Text style={styles.box1}>我的住宿优惠</Text>
//                         </View>
//                         <View  style={styles.box2}>
//                             <Icon name='flag' style={styles.box3}/>
//                             <Text style={styles.box1}>我的活动</Text>
//                         </View>
//                         <View  style={styles.box2}>
//                             <Button onPress={()=>Actions.Mypublish()}>
//                                 <Icon name='edit' style={styles.box3}/>
//                             </Button>
//                             <Text style={styles.box1}>我的发布</Text>
//                         </View>
//                     </View>


//                     {/* 尾部 */}
//                         <View style={{marginTop:"8%",justifyContent:'center',marginLeft:'40%'}}>
//                             <Text style={{fontSize:10}}>BINNU DHLLON | 退出</Text>
//                         </View>

//                 </ScrollView>
//             </SafeAreaView>
//             </>
//         )
//     }
// }
