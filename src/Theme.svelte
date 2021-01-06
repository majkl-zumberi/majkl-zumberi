<script>
    import ContentContainer from './ContentContainer.svelte';
    import CardsList from './CardsList.svelte';
    let articles=[
        {
            title:"Risparmio energetico!",
            description:"Il vantaggio più comunemente noto e scientifico della modalità scura è che consente di risparmiare il consumo di energia su dispositivi con display OLED o AMOLED."
        },
        {
            title:"Occhi affaticati",
            description:"Hai presente quella sensazione quando dormi comodamente in una stanza buia e qualcuno improvvisamente apre le tende per inondare la stanza di luce? In quel momento senti uno shock improvviso perché l'iride non si è adattata alla quantità di luce di cui ha bisogno per assorbire."
        },
        {
            title:"Riduce l'esposizione alla luce blu",
            description:"Portare il telefono in modalità scura può aiutare a ridurre l'esposizione alla luce blu. L'esposizione alla luce blu è stata collegata ai sintomi dell'affaticamento visivo digitale, inclusi secchezza oculare, mal di testa e visione offuscata."
        }
    ];
</script>
<ContentContainer 
    pageTitle="HEH!"
    pageDescription="invece di cambiare in tema chiaro ti mostro quali benefici si ottengono con il tema scuro e i contro di quello chiaro.  i tuoi occhi mi ringrazieranno">

    <CardsList 
        items={articles} 
        emptyItemsTitle="oh no!" 
        emptyItemsDesc="se vedi questo messaggio, al momento non c'è alcun post da visualizzare.."/>
</ContentContainer>