<script>
    import Social from './SocialBtns.svelte';
    import { onDestroy, onMount } from 'svelte';

    let observer;
     const setup = ()=> {
         const animateDivs = document.querySelectorAll(".anim");
         observer = new IntersectionObserver((entries)=>{
             entries.forEach((entry)=>{
                 if(entry.intersectionRatio >0){
                     entry.target.style.opacity = "1";
                     entry.target.style.animation = "flyAndFade 1.1s forwards ease-out"
                 } else {
                     entry.target.style.opacity = "0";
                     entry.target.style.animation = "none";
                 }
             })
         });
         animateDivs.forEach(div=>observer.observe(div))
        
     }
     onMount(setup);
     onDestroy(()=>typeof observer!== 'undefined' && observer.disconnect());
</script>
<div class="flex flex-wrap items-center mb-8 md:mb-32 lg:mb-40">
    <div class="anim order-2 lg:order-1 lg:w-1/2 mt-8 lg:mt-0 mb-16">
        <div class="lg:max-w-xl flex flex-col justify-center align-center m-auto p-4 text-center lg:text-left">
            <div class="mb-4" style="opacity: 1; transform: translateY(0%);"><span
                    class="text-indigo-200 text-xl md:text-2xl lg:text-3xl">Ciao! sono </span><span
                    class="name font-bold text-2xl md:text-3xl lg:text-4xl font-cursive text-indigo-500">Majkl zumberi</span></div>
            <p class="text-base text-indigo-100 md:text-2xl mb-4" style="opacity: 1; transform: translateY(0%);">Sono un Junior web developer e
                studente presso la Jobs Academy!🚩 Ho una passione
                per la programmazione, specialmente con Javascript e i suoi framework <span style="color:#dd0030">Angular</span>, <span style="color:#41b883">Vue</span> e ultimamente <span style="color:#ff3e00">Svelte</span>!</p>
            <div class="m-auto lg:mx-0" style="opacity: 1; transform: translateY(0%);">
                <Social/>
            </div>
        </div>
    </div>
    <div class="anim relative order-1 lg-order-2 w-full lg:w-1/2 h-full">
        <img class="rounded-3xl" src="/images/majklzumberi.png" alt="majkl zumberi">
    </div>
</div>

<style>
    img{margin:0 auto; max-width: 70%; height: auto;}
    span.name{font-family: 'Alex Brush', cursive;}
</style>