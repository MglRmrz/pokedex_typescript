import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RoutesParamsType, RoutesType } from "../types/routesParams.type";

export interface IScreen {
    // Es importante colocar el prop de la navegación, ayuda mucho a la hora de escribir código
    navigation: StackNavigationProp<RoutesParamsType, RoutesType>,
    route: RouteProp<RoutesParamsType, RoutesType>
}