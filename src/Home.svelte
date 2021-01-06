<script>
	import Container from './Container.svelte';
	import MyName from './MyName.svelte';
</script>

<main>
	<Container center={true}>
		<MyName>Ciao! sono</MyName>
	</Container>
</main>


<style>
	main {
		text-align: center;
		margin: 0;
		padding: 0;
	}
</style>