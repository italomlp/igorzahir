import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';

import heroImage from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';

const img_set_1 = [
  {
    src: require('../assets/images/gallery/01.jpg'),
    thumbnail: require('../assets/images/gallery/01.jpg'),
    full: true,
  },
  {
    src: require('../assets/images/gallery/02.jpg'),
    thumbnail: require('../assets/images/gallery/02.jpg'),
  },
  {
    src: require('../assets/images/gallery/03.jpg'),
    thumbnail: require('../assets/images/gallery/03.jpg'),
  },
  {
    src: require('../assets/images/gallery/04.jpg'),
    thumbnail: require('../assets/images/gallery/04.jpg'),
    full: true,
  },
];
const img_set_2 = [
  {
    src: require('../assets/images/gallery/05.jpg'),
    thumbnail: require('../assets/images/gallery/05.jpg'),
    full: true,
  },
  {
    src: require('../assets/images/gallery/06.jpg'),
    thumbnail: require('../assets/images/gallery/06.jpg'),
  },
  {
    src: require('../assets/images/gallery/07.jpg'),
    thumbnail: require('../assets/images/gallery/07.jpg'),
  },
];

const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="center">
            <img src={heroImage} alt="" />
          </span>
        </div>
      </section>

      <section id="first">
        <header>
          <h2>Consultoria de Arte</h2>
        </header>
        <div className="content">
          <p>
            Estratégia e desenvolvimento de{' '}
            <strong>coleções públicas ou privadas</strong>, e assessoria em
            todas as etapas da negociação, desde a pesquisa de mercado nacional
            e internacional, até a logística pré e pós venda
          </p>
          <span className="image main">
            <img src={pic2} alt="" />
          </span>
        </div>
      </section>

      <section>
        <header>
          <h2>Aulas e cursos</h2>
        </header>
        <div className="content">
          <p>
            Serviços oferecidos para pessoas físicas, em grupos fechados, ou in
            company
          </p>
          <ul className="feature-icons">
            <li className="icon fa-asterisk">Arte contemporânea</li>
            <li className="icon fa-asterisk">História da arte</li>
            <li className="icon fa-asterisk">O futuro da arte</li>
            <li className="icon fa-asterisk">
              Crítica cultural x Crítica social
            </li>
            <li className="icon fa-asterisk">Artes como negócio</li>
            <li className="icon fa-asterisk">Cultura como DNA de um povo</li>
          </ul>
          <p>
            Os cursos também podem ser oferecidos durante visitas guiadas a
            museus, galerias, exposições, feiras, coleções privadas e encontros
            em ateliês de artistas
          </p>
        </div>
      </section>

      <section>
        <header>
          <h2>Curadoria</h2>
        </header>
        <div className="content">
          <p>
            Projetos de curadoria para museus, galerias, exposições, feiras,
            bienais e eventos customizados
          </p>
          <Gallery images={img_set_1} />
        </div>
      </section>

      <section>
        <header>
          <h2>Projetos especiais</h2>
        </header>
        <div className="content">
          <p>
            Ações e experiências de arte para marcas, e conexão entre o mercado
            artístico e diversas áreas empresariais
          </p>
          <Gallery images={img_set_2} />
        </div>
      </section>

      <section>
        <ContactForm />
        <SideFooter />
      </section>

      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
