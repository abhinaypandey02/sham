import { StyleSheet, Text, SafeAreaView, Button, Alert } from "react-native";

export default function LobbyScreen({ navigation }: any) {
  return (
    <SafeAreaView>
      <Button
        title="Replace Welcome"
        onPress={() => {
          navigation.replace("Welcome");
        }}
      />
      <Button
        title="Navigate Welcome"
        onPress={() => {
          navigation.navigate("Welcome");
        }}
      />
      <Button
        title="Replace Lobby2"
        onPress={() => {
          navigation.replace("Lobby2");
        }}
      />
      <Button
        title="Navigate Lobby2"
        onPress={() => {
          navigation.navigate("Lobby2");
        }}
      />
      <Text>Lobby</Text>
    </SafeAreaView>
  );
}
