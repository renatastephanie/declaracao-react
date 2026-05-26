import { useState } from "react";
import styles from "./QuestionCard.module.scss";

const PERGUNTAS = [
  "Você gosta de surpresas?",
  "Você sabia que é muito especial pra mim?",
  "Você está feliz hoje?",
  "Você me ama mesmo?",
  "Tu confia em mim?",
  "Quer ser a minha Hermione?",
  "Você aceita namorar comigo?",
];

const MENSAGENS_NEGACAO = [
  "Tem certeza que quer dizer não?",
  "Poxa... eu achei que a gente tava indo tão bem 😢",
  "Você tem certeza mesmo mesmo mesmo?",
  "Se clicar em sim eu faço um coração 🥺",
  "Não faz isso comigo 😭",
  "Talvez você queira tentar de novo... com SIM 😅",
  "Um não agora pode quebrar meu coração 💔",
  "Certeza? Sim é tão mais bonito 😌",
  "Sim rima com fim... de ser solteira 👀",
  "Diz sim, vai ser fofo 😍",
];

export interface QuestionCardProps {
  onFinish: () => void;
}

export const QuestionCard = ({ onFinish }: QuestionCardProps) => {
  const [indice, setIndice] = useState(0);
  const [naoPos, setNaoPos] = useState({ x: 65, y: 60 });
  const [mensagemNegacao, setMensagemNegacao] = useState("");

  const isUltimaPergunta = indice === PERGUNTAS.length - 1;

  const handleSim = () => {
    if (isUltimaPergunta) {
      onFinish();
      return;
    }

    setIndice((prev) => prev + 1);
    setMensagemNegacao("");
  };

  const handleNao = () => {
    const mensagem =
      MENSAGENS_NEGACAO[Math.floor(Math.random() * MENSAGENS_NEGACAO.length)];
    setMensagemNegacao(mensagem);
  };

  const handleMouseEnterNao = () => {
    if (isUltimaPergunta) {
      setNaoPos({
        x: Math.random() * 60 + 10,
        y: Math.random() * 60 + 10
      });
    }
  };

  return (
    <div className={styles.card}>
      <p className={styles.pergunta}>{PERGUNTAS[indice]}</p>

      {mensagemNegacao && <p className={styles.negacao}>{mensagemNegacao}</p>}

      <div className={styles.botoes}>
        <button className={styles.botaoSim} onClick={handleSim}>
          Sim
        </button>
        <button
          className={styles.botaoNao}
          onClick={handleNao}
          onMouseEnter={handleMouseEnterNao}
          style={
            isUltimaPergunta
              ? {
                  position: "fixed",
                  left: `${naoPos.x}%`,
                  top: `${naoPos.y}%`,
                }
              : {}
          }>
          Não
        </button>
      </div>
    </div>
  );
};
