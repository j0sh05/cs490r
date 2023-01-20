<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>Hello There! here is the data: {data.age}</h1>

{#each data.students as student}
    <p>{student.major}</p>
{/each}