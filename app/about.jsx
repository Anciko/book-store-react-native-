import { StyleSheet, Text, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'
import ThemedView from "../components/ThemedView"

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={[styles.fs18, {color: theme.text}]}>About Page</Text>

      <Link href="/" style={{ borderBottomWidth: 1 }}>Back To Home</Link>
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