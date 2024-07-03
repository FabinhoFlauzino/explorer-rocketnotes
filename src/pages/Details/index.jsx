/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Header } from "../../components/Header/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { Container, Links, Content } from "./styles.js";
import { Section } from "../../components/Section/index.jsx";
import { Tag } from "../../components/Tags/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api.js";

export function Details() {
  const params = useParams();
  const navigate = useNavigate()
  const [data, setData] = useState(null);

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?")

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      handleBack()
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, [])

  return (
    <Container>
      <Header />
      {
        data &&

        <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={handleRemove}/>

            <h1>{data.title}</h1>

            <p>
              {data.description}
            </p>

            {
              data.links &&
              <Section title="Link úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">{link.url}</a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag key={String(tag.id)} title={tag.name} />
                  ))
                }

              </Section>
            }
            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      }
    </Container>
  );
}
