<script>
	import Router, {link} from 'svelte-spa-router';
	import Works from './Works.svelte';
	import AboutMe from './AboutMe.svelte';
	import Theme from './Theme.svelte';
	import Posts from './Posts.svelte';
	import Home from './Home.svelte';
	import Header from './Header.svelte';
	import Modal from './Modal.svelte';
</script>
<Header/>
<Modal/>
<Router routes={{
	'/':Home,
	'/works':Works,
	'/about-me':AboutMe,
	'/theme':Theme,
	'/posts':Posts
}} />
