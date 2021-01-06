<script>
  import Social from './SocialBtns.svelte';
</script>
<div class="flex flex-col items-center z-10 p-4 select-none">
    <h1 class="name font-bold text-2xl md:text-3xl lg:text-4xl text-white text-center"><slot></slot> <span class="font-cursive text-4xl md:text-6xl lg:text-8xl text-indigo-500 font-semibold">Majkl Zumberi</span></h1>
</div>
<Social/>

<style>
  h1{
    font-family: 'nunito';
  }
  span{
    font-family: 'Alex Brush', cursive;
    text-shadow: 2px 3px rgb(26,32,44);
  }
  
  @keyframes enterText{
    0%{
        transform: translateY(-25%);
        opacity: 0;
        }
    100%{
        transform: translateY(0%);
        opacity: 1;
        }
}
  .name{
    animation: enterText 2s forwards 0s ease;
  }
</style>

