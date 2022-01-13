


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import { RootStoreContext } from '../stores/RootStore';




interface LoginProps {

}

export const LoginScreen: React.FC<LoginProps> = observer(({ }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const rootStore = useContext(RootStoreContext);

    return (
        <View style={styles.container}>

            <Image style={styles.image} source={require('../../assets/SD_Logo.png')} />

            <StatusBar />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#704e33"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#704e33"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.login_text}>LOGIN</Text>
            </TouchableOpacity>
        </View>

    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },

    image: {
        marginBottom: 40,
        height: 300,
        width: 300
    },

    inputView: {
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        width: "70%",
        maxWidth: 400,
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        borderColor: "#704e33",
        borderWidth: 1
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 0,
        color: "#704e33",
        width: "100%",
        textAlign: "center"

    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
        color: "#704e33"
    },

    loginBtn: {
        width: "80%",
        maxWidth: 500,
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#e29e67",
        borderWidth: 1,
        borderColor: "#000000"


    },
    login_text: {
        color: '#000000'
    }
});


