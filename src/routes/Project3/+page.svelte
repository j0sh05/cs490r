<script lang="ts">
    import { Chart, registerables } from 'chart.js';
    import { onMount } from 'svelte';

    Chart.register(...registerables);
    let barChartElement: HTMLCanvasElement;
    var myChart: Chart;

    let scatterplotData: any[] = [];
    let chartTitle: string = "";
    let YChartTitle: string = "";
    let XChartTitle: string = "";

    const data: any = {
        datasets: [{
            data: scatterplotData
        }]
    }

    async function scatterPlotFunction(link1: string, link2: string, title: string) {
        const link0: string = "http://localhost:8000/";

        scatterplotData.length = 0;
        myChart.destroy();

        const res = await fetch(link0 + link1);
        const data = await res.json();
        const dataSet1 = data.result;

        const res2 = await fetch(link0 + link2);
        const data2 = await res2.json();
        const dataSet2 = data2.result;

        for (let i = 0; i < dataSet1.length; i++) {
            scatterplotData.push({
                x: dataSet1[i].data,
                y: dataSet2[i].data
            });
        }

        chartTitle = title;
        XChartTitle = link1;
        YChartTitle = link2;

        console.log(scatterplotData);
        createNewChart();
    }

    function createNewChart() {

        myChart = new Chart(barChartElement, {
        type: 'scatter',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    align: 'center',
                    title: {
                        display: true,
                        text: chartTitle
                    }
                },
            },
            scales: {
                x: {
                    type: 'linear',
                    title: {
                        display: true,
                        text: XChartTitle
                    }
                },
                y: {
                    type: 'linear', 
                    title: {
                        display: true, 
                        text: YChartTitle
                    }
                }
                
            }
        }
        })

        return myChart;
    }

    onMount(createNewChart)
</script>

<h1>Project 3</h1>

<button on:click={() => scatterPlotFunction("allAttemptedCredits", "allPassedCredits", "Attempted Credits VS Passed Credits")}>
    Attempted Credits VS Passed Credits
</button>
|
<button on:click={() => scatterPlotFunction("allAttemptedCredits", "gpa", "Attempted Credits VS GPA")}>
    Attempted Credits VS GPA
</button>
|
<button on:click={() => scatterPlotFunction("allPassedCredits", "gpa", "Passed Credits VS GPA")}>
    Passed Credits VS GPA
</button>
|

<section class="flex justify-center items-center w-2/3 h-2/3">
    <canvas bind:this={barChartElement} />
</section>