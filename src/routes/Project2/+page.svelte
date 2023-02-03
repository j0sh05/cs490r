
<script lang="ts">
    import { Chart, registerables, type ChartTypeRegistry } from 'chart.js';
    import { onMount } from 'svelte';

    Chart.register(...registerables);
    let barChartElement: HTMLCanvasElement;

    let chartType: keyof ChartTypeRegistry = 'bar';
    let chartValues: number[] = [];
    let chartLables: string[] = [];
    let chartTitle: string = '';
    let chartColor: string = '';
    var myChart: Chart;
    // The 6 different GPA averages
    let a: number = 0;
    let b: number = 0;
    let c: number = 0;
    let d: number = 0;
    let e: number = 0;
    let f: number = 0;
    let g: number = 0;

    
    function changeChartType() {
        if (chartType == 'bar') {
            myChart.destroy();
            chartType = 'line';
            createNewChart();
        } else {
            myChart.destroy();
            chartType = 'bar';
            createNewChart();
        }
    }
    async function getNumberOfMajors() {
        const res = await fetch("http://localhost:8000/numOfMajors");
        const data = await res.json();
        const numOfMajors = data.result;
        chartValues.length = 0;
        chartLables.length = 0;
        myChart.destroy();
        for (let x in numOfMajors) {
        chartValues.push(numOfMajors[x].numMajors)
        chartLables.push(numOfMajors[x].major)
        }
        chartTitle = 'Number of Majors';
        chartColor = 'red';
        createNewChart();
    }

    async function getHome() {
        const res2 = await fetch("http://localhost:8000/studentsByHome");
        const data2 = await res2.json();
        const atHome = await data2.result;
        chartValues.length = 0;
        chartLables.length = 0;
        myChart.destroy();
        for (let x in atHome) {
            chartValues.push(atHome[x].numHome);
            chartLables.push(atHome[x].home);
        }
        chartTitle = 'Number of students per area';
        chartColor = 'green';
        createNewChart();
    }

    async function getAverageGPA() {
        const res = await fetch("http://localhost:8000/avgGPA");
        const data = await res.json();
        const avgGPA = data.result;
        chartValues.length = 0;
        chartLables.length = 0;
        myChart.destroy();
        for (let x in avgGPA) {
        chartValues.push(avgGPA[x].gpa)
        chartLables.push(avgGPA[x].major)
        }
        chartTitle = 'Average GPA per major';
        chartColor = 'yellow';
        createNewChart();
    }

    async function getAverageCredits() {
        const res = await fetch("http://localhost:8000/avgCredits");
        const data = await res.json();
        const avgCredits = data.result;
        chartValues.length = 0;
        chartLables.length = 0;
        myChart.destroy();
        for (let x in avgCredits) {
        chartValues.push(avgCredits[x].credits)
        chartLables.push(avgCredits[x].gradyear)
        }
        chartTitle = 'Average Attempted Credits';
        chartColor = 'blue';
        createNewChart();
    }

    async function getPassedCredits() {
        const res = await fetch("http://localhost:8000/avgPassed");
        const data = await res.json();
        const avgPassed = data.result;
        chartValues.length = 0;
        chartLables.length = 0;
        myChart.destroy();
        for (let x in avgPassed) {
        chartValues.push(avgPassed[x].credits)
        chartLables.push(avgPassed[x].gradyear)
        }
        chartTitle = 'Average Attempted Credits';
        chartColor = 'purple';
        createNewChart();
    }

    async function getGPAs() {
        const res = await fetch("http://localhost:8000/allGPA");
        const data = await res.json();
        const allGPA = data.result;

        chartValues.length = 0;
        chartLables.length = 0;
        // Calculations for getting Num of students per GPA
        for (let i in allGPA) {
            if (allGPA[i].gpa >= 2.25 && allGPA[i].gpa <= 2.5) {
                a += 1;
            } else if (allGPA[i].gpa >= 2.51 && allGPA[i].gpa <= 2.75) {
                b += 1;
            } else if (allGPA[i].gpa >= 2.76 && allGPA[i].gpa <= 3.0) {
                c += 1;
            } else if (allGPA[i].gpa >= 3.1 && allGPA[i].gpa <= 3.25) {
                d += 1;
            } else if (allGPA[i].gpa >= 3.26 && allGPA[i].gpa <= 3.5) {
                e += 1;
            } else if (allGPA[i].gpa >= 3.51 && allGPA[i].gpa <= 3.75) {
                f += 1;
            } else {
                g += 1
            }
        }
        myChart.destroy();
        chartValues = [a, b, c, d, e, f];
        chartLables = [
            '2.25 - 2.5',
            '2.51 - 2.75',
            '2.76 - 3.0',
            '3.1 - 3.25', 
            '3.26 - 3.5',
            '3.51 - 3.75',
            '3.76 - 4.0'
        ]
        chartTitle = 'Num of Students by GPA';
        chartColor = 'orange';
        createNewChart();
    }

    const chartData = {
        labels: chartLables,
        datasets: [{
            label: chartTitle,
            data: chartValues,
            borderColor: [chartColor],
            borderRadius: 4,
            borderWidth: 2, 
        }]
    }

    function createNewChart() {
            myChart = new Chart(barChartElement, {
            type: chartType,
            data: chartData,
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: chartTitle,
                            color: chartColor,
                            font: {size: 22,  family: 'Merriweather'}
                        }
                    }
                    
                }
            }
        })
        
        return myChart;
    }

    onMount(() => {
        createNewChart();
    })
</script>

<button on:click={getNumberOfMajors}>
    Get Number of Majors
</button>
| 
<button on:click={getHome}>
    Get Number by Home
</button>
| 
<button on:click={getAverageGPA}>
    Get Average GPA
</button>
| 
<button on:click={getAverageCredits}>
    Get Average Credits Attempted
</button>
| 
<button on:click={getPassedCredits}>
    Get Average Credits Passed
</button>
|
<!-- <button on:click={getGPAs}>
    Get Num of Students per GPA
</button>
| -->
<button on:click={changeChartType}>
    Change from Bar to Line
</button>


<section class="flex justify-center items-center w-1/2 h-1/2">
    <canvas bind:this={barChartElement} />
</section>

