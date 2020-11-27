/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class CustomDrawer extends Component {
    constructor(props) {
        super(props);
        
        this.items=[
            {
                navOptionIcon: 'home',//아이콘이름
                navOptionName: 'HOME',//메뉴표시이름
                screenName: 'Home',//스크린 이름
            },{
                navOptionIcon: 'road', //아이콘이름
                navOptionName: 'DETAIL',//메뉴표시이름
                screenName: 'Detail',//스크린 이름
            },{
                navOptionIcon: 'gear', //아이콘이름
                navOptionName: 'SETTING',//메뉴표시이름
                screenName: 'Setting',//스크린 이름
            },
        ];
    }

    render(){
        return(
            <View style={style.drawer}>
               <Image
                    source={require('./images/cat2.png')} 
                    style={style.profile}/>
                <View style={style.menuGroup}>
                    {this.items.map((item, key) =>
                        <View key={key} style={style.menuItem}>
                            {/* <Text children={item.screenName} /> */}
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(item.screenName)}>
                                <View style={style.touch}>
                                    <Icon name={item.navOptionIcon} size={25} style={style.menuIcon} />
                                    <Text children={item.navOptionName} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    }
}

const style=StyleSheet.create({
    drawer:{backgroundColor:'#a9a9a9',alignItems:'baseline'},
    profile:{ width:'100%' , height:150, resizeMode: 'stretch'},
    touch:{ flexDirection: 'row', alignItems: 'center'},
    menuGroup:{backgroundColor: 'white' ,width: '100%'},
    menuItem:{paddingTop:10, paddingLeft:10},
    menuIcon:{paddingRight:5}
})

export default CustomDrawer;