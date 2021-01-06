<script>
    export let title,description,path="#",date="",duration="";
    import { onDestroy, onMount } from 'svelte';

    let observer;
     const setup = ()=> {
         const animateDivs = document.querySelectorAll(".flyFade");
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
 <div class="flyFade w-full p-4 md:w-1/2 lg:w-4/12 overflow-hidden" {...$$restProps}><!--md:w-1/2 lg:w-4/12 da mettere quando ci saranno posts -->
    <div class="relative overflow-hidden h-full" style="transform: none;">
        <div class="h-full bg-indigo-900 shadow-md rounded overflow-hidden hover:border-dark hover:border-8`"
            style="opacity: 1;">
            <div class="relative p-4 transtition duration-100"
                style="transform: translate3d(0px, 0px, 0px);"><a
                    target="_blank"
                    href={path}>
                    <div class="relative text-indigo-300 text-xl uppercase font-black overflow-hidden"
                        {title}>
                        {title}
                    </div>
                </a>
                <div class="text-xs text-secondary font-black mt-2 mb-4">
                    {#if duration}
                    <div class="mb-1"><span class="text-white">{date}</span><span
                        class="px-2 text-indigo-300">•</span><span class="text-white">{duration}</span></div>
                    {/if}
                    
                </div>
                <p class="text-indigo-200">{description}</p>
            </div>
        </div>
    </div>
</div>