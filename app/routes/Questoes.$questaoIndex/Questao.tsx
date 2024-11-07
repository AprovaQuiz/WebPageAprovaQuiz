import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { axiosAprovaApi } from "~/configs/auth";


type Questao = {
  _id: string,
  enunciado: string,
  pergunta: string,
  alternativas: { textoAlt: string }[],
  alternativaCorreta?: number,
}

interface QuestaoProps {
  numeroQuestao: number,
  questao: Questao | undefined,
  tamanhoQuestoes: number
}

type respMarcada = {
  questao: string, respRegistrada: number, index: number
}


export async function HandleHistoric(save: boolean) {

  let qtdDeAcertos = 0
  let qtdDeErros = 0
  let IDMateria = undefined
  let IDAssunto = undefined

  const auxQuestoes: { questao: string; respRegistrada: number; acerto: boolean; }[] = []

  if (typeof window !== "undefined") {

    const questoesRespondidas: respMarcada[] | undefined = JSON.parse(localStorage.getItem("RespMarcadas") || "[]")
    const questoes: {
      nome_assunto: string,
      nome_materia: string,
      questoes: Questao[]
    } = JSON.parse(localStorage.getItem("questoesSimulado") || "[]")


    questoesRespondidas?.forEach((e, index) => {
      let acerto = null

      if (e.respRegistrada == questoes.questoes[index]?.alternativaCorreta) {
        qtdDeAcertos++
        acerto = true
      } else {
        qtdDeErros++
        acerto = false
      }

      return auxQuestoes.push({
        questao: e.questao,
        respRegistrada: e.respRegistrada,
        acerto: acerto
      })
    })

    if (save) {
      return Swal.fire({
        title: "Deseja ver suas repostas?",
        text: `Você acertou ${qtdDeAcertos} questões de ${questoes.questoes.length}`,
        footer: 'Para visualizar exatamente quais repostar acertou terá que fazer o login',
        icon: "warning",
        showDenyButton: true,
        confirmButtonColor: "#3085d6",
        denyButtonColor: "#d33",
        denyButtonText: "Não salvar",
        confirmButtonText: "Desejo salvar!"
      }).then((result) => {
        if (result.isConfirmed) {
          return window.location.assign("/login")
        }
        if (result.isDenied) {

          localStorage.removeItem("RespMarcadas")
          localStorage.removeItem("questoesSimulado")
          return window.location.assign("/")
        }
      });
    }

    if (questoes?.nome_assunto != "Nenhum")
      await axiosAprovaApi.get(`/topics/idTopic/${questoes?.nome_assunto}`)
        .then((r) => {
          IDAssunto = r.data.id
        })
        .catch((e) => {
          console.log(e)
        })

    if (questoes?.nome_materia != "Nenhuma")
      await axiosAprovaApi.get(`/subjects/idSubject/${questoes?.nome_materia}`)
        .then((r) => {
          IDMateria = r.data.id
        })
        .catch((e) => {
          console.log(e)
        })

    await axiosAprovaApi.post('/historics', {
      questoesFeitas: auxQuestoes,
      qtdDeAcertos: qtdDeAcertos,
      qtdDeErros: qtdDeErros,
      tipoSimulado: {
        materia: IDMateria,
        assunto: IDAssunto
      }
    })
      .then(() => {
        console.log("Sucesso")

        localStorage.removeItem("RespMarcadas")
        localStorage.removeItem("questoesSimulado")

        window.location.assign("/")
      })
      .then((e) => {
        console.log(e)
      })


  }

}

export function Questao(props: QuestaoProps) {
  const navigate = useNavigate();

  const [respostasMarcadas, setRespostasMarcadas] = useState<
    respMarcada[] | undefined
  >([])

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("RespMarcadas"))
      setRespostasMarcadas(JSON.parse(localStorage.getItem("RespMarcadas") || "[]"))
  }, [])

  function HandleRespMarcadas(index: number) {

    const respMarcada = {
      questao: props.questao?._id ?? "",
      respRegistrada: index,
      index: props.numeroQuestao
    }

    if (respostasMarcadas)
      respostasMarcadas[props.numeroQuestao] = respMarcada;

    localStorage.setItem("RespMarcadas", JSON.stringify(respostasMarcadas));


    if (respostasMarcadas)

      if (props.numeroQuestao < props.tamanhoQuestoes - 1)
        return navigate(`/Questoes/indexQuestion=${props.numeroQuestao + 1}`)
      else {
        for (let index = 0; index < respostasMarcadas.length; index++) {
          if (respostasMarcadas[index] == null) {
            return navigate(`/Questoes/indexQuestion=${index}`)
          }
        }
        return HandleHistoric(true)
      }
  }

  function foiMarcada(indexOpcao: number) {

    if (respostasMarcadas && typeof respostasMarcadas[props.numeroQuestao] !== "undefined" && respostasMarcadas[props.numeroQuestao] != null)
      if (respostasMarcadas[props.numeroQuestao].respRegistrada == indexOpcao)
        return { class: "opcao-marcada", texto: " - Alternativa escolhida anteriormente" }

  }


  return (
    <div className="container-fluid py-5 questao-bg">
      <div className="container">
        <h1 className="text-center mb-4 questao-titulo">Questão {props.numeroQuestao + 1}</h1>

        <p className="questao-texto">{props.questao?.enunciado}</p>

        <p>
          {props.questao?.enunciado}
        </p>

        <div className="opcoes">
          {props.questao?.alternativas.map((alternativa, index) => (

            <div className={`opcao`} key={index}>
              <button className={`opcao-btn ${foiMarcada(index)?.class}`} onClick={() => {
                HandleRespMarcadas(index)
              }}>
                {String.fromCharCode(65 + index)}
              </button>
              <span>{alternativa.textoAlt}{foiMarcada(index)?.texto}</span>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}
