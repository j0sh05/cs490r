<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let answer = "allfiles";
</script>

<div class="m-5">
    <button on:click={() => answer = "allfiles"} class="bg-black text-white font-serif h-12 w-100 px-3 opacity-60 hover:opacity-70 active:opacity-100 rounded-2xl text-md ">All Files</button>
    <button on:click={() => answer = "younglings"} class="bg-black text-white font-serif h-12 w-100 px-3 opacity-60 hover:opacity-70 active:opacity-100 rounded-2xl text-md ">Younglings</button>
    <button on:click={() => answer = "topstudents"} class="bg-black text-white font-serif h-12 w-100 px-3 opacity-60 hover:opacity-70 active:opacity-100 rounded-2xl text-md ">Top Students</button>
    <button on:click={() => answer = "eastern"} class="bg-black text-white font-serif h-12 w-100 px-3 opacity-60 hover:opacity-70 active:opacity-100 rounded-2xl text-md ">Asia Pacific</button>
    <button on:click={() => answer = "females"} class="bg-black text-white font-serif h-12 w-100 px-3 opacity-60 hover:opacity-70 active:opacity-100 rounded-2xl text-md ">All Female Students</button>
    <button on:click={() => answer = "us-mainland"} class="bg-black text-white font-serif h-12 w-100 px-3 opacity-60 hover:opacity-70 active:opacity-100 rounded-2xl text-md ">All US Students</button>
</div>

<div class="grid grid-cols-4 gap-4 p-5">
    {#if answer == "allfiles"}
        {#each data.students as student}
            <div class="flex bg-black text-white w-full h-full items-center justify-center flex-col">
                <p><strong>Gender:</strong> {student.gender}</p>
                <p><strong>Age Group:</strong> {student.agegroup}</p>
                <p><strong>GPA:</strong> {student.gpa}</p>
                <p><strong class="text">Major:</strong> {student.major}</p>
                <p><strong class="text">Home:</strong> {student.home}</p>
            </div>
        {/each}
    {:else if answer == "topstudents"}
        {#each data.topstudents as student}
        <div class="flex bg-black text-white w-full h-full items-center justify-center flex-col">
            <p><strong>Gender:</strong> {student.gender}</p>
            <p><strong>Age Group:</strong> {student.agegroup}</p>
            <p><strong>GPA:</strong> {student.gpa}</p>
            <p><strong class="text">Major:</strong> {student.major}</p>
        </div>
        {/each}
    {:else if answer == "eastern"}
        {#each data.eastern as student}
        <div class="flex bg-black text-white w-full h-full items-center justify-center flex-col">
            <p><strong>Gender:</strong> {student.gender}</p>
            <p><strong>Age Group:</strong> {student.agegroup}</p>
            <p><strong>GPA:</strong> {student.gpa}</p>
            <p><strong class="text">Major:</strong> {student.major}</p>
            <p><strong class="text">Home:</strong> {student.home}</p>
        </div>
        {/each}
    {:else if answer == "females"}
        {#each data.females as student}
        <div class="flex bg-black text-white w-full h-full items-center justify-center flex-col">
            <p><strong>Gender:</strong> {student.gender}</p>
            <p><strong>Age Group:</strong> {student.agegroup}</p>
            <p><strong>GPA:</strong> {student.gpa}</p>
            <p><strong class="text">Major:</strong> {student.major}</p>
        </div>
        {/each}
    {:else if answer == "csmajors"}
        {#each data.csmajors as student}
        <div class="flex bg-black text-white w-full h-full items-center justify-center flex-col">
            <p><strong>Gender:</strong> {student.gender}</p>
            <p><strong>Age Group:</strong> {student.agegroup}</p>
            <p><strong>GPA:</strong> {student.gpa}</p>
            <p><strong class="text">Major:</strong> {student.major}</p>
        </div>
        {/each}
    {:else if answer == "younglings"}
        {#each data.younglings as student}
        <div class="flex bg-black text-white w-full h-full items-center justify-center flex-col">
            <p><strong>Gender:</strong> {student.gender}</p>
            <p><strong>Age Group:</strong> {student.agegroup}</p>
            <p><strong>GPA:</strong> {student.gpa}</p>
            <p><strong class="text">Major:</strong> {student.major}</p>
        </div>
        {/each}
    {:else if answer == "us-mainland"}
        {#each data.gringos as student}
        <div class="flex bg-black text-white w-full h-full items-center justify-center flex-col">
            <p><strong>Gender:</strong> {student.gender}</p>
            <p><strong>Age Group:</strong> {student.agegroup}</p>
            <p><strong>GPA:</strong> {student.gpa}</p>
            <p><strong class="text">Major:</strong> {student.major}</p>
            <p><strong class="text">Home:</strong> {student.home}</p>
        </div>
        {/each}
    {:else}
        <p>No Data, sorry!</p>

    {/if}
</div>

