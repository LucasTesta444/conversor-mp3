// src/App.jsx
import { useState } from "react";
import Header from "./components/header/header";
import "./App.css";
import ParticlesConfetti from './components/particles/particlesConfetti';
import ConversionForm from './components/conversionForm';
import About from './components/about/about';
import Contact from './components/contact/contact';

function App() {
  const [downloadLink, setDownloadLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activePage, setActivePage] = useState("home");

  const handleConvert = async (url) => {
    setLoading(true);
    setError(null);
    setDownloadLink(null);

    try {
      const response = await fetch("/api/convert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, format: "mp3" }),
      });

      const data = await response.json();

      if (data.download_url) {
        setDownloadLink(data.download_url);
      } else {
        setError(data.error || "Erro ao converter o vídeo.");
      }
    } catch (error) {
      console.error("Erro na conversão:", error);
      setError("Erro ao processar a conversão. Tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="container">
      <Header onMenuClick={handleMenuClick}/>

      {activePage === "home" && (
        <ConversionForm
          onConvert={handleConvert}
          loading={loading}
          error={error}
          downloadLink={downloadLink}
        />
      )} {/* Pagina Home */}

      {activePage === "sobre" && <About />}  {/* Pagina Sobre */}
      {activePage === "contato" && <Contact />}  {/* Pagina Contato */}

      {downloadLink && <ParticlesConfetti />}
    </div>
  );
}

export default App;
