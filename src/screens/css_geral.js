import { StyleSheet } from "react-native";

// Botões
const estilos = StyleSheet.create({
    botao:{
        marginBottom: 20,
        width: 300,
        height: 60,
        borderRadius: 20,
        backgroundColor: "#E06C2D",
        justifyContent: "center"
    },
    textoBotao:{
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#fff"
    },
    containerInputs:{
        marginBottom: 20
    },
    input:{
        fontSize: 20,
        fontWeight: "500",
        color: "#9B9B9B",
        width: 300, 
        height: 60, 
        borderWidth: 1, 
        borderColor: "#9B9B9B",
        // backgroundColor: "gray", 
        padding: 10, 
        borderRadius: 10, 
        marginBottom: 20
    },
    select:{fontSize: 20, height:60, color:"#9B9B9B", padding: 10, borderWidth: 2, 
    borderColor: "#9B9B9B", borderRadius: 10, 
    marginBottom: 20, placeholder: "Selecione um"}
})

export default estilos