<script>
    export let items=[1];
    export let listTitle;
    import AccordionItem from './AccordionItem.svelte';
    let skills=[
        {
            title:"FrontEnd",
            value:"Html5, CSS, Javascript,Typescript, Angular, Vue, Svelte"
        },
        {
            title:"Backend",
            value:"Node.js, Nest,js, Java, Spring"
        },
        {
            title:"Database",
            value:"Mysql, Firebase, FireStore, MongoDB"
        },

    ]
</script>
<section>
    <div style="opacity: 1;">
        <div>
            <h1 class="text-purple-500 text-primary text-5xl md:text-8xl font-black leading-none uppercase"
                            style="transform: translateY(0px);">{listTitle}</h1>
            <div class="flex flex-wrap justify-start -mx-4"
                style="height: auto; overflow: auto;">
                {#each items as item}
                    <AccordionItem skills={skills}/>
                {/each}
            </div>
        </div>
    </div>
</section>