<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let answer = "younglings";
</script>

{#if answer == "addfiles"}
    {#each data.students as student}
    <p>{student.gpa}</p>
    {/each}
{:else if answer == "topstudents"}
    {#each data.topstudents as student}
    <p>{student.gpa}</p>
    {/each}
{:else if answer == "eastern"}
    {#each data.eastern as student}
    <p>{student.gpa}</p>
    {/each}
{:else if answer == "females"}
    {#each data.topstudents as student}
    <p>{student.gpa}</p>
    {/each}
{:else if answer == "csmajors"}
    {#each data.csmajors as student}
    <p>{student.gpa}</p>
    {/each}
{:else if answer == "younglings"}
    {#each data.younglings as student}
    <p>{student.gpa}</p>
    {/each}

{/if}


