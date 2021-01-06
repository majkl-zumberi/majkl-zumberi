<script>
  export let center=false;
  export let noscroll=true;
</script>

<div class="home-container w-screen flex flex-col"
     class:justify-center={center} 
     class:items-center={center}
     class:overflow-hidden={noscroll}
     {...$$restProps}>
    <slot></slot>
</div>
<style>
  .home-container{
      height: 90vh;
  }
</style>

