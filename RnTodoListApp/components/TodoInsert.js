/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';

const TodoInsert = ({onAddTodo}) => {
  const [newTodoItem, setNewTodoItem] = useState('');

  const handleTodoInput = (newTodo) => {
    setNewTodoItem(newTodo);
  };

  const handleAddTodo = (e) => {
    if (newTodoItem === '') {
      return;
    }

    console.log(`newTodoItem => ${newTodoItem}`);
    //alert(newTodoItem);
    onAddTodo(newTodoItem.replace('\n', ' '));
    setNewTodoItem('');
  };

  // const handleKeyPress = (e) => {
  //     if(e.nativeEvent.key === 'Enter'){
  //         handleAddTodo();
  //     }
  // }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={'할일 입력 ㄱ'}
        autoCorrect={false}
        value={newTodoItem}
        onChangeText={handleTodoInput}
      />
      <View style={styles.button}>
        <Button title={'ADD'} onPress={handleAddTodo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    // padding: 20,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottomColor: '#5e5e5e', //회색
    borderBottomWidth: 1, //밑줄그었음
    fontSize: 24,
    width: '65%',
    // margin: 20,
  },
  button: {
    marginRight: 15,
  },
});

export default TodoInsert;
