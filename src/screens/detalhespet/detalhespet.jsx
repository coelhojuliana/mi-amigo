import { View, Text, TextInput, Pressable } from "react-native";

import estilos from "../css_geral";
import estiloDetalhesPet from "./detalhespet_css";
import { useState } from "react";

const DetalhesPet = () => {
    const [detalhes, setDetalhes] = useState("detalhes aqui")
    return (
        <View style={estiloDetalhesPet.tela}>
            <View style={{ width: "100%", height: 252, marginBottom: 40, backgroundColor: "gray" }}></View>
            <View style={{ width: 382 }}>
                <View style={estilos.containerTexto}>
                    <Text style={estilos.titulo}>Nome, idade</Text>
                </View>
                <TextInput
                    style={[estilos.inputMaior, { width: 382, height: 100, color: "black" }]}
                    defaultValue={detalhes}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(textodigitado) => setDetalhes(textodigitado)}
                />
                <View>
                    <View style={estilos.containerTexto}>
                        <Text style={estilos.titulo}>Informações do Pet</Text>
                    </View>
                    <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Espécie:</Text>
                    <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Raça:</Text>
                    <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Sexo:</Text>
                    <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Porte estimado:</Text>
                    <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Vacinado: </Text>
                    <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Vermificação:</Text>
                    <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Cuidados especiais:</Text>
                    <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Castrado:  </Text>
                    <View style={estilos.containerTexto}>
                        <Text style={estilos.titulo}>Pet de:</Text>
                    </View>
                </View>
            </View>
            <Pressable style={estilos.botao}>
                <Text style={estilos.textoBotao}>Quero Adotar</Text>
            </Pressable>
        </View>
    )
}

export default DetalhesPet