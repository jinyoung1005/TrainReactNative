/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CounterList from './CounterList';
import PropTypes from 'prop-types';

const App = ({counter, handleIncrement, handleDecrement, handleAddCounter, handleRemoveCounter}) => {
    return (
        <ScrollView style={style.scroll}>
            <View style={style.counterButton}>
                <Button title="카운터 추가" onPress={handleAddCounter} />
                <Text children="   " />
                <Button title="카운터 삭제" onPress={handleRemoveCounter} />
            </View>
            <View>
                <CounterList
                    counter={counter}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement} />
            </View>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    scroll:{ flex:1, width:'100%', backgroundColor: '#e9e9e9', paddingTop:'10%'},
    counterButton: {flexDirection:'row', width: '100%', alignItems: 'center',justifyContent:'center'},
});

App.propTypes = {
    counter:PropTypes.arrayOf(PropTypes.shape({
        counterNum:PropTypes.number,
    })),
    handleIncrement:PropTypes.func,
    handleDecrement:PropTypes.func,
    handleAddCounter:PropTypes.func,
    handleRemoveCounter:PropTypes.func,
};

App.defaultProps = {
    counter: [],
    handleIncrement: () => console.warn('undefined handleIncrement'),
    handleDecrement: () => console.warn('undefined handleDecrement'),
    handleAddCounter: () => console.warn('undefined handleAddCounter'),
    handleRemoveCounter: () => console.warn('undefined handleRemoveCounter'),
};

export default App;
