import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={[styles.fs18, {color: theme.text}]}>About Page</Text>

      <Link href="/" style={{ borderBottomWidth: 1 }}>Back To Home</Link>
    </View>
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