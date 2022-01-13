import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type Routes = {
    Login: undefined
}
type LoginScreenRouteProp = RouteProp<Routes, 'Login'>;
type LoginScreenNavigationProp = NativeStackNavigationProp<Routes, 'Login'>;

export type LoginRouteProps = {
    route: LoginScreenRouteProp;
    navigation: LoginScreenNavigationProp
}