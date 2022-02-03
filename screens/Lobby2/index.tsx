import { StyleSheet, Text, SafeAreaView, Button, Alert } from "react-native";

export default function Lobby2Screen({ navigation }: any) {
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
        title="Replace Lobby"
        onPress={() => {
          navigation.replace("Lobby");
        }}
      />
      <Button
        title="Navigate Lobby"
        onPress={() => {
          navigation.navigate("Lobby");
        }}
      />
      <Text>Lobby2</Text>
    </SafeAreaView>
  );
}
