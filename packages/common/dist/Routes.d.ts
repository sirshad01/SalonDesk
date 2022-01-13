import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
export declare type Routes = {
    Login: undefined;
};
declare type LoginScreenRouteProp = RouteProp<Routes, 'Login'>;
declare type LoginScreenNavigationProp = NativeStackNavigationProp<Routes, 'Login'>;
export declare type LoginRouteProps = {
    route: LoginScreenRouteProp;
    navigation: LoginScreenNavigationProp;
};
export {};
