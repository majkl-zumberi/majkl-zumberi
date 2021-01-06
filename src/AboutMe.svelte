<script>
    import ContentContainer from './ContentContainer.svelte';
    import Description from './Aboutme-Description-Photo.svelte';
    import CardsList from './CardsList.svelte';
    let skills=[
        {
            title:"FrontEnd",
            description:"Html - CSS3 - Scss - Angular - Ngrx (angular store manager) - Vue - Svelte  - Javascript - TypeScript - Cypress - UIkit - TailwindCSS"
        },
        {
            title:"Backend",
            description:"Node.js - Express.js - Nest.js - TypeORM - Java Spring"
        },
        {
            title:"Database",
            description:"MongoDB - Firebase - Firestore - Mysql"
        }
    ];

</script>
<ContentContainer 
    pageTitle="Chi sono"
    pageDescription="">

    <Description/>
    
    <h1 class="text-purple-500 text-primary text-5xl md:text-8xl font-black leading-none uppercase"
                            style="transform: translateY(0px);">Skills</h1>
    <CardsList 
        items={skills} 
        emptyItemsTitle="oh no!" 
        emptyItemsDesc="se vedi questo messaggio, al momento non c'è alcun post da visualizzare.."/>
</ContentContainer>