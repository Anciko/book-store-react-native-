import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

/**
 * Themed components
 */
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.fs18}>Contact</ThemedText>

      <Link href="/" style={{ borderBottomWidth: 1 }}>
          <ThemedText>Back To Home</ThemedText>
      </Link>
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