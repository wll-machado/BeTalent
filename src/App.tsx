import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import Home from "./pages/home"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
     <GlobalStyle/> 
     <Home/>
    </ThemeProvider>
  )
}

export default App
