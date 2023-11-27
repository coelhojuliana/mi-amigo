import { View, Text, Pressable, ScrollView } from "react-native"

import estilos from "../css_geral"
import estiloConversas from "./conversas_css"

const Conversas = () => {
    return (
        <ScrollView>
            <View style={estiloConversas.tela}>
                <Pressable style={estiloConversas.containerConversas}>
                    <View style={estiloConversas.imagem}></View>
                    <View style={{ width: 244, marginRight: 25 }}>
                        <Text style={estilos.titulo}>Nome aqui</Text>
                        <Text style={estilos.textoExplicativo}>Nome aqui</Text>
                    </View>
                    <View style={estiloConversas.numero}></View>
                </Pressable>
                <Pressable style={estiloConversas.containerConversas}>
                    <View style={estiloConversas.imagem}></View>
                    <View style={{ width: 244, marginRight: 25 }}>
                        <Text style={estilos.titulo}>Nome aqui</Text>
                        <Text style={estilos.textoExplicativo}>Nome aqui</Text>
                    </View>
                    <View style={estiloConversas.numero}></View>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default Conversas