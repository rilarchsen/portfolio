import Layout from "./partials/Layout.tsx";
import {ThemeProvider} from "./contexts/useTheme.tsx";

function App() {

  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  )
}

export default App
