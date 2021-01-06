<script>
    export let items=[];
    export let emptyItemsTitle,emptyItemsDesc;
    import PostSection from './PostSection.svelte';
</script>
<section>
    <div style="opacity: 1;">
        <div>
            <div class="flex flex-wrap justify-start -mx-4"
                style="height: auto; overflow: auto;">
                {#each items as item}
                    <PostSection {...item}/>
                    {:else}
                    <PostSection title={emptyItemsTitle} description={emptyItemsDesc} date="" duration="" path="#" class="md:w-4/5 lg:w-4/5" />
                {/each}
            </div>
        </div>
    </div>
</section>