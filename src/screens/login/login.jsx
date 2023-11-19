import { TextInput, View, Pressable, Text } from "react-native"
import { useState } from "react"

import estilos from "../css_geral"
import estiloLogin from "./login_css"

const Login = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return(
        <View style={estiloLogin.paginaLogin}>
            <View style={{ width: 100, height: 100, backgroundColor: "gray", marginBottom: 40 }}>Logo</View>
            <View style={estiloLogin.containerInputs}>
                <TextInput
                    style={estiloLogin.input}
                    placeholder="E-mail"
                    defaultValue={email}
                    onChangeText={(textodigitado)=>setEmail(textodigitado)}
                />
                 <TextInput
                    style={estiloLogin.input}
                    placeholder="Senha"
                    defaultValue={senha}
                    onChangeText={(textodigitado)=>setSenha(textodigitado)}
                />
            </View>
            <Pressable style={estilos.botao}>
                <Text style={estilos.textoBotao}>Login</Text>
            </Pressable>
            <Text style={estiloLogin.textoEsqueciSenha}>Esqueci minha senha</Text>
        </View>
    )
}

export default Login