import { View, Text, Pressable } from "react-native"

import estilos from "../css_geral"
import estiloMeusPets from "./meuspets_css"
import { ScrollView } from "react-native-web"

const MeusPets = () => {
    return (
        <ScrollView>
            <View style={estiloMeusPets.tela}>
                <View>
                    <Pressable style={[estilos.botao, estiloMeusPets.botao]}>
                        <Text style={estilos.textoBotao}>Cadastrar pet para adoção</Text>
                    </Pressable>
                </View>
                <View style={estiloMeusPets.componentBotoesinhos}>
                    <Pressable style={[estilos.botaoMenor, estiloMeusPets.botaoMenor, {marginRight: 14}]}>
                        <Text style={estilos.textoAlternativoBotao}>Disponiveis</Text>
                    </Pressable>
                    <Pressable style={[estilos.botaoMenor, estiloMeusPets.botaoMenor]}>
                        <Text style={estilos.textoAlternativoBotao}>Adotados</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

export default MeusPets