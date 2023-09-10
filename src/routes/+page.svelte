<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="container mx-auto">
  <h1 class="text-3xl font-bold underline">Hello, SvelteKit!</h1>

  <ul class="list-inside list-disc">
    {#each data.countries as country}
      <li>{country.name}</li>
    {/each}
  </ul>
</div>
