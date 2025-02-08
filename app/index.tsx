import { StyleSheet,Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>

      <Image source={require('../assets/images/intro.png')} />
      <Text>Let’s meeting new people around you</Text>     
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
