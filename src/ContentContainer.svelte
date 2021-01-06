<script>
    import Container from './Container.svelte';
    import Footer from './Footer.svelte';
    export let pageTitle,pageDescription;
</script>
<Container noscroll={false} style="background-color:#1f2937;" class="overflow-y-hidden">
    <div class="pt-20" style="max-width:100vw;width:100vw;">
        <div style="opacity: 1; transform: translateX(0px);">
            <div class="max-w-screen-lg  pt-4 md:pt-10 pb-40 px-4 m-auto overflow-hidden">
                <header class="jsx-1776781892 overflow-hidden mb-10 md:mb-20">
                    <div class="jsx-1776781892 overflow-hidden mb-4 lg:mb-8">
                        <h1 class="text-purple-500 text-primary text-5xl md:text-8xl font-black leading-none uppercase"
                            style="transform: translateY(0px);">{pageTitle}</h1>
                    </div>
                    <p class="text-indigo-300 text-lg md:text-xl" style="opacity: 1; transform: translateY(0px);">{pageDescription}</p>
                </header>
                <slot></slot>
            </div>
        </div>
        
        <Footer/>
    </div>
</Container>