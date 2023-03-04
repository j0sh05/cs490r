<script lang="ts">
    import Plotly from 'plotly.js-dist'
    import { onMount } from 'svelte';
    
    let labels: string[] = []
    let dimensions: any[] = []
    let theData: any[] = [{
        type: 'parcoords',
        pad: [80,80,80,80],
        line: {
            color: labels,
            colorscale: [[labels[0], 'red']]
        },
        dimensions: dimensions,
    }]
    let layout = {
        width: 800
    }
    
    async function setDimensions(link: string) {
        const res = await fetch("http://localhost:8000/" + link)
        const data = await res.json()
        const myData: any[] = data.result

        labels = Object.keys(myData[0])

        for (let i = 0; i < labels.length; i++) {
            switch(labels[i]) {
                case "gender":
                    const genders: number[] = []
                    myData.map((obj) => {
                        if (obj["gender"] == "M"){
                            genders.push(1)
                        } else {
                            genders.push(2)
                        }
                    })
                    dimensions.push({
                        range: [1,2],
                        label: labels[i],
                        values: genders,
                        tickvals: [1,2],
                        ticktext: ["Male", "Female"]

                    })
                    break
                case "major":
                    const majors: number[] = []
                    myData.map((obj) => {
                        if (obj["major"] == "Information Systems"){
                            majors.push(1)
                        } else if (obj["major"] == "Information Technology"){
                            majors.push(2)
                        } else {
                            majors.push(3)
                        }
                    })
                    dimensions.push({
                        range: [1,2],
                        label: labels[i],
                        values: majors,
                        tickvals: [1,2,3],
                        ticktext: ["Information Systems", "Information Technology", "Computer Science"]

                    })
                    break
                case "home":
                    const home: number[] = []
                    myData.map((obj) => {
                        if (obj["home"] == "Hawaii"){
                            home.push(1)
                        } else if (obj["home"] == "Asia"){
                            home.push(2)
                        } else if (obj["home"] == "US Mainland"){
                            home.push(3)
                        } else if (obj["home"] == "Pacific") {
                            home.push(4)
                        } else {
                            home.push(5)
                        }
                    })
                    dimensions.push({
                        range: [1,2],
                        label: labels[i],
                        values: home,
                        tickvals: [1,2,3,4,5],
                        ticktext: ["Hawaii", "Asia", "US Mainland", "Pacific", "Other International"]

                    })
                    break
                case "agegroup": 
                    const agegroup: number[] = []
                    myData.map((obj) => {
                        if (obj["agegroup"] == "18-21"){
                            agegroup.push(1)
                        } else if (obj["agegroup"] == "22-24"){
                            agegroup.push(2)
                        } else if (obj["agegroup"] == "25-29"){
                            agegroup.push(3)
                        } else if (obj["agegroup"] == "30-34") {
                            agegroup.push(4)
                        } else {
                            agegroup.push(5)
                        } 
                    })
                    dimensions.push({
                        range: [1,2],
                        label: labels[i],
                        values: agegroup,
                        tickvals: [1,2,3,4,5],
                        ticktext: ["18-21", "22-24", "25-29", "30-34", "35-64"]

                    })
                default:
                    dimensions.push({
                        range: [1,200],
                        label: labels[i],
                        values: myData.map((obj) => obj[labels[i]]),

                    })
            }
        }

        makeChart()
    }

    function makeChart() {
        Plotly.newPlot('table', theData, layout)
    }

    onMount(makeChart)
</script>


<div id="my_dataviz"></div>