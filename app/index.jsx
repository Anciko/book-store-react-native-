import { Text, View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Logo from "../assets/images/react-logo.png";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={Logo}></Image>
      <Text style={[styles.heading, { marginTop: 5 }]}>Home Page</Text>

      <View style={styles.mt10}>
        <Link href="/about" style={styles.link}>About</Link>
        <Link href="/contact" style={styles.link}>Contact</Link>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    fontSize: 20
  },
  mt10: {
    marginTop: 10
  },
  link: {
    borderBottomWidth: 1,
    marginTop: 10
  }
});