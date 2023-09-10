<script lang="ts">
  import Post from '$lib/components/Post.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div>
  <h1>Drafts</h1>
  <main>
    <div>
      <!-- 2. -->
      {#each data.drafts as post (post.id)}
        <Post {post} />
      {/each}
    </div>
  </main>
</div>
