<script>
    import {link} from 'svelte-spa-router';
    import {modalStatus} from './stores.js';

    export let title,subtitle,path;
</script>

<div class="w-1/2 overflow-hidden" {...$$restProps}>
    <div class="flex h-full flex-col justify-end px-4 py-8 bg-dark-shade text-primary"
        style="opacity: 1; transform: translateX(0%) translateZ(0px);">
        <a
            class="text-purple-500 visited:text-purple-500 text-secondary block text-3xl lg:text-5xl font-black uppercase cursor-pointer"
            title={title}
            style="opacity: 1; transform: translateX(0%) translateZ(0px);"
            use:link
            href={path}
            on:click={modalStatus.close}>{title}
        </a>
        <p class="text-indigo-300 text-base text-secondary lg:text-xl"
            style="opacity: 1; transform: translateX(0%) translateZ(0px);">
            {subtitle}
        </p>
    </div>
</div>