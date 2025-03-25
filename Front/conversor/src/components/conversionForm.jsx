import { useState } from "react";
import "../App.css"

const ConversionForm = ({ onConvert, loading, error, downloadLink }) => {
  const [url, setUrl] = useState("");

  const handleConvert = () => {
    if (!url) {
      alert("Por favor, insira uma URL válida!");
      return;
    }
    onConvert(url);
  };

  return (
    <div className="container">
      <div className="titles">
        <div className="title">
          <h1 className="titleYoutube">YouTube</h1>
          <h1>para MP3</h1>
        </div>
        <div className="desc">
          <p>O melhor conversor do Brasil!</p>
        </div>
      </div>
      
    <div className="box-main">
      <div className="box-input-main">
        <p className="desc-url-main">Insira a URL e escolha o formato!</p>
        <input
          className="inputUrl-main"
          type="url"
          placeholder="https://www.youtube.com/watch?v=..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <div className="button-main">
        <button className="button-convert-main" onClick={handleConvert} disabled={loading}>
          {loading ? <div className="spinner"></div> : <div className="button-converter-main">Converter</div>}
        </button>
        </div>
      </div>

      {error && <p className="error">{error}</p>}

      {downloadLink && (
        <div className="download-section">
          <p className="convert">Conversão concluída!!! 🥳🎉</p>
          <a className="buttonDownload" href={downloadLink} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        </div>
      )}
    </div>
  );
};

export default ConversionForm;