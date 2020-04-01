import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ToastAndroid,
  } from 'react-native';
const styles=StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'white'
    },
    text:{
        width:"100%",
        height:'80%',
        padding:20,
        // overflow:'hidden',
        // backgroundColor:'red'
    },
    page:{
        height:50,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        // backgroundColor:'blue'
    },
    btn:{
        width:"30%",
        height:40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"red"
    },
        

})
export default class Mypublish extends Component {

    constructor(){
        super();
        this.state={
            data:[],//内容
            page:1,//页数
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?page=1&limit=10')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
        this.tabs=true;
    }//页面加载获取数据

    BackPage=()=>{
        this.setState((state)=>{
            if((state.page-1)===0){
                ToastAndroid.show('已经是第一页了',ToastAndroid.LONG);
                this.tabs=false;
            }else{
                this.tabs=true;
                return {
                    page:state.page-1
                }
            }
            
        },()=>{
            if(this.tabs){
            fetch('https://cnodejs.org/api/v1/topics?page='+this.state.page+'&limit=10')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res.data})
            })
        }
        })
    }
 
    NextPage=()=>{
        this.setState((state)=>{
                return {
                    page:state.page+1
                }
            }
        ,()=>{
                fetch('https://cnodejs.org/api/v1/topics?page='+this.state.page+'&limit=10')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res.data})
            })
            }
        )
    }
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.text}>
                    {
                        this.state.data.map((item)=>(
                            <View style={{flexDirection:'row',alignItems:'center',marginTop:'3%',marginBottom:'3%'}}>
                                <Text style={{fontSize:16,width:'50%'}} numberOfLines={1}>{item.title.length>15?(item.title.substr(0,15)+'......'):item.title}</Text>
                                <Text style={{marginLeft:'15%',marginRight:'5%'}}>{item.create_at.split('T')[0]}</Text>
                                {Math.random()>0.5?(<Text>已回复</Text>):(<Text style={{color:'red'}}>待回复</Text>)}
                            </View>
                        ))
                    }
                </View>
                <View style={styles.page}>
                    <TouchableOpacity style={styles.btn} onPress={this.BackPage}>
                        <Text>
                            上一页
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>
                            第{this.state.page}页
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.NextPage}>
                        <Text>
                            下一页
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}













































// import React, { Component } from 'react';
// import {View,Text,TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native';
// import Button from 'react-native-button';

// export default class MyPublish extends Component {

//     constructor(){
//         super();
//         this.state={
//             maxpage:10,
//             page:1,
//             data:[]
//         }
//     }

//     componentDidMount(){
//         fetch('https://cnodejs.org/api/v1/topics?page=1&limit=10')
//         .then(res=>res.json())
//         .then(res=>{
//             this.setState({
//                 data:res.data
//             },()=>{
//                 console.log(this.state.data.length);
//             })
//         })
//         this.flag=true;
//     }

//     getTitle=()=>{
//         this.setState((state)=>{
//             if((state.page-1)===0){
//                 ToastAndroid.show('已经是第1页啦！',ToastAndroid.LONG);
//                 // return {
//                 //     page:state.page
//                 // }
//             }else{
//                 return {
//                     page:state.page-1
//                 }
//             }
//         },()=>{
//             console.log("当前是第："+this.state.page);
//             if(this.state.page!==1){
//                 fetch('https://cnodejs.org/api/v1/topics?page='+this.state.page+'&limit=10')
//                 .then(res=>res.json())
//                 .then(res=>{
//                     this.setState({
//                         data:res.data
//                     })
//                 })
//             }
            
//         })
//     }
//     getNextPage=()=>{
//         this.setState((state)=>{
//             var addpage = state.page+1;
//             if(addpage>5){
//                 ToastAndroid.show('已经是最后一页啦！', ToastAndroid.LONG);
//                 this.flag=false;
//                 // return {
//                 //     page:state.page
//                 // }
//             }else{
//                 this.flag=true;
//                 return {
//                     page:addpage,
//                 } 
//             }
                           
            
//         },()=>{
//             var url='https://cnodejs.org/api/v1/topics?page='+this.state.page+'&limit=10';
//             console.log(url);
//             console.log(this.flag);
//             if(this.flag){
//                 fetch(url)
//                 .then(res=>res.json())
//                 .then(res=>{
//                     // console.log(res.data.title);
//                     this.setState({
//                         data:res.data
//                     },()=>{
//                         // console.log(this.state.data.length);
//                     })
//                 })
//             }
            
//         })
        
//     }

//     render() {
//         return (
//             <View style={{flex:1,backgroundColor:'#fff'}}>
//                 <View style={styles.content}>
//                     {
//                         this.state.data.map((item)=>(
//                             <View style={{
//                                 flexDirection:'row',
//                                 alignItems:'center',
//                             }}>
//                                 <Text 
//                                     numberOfLines={1}
//                                     style={[styles.showtxt,styles.txtsize]} 
                                    
//                                 >{item.title.length>15?(item.title.substr(0,15)+'......'):item.title}</Text>
//                                 <Text style={[styles.time,styles.txtsize]}>{item.create_at.split('T')[0]}</Text>
//                                 {
//                                     Math.random()>=0.5?(
//                                         <Text style={styles.txtsize}>已回复</Text>
//                                     ):(
//                                         <Text style={{color:'red',fontSize:16}}>待回复</Text>
//                                     )
//                                 }
//                             </View>
//                         ))
//                     }
//                 </View>
//                 <View style={styles.bottom}>
//                     <TouchableOpacity
//                         style={styles.btn}
//                         onPress={this.getTitle}
//                     ><Text style={[styles.txt,styles.txtsize]}>上一页</Text>
//                     </TouchableOpacity>
//                     <Text style={styles.txtsize}>第{this.state.page}页/共5页</Text>
//                     <TouchableOpacity
//                         style={styles.btn}
//                         onPress={this.getNextPage}
//                     >
//                         <Text style={[styles.txt,styles.txtsize]}>下一页</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         )
//     }
// }

// const styles=StyleSheet.create({
//     bottom:{
//         height:50,
//         marginTop:20,
//         flexDirection:"row",
//         justifyContent:'space-around',
//         alignItems:'center',
//     },
//     content:{
//         width:'100%',
//         height:'78%',
//         padding:15,
//         // backgroundColor:'pink',
//         overflow:"hidden",
//         // flexDirection:'row',
//     },
//     showtxt:{
//         width:'50%',
//         lineHeight:50,
//     },
//     txtsize:{
//         fontSize:16
//     },  
//     time:{
//         // fontSize:16,
//         marginLeft:'15%',
//         marginRight:'5%'
//     },
//     btn:{
//         width:"30%",
//         height:40,
//         borderRadius:20,
//         alignItems:'center',
//         justifyContent:'center',
//         backgroundColor:"#f23030"
//     },
//     txt:{
//         color:'#fff',
//         // fontSize:16
//     }
// })