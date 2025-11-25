// BANCO DE DADOS DE NOTÍCIAS
// Para adicionar uma nova notícia, copie um dos blocos abaixo, cole no TOPO da lista e altere as informações.

const newsData = [

    // {
    //     id: 3,
    //     title: "Recrutamento Frenesy: Abrimos 3 Vagas para Times Competitivos de Free Fire!",
    //     category: "RECRUTAMENTO",
    //     author: "Christopher Rissardi",
    //     date: "30 de Setembro, 2025",
    //     image: "../assets/img/news/Recrutamento 2025/Banner.png", // Insira a imagem do recrutamento aqui.
    //     summary: "A Frenesy está recrutando 3 times de Free Fire: um feminino (mobile/emulador), um masculino mobile e um masculino emulador. Não é peneira! A vaga é para times já formados e focados no competitivo.",
    //     content: `
    //         <p>Atenção, comunidade! A <strong>Frenesy</strong> está com uma oportunidade imperdível para times de Free Fire que buscam um lugar no cenário competitivo. Em vez de uma peneira, estamos abrindo <strong>3 vagas exclusivas</strong> para times já formados, que serão avaliados com base em seu desempenho e comprometimento.</p>

    //         <h2>Quais são as vagas?</h2>
    //         <p>Estamos buscando preencher 3 vagas para equipes completas, cada uma focada em uma modalidade específica:</p>
    //         <ul>
    //             <li><strong>Time Feminino</strong>: 1 vaga (pode ser mobile ou emulador).</li>
    //             <li><strong>Time Masculino Mobile</strong>: 1 vaga.</li>
    //             <li><strong>Time Masculino Emulador</strong>: 1 vaga.</li>
    //         </ul>
    //         <p>Cada equipe deverá ser composta por até <strong>6 membros</strong> (incluindo reservas), garantindo flexibilidade e força para os campeonatos. Procuramos times que já possuam entrosamento e que estejam prontos para levar o jogo a sério.</p>

    //         <h2>O que esperamos dos times?</h2>
    //         <p>A Frenesy valoriza a integridade e o jogo limpo. Por isso, é fundamental que todos os times interessados cumpram as seguintes regras:</p>
    //         <ul>
    //             <li>Foco total no cenário <strong>competitivo</strong>.</li>
    //             <li>Comprometimento e disciplina nos treinos e jogos.</li>
    //             <li><strong>Proibido</strong> o uso de cheats, hacks, bugs ou qualquer outro método de trapaça.</li>
    //             <li>Desejo de crescer e representar a nossa organização com profissionalismo.</li>
    //         </ul>

    //         <h2>Como será a avaliação?</h2>
    //         <p>O processo de seleção não será uma peneira tradicional, mas sim uma <strong>avaliação minuciosa</strong> do desempenho e do potencial de cada equipe. Iremos analisar o histórico, a performance em partidas e a sinergia do time. Queremos conhecer a história de cada line e entender se ela se alinha aos nossos objetivos.</p>

    //         <h2>Como se candidatar?</h2>
    //         <p>Se a sua equipe se encaixa no perfil que estamos buscando e tem o que é preciso para representar a Frenesy, entre em contato diretamente pelo WhatsApp para mais informações e para dar início à sua avaliação. Basta clicar no botão abaixo:</p>
    //         <div style="text-align:center; margin: 20px 0;">
    //             <a href="https://wa.me/5541992072338?text=Tenho%20interesse%2Fgostaria%20de%20saber%20mais%20sobre%20a%20vaga%20de%20recrutamento%20de%20time%20da%20Frenesy!" target="_blank" style="display:inline-block; background-color:#f96001; color:#fff; padding:15px 30px; border-radius:50px; text-decoration:none; font-weight:bold; font-size:16px;">
    //                 Falar com o recrutador no WhatsApp
    //             </a>
    //         </div>
    //         <p>Estamos ansiosos para encontrar as próximas estrelas do Free Fire competitivo. Venha fazer parte da nossa história!</p>
    //         <p>Enquanto aguardam o contato, convidamos você a conhecer mais sobre a nossa organização em nosso site. <a href="https://frenesy.com.br/">Clique aqui e descubra tudo o que a Frenesy tem a oferecer!</a></p>        `
    // },

    {
        id: 4,
        title: "Frenesy Mobile anuncia elenco oficial de Free Fire para a temporada 2025",
        category: "ESPORTS",
        author: "Frenesy Staff",
        date: "28 de Setembro, 2025",
        image: "../assets/img/news/Time Mobile/Banner.png", // coloque uma imagem oficial do time aqui
        summary: "Organização confirma line-up jovem e promissora que irá disputar campeonatos de Free Fire pelo Brasil.",
        content: `
            <p>A Frenesy Mobile oficializou nesta semana o <strong>time que representará a organização no Free Fire</strong> durante a temporada de 2025. 
            A escalação reúne jogadores de diferentes regiões do país, todos já conhecidos dentro do competitivo por suas performances consistentes em campeonatos locais e online.</p>

            <h2>Line-up confirmado</h2>
            <p>O elenco é formado por cinco atletas que chegam com funções bem definidas e entrosamento construído nos treinos. Confira:</p>

            <ul>
                <li><strong>FㅤEVERTONʷᵐ</strong> (Everton Silva, 15 anos) – <em>Suporte</em>. Conhecido por sua leitura de jogo e capacidade de segurar a retaguarda em momentos decisivos.</li>
                <li><strong>FㅤHYPE.xp</strong> (Lucas Guilherme, 16 anos) – <em>Rush</em>. Jogador agressivo, especialista em abrir espaço nas rotações e iniciar confrontos.</li>
                <li><strong>FㅤBIELZN9</strong> (Gabriel Alves, 13 anos) – <em>Rush</em>. Apesar da pouca idade, demonstra maturidade competitiva e reflexos rápidos.</li>
                <li><strong>FㅤDNZIN</strong> (Danilo da Silva, 16 anos) – <em>Rush</em>. Reconhecido por sua constância em duelos e pela frieza em momentos de pressão.</li>
            </ul>

            <h2>Objetivos para a temporada</h2>
            <p>O projeto da Frenesy busca consolidar a equipe dentro do cenário nacional de Free Fire. 
            O time já está em fase intensa de treinos e deve estrear em competições regionais nas próximas semanas, mirando posteriormente classificações para torneios de maior porte.</p>

            <p>Segundo a staff da organização, a mescla entre a experiência de <strong>VitãoBalla</strong> e a agressividade dos demais jogadores é a aposta para tornar a equipe competitiva já neste primeiro ciclo.</p>

            <h2>Apoio da comunidade</h2>
            <p>A Frenesy reforça que o apoio dos fãs será fundamental neste início de caminhada. 
            A equipe convida todos a acompanharem as transmissões oficiais, conteúdos exclusivos e novidades nas redes sociais da organização.</p>

            <p>Com sede de vitória e foco em evolução constante, a Frenesy entra na temporada de 2025 pronta para buscar seu espaço entre as principais forças do Free Fire competitivo brasileiro.</p>
        `
    },

    {
        id: 2,
        title: "Nossa Nova Loja Oficial Está Chegando!",
        category: "ORGANIZAÇÃO",
        author: "Frenesy Staff",
        date: "16 de Setembro, 2025",
        image: "../assets/img/news/Loja Oficial 2026/Banner.png", // Crie e coloque uma imagem nessa pasta
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
        id: 1,
        title: "Inauguração Oficial do Site da Frenesy!",
        category: "NOVIDADES",
        author: "Frenesy Staff",
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

            <p>📆 <strong>Dia 13/09/2025 às 13h</strong>. Não se atrase, a história começa agora!</p>
        `
    },



    // {
    //     id: 4,
    //     title: "Inscrições Abertas para a 1ª Peneira Competitiva da Frenesy no Free Fire!",
    //     category: "COMPETITIVO",
    //     author: "Christopher Rissardi",
    //     date: "13 de Setembro, 2025",
    //     image: "../assets/img/news/Peneira Frenesy 2025/1.png", // Crie e coloque uma imagem nessa pasta
    //     summary: "A Frenesy anuncia sua primeira peneira oficial para formar os times competitivos de Free Fire Mobile e Emulador. Vagas gratuitas e exclusivas!",
    //     content: `
    //         <p>É oficial, família! A <strong>Frenesy</strong> acaba de anunciar que as vagas para a <strong>1ª Peneira Competitiva de Free Fire</strong> já estão disponíveis. Essa é a chance perfeita para você que sempre sonhou em vestir a camisa da organização e mostrar o seu talento no cenário competitivo.</p>

    //         <h2>Quando será a seletiva?</h2>
    //         <p>As <strong>inscrições já estão abertas</strong> e todos os jogadores podem se registrar a partir de hoje. A data oficial da seletiva será divulgada em breve nas redes sociais e no site da Frenesy. Fique atento para não perder nenhuma atualização!</p>

    //         <h2>Mobile e Emulador: Oportunidade para todos</h2>
    //         <p>Serão abertas peneiras para <strong>duas modalidades</strong>:</p>
    //         <ul>
    //             <li><strong>Free Fire Mobile</strong> – apenas 1 line será aprovada.</li>
    //             <li><strong>Free Fire Emulador</strong> – apenas 1 line será aprovada.</li>
    //         </ul>
    //         <p>No final, teremos um total de apenas <strong>2 lines oficiais</strong> aprovadas para representar a Frenesy nos campeonatos e competições.</p>

    //         <h2>Taxa de inscrição? Esquece isso!</h2>
    //         <p>O melhor de tudo: <strong>a peneira é 100% gratuita</strong>! Sim, você não leu errado. Por ser a primeira peneira oficial da Frenesy, decidimos abrir as portas sem qualquer custo, dando oportunidade para todos que acreditam no próprio potencial.</p>

    //         <h2>Como participar?</h2>
    //         <p>Para se inscrever, é muito simples: basta acessar o link abaixo e preencher o formulário de participação:</p>
    //         <p><a href="peneira-ff.html" target="_blank">👉 Clique aqui para se inscrever na peneira 👈</a></p>

    //         <h2>Regulamento oficial</h2>
    //         <p>É muito importante ler todas as regras e entender como funcionará o processo. Confira o regulamento completo no link a seguir:</p>
    //         <p><a href="regulamento.html" target="_blank">📜 Regulamento da Peneira</a></p>

    //         <h2>Prepare-se para brilhar!</h2>
    //         <p>Se você acha que tem o que é preciso para ser destaque no cenário competitivo, essa é a sua chance. Mostre seu talento, sua disciplina e sua garra. A Frenesy está em busca de jogadores determinados, que queiram escrever história ao nosso lado.</p>

    //         <p><strong>Essa é a primeira peneira da nossa organização, e você pode ser parte da nossa história!</strong></p>
    //         <p>Não perca tempo, faça já sua inscrição e acompanhe nossas redes para saber quando será a seletiva oficial!</p>
    //     `
    // },












];