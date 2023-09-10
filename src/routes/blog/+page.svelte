<!-- src/routes/+page.svelte -->

<!-- 1. -->
<script lang="ts">
  import Post from '$lib/components/Post.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div>
  <h1>My Blog</h1>
  <main>
    <div>
      <!-- 2. -->
      {#each data.feed as post (post.id)}
        <Post {post} />
      {/each}
    </div>
  </main>
</div>
