"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
var react_1 = __importDefault(require("react"));
var native_1 = require("@react-navigation/native");
var native_stack_1 = require("@react-navigation/native-stack");
var react_native_1 = require("react-native");
var home_1 = require("./components/home");
var login_1 = require("./components/login");
var config = {
    screens: {
        Login: 'Login',
        Home: 'Home/:userId'
    }
};
var linking = {
    prefixes: [],
    config: config
};
var App = function () {
    var Stack = (0, native_stack_1.createNativeStackNavigator)();
    return (react_1.default.createElement(native_1.NavigationContainer, { linking: linking, fallback: react_1.default.createElement(react_native_1.Text, null, "Loading...") },
        react_1.default.createElement(Stack.Navigator, null,
            react_1.default.createElement(Stack.Screen, { name: "Login", component: login_1.LoginScreen }),
            react_1.default.createElement(Stack.Screen, { name: "Home", component: home_1.HomeScreen }))));
};
exports.App = App;
