import { useContext } from "react"
import { ThemeContextProvider, themeContext } from "@/context/ExampleContext"


export default function Home() {

  return (
    <ThemeContextProvider>
      <Component />
    </ThemeContextProvider>
  )
} 

const Component = () => { 
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <>
      <h1>{theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}