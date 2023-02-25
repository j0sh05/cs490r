<script lang="ts">
    import { Chart } from 'chart.js';
    import { ParallelCoordinatesController, LinearAxis, LineSegment, PCPScale } from 'chartjs-chart-pcp';
    import { onMount } from 'svelte'

    Chart.register(ParallelCoordinatesController, PCPScale, LineSegment);
    Chart.registry.addElements(LinearAxis);

    let ctx: HTMLCanvasElement;
    let myChart: Chart
    let myDataSets: any[] = []
    let myScales: any = {}

    async function getMyData(link: string) {

        myDataSets.length = 0
        myScales = {}
        myChart.destroy()

        const res = await fetch("http://localhost:8000/" + link)
        const data = await res.json()
        const myData: any[] = data.result

        const myAttributes: any[] = Object.keys(myData[0])

        for (let i = 0; i < myAttributes.length; i++) {
            switch(myAttributes[i]) {
                case "gender":
                    myDataSets.push({
                        label: "gender",
                        yAxisID: "gender",
                        data: myData.map((obj) => obj["gender"])
                    })
                    break
                case "major":
                    myDataSets.push({
                        label: "major",
                        yAxisID: "major",
                        data: myData.map((obj) => obj["major"])
                    })
                    break
                case "home":
                    myDataSets.push({
                        label: "home",
                        yAxisID: "home",
                        data: myData.map((obj) => obj["home"])
                    })
                    break
                default:
                    myDataSets.push({
                        label: myAttributes[i],
                        data: myData.map((obj) => obj[myAttributes[i]])
                    })
            }
        }

        if (link == "2012" || link == 'marathon') {
            myScales = {
                gender: {
                    type: "category",
                    labels: ["Male", "Female"],
                    axis: 'y'
                }
            }
        } else {
            myScales = {
                gender: {
                    type: "category",
                    labels: ["Male", "Female"],
                    axis: 'y'
                },
                home: {
                    type: "category",
                    labels: ["Hawaii", "Asia", "US Mainland", "Pacific", "Other International"],
                    axis: 'y'
                },
                major: {
                    type: "category",
                    labels: ["Information Systems", "Information Technology", "Computer Science"],
                    axis: 'y'
                }
            }
        }

        console.log("MyDatSets: " + myDataSets)
        createChart()
    }

    function createChart() {
        myChart = new Chart(ctx, {
        type: 'pcp',
        data: {
            datasets: myDataSets,
        },
        options: {
            scales: myScales
        },
        });
    }

    onMount(createChart)
</script>

<button on:click={() => getMyData("2012")}>2012</button>
|
<button on:click={() => getMyData("2019")}>2019</button>
|
<!-- <button on:click={() => getMyData("marathon")}>Marathon - WARNING: CPU will die!!</button> -->


<section class="flex justify-center items-center w-2/3 h-2/3">
    <canvas bind:this={ctx} />
</section>