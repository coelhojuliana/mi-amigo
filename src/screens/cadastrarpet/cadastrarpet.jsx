import { View, Text, TextInput, Pressable, ScrollView } from "react-native"
import { useState } from "react"

import { Picker } from "@react-native-picker/picker";
import ImagePicker from "expo-image-picker"

import estilos from "../css_geral"
import estiloCadastrarPet from "./cadastrarpet_css"


const CadastrarPet = () => {
    const [nome, setNome] = useState("")
    const [raca, setRaca] = useState("")
    const [descricao, setDescricao] = useState("")

    return (
        <ScrollView>
            <View style={estiloCadastrarPet.tela}>
                <View style={estiloCadastrarPet.containerImagem}></View>
                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Nome</Text>
                </View>
                <TextInput
                    style={[estilos.input, estiloCadastrarPet.inputs]}
                    placeholder="Nome"
                    defaultValue={nome}
                    onChangeText={(textodigitado) => setNome(textodigitado)}
                />
                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Espécie</Text>
                </View>
                <View style={estiloCadastrarPet.componentBotoesinhos}>
                    <Pressable style={[estilos.botaoMenor, estiloCadastrarPet.botaoMenor, { marginRight: 14, marginBottom: 0 }]}>
                        <Text style={estilos.textoAlternativoBotao}>Cachorro</Text>
                    </Pressable>
                    <Pressable style={[estilos.botaoMenor, estiloCadastrarPet.botaoMenor]}>
                        <Text style={estilos.textoAlternativoBotao}>Gato</Text>
                    </Pressable>
                </View>
                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Raça</Text>
                </View>
                <TextInput
                    style={[estilos.input, estiloCadastrarPet.inputs]}
                    placeholder="Raca"
                    defaultValue={raca}
                    onChangeText={(textodigitado) => setRaca(textodigitado)}
                />
                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Sexo</Text>
                </View>
                <View style={estiloCadastrarPet.componentBotoesinhos}>
                    <Pressable style={[estilos.botaoMenor, estiloCadastrarPet.botaoMenor, { marginRight: 14, marginBottom: 0 }]}>
                        <Text style={estilos.textoAlternativoBotao}>Fêmea</Text>
                    </Pressable>
                    <Pressable style={[estilos.botaoMenor, estiloCadastrarPet.botaoMenor]}>
                        <Text style={estilos.textoAlternativoBotao}>Macho</Text>
                    </Pressable>
                </View>
                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Idade Estimada</Text>
                </View>
                <Picker
                    style={[estilos.select, { width: 382, marginBottom: 30 }]}
                // placeholder={{label:"Selecione uma opção"}}
                >
                    <Picker.Item label="1 ano" value="um ano" />
                    <Picker.Item label="2 anos" value="dois anos" />
                    <Picker.Item label="3 anos" value="tres anos" />
                </Picker>
                <View style={estilos.botaoToggle}>
                    <Text style={[estilos.textoGeral, { color: "#5E5E5E" }]}>Castrado</Text>
                </View>
                <View style={estilos.botaoToggle}>
                    <Text style={[estilos.textoGeral, { color: "#5E5E5E" }]}>Vacinado</Text>
                </View>
                <View style={estilos.botaoToggle}>
                    <Text style={[estilos.textoGeral, { color: "#5E5E5E" }]}>Vermifugado</Text>
                </View>
                <View style={estilos.botaoToggle}>
                    <Text style={[estilos.textoGeral, { color: "#5E5E5E" }]}>Cuidados especiais</Text>
                </View>

                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Porte</Text>
                </View>
                <Picker
                    style={[estilos.select, { width: 382 }]}
                // placeholder={{label:"Selecione uma opção"}}
                >
                    <Picker.Item label="Mini" value="um ano" />
                    <Picker.Item label="Pequenos" value="dois anos" />
                    <Picker.Item label="Medio" value="tres anos" />
                    <Picker.Item label="Grande" value="tres anos" />
                    <Picker.Item label="Extra Grande" value="tres anos" />
                </Picker>
                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Descrição</Text>
                </View>
                <TextInput
                    style={[estilos.inputMaior, { width: 384, marginBottom: 40 }]}
                    placeholder="Conte um pouco mais sobre o pet"
                    multiline={true}
                    numberOfLines={4}
                    defaultValue={descricao}
                    onChangeText={(textodigitado) => setDescricao(textodigitado)}
                />
                <Pressable style={estilos.botao}>
                    <Text style={estilos.textoBotao}>Cadastrar</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default CadastrarPet