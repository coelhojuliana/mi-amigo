import { TextInput, View, Pressable, Text, Image } from "react-native"
import { useState } from "react"

import estilos from "../css_geral"
import estiloLogin from "./login_css"

import logo from "./../../../assets/logo.png"

const Login = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return(
        <View style={estiloLogin.paginaLogin}>
            {/* <View style={{ width: 100, height: 100, backgroundColor: "gray", marginBottom: 40 }}>Logo</View> */}
            <Image
                source={logo}
                style={{marginBottom: 40}}

            />
            <View style={estilos.containerInputs}>
                <TextInput
                    style={estilos.input}
                    placeholder="E-mail"
                    defaultValue={email}
                    onChangeText={(textodigitado)=>setEmail(textodigitado)}
                />
                 <TextInput
                    style={estilos.input}
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