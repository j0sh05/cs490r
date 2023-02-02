
<script lang="ts">
    /** @type {import('./$types').PageData} */
    import { Chart, registerables } from 'chart.js';
    import { onMount } from 'svelte';

    Chart.register(...registerables);

    export let data;
    let chartValues = [];
    let chartLables = [];

    for (let x in data.numOfMajors) {
        chartValues.push(data.numOfMajors[x].numMajors)
        chartLables.push(data.numOfMajors[x].major)
        console.log(data.numOfMajors[x]);
    }

    const chartData = {
        // TODO
    }
</script>

