/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function DetailScreen({navigation}) {
  return (
    <View style={styles.layoutStyle}>
      <View style={styles.buttonStyle}>
        {/* // <Text children="Detail Screen" />
        <Button
          title="상세화면 재진입"
          onPress={() => navigation.push('DETAIL')}
        />
        <Button title="홈으로" onPress={() => navigation.navigate('HOME')} /> */}
        <Button title="설정화면"onPress={() => navigation.navigate('SETTING')}/>
        <Button title="홈으로" onPress={() => navigation.navigate('HOME')} />
        <Button title="뒤로" onPress={() => navigation.goBack()} />
        {/* <Button title="최초화면으로" onPress={() => navigation.popToTop()} /> */}
      </View>
      <View style={styles.mainStyle}>
        <Text children="Detail Layout" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  layoutStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
  },
  mainStyle: {
    flex: 1,
    backgroundColor:'#cfcfcf',
  },
});
export default DetailScreen;
