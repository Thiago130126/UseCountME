export default function Sobre() {
    return (
        <div>
        <h1>Sobre o <strong>Use Count Me</strong></h1>
        <p>
            O <strong>Use Count Me</strong> é uma ferramenta web rápida, gratuita e intuitiva criada para simplificar a contagem e a manipulação de textos no seu dia a dia.
        </p>

        <hr />

        <h2>Qual é a proposta do projeto?</h2>
        <p>
            Seja para redigir uma redação, ajustar um post para redes sociais ou validar o limite de caracteres de um documento, o <strong>Use Count Me</strong> foi pensado para entregar métricas precisas em tempo real sem complicações.
        </p>
        <p>
            Desenvolvido em <strong>Next.js</strong> com <strong>TypeScript</strong> e <strong>React</strong>, todo o processamento do texto é feito diretamente no seu navegador. Isso garante velocidade instantânea e total privacidade dos seus dados.
        </p>

        <h2>Principais Funcionalidades</h2>
        <ul>
            <li>
            <strong>Métricas em Tempo Real:</strong> Contagem de caracteres (com e sem espaços), palavras e frases.
            </li>
            <li>
            <strong>Ferramentas de Formatação:</strong> Conversão rápida para caixa alta (<em>UPPERCASE</em>) e caixa baixa (<em>lowercase</em>).
            </li>
            <li>
            <strong>Ações Rápidas:</strong> Botões integrados para copiar o texto com um clique e limpar a área de trabalho.
            </li>
            <li>
            <strong>Persistência de Dados:</strong> Seu texto não é perdido ao recarregar a página (graças à integração inteligente com o <code>sessionStorage</code>).
            </li>
        </ul>

        <h2>Sobre o Desenvolvedor</h2>
        <p>
            Este é o meu segundo projeto completo publicado e faz parte do meu portfólio como desenvolvedor Web. O objetivo de colocar o <strong>Use Count Me</strong> no ar é aplicar boas práticas de arquitetura de código, componentização, manipulação de estado no React, praticar web design e integração de serviços modernos como o Google AdSense.
        </p>

        <hr />

        <p>
            <em>Obrigado por utilizar a ferramenta! Se tiver sugestões ou feedbacks, fique à vontade para entrar em contato.</em>
        </p>
        </div>
    );
}