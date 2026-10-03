export default function FAQ() {
    return (
        <div>
        <h2>Perguntas Frequentes (FAQ)</h2>

        <section>
            <div>
            <h3> O texto que eu digito fica salvo em algum servidor?</h3>
            <p>
                <strong>Não.</strong> Todo o processamento é feito exclusivamente no seu próprio navegador (<em>client-side</em>). O texto digitado não é enviado, lido ou armazenado em nenhum servidor externo. Utilizamos apenas o <code>sessionStorage</code> local para evitar que você perca seu progresso ao recarregar a página acidentalmente, mas tudo é apagado ao fechar a aba.
            </p>
            </div>

            <div>
            <h3> O Use Count Me é gratuito?</h3>
            <p>
                <strong>Sim!</strong> A ferramenta é 100% gratuita e sem limites de uso. Não é necessário criar conta, fazer login ou fornecer dados pessoais para utilizar todas as funcionalidades.
            </p>
            </div>

            <div>
            <h3> Como é feita a contagem de palavras e frases?</h3>
            <p>
                A contagem de palavras identifica os espaços e pontuações que separam os termos. Já a contagem de frases identifica os pontos finais, pontos de interrogação e pontos de exclamação que delimitam cada sentença no seu texto.
            </p>
            </div>

            <div>
            <h3> Posso usar a ferramenta pelo celular?</h3>
            <p>
                <strong>Sim.</strong> O layout do site é totalmente responsivo e adaptado para funcionar bem em computadores, tablets e smartphones.
            </p>
            </div>
        </section>
        </div>
    );
}