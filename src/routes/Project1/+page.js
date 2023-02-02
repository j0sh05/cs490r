/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
    const res = await fetch("http://localhost:8000/allfiles");
    const data = await res.json();
    const students = data.result;

    const res2 = await fetch("http://localhost:8000/topstudents");
    const data2 = await res2.json();
    const topstudents = data2.result;
    
    const res3 = await fetch("http://localhost:8000/younglings");
    const data3 = await res3.json();
    const younglings = data3.result;

    const res4 = await fetch("http://localhost:8000/alleast");
    const data4 = await res4.json();
    const eastern = data4.result;

    const res5 = await fetch("http://localhost:8000/allfemales");
    const data5 = await res5.json();
    const females = data5.result;

    const res6 = await fetch("http://localhost:8000/csmajors");
    const data6 = await res6.json();
    const csmajors = data6.result;

    const res7 = await fetch("http://localhost:8000/usmainland");
    const data7 = await res7.json();
    const gringos = data7.result;

    return {
        students,
        topstudents,
        younglings,
        eastern,
        females,
        csmajors,
        gringos
    }
}
