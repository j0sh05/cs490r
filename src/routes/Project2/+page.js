/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
    const res = await fetch("http://localhost:8000/numOfMajors");
    const data = await res.json();
    const numOfMajors = data.result;

    return {
        numOfMajors
    }
}