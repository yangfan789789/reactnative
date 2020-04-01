import React, { useState, useEffect } from 'react';
import { Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions } from "react-native-router-flux";
import { Grid, Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  BackHandler,
  ToastAndroid,
  AsyncStorage,
} from 'react-native';
import Home from './src/home/Home';
import Car from './src/car/Car';
import Shop from './src/shop/Shop';
import Person from './src/people/Person';
import Mypublish from './components/Mypublish';
import SwiperPage from './src/common/SwiperPage';
import Login from './src/common/Login';
import Sign from './src/common/Sign';



console.disableYellowBox = true;

const App = () => {

  let [isLogin, setLogin] = useState(false);
  let [isSign, setSign] = useState(true);
  let [isInstall, setInstall] = useState(true);

  let now = 0;
  let init = () => {
    // AsyncStorage.removeItem('isInstall')
    AsyncStorage.getItem('isInstall')
      .then(res => {
        console.log('isinstall', res)
        if (res) {
          setInstall(false);
        }
      })
    // AsyncStorage.removeItem('user')
    AsyncStorage.getItem('user')
      .then(res => {
        let user = JSON.parse(res)
        console.log(user)
        if (!user) {
          SplashScreen.hide();
        }
        if (user && user.token) {
          setLogin(true);
          SplashScreen.hide();
        }
      })
    // AsyncStorage.removeItem('usersign')
    AsyncStorage.getItem('usersign')
      .then(res => {
        let usersign = JSON.parse(res)
        console.log(usersign)
        if (!usersign) {
          SplashScreen.hide();
        }
        if (usersign && usersign.token) {
          setSign(true);
          SplashScreen.hide();
        }
      })
  }
  useEffect(() => {
    init();
  }, [])
  let afterInstall = () => {
    console.log('after install')
    setInstall(false)
  }
  if (isInstall) {
    return <View style={{ flex: 1 }}>
      <SwiperPage afterInstall={afterInstall} />
    </View>
  }





  return (
    <Router
      backAndroidHandler={() => {
        if(Actions.currentScene == 'login2'){
          if (new Date().getTime() - now < 2000) {
            BackHandler.exitApp();
          } else {
            ToastAndroid.show('确定要退出吗', 100);
            now = new Date().getTime();
            return true;
          }
        }else if(Actions.currentScene != 'home'){
          Actions.pop();
          return true;
        }else {
          if (new Date().getTime() - now < 2000) {
            BackHandler.exitApp();
          } else {
            ToastAndroid.show('确定要退出吗', 100);
            now = new Date().getTime();
            return true;
          }
        }

      }}
    >

      <Overlay>
        <Modal key="modal" hideNavBar>
          <Lightbox key="lightbox">
            <Scene key="root" hideNavBar tabBarPosition="bottom">
              <Tabs
                key="tabbar"
                hideNavBar
                activeTintColor='red'
                inactiveTintColor='blue'
              >

                <Scene
                  key="homePage"
                  hideNavBar
                  title="首页"
                  initial={true}
                  icon={
                    ({ focused }) => <Icon name='home' color={focused ? 'red' : 'blue'} />
                  }
                >
                  <Scene key='home' 
										component={Home}
									/>
                </Scene>
                <Scene
                  key="shop"
                  component={Shop}
                  title="商品分类"
                  hideNavBar
                  titleStyle={{ flex: 1, textAlign: 'center', color: 'red' }}
                  icon={
                    ({ focused }) => <Icon name='appstore' color={focused ? 'red' : 'blue'} />
                  }
                />
                <Scene
                  key="car"
                  component={Car}
                  hideNavBar
                  title="购物车"
                  titleStyle={{ flex: 1, textAlign: 'center', color: 'red' }}
                  icon={
                    ({ focused }) => <Icon name='shopping-cart' color={focused ? 'red' : 'blue'} />
                  }
                />
                <Scene
                  key="person"
                  title="个人中心"
                  icon={
                    ({ focused }) => <Icon name='user' color={focused ? 'red' : 'blue'} />
                  }
                >
                  <Scene
                    component={Person} hideNavBar
                  />
                  <Scene
                    key='Mypublish'
                    title='我的发布'
                    component={Mypublish}
                    titleStyle={{ flex: 1, color: '#fff', textAlign: 'center' }}
                    headerStyle={{ backgroundColor: '#f23030' }}
                    navBarButtonColor='#fff'
                  />
                </Scene>
              </Tabs>
            </Scene>

          </Lightbox>

          <Scene initial={!isLogin} key="login"  >
            <Scene
              component={Login} hideNavBar key='login2'
            />
            <Scene
              key='Sign'
              component={Sign}
              hideNavBar
            />
          </Scene>

          <Scene initial={!isSign} key="sign">
            <Scene
              component={Sign} hideNavBar
            />
            <Scene
              key='login'
              component={Login}
              hideNavBar
            />
          </Scene>
        </Modal>
      </Overlay>
    </Router>
  );
};

export default App;
