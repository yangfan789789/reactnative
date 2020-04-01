import React, { Component } from 'react'
import {
    View, 
    Text, 
    AsyncStorage,
    Button,
    ScrollView,
    StatusBar
} from 'react-native';
export default class LocalPage extends Component {
    constructor(){
        super();
        this.state = {
            tits: []
        }
    }
    storeData = async ()=>{
        await AsyncStorage.setItem('userName','helloworld',
            ()=>{console.log('store success')}
        )
    }
    getData = ()=>{
        AsyncStorage.getItem('userName')
        .then((res)=>console.log(res));
    }
    getTitle = ()=>{
        fetch('https://cnodejs.org/api/v1/topics')
            .then(res=>res.json())
            .then(res=>{
                this.setState({tits: res.data});
            })
    }
    render() {
        return (
            <View>
                {/* 状态栏 */}
                <StatusBar backgroundColor='transparent' translucent={true}/>
                <ScrollView>
                    <Button title="存储" onPress={this.storeData}/>
                    <Button title="获取" onPress={this.getData}/>
                    <Button title="请求title" onPress={this.getTitle}/>
                    {
                        this.state.tits.map((item)=>(
                            <Text style={{fontSize:17}}>{item.title}</Text>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}





































// import React, { Component } from 'react'
// import {
//     View, 
//     Text, 
//     AsyncStorage,
//     Button,
//     ScrollView,
//     StatusBar,
//     Image,
// } from 'react-native';
// import ImagePicker from 'react-native-image-picker';





// const options = {
//     title: 'Select Avatar',
//     customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//     storageOptions: {
//       skipBackup: true,
//       path: 'images',
//     },
//   };
  
//   ImagePicker.showImagePicker(options, (response) => {
//         if (response.didCancel) {
//           return;
//         } else if (response.error) {
//           console.log('Error:', response.error);
//         } else if (response.customButton) {
//           console.log('custom:', response.customButton);
//         } else {
            
//           const source = { uri: response.uri };
//           this.setState({
//             avatarSource: source,
//           });
//         }
//       });







// export default class LocalPage extends Component {
//     constructor(){
//         super();
//         this.state = {
//             tits: []
//         }
//     }
//     storeData = async ()=>{
//         await AsyncStorage.setItem('userName','helloworld',
//             ()=>{console.log('store success')}
//         )
//     }
//     getData = ()=>{
//         AsyncStorage.getItem('userName')
//         .then((res)=>console.log(res));
//     }
//     getTitle = ()=>{
//         fetch('https://cnodejs.org/api/v1/topics')
//             .then(res=>res.json())
//             .then(res=>{
//                 this.setState({tits: res.data});
//             })
//     }
//     render() {
//         return (
//             <View>
//                 {/* 状态栏 */}
//                 <StatusBar backgroundColor='transparent' translucent={true}/>
//                 <ScrollView>
//                     <Button title="存储" onPress={this.storeData}/>
//                     <Button title="获取" onPress={this.getData}/>
//                     <Button title="请求title" onPress={this.getTitle}/>
//                     {
//                         this.state.tits.map((item)=>(
//                             <Text style={{fontSize:17}}>{item.title}</Text>
//                         ))
//                     }
//                     <Image source={this.state.avatarSource} style={{width:200,height:200}} />
//                 </ScrollView>
//             </View>
//         )
//     }
// }
