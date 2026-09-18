import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import {
  Car,
  ChevronRight,
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";

import "./styles.css";
import logo from "./assets/logo.jpeg";

const steps = [
  {
    title: "Faça sua matrícula",
    text: "Inicie seu processo de forma online via WhatsApp ou presencialmente em nossa unidade.",
  },
  {
    title: "Agende seus exames médico, psicológico e toxicológico",
    text: "No momento da sua matrícula você já sai com seus exames agendados.",
  },
  {
    title: "Realize seu cursinho do CFC/aulas teóricas",
    text: "O curso é feito de forma online e gratuita via aplicativo CNH do Brasil.",
  },
  {
    title: "Faça seu exame teórico",
    text: "Realize sua provinha após concluir o cursinho.",
  },
  {
    title: "Comece suas aulas práticas",
    text: "Inicie suas aulas práticas após aprovar o exame teórico.",
  },
  {
    title: "Prepare-se para a prova",
    text: "Após a conclusão das aulas práticas, prepare-se para a prova final.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <a
            className="brand"
            href="#inicio"
            aria-label="Auto Escola RN - início"
            onClick={closeMenu}
          >
            <img src={logo} alt="Auto Escola RN" />
          </a>

          <nav
            className={`nav-links ${menuOpen ? "is-open" : ""}`}
            aria-label="Navegação principal"
          >
            <a href="#inicio" onClick={closeMenu}>
              Início
            </a>

            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>

            <a href="#processo" onClick={closeMenu}>
              Como funciona
            </a>

            <a href="#endereco" onClick={closeMenu}>
              Endereço
            </a>
          </nav>

          <div className="topbar-actions">
            <a
              className="btn btn-small btn-primary desktop-contact"
              href="https://wa.me/5511941417557"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com a RN
            </a>

            <button
              className="menu-button"
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow">
              Sua habilitação começa aqui
            </span>

            <h1>
              Aprenda a dirigir com <span className="word-blue">segurança</span>
              , <span className="word-green">confiança</span>{" "}
              <span className="word-and">e</span>{" "}
              <span className="word-yellow">leveza</span>
            </h1>

            <p>
              Desde 2011 ajudando novos condutores a conquistarem sua{" "}
              <strong>independência</strong>. Uma experiência{" "}
              <strong>humana</strong>, <strong>acolhedora</strong> e focada em
              você do primeiro atendimento até a aprovação.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#contato">
                <MessageCircle size={19} />
                Quero saber mais
              </a>

              <a className="btn btn-secondary" href="#processo">
                Como funciona
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Destaques da Auto Escola RN">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="visual-main-card">
              <span className="visual-kicker">AUTO ESCOLA RN</span>

              <div className="visual-photo-placeholder" aria-hidden="true">
                <div className="photo-head" />
                <div className="photo-body" />
              </div>

              <strong>Seu caminho para a CNH pode ser mais simples.</strong>

              <p>
                Com a CNH Brasil, você pode se habilitar de forma mais simples,
                rápida e econômica.{" "}
                <a
                  className="visual-link"
                  href="https://www.gov.br/transportes/pt-br/conteudos-cnh-do-brasil/saiba-mais-sobre-o-programa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saiba mais
                </a>
              </p>

              <div className="visual-road">
                <div className="road-line" />
                <Car size={42} strokeWidth={1.8} />
              </div>
            </div>
          </div>
        </section>

        <section className="section about" id="sobre">
          <div className="section-heading narrow">
            <span className="eyebrow">Sobre a Auto Escola RN</span>

            <h2>
              Mais do que tirar a CNH: queremos tornar o processo mais tranquilo
              e humano
            </h2>
          </div>

          <div className="about-highlights">
            <div>
              <strong>Desde 2011</strong>
              <span>Há anos fazendo parte de novas histórias.</span>
            </div>

            <div>
              <strong>Atendimento personalizado</strong>
              <span>Um processo mais humano e próximo.</span>
            </div>

            <div>
              <strong>Instrutores qualificados</strong>
              <span>
                Profissionais preparados para ensinar com paciência e
                excelência.
              </span>
            </div>

            <div>
              <strong>Veículos novos e bem cuidados</strong>
              <span>Mais conforto e segurança durante as aulas.</span>
            </div>

            <div>
              <strong>Suporte em todas as etapas</strong>
              <span>Acompanhamento da matrícula até a aprovação.</span>
            </div>

            <div>
              <strong>Processo simples e organizado</strong>
              <span>Mais clareza e tranquilidade em cada etapa.</span>
            </div>
          </div>
        </section>

        <section className="section process" id="processo">
          <div className="process-copy">
            <span className="eyebrow">Passo a passo</span>

            <h2>
              Seu caminho até a{" "}
              <span className="highlight-yellow">primeira habilitação</span>,
              sem complicação
            </h2>

            <p>
              Do primeiro contato até a prova final, acompanhamos você em cada
              fase para tornar o processo mais simples, claro e tranquilo.
            </p>

            <a className="text-link" href="#contato">
              Tire suas dúvidas
              <ChevronRight size={17} />
            </a>
          </div>

          <ol className="steps-list">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <div>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section info-strip" id="endereco">
          <div>
            <MapPin size={22} />

            <span>
              <strong>Localização</strong>
              Av. Dona Eugênia Machado da Silva, 200
            </span>
          </div>

          <div>
            <Clock3 size={22} />

            <span>
              <strong>Horário de aulas</strong>
              Seg a Sex · 08:00 às 18:00
              <br />
              Sáb · 08:00 às 13:00
            </span>
          </div>

          <div>
            <Clock3 size={22} />

            <span>
              <strong>Horário de atendimento/balcão</strong>
              Seg a Sex · 09:30 às 18:00
              <br />
              Sáb · 09:30 às 13:00
            </span>
          </div>

          <div>
            <MessageCircle size={22} />

            <span>
              <strong>WhatsApp</strong>
              (11) 94141-7557
            </span>
          </div>
        </section>

        <section className="cta" id="contato">
          <div>
            <span className="eyebrow light">Pronto para começar?</span>

            <h2>Fale com a Auto Escola RN e dê o primeiro passo</h2>
          </div>

          <div className="cta-actions">
            <a
              className="btn btn-white"
              href="https://wa.me/5511941417557"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a
          className="footer-brand"
          href="#inicio"
          aria-label="Voltar ao início"
        >
          <img className="footer-logo" src={logo} alt="Auto Escola RN" />
        </a>

        <p>© 2026 Auto Escola RN. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
