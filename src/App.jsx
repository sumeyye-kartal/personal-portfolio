import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import React, { useContext } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

function App() {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  return (
    <div>
      <ThemeProvider>
        <LanguageProvider>
          <main className="flex flex-col gap-20 items-center justify-center phone:gap-10">
            <Header />
            <Hero />
            <Skills />
            <Profile />
            <Projects />
            <Footer />
          </main>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
