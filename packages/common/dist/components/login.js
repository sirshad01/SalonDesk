"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginScreen = void 0;
var native_1 = require("@react-navigation/native");
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var RootStore_1 = require("../stores/RootStore");
exports.LoginScreen = (0, mobx_react_lite_1.observer)(function (_a) {
    var _b = (0, react_1.useState)(""), email = _b[0], setEmail = _b[1];
    var _c = (0, react_1.useState)(""), password = _c[0], setPassword = _c[1];
    var rootStore = (0, react_1.useContext)(RootStore_1.RootStoreContext);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Image, { style: styles.image, source: require('../../assets/SD_Logo.png') }),
        react_1.default.createElement(react_native_1.StatusBar, null),
        react_1.default.createElement(react_native_1.View, { style: styles.inputView },
            react_1.default.createElement(react_native_1.TextInput, { style: styles.TextInput, placeholder: "Email", placeholderTextColor: "#704e33", onChangeText: function (email) { return setEmail(email); } })),
        react_1.default.createElement(react_native_1.View, { style: styles.inputView },
            react_1.default.createElement(react_native_1.TextInput, { style: styles.TextInput, placeholder: "Password", placeholderTextColor: "#704e33", secureTextEntry: true, onChangeText: function (password) { return setPassword(password); } })),
        react_1.default.createElement(react_native_1.TouchableOpacity, null,
            react_1.default.createElement(react_native_1.Text, { style: styles.forgot_button }, "Forgot Password?")),
        react_1.default.createElement(native_1.Link, { style: styles.loginBtn, to: { screen: 'Home', params: { userId: '93792' } } },
            react_1.default.createElement(react_native_1.Text, { style: styles.login_text }, "LOGIN"))));
});
var styles = react_native_1.StyleSheet.create({
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
        borderColor: "#000000",
    },
    login_text: {
        color: '#000000'
    }
});
