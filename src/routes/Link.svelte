<script lang="ts">
    export let link: string;
    export let name: string;
</script>

<a class="hover:text-slate-200 active:text-slate-300" href="/{link}">{name}</a>