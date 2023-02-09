<script>
    import Link from "./Link.svelte";
</script>

<section class="flex justify-around py-5 bg-slate-900 text-white">
    <h1 class="hover:text-slate-200 active:text-slate-300 text-xl"><a href="/">Joshua Krueger's CS490R Website</a></h1>

    <div class="flex space-x-7 font-serif text-lg">
        <Link link={"Project0"} name={"Project 0"} />
        <Link link={"Project1"} name={"Project 1"} />
        <Link link={"Project2"} name={"Project 2"} />
        <Link link={"Project3"} name={"Project 3"}/>
    </div>
</section>