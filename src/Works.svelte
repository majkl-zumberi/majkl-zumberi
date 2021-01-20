<script>
    import ContentContainer from './ContentContainer.svelte';
    import CardsList from './CardsList.svelte';
    let articles=[
        {
            title:"G-quiz: un quiz sulle Capitali!",
            description:"un piccolo progetto in cui ho realizzato un quiz sulle capitali Europee, sviluppato in vue usando quasar per lo scaffolding e i suoi componenti. È un progetto statefull quidi totalmente dipendente dallo store Vuex. per visitare la repository git: https://github.com/majkl-zumberi/G-quiz, oppure per iniziare a giocare puoi cliccare direttamente il titolo di questo post!",
            path:"https://g-quiz.vercel.app",
            duration:"1min",
            date:"20 gen 2021"
        },
        {
            title:"Progetto Ministeriale con Jobs Academy",
            description:"è stato un progetto svolto assieme a dei miei compagni della jobs Academy per un progetto ministeriale, dove abbiamo creato un connettore (sviluppato in Node-Red) che fa da ponte di comunicazione tra e-commerce e la stampante 3D",
            path:"http://www.its40.it/wp/portfolio_page/make-it-unique/",
            duration:"5min",
            date:"19 nov 2020"
        },
        {
            title:"Workshop JAC: Green Lungs 💚",
            description:"Ogni Talento di JAC è chiamato a mettersi in gioco e a sviluppare la propria autoimprenditorialità! ecco questa è stata la sfida che abbiamo dovuto affrontare in questa esperienza nel WorkShop della JAC. il primo ottobre abbiamo presentato il nostro progetto GreenLungs (che puoi visitare qui https://majkl-zumberi.github.io/GreenLungs/) ottenendo il primo posto!🏆",
            duration:"4min",
            date:"01 ott 2020",
            path:"https://www.linkedin.com/posts/jobsacademy_workshop-imprenditorialitaeq-businessideas-activity-6730144985682870272-zqof"
        },
        {
            title:"il sito web per Valle Vertova",
            duration:"1min",
            date:"15 maggio 2019",
            path:"https://drive.google.com/file/d/138HC6F1mlGTwJ-ALU4thhWh3A1ajR63s/view?usp=sharing",
            description:"avevo progettato e realizzato per il mio comune, il sito della Valle Vertova ottenendo un attestato di collaborazione. Il sito conteneva anche un form per il feedback dei visitatori che potevano accedere tramite il loro account google e inserire la loro esperienza. il tutto poi veniva salvato in un DB noSql: Firestore"
        }
    ];
</script>
<ContentContainer 
    pageTitle="Progetti"
    pageDescription="ecco alcuni dei miei progetti che ti voglio mostrare">

    <CardsList 
        items={articles} 
        emptyItemsTitle="oh no!" 
        emptyItemsDesc="se vedi questo messaggio, al momento non c'è alcun progetto da visualizzare.."/>
</ContentContainer>