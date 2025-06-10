import { StyleSheet, Text, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'

/**
 * Themed components
 */
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView style={[styles.container, {backgroundColor: theme.background}]}>
      <ThemedText style={[styles.fs18, {color: theme.text}]}>About Page</ThemedText>

      <Link href="/" style={{ borderBottomWidth: 1 }}>
        <ThemedText>Back To Home</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fs18: {
    fontSize: 18
  }
})