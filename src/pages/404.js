import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <section id="one" className="main-container">
      <div className="container">
        <div className="content">
          <header className="major">
            <h2>NÃO ENCONTRADO</h2>
          </header>
          <section>
            <h4>Esta URL não é valida</h4>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
