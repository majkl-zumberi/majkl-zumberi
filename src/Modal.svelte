<script>
    import MyName from './MyName.svelte';
    import ModalSection from './ModalSection.svelte';
    import {modalStatus} from './stores.js';

    /**
     * toggle body overflow based on modalStatus
     * true==> modal open ==> add overflowHidden
     * false==> modal closed ==> remove overflowHidden
     */
    const actionMap= new Map([
        [true,()=>document.body.classList.add("overflow-hidden")],
        [false,()=>setTimeout(()=>document.body.classList.remove("overflow-hidden"),800)]
    ])
    $:$modalStatus!=undefined && actionMap.get($modalStatus)()
    const gridContent=[
        {
            title:"Lavori",
            subtitle:"che ho svolto",
            path:"/works"
        },
        {
            title:"Chi sono",
            subtitle:"vieni a conoscermi!",
            path:"/about-me",
        },
        {
            title:"tema",
            subtitle:"Tema Chiaro?",
            path:"/theme",
        },
        {
            title:"Posts",
            subtitle:"di cui ne vado fiero",
            path:"/posts",
        },
    ]
</script>

<nav class="fixed top-0 left-0 w-screen h-screen bg-dark flex flex-col lg:flex-row flex-wrap z-20 shadow-md"
     class:open={$modalStatus}
     class:close={!$modalStatus}
     class:default={$modalStatus===undefined}>
    <div class="lg:w-1/2 h-3/5 lg:h-full flex flex-wrap">
        {#each gridContent as {title,subtitle,path},i}
            {#if i==1 || i==2}
            <ModalSection {title} {subtitle} {path} style="background-color:#253041;"/>
            {:else}
            <ModalSection {title} {subtitle} {path}/>
            {/if}
        {/each}
    </div>
    <div class="lg:w-1/2 h-2/5 lg:h-full flex flex-col justify-center items-center bg-dark-shade"
        style="transform: translateY(0%) translateZ(0px);">
        <div style="opacity: 1; transform: translateY(0%) translateZ(0px);">
            <img src="images/m-logo.svg" alt="Logo">
        </div>
        <MyName/>
    </div>
    
</nav>

<style>

    nav{
        background-color: #1f2937;
    }

    @keyframes ModalOpen{
        0% {
        transform:translateY(100%) ;
        
        }
        
        100% {
            transform:translateY(0%) ;
        }
    }
    @keyframes ModalClose{
        0% {
        transform:translateY(0%) scale(1);
        
        }
        
        100% {
            transform:translateY(100%) scale(0);
        }
    }
    .open{
        animation: ModalOpen 1.5s;
    }
    .close{
        animation: ModalClose 1.5s;
        transform: translateY(100%);
    }
    .default{
        display: none;
        transform: translateY(100%);
    }
</style>
