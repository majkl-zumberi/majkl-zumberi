<script>
    import SocialBtns from "./SocialBtns.svelte";
    import {link} from 'svelte-spa-router';
</script>
<footer class="bg-dark-shade flex justify-center">
    <div class="w-full max-w-screen-lg p-4 md:p-8">
        <div class="flex flex-wrap w-full justify-between mb-4">
            <section class="w-full sm:w-4/12 mb-8 sm:mb-0">
                <h1 class="name font-bold font-cursive text-2xl mb-4"><span class="font-cursive  text-indigo-500 ">Majkl Zumberi</span></h1>
                <p class="text-indigo-300">Grazie per aver visitato il mio sito!<span role="img"
                        aria-label="celebrate">✨</span> </p>
            </section>
            <div class="flex w-full sm:w-8/12 sm:justify-end">
                <section>
                    <h1 class="text-indigo-300 text-2xl mb-2">Links</h1>
                    <ul>
                        <li>
                            <div role="link" tabindex="-1"><a use:link class="ul-hover-effect text-indigo-200" href="/about-me">Chi sono</a>
                            </div>
                        </li>
                        <li>
                            <div role="link" tabindex="-1"><a use:link class="ul-hover-effect text-indigo-200" href="/works">Lavori</a>
                            </div>
                        </li>
                        <li>
                            <div role="link" tabindex="-1"><a use:link class="ul-hover-effect text-indigo-200" href="/posts">Posts</a>
                            </div>
                        </li>
                        <li>
                            <div role="link" tabindex="-1"><a use:link class="ul-hover-effect text-indigo-200"
                                    href="/theme">Tema</a></div>
                        </li>
                    </ul>
                </section>
                <section class="ml-16 md:ml-24">
                    <h1 class="text-indigo-300 text-2xl mb-2">Restiamo in contatto!</h1>
                    <div class="-ml-2">
                        <SocialBtns/>
                    </div>
                    <h1 class="text-indigo-300 text-2xl mt-4">Email</h1>
                    <div><a class="text-indigo-200 ul-hover-effect"
                            href="mailto:majklzumberi00@gmail.com">majklzumberi00@gmail.com</a></div>
                </section>
            </div>
        </div>
        <div class="text-center">
            <p class="mb-2 text-indigo-300">© 2021 | by <span class="text-primary font-cursive">
                    Majkl Zumberi</span></p>
        </div>
    </div>
</footer>
<style>
    span{
    font-family: 'Alex Brush', cursive;
  }
  footer{
      background-color: #131921;
  }
</style>