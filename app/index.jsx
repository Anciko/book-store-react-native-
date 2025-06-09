import { Text, View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Logo from "../assets/images/react-logo.png";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <Image source={Logo}></Image>
      <ThemedText style={[styles.heading, { marginTop: 5 }]}>Home Page</ThemedText>

      <View style={styles.mt10}>
        <Link href="/about" style={styles.link}>
          <ThemedText>About</ThemedText>
        </Link>
        <Link href="/contact" style={styles.link}>
            <ThemedText>Contact</ThemedText>
        </Link>
      </View>
    </ThemedView>
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