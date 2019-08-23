import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';

import heroImage from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';

const ContactSuccessPage = () => (
  <Layout>
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <section>
        <header>
          <h2>Sucesso</h2>
        </header>
        <div className="content">
          <p>Obrigado pelo contato! Retornaremos assim que possível.</p>
        </div>
        <div>
          <a href="/">Voltar</a>
        </div>
      </section>
    </div>
  </Layout>
);

export default ContactSuccessPage;
