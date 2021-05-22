<script>
	import Row from 'sveltestrap/src/Row.svelte';
	import Col from 'sveltestrap/src/Col.svelte';

	import axios from 'axios';
	import { onMount } from 'svelte';
	let input = 0;
	let typeOfTransaction = '+';
    let transactions = [];

    const serverURI = 'http://localhost:4000'
	onMount(async () => {
		const { data } = await axios.get(serverURI + '/api/transactions');
        transactions = data;
	});

    async function addTransaction(){
        const transaction = {
            date: new Date().getTime(),
            value: typeOfTransaction === "+" ? input : input * -1
        };
        const response = await axios.post(serverURI + '/api/transactions',transaction)
        transactions = [response.data, ...transactions];
        input = 0;
    }

    async function removeTransaction(id){
        const response = await axios.delete(serverURI + '/api/transactions/'+ id);
        if(response.data.id === id){
            transactions = transactions.filter(t => t._id !== id)
        }
    }
</script>

<style  lang="scss">
	h1 {
		color: red;
		&::before {
			content: ':) ';
		}
	}
</style>

<svelte:head>
	<title>Homepage</title>
</svelte:head>
<Row>
	<Col>
		<h1>Welcome to SvelteKit</h1>
		<select name="" id="" bind:value={typeOfTransaction}>
			<option value="+">+</option>
			<option value="-">-</option>
		</select>
		<input type="number" placeholder="Amount of money" bind:value={input} />
        <button on:click={addTransaction}>Save</button>
		<p>{input}</p>
		<p>{typeOfTransaction}</p>

        {#each transactions as transaction (transaction._id)}
        <p>{transaction.value} <button on:click={() => removeTransaction(transaction._id)}>DEL</button></p>
        {/each}
	</Col>
</Row>


