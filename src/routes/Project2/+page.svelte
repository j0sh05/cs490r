
<script>
    /** @type {import('./$types').PageData} */

    export let data;
    let chartValues = [];
    let chartLables = [];

    for (let x in data.numOfMajors) {
        chartValues.push(data.numOfMajors[x].numMajors)
        chartLables.push(data.numOfMajors[x].major)
        console.log(data.numOfMajors[x]);
    }

    console.log(chartLables);
    
</script>

