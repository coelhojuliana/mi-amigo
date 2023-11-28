import {View, Text} from "react-native"
import { Pressable } from "react-native"
import { TextInput, SafeAreaView } from "react-native"
import {Card, Button} from "react-native-paper"

import estilos from "../css_geral"
import estiloHome from "./home_css"

const Home = ({navigation}) => {

    return(
        <View style={estiloHome.paginaHome}>
            <View style={{ width: "80%", height: 100, backgroundColor: "gray", marginTop: 70 }}>aaaaa</View>
            <SafeAreaView>
                <TextInput 
                style={estiloHome.inputSearchBar}
                placeholder="Barra de pesquisa"/>
            </SafeAreaView>
            <View style={estiloHome.componenteBotoes}>
                <Pressable style={estilos.botao} onPress={() => { navigation.navigate("Login") }}>
                    <Text style={estilos.textoBotao}>Login</Text>
                </Pressable>
                <Pressable style={estilos.botao} onPress={() => { console.log("clicou") }}>
                    <Text style={estilos.textoBotao}>Cadastre-se</Text>
                </Pressable>
            </View>
            <View style={estilos.contentCards}>
                
            </View>
        </View>
    )
}

export default Home