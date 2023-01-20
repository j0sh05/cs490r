/** @type {import('./$types').PageLoad} */

export async function load() {
    const res = await fetch("http://localhost:8000/allfiles");
    const data = await res.json();
    const students = data.result;

    return {
        age: 38,
        students
    }
}
