import { StyleSheet, Image, useColorScheme } from 'react-native';

import DarkLogo from "../assets/images/favicon.png";
import LightLogo from "../assets/images/react-logo.png";

const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme();
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo;
    
    return (
        <Image source={logo} {...props} />
    )
}

export default ThemedLogo

const styles = StyleSheet.create({})