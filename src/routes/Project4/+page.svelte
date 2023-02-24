<script lang="ts">
    import { Chart } from 'chart.js';
    import { ParallelCoordinatesController, LinearAxis, LineSegment, PCPScale } from 'chartjs-chart-pcp';
    import { onMount } from 'svelte'
    import { each } from 'svelte/internal';

    Chart.register(ParallelCoordinatesController, PCPScale, LineSegment);
    Chart.registry.addElements(LinearAxis);

    let ctx: HTMLCanvasElement;
    let myData: any[] = []
    let myAttributes: string[] = []
    let myChart: Chart
    let myDataSets: any[] = []

    async function getMyData(link: string) {

        myDataSets.length = 0
        myData.length = 0
        myAttributes.length = 0
        myChart.destroy()

        const res = await fetch("http://localhost:8000/" + link)
        const data = await res.json()
        myData = data.result

        myAttributes = Object.keys(myData[0])

        for (let i =0; i < myAttributes.length; i++) {
            switch(myAttributes[i]) {
                case "gender":
                    myDataSets.push({
                        label: "gender",
                        type: "category",
                        labels: ["Male", "Female"],
                        data: myData.map((obj) => obj["gender"])
                    })
                    break
                case "major":
                    myDataSets.push({
                        label: "major",
                        type: "category",
                        labels: ["Information Systems", "Information Technology", "Computer Science"],
                        data: myData.map((obj) => obj["major"])
                    })
                    break
                case "home":
                    myDataSets.push({
                        label: "home",
                        type: "category",
                        labels: ["Hawaii", "Asia", "US Mainland", "Pacific", "Other International"],
                        data: myData.map((obj) => obj["home"])
                    })
                    break
                default:
                    myDataSets.push({
                        label: myAttributes[i],
                        type: "linear",
                        data: myData.map((obj) => obj[myAttributes[i]])
                    })
            }
        }

        console.log("MyDatSets: " + myDataSets)
        createChart()
    }

    function createChart() {
        myChart = new Chart(ctx, {
        type: 'pcp',
        data: {
            labels: myAttributes,
            datasets: myDataSets,
        },
        options: {},
        });
    }

    onMount(createChart)
</script>

<h1>Parallel Coordinates project</h1>

<button on:click={() => getMyData("2012")}>2012</button>
|
<button on:click={() => getMyData("2019")}>2019</button>


<section class="flex justify-center items-center w-2/3 h-2/3">
    <canvas bind:this={ctx} />
</section>