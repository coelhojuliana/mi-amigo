import { View, Text } from "react-native";
import { Pressable } from "react-native";

import estilos from "../css_geral";

const Login = () => {
    return (
        <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ width: 100, height: 100, backgroundColor: "gray", marginTop: 70 }}>Logo</View>
            <View style={{ marginBottom: 70 }}>
                <Pressable style={estilos.botao} onPress={() => { console.log("clicou") }}>
                    <Text style={estilos.textoBotao}>Login</Text>
                </Pressable>
                <Pressable style={estilos.botao} onPress={() => { console.log("clicou") }}>
                    <Text style={estilos.textoBotao}>Cadastre-se</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login