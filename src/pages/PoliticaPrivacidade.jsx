import InternalBanner from "../components/InternalBanner/InternalBanner";

function PoliticaPrivacidade() {
  return (
    <>
      <InternalBanner />

      <main style={{ width: "92%", maxWidth: "1000px", margin: "60px auto", lineHeight: "1.8", color: "#062653" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "24px" }}>Política de Privacidade</h1>

        <p>
          A Importadora Kontudo Surf respeita a privacidade dos usuários e se compromete
          a proteger as informações fornecidas durante o contato e navegação no site.
        </p>

        <p>
          Os dados informados poderão ser utilizados para atendimento, comunicação,
          envio de informações comerciais e suporte relacionado aos produtos e pedidos.
        </p>

        <p>
          Não compartilhamos dados pessoais com terceiros sem autorização, exceto quando
          necessário para cumprimento de obrigações legais ou operacionais.
        </p>

        <p>
          Ao utilizar este site, o usuário concorda com esta política e com o uso das
          informações para fins de atendimento comercial.
        </p>

        <a href="/" style={{ display: "inline-block", marginTop: "30px", background: "#08b8c4", color: "#fff", padding: "14px 36px", borderRadius: "8px", textDecoration: "none", fontWeight: "700" }}>
          Voltar
        </a>
      </main>
    </>
  );
}

export default PoliticaPrivacidade;
