<script lang="ts">
  import { goto } from '$app/navigation';
  // @ts-ignore
  import type { PageData } from './$types';
  // PageData 를 생성하는 script 가 없기 때문에 types 를 정의할 수 없다
  // 그래서 @ts-ignore 를 사용하여 무시하도록 한다

  export let post: PageData;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="post" on:click={() => goto(`/blog/p/${post.id}`)}>
  <h2>{post.title}</h2>
  <small
    >{post.author?.name ? `By ${post.author.name}` : 'Unknown author'}</small
  >
  <p>{@html post.content}</p>
</div>

<style>
  div {
    color: inherit;
    padding: 2rem;
  }
  .post {
    background: white;
    transition: box-shadow 0.1s ease-in;
  }

  .post:hover {
    box-shadow: 1px 1px 3px #aaa;
    cursor: pointer;
  }

  .post,
  .post {
    margin-top: 2rem;
  }
</style>
