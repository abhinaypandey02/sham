import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import useSocket from '../../hooks/socket';

export default function WelcomeScreen({navigation}:any){
  const socket=useSocket();
  useLayoutEffect(()=>{
    socket?.emit("createRoom")
    socket?.on("roomCode",(roomCode:string)=>{
      Alert.alert(roomCode)
    })
  },[socket])
    return (
        <View style={styles.container}>
          <Text>{socket?.connected?"CONNECTED":"DISCONNECTED"}</Text>
          <Button title="Replace Lobby" onPress={()=>{navigation.replace("Lobby")}}/>
          <Button title="Navigate Lobby" onPress={()=>{navigation.navigate("Lobby")}}/>
          <Button title="Replace Lobby2" onPress={()=>{navigation.replace("Lobby2")}}/>
          <Button title="Navigate Lobby2" onPress={()=>{navigation.navigate("Lobby2")}}/>
          <StatusBar style="auto" />
        </View>
      ); 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });