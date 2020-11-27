/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component,useState} from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar, View} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () =>{
  // todos:{id:1,textValue:'todoitem',checked:true/false}
  const [todos,setTodos] = useState([]);

  //할일 목록추가
  const addTodo = (text) =>{
    setTodos([
      ...todos,
      {id: todos.length + 1, textValue:text,checked:false},
    ]);
    //Axios DB처리 //INSERT API 호출
    //console.log(`App / toggle id => ${id}`);
  };

  function onRemove(id) {
    //alert(id);
    console.log(`App / delete id => ${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
    //Axios DB처리 //DELETE API 호출

  }

  const onToggle = (id) => {
    console.log(`App / delete id => ${id}`);
    setTodos(todos.map( (todo) =>
      todo.id === id ? {...todo, checked: !todo.checked} : todo
      ),
    );
    console.log(todos);
  };

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Text children="ㅎㅇㅎㅇ" style={styles.appTitle} />
          <View style={styles.card}>
            <TodoInsert onAddTodo={addTodo} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
          </View>
        </SafeAreaView>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3142e8',
  },
  appTitle: {
    color: '#ffffff',
    fontSize: 36,
    //fontFamily: italic,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  card : {
    backgroundColor: '#ffffff',
    marginLeft: 10,
    marginRight: 10,
    flex: 1, //입력창이 가득차게 됨
    borderTopLeftRadius: 10, //좌측상단 둥글게해줌
    borderTopRightRadius: 10, //우측상단 둥글게해줌
  },

  input : {
    padding: 20,
    borderBottomColor: '#9E9E9E', //회색
    borderBottomWidth: 1, //밑줄그었음
    fontSize: 24,
    margin: 20,
    width: '75%',
  },
});

export default App;
