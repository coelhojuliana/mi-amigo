import { View, Text, TextInput, Pressable } from "react-native";

import { useState } from "react";

import estilos from "../css_geral";
import estiloperfil from "./perfil_css";

const PerfilOng = () => {
    const [nome, setNome] = useState("")
    const [endereco, setEndereco] = useState("")
    const [numero, setNumero] = useState("")
    const [descricao, setDescricao] = useState("")


    return (
        <View style={estiloperfil.pagina}>
            <View style={estilos.containerTexto}>
                <Text style={estilos.titulo}>Dados da Organização</Text>
            </View>
            <View>
                <View>
                    <TextInput
                        style={estilos.input}
                        placeholder="Nome da ONG"
                        defaultValue={nome}
                        onChangeText={(textodigitado) => setNome(textodigitado)}
                    />
                    <TextInput
                        style={estilos.input}
                        placeholder="Endereço"
                        defaultValue={endereco}
                        onChangeText={(textodigitado) => setEndereco(textodigitado)}
                    />
                    <TextInput
                        style={estilos.input}
                        placeholder="WhatsApp"
                        defaultValue={numero}
                        onChangeText={(textodigitado) => setNumero(textodigitado)}
                    />
                </View>
            </View>
            <View style={estilos.containerTexto}>
                <Text style={estilos.titulo}>Detalhes</Text>
            </View>
            <TextInput
                style={[estilos.inputMaior, { marginBottom: 40 }]}
                placeholder="Conte aqui um pouco sobre vocÊ"
                defaultValue={descricao}
                onChangeText={(textodigitado) => setDescricao(textodigitado)}
            />
            <Pressable style={estilos.botao}>
                <Text style={estilos.textoBotao}>Salvar</Text>
            </Pressable>
        </View>
    )
}

export default PerfilOng