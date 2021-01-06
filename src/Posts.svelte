<script>
    import ContentContainer from './ContentContainer.svelte';
    import CardsList from './CardsList.svelte';
    let posts=[];
</script>
<ContentContainer 
    pageTitle="Posts"
    pageDescription="Ecco alcuni dei miei Posts, potrebbe volerci del tempo per leggere, ma ne varrà sicuramente la pena!">

    <CardsList 
        items={posts} 
        emptyItemsTitle="oh no!" 
        emptyItemsDesc="se vedi questo messaggio, al momento non c'è alcun post da visualizzare.."/>
</ContentContainer>