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
var login_1 = require("./components/login");
var home_1 = require("./components/home");
var App = function () {
    var Stack = (0, native_stack_1.createNativeStackNavigator)();
    return (react_1.default.createElement(native_1.NavigationContainer, null,
        react_1.default.createElement(Stack.Navigator, { initialRouteName: "Login" },
            react_1.default.createElement(Stack.Screen, { name: "Login", component: login_1.LoginScreen }),
            react_1.default.createElement(Stack.Screen, { name: "Home", component: home_1.HomeScreen }))));
};
exports.App = App;
