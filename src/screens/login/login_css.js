import { StyleSheet } from "react-native";

const estiloLogin = StyleSheet.create({
    paginaLogin: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    },
    containerInputs:{
        marginBottom: 20
    },
    input:{
        fontSize: 20, 
        width: 300, 
        height: 60, 
        borderWidth: 0, 
        backgroundColor: "gray", 
        outline: "none", 
        padding: 10, 
        borderRadius: 10, 
        marginBottom: 20
    },
    textoEsqueciSenha:{
        fontSize: 16, 
        textDecoration: "underline"
    }
})

export default estiloLogin