import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css"

function Contact() {
    const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h86wqap",
        "template_geul8kt",
        form.current,
        "0aJejwJk7jGuYlIS9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Email enviado com sucesso!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Erro ao enviar o email. Tente novamente.");
        }
      );
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

      <div className="contact-container">
      <div className="text-group-contact">
      <h3 className="text-title-contact">Tem dúvidas ou sugestões?</h3>
      <a href="https://wa.me/5535992098429?text=Ol%C3%A1%20Lucas!%20tenho%20algumas%20d%C3%BAvidas%20para%20tirar%20com%20voc%C3%AA%20sobre%20seu%20conversor%20mp3." target="_blank" rel="noopener noreferrer" className="text-faleComigo-contact">Fale comigo!</a>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nome</label>
        <input type="text" name="name" required />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Mensagem</label>
        <textarea className="text-area" name="message" rows="5"></textarea>

        <button type="submit">Enviar</button>

        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
        </div>
    );
};

export default Contact;