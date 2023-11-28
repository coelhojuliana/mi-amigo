// import Main from './src/screens/rotas';
import DetalhesPet from "./src/screens/detalhespet/detalhespet"
import { PaperProvider } from "react-native-paper"

export default function App() {
  return (
      // <Main/>
      <PaperProvider>
        <DetalhesPet/>
      </PaperProvider>
  )
}
