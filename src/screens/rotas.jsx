import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./login/login";
import PaginaInicial from "./pagina_inicial/pagina_inicial";

const Stack = createNativeStackNavigator()

const Main = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Pagina Inicial">
                <Stack.Screen name="Pagina Inicial" component={PaginaInicial}/>
                <Stack.Screen name="Login" component={Login}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main