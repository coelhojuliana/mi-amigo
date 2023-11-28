import { View, Text, Image } from "react-native";
import { Pressable } from "react-native";

import estilos from "../css_geral";
import estiloPaginaInicial from "./pagina_inicial-css";

import logo from "./../../../assets/logo.png"

const PaginaInicial = ({navigation}) => {
    return (
        <View style={estiloPaginaInicial.paginaLogin}>
            {/* <View style={{ width: 100, height: 100, backgroundColor: "gray", marginTop: 70 }}>Logo</View> */}
            <Image
                source={logo}
                style={{marginTop: 70}}

            />
            <View style={estiloPaginaInicial.componenteBotoes}>
                <Pressable style={estilos.botao} onPress={() => { navigation.navigate("Login") }}>
                    <Text style={estilos.textoBotao}>Login</Text>
                </Pressable>
                <Pressable style={estilos.botao} onPress={() => { navigation.navigate("Cadastre-se") }}>
                    <Text style={estilos.textoBotao}>Cadastre-se</Text>
                </Pressable>
                <Pressable style={estilos.botao} onPress={() => { navigation.navigate("Home") }}>
                    <Text style={estilos.textoBotao}>Home</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default PaginaInicial