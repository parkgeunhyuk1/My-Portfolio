import { AnimatePresence } from "framer-motion"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import AboutPage from "./components/AboutPage"
import BlogPage from "./components/BlogPage"
import Main from "./components/Main"
import MySkill from "./components/MySkill"
import { DarkTheme, LightTheme } from "./components/Themes"
import WorkPage from "./components/WorkPage"
import GlobalStyle from "./globalStyles"
import SoundBar from "./subComponents/SoundBar"

function App() {
  const location=useLocation();
  return <>
  <GlobalStyle/>
  <ThemeProvider theme={LightTheme}>
    <SoundBar/>
  <AnimatePresence exitBeforeEnter>
  <Routes>
  <Route path="/" element={<Main/>}/>
  <Route path="/about" element={<AboutPage/>}/>
  <Route path="/blog" element={<BlogPage/>}/>
  <Route path="/work" element={<WorkPage/>}/>
  <Route path="/skills" element={<MySkill/>}/>
  </Routes>
  </AnimatePresence>
  </ThemeProvider>
    
    </>
    
}

export default App