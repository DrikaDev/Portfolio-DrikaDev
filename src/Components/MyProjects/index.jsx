import React from "react";
import { Link } from "react-router-dom";
import Astronauta from "../../Assets/Drika_Astronauta.png";
import Dupla from "../../Assets/DesafioEmDupla.png";
import Lista from "../../Assets/ToDoList.png";
import Movies from "../../Assets/Movies.jpg";
import Noivinhos from "../../Assets/Noivinhos.jpg";
import Convite from "../../Assets/Convite.jpg";
import ODS from "../../Assets/ODS.jpg";
import Alura from "../../Assets/CloneAlura.jpg";
import Mario from "../../Assets/Jump Mario.jpg";
import Carousel from "nuka-carousel/lib/carousel";
import * as S from "./style";

const estiloDoCarrossel = {
  autoplay: true,
  autoplayInterval: 2000,
  // speed: 1000,
  slidesToShow: 2,
  swipeable: true,
  wrapAround: true,
  defaultControlsConfig: {
    nextButtonText: ">",
    prevButtonText: "<",
    pagingDotStyle: {
      fill: "none",
    },
  },
};

export default function MyProjects() {
  return (
    <S.Container>
      <S.Home>
        <Link to="/">
          <img src={Astronauta} alt="Desenho Drika Astronauta" />
          Início
        </Link>
      </S.Home>

      <h1>Meus Projetos Front-End</h1>

      <S.Box_Projects>
        <Carousel
          {...estiloDoCarrossel}
          autoplay={true}
          // autoplayInterval={2000}
          // slidesToShow={2}
          // wrapAround={true}
          // cellSpacing={200}
          defaultControlsConfig={{
            nextButtonText: ">",
            prevButtonText: "<",
            pagingDotsStyle: { fill: "none" },
          }}
        >
          <div>
            <h2>Jump Mario</h2>
            <h5>
              Jogo para treinar HTML, CSS e JS onde o Mário tem que pular o
              casco de tartaruga.
            </h5>
            <img src={Mario} alt="Foto do desafio Jump Mario" />
            <p>
              <a href="https://the-jumping-mario.netlify.app/" target="_blank">
                Clique aqui para ver o site
              </a>
            </p>
            <p>
              <a href="https://github.com/DrikaDev/Jump-Mario" target="_blank">
                Clique aqui para ver o repositório
              </a>
            </p>
          </div>

          <div>
            <h2>ODS Jaçanã</h2>
            <h5>Projeto para treinar CSS e responsividade.</h5>
            <img src={ODS} alt="Foto do ODS Jaçanã" />
            <p>
              <a href="https://odsnojacana.netlify.app/" target="_blank">
                Clique aqui para ver o site
              </a>
            </p>
            <p>
              <a
                href="https://github.com/DrikaDev/Pratica-React-15-ODS-Jacana/"
                target="_blank"
              >
                Clique aqui para ver o repositório
              </a>
            </p>
          </div>

          <div>
            <h2>1º Trabalho em Dupla</h2>
            <h5>Projeto para treinar o trabalho em conjunto.</h5>
            <img src={Dupla} alt="Foto projeto em dupla" />
            <p>
              <a
                href="https://desafiopairprogramming.netlify.app/"
                target="_blank"
              >
                Clique aqui para ver o site
              </a>
            </p>
            <p>
              <a
                href="https://github.com/DrikaDev/VaiNaWeb-React-pair-programming/"
                target="_blank"
              >
                Clique aqui para ver o repositório
              </a>
            </p>
          </div>

          <div>
            <h2>To Do List</h2>
            <h5>
              Desafio para treinar hooks, adição de tarefas com Enter, input
              limpo, não adicionar espaço em branco, e função deletar tarefa.
            </h5>
            <img src={Lista} alt="Foto desafio todolist" />
            <p>
              <a href="https://todolistcomsetstate.netlify.app" target="_blank">
                Clique aqui para ver o site
              </a>
            </p>
            <p>
              <a
                href="https://github.com/DrikaDev/Pratica-React-11-ToDoList-com-useState/"
                target="_blank"
              >
                Clique aqui para ver o repositório
              </a>
            </p>
          </div>

          <div>
            <h2>Drika´s Movies</h2>
            <h5>
              Desafio para treinar utilização de API com axios,
              styled-components e react-router-dom.
            </h5>
            <img src={Movies} alt="Foto desafio Filmes" />
            <p>
              <a href="https://drikasmovies.netlify.app/" target="_blank">
                Clique aqui para ver o site
              </a>
            </p>
            <p>
              <a
                href="https://github.com/DrikaDev/Desafio-10-Drikas-Movies-APIs/"
                target="_blank"
              >
                Clique aqui para ver o repositório
              </a>
            </p>
          </div>

          <div>
            <h2>Noivinhos da Carminha</h2>
            <h5>
              1º projeto freelancer feito do zero para minha primeira cliente!
            </h5>
            <img src={Noivinhos} alt="Foto Noivinhos da Carminha" />
            <p>
              <a
                href="https://noivinhosdacarminha.netlify.app/"
                target="_blank"
              >
                Clique aqui para ver o site
              </a>
            </p>
            <p>
              <a
                href="https://github.com/DrikaDev/E-commerce-Noivinhos-da-Carminha/"
                target="_blank"
              >
                Clique aqui para ver o repositório
              </a>
            </p>
          </div>

          <div>
            <h2>Convite de Aniversário</h2>
            <h5>
              Convite interativo com JS que fiz pra enviar aos convidados pelo
              What´s app.
            </h5>
            <img src={Convite} alt="Foto do Convite" />
            <p>
              <a
                href="https://drikadev.github.io/Convite-de-aniversario-responsivo/"
                target="_blank"
              >
                Clique aqui para ver o site
              </a>
            </p>
            <p>
              <a
                href="https://github.com/DrikaDev/Convite-de-aniversario-responsivo"
                target="_blank"
              >
                Clique aqui para ver o repositório
              </a>
            </p>
          </div>

          <div>
            <h2>Clone da Alura</h2>
            <h5>
              Clone do site da Alura criado para fins de estudos e práticas das
              tecnologias HTML e CSS.
            </h5>
            <img src={Alura} alt="Foto site Alura" />
            <p>
              <a href="https://clone-site-alura.netlify.app/" target="_blank">
                Clique aqui para ver o site
              </a>
            </p>
            <p>
              <a
                href="https://github.com/DrikaDev/Alura/tree/main/Clone%20do%20site%20Alura"
                target="_blank"
              >
                Clique aqui para ver o repositório
              </a>
            </p>
          </div>
        </Carousel>
      </S.Box_Projects>
    </S.Container>
  );
}