<script>
    const fall = '/img/fall.jpg';
    const mountain = '/img/mountains.jpg';
    const ocean = '/img/ocean.jpg';
    const room = '/img/room.jpg';
    let variable = room;

</script>

<div class="flex justify-center items-center w-full h-screen bg-center bg-no-repeat bg-cover" style="background-image: url({variable});">
    <div class="w-1/4 h-1/2 bg-slate-900 opacity-70 shadow-2xl shadow-white rounded-3xl flex flex-col justify-center items-center gap-4">
        <h4 class="text-white font-serif flex text-center">Press a button to change the background</h4>
        <div class="text-white grid grid-cols-2 grid-rows-2 gap-4">
            <button on:click={() => variable = mountain} class="bg-white text-black font-serif h-12 w-100 px-3 opacity-50 hover:opacity-70 active:opacity-100 rounded-2xl text-lg">Mountain</button>
            <button on:click={() => variable = fall} class="bg-white text-black font-serif h-12 w-100 px-3 opacity-50 hover:opacity-70 active:opacity-100 rounded-2xl text-lg">Fall</button>
            <button on:click={() => variable = room} class="bg-white text-black font-serif h-12 w-100 px-3 opacity-50 hover:opacity-70 active:opacity-100 rounded-2xl text-lg">Room</button>
            <button on:click={() => variable = ocean} class="bg-white text-black font-serif h-12 w-100 px-3 opacity-50 hover:opacity-70 active:opacity-100 rounded-2xl text-lg">Ocean</button>
        </div>
    </div>
</div>
