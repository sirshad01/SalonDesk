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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeScreen = void 0;
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importDefault(require("react"));
var appointments_1 = require("./appointments");
var sales_1 = require("./sales");
var Tab = (0, bottom_tabs_1.createBottomTabNavigator)();
exports.HomeScreen = (0, mobx_react_lite_1.observer)(function (_a) {
    return (react_1.default.createElement(Tab.Navigator, null,
        react_1.default.createElement(Tab.Screen, { name: "Appointments", component: appointments_1.AppointmentScreen }),
        react_1.default.createElement(Tab.Screen, { name: "Sales", component: sales_1.SalesScreen })));
});
