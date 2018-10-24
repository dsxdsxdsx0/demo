/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Navigator
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Popular from './Popular'

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tb_popular',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_popular'}
                        selectedTitleStyle={{color:'#2196F3'}}
                        title="最热"
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_polular.png')}/>}
                        renderSelectedIcon={() =><Image style={[styles.image,{tintColor:'#2196F3'}]} source={require('../../res/images/ic_polular.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tb_popular'})}>
                        <Popular/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_trending'}
                        title="趋势"
                        selectedTitleStyle={{color:'#2196F3'}}
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')}/>}
                        renderSelectedIcon={() =><Image style={[styles.image,{tintColor:'#2196F3'}]} source={require('../../res/images/ic_trending.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tb_trending'})}>
                        <View style={{backgroundColor: '#2196F3',flex:1}}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_favorite'}
                        title="收藏"
                        selectedTitleStyle={{color:'#2196F3'}}
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_favorite.png')}/>}
                        renderSelectedIcon={() =><Image style={[styles.image,{tintColor:'#2196F3'}]} source={require('../../res/images/ic_favorite.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tb_favorite'})}>
                        <View style={{backgroundColor: '#2196F3',flex:1}}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_my'}
                        title="我的"
                        selectedTitleStyle={{color:'#2196F3'}}
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_my.png')}/>}
                        renderSelectedIcon={() =><Image style={[styles.image,{tintColor:'#2196F3'}]} source={require('../../res/images/ic_my.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tb_my'})}>
                        <View style={{backgroundColor: 'blue',flex:1}}></View>
                    </TabNavigator.Item>
                </TabNavigator>
                {/*<Navigator*/}
                {/*initialRoute={{*/}
                {/*component: Boy,*/}
                {/*}}*/}
                {/*renderScene={(route, navigator)=> {*/}
                {/*let Component=route.component;*/}
                {/*return <Component navigator={navigator} {...route.params}/>;*/}
                {/*}}*/}
                {/*/>*/}


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    image: {
        height: 22,
        width: 22,
    }

});
