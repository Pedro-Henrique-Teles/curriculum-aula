import {
  AdditionalInfo,
  ExperienceItem,
  Header,
  ProfilePicture,
  Section,
  Skills,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="bg-dark bg-gradient d-flex justify-content-center align-items-center min-vh-100 flex-wrap">
      <div className="bg-white p-5 shadow rounded" style={{ width: "800px" }}>
        <div className="d-flex">
          <ProfilePicture src="../public/perfil.png" />
          <Header
            name="Pedro Teles"
            linkedin="linkedin.com/in/PedroTeles"
            phone="(99) 99999-9999"
            email="Pedro.Teles@email.com.br"
          />
        </div>

        <Section title="Resumo">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            explicabo tempora sint molestias asperiores maxime, autem beatae
            natus a placeat laudantium. A, laudantium similique. Ratione tempora
            fugit veritatis ab sint?
          </p>
        </Section>

        <Section title="Experiência Profissional">
          <ExperienceItem
            role={"Desenvolvedor Júnior"}
            company={"Cercred"}
            location={"Fontesville"}
            date={"10/2024"}
            description={"Trabalhava como desenvolvedor júnior"}
          />

          <ExperienceItem
            role={"Desenvolvedor Júnior"}
            company={"Cercred"}
            location={"Fontesville"}
            date={"10/2024"}
            description={"Trabalhava como desenvolvedor júnior"}
          />
        </Section>

        <Section title="Formação Acadêmica">
          {/* Exemplo que podemos colocar tanto uma tag, quanto apenas o texto */}

          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste illum maxime dolorem quae? Voluptatibus est, exercitationem ipsum aspernatur a, consequuntur suscipit voluptate pariatur, tenetur similique cumque consequatur inventore deserunt."
          }
        </Section>

        <Section title="Habilidades e Competências">
          <Skills skills={["HTML", "CSS", "JS"]} />
        </Section>

        <Section title="Informações Adicionais">
          <AdditionalInfo info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste illum maxime dolorem quae? Voluptatibus est." />
        </Section>
      </div>
    </div>
  );
}

export default App;
