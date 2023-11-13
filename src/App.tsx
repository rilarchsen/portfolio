import {ThemeProvider} from "./contexts/useTheme.tsx";
import MainPage from "@pages/MainPage.tsx";

function App() {

  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  )
}

export default App
