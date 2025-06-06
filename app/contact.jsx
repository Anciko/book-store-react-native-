import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.fs18}>Contact</Text>

      <Link href="/" style={{ borderBottomWidth: 1 }}>Back To Home</Link>
    </ThemedView>
  )
}

export default Contact

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