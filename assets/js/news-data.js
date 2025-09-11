// BANCO DE DADOS DE NOTÍCIAS
// Para adicionar uma nova notícia, copie um dos blocos abaixo, cole no TOPO da lista e altere as informações.

const newsData = [




    {
        id: 1,
        title: "🚀 Inauguração Oficial do Site da Frenesy!",
        category: "NOVIDADES",
        author: "Christopher Rissardi",
        date: "13 de Setembro, 2025",
        image: "../assets/img/news/Site Oficial/Site Oficial Banner.png", // Crie e coloque uma imagem nessa pasta
        summary: "A espera acabou! O site oficial da Frenesy será lançado no dia 13/09/2025 às 13h. Venha participar desse marco na história da organização!",
        content: `
            <p>📢 É isso mesmo, família! O <strong>site oficial da Frenesy</strong> está finalmente saindo do forno e você está convidado para o lançamento!</p>

            <h2>🗓 Data e Horário</h2>
            <p>Marque no calendário: <strong>13 de setembro de 2025 às 13:00</strong> é o momento em que nossas portas digitais se abrem para o mundo!</p>

            <h2>🔥 O que esperar?</h2>
            <p>O novo site será o ponto de encontro para tudo relacionado à <strong>Frenesy</strong>: notícias, peneiras competitivas, calendário de torneios, e muito mais. Tudo organizado, moderno e com aquele toque de inovação que é a nossa cara!</p>

            <h2>🎉 Por que você não pode perder?</h2>
            <p>Além de acompanhar a inauguração em tempo real, teremos <strong>conteúdo exclusivo</strong> liberado no dia do lançamento. É a oportunidade perfeita para ser um dos primeiros a explorar cada cantinho do site!</p>

            <h2>💡 Como acessar?</h2>
            <p>Simples! No horário do lançamento, acesse: <a href="https://frenesy.com.br" target="_blank">🌐 frenesy.com.br</a> e aproveite tudo o que preparamos para você.</p>

            <p>📆 <strong>Dia 13/09/2025 às 13h</strong>. Não se atrase, a história começa agora! 🚀</p>
        `
    },

    {
        id: 2,
        title: "Nossa Nova Loja Oficial Está Chegando!",
        category: "ORGANIZAÇÃO",
        author: "Frenesy Staff",
        date: "28 de Agosto, 2025",
        image: "../assets/img/news/Loja Oficial 2026/Banner 1.png", // Crie e coloque uma imagem nessa pasta
        summary: "Prepare-se para vestir as cores da Frenesy! A coleção 2026 está a caminho, com uniformes, moletons e acessórios exclusivos para a nossa comunidade.",
        content: `
            <p>A espera está quase no fim! É com grande entusiasmo que anunciamos o lançamento da nossa loja oficial, um espaço dedicado inteiramente à nossa apaixonada comunidade.</p>
            
            <h2>O que esperar da Coleção 2026?</h2>
            <p>Trabalhamos duro para desenvolver produtos de alta qualidade que representam a garra e o estilo da Frenesy. A primeira leva de produtos incluirá:</p>
            <ul>
                <li>Jersey Oficial Pro 2026</li>
                <li>Moletom com Capuz Exclusivo</li>
                <li>Bonés e Acessórios</li>
            </ul>
            <p>Fique de olho em nosso site e redes sociais para não perder a data de lançamento e as promoções exclusivas para os primeiros compradores!</p>
        `
    },

    {
        id: 3,
        title: "Inscrições Abertas para a 1ª Peneira Competitiva da Frenesy no Free Fire!",
        category: "COMPETITIVO",
        author: "Christopher Rissardi",
        date: "13 de Setembro, 2025",
        image: "../assets/img/news/Peneira Frenesy 2025/1.jpg", // Crie e coloque uma imagem nessa pasta
        summary: "A Frenesy anuncia sua primeira peneira oficial para formar os times competitivos de Free Fire Mobile e Emulador. Vagas gratuitas e exclusivas!",
        content: `
            <p>É oficial, família! A <strong>Frenesy</strong> acaba de anunciar que as vagas para a <strong>1ª Peneira Competitiva de Free Fire</strong> já estão disponíveis. Essa é a chance perfeita para você que sempre sonhou em vestir a camisa da organização e mostrar o seu talento no cenário competitivo.</p>

            <h2>Quando será a seletiva?</h2>
            <p>As <strong>inscrições já estão abertas</strong> e todos os jogadores podem se registrar a partir de hoje. A data oficial da seletiva será divulgada em breve nas redes sociais e no site da Frenesy. Fique atento para não perder nenhuma atualização!</p>

            <h2>Mobile e Emulador: Oportunidade para todos</h2>
            <p>Serão abertas peneiras para <strong>duas modalidades</strong>:</p>
            <ul>
                <li><strong>Free Fire Mobile</strong> – apenas 1 line será aprovada.</li>
                <li><strong>Free Fire Emulador</strong> – apenas 1 line será aprovada.</li>
            </ul>
            <p>No final, teremos um total de apenas <strong>2 lines oficiais</strong> aprovadas para representar a Frenesy nos campeonatos e competições.</p>

            <h2>Taxa de inscrição? Esquece isso!</h2>
            <p>O melhor de tudo: <strong>a peneira é 100% gratuita</strong>! Sim, você não leu errado. Por ser a primeira peneira oficial da Frenesy, decidimos abrir as portas sem qualquer custo, dando oportunidade para todos que acreditam no próprio potencial.</p>

            <h2>Como participar?</h2>
            <p>Para se inscrever, é muito simples: basta acessar o link abaixo e preencher o formulário de participação:</p>
            <p><a href="peneira-ff.html" target="_blank">👉 Clique aqui para se inscrever na peneira 👈</a></p>

            <h2>Regulamento oficial</h2>
            <p>É muito importante ler todas as regras e entender como funcionará o processo. Confira o regulamento completo no link a seguir:</p>
            <p><a href="regulamento.html" target="_blank">📜 Regulamento da Peneira</a></p>

            <h2>Prepare-se para brilhar!</h2>
            <p>Se você acha que tem o que é preciso para ser destaque no cenário competitivo, essa é a sua chance. Mostre seu talento, sua disciplina e sua garra. A Frenesy está em busca de jogadores determinados, que queiram escrever história ao nosso lado.</p>

            <p><strong>Essa é a primeira peneira da nossa organização, e você pode ser parte da nossa história!</strong></p>
            <p>Não perca tempo, faça já sua inscrição e acompanhe nossas redes para saber quando será a seletiva oficial!</p>
        `
    },












];