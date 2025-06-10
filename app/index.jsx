import { Text, View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Logo from "../assets/images/react-logo.png";

/**
 * Themed components
 */
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import ThemedLogo from "../components/ThemedLogo";

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <ThemedText title={true} style={[styles.heading, { marginTop: 5 }]}>Home Page</ThemedText>
      <View style={styles.mt10}>
        <Link href="/about" style={styles.link}>
          <ThemedText>About Page</ThemedText>
        </Link>
        <Link href="/contact" style={styles.link}>
          <ThemedText>Contact Page</ThemedText>
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