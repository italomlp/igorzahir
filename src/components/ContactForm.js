import React from 'react';
export default function ContactForm() {
  return (
    <>
      <header>
        <h2>Contato</h2>
      </header>
      <div className="content">
        <form>
          <div className="fields">
            <div className="field half">
              <input type="text" name="name" id="name" placeholder="Nome" />
            </div>
            <div className="field half">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="field">
              <textarea
                name="message"
                id="message"
                placeholder="Mensagem"
                rows="7"
              />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value="Enviar mensagem"
                className="button primary"
              />
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}
