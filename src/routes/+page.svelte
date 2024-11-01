<script lang="ts">
  import { ic } from '../stores/ic';

  let greeting = $state('');
  let input =  $state('');
  let loading =  $state(false);

  /**
   * Handle the form submission
   * @param event
   */
  async function handleOnSubmit(event: Event) {
    loading = true;
		greeting = 'loading ...';
		try {
			// Call the IC
			greeting = await $ic.actor.sayHelloTo(input);
			loading = false;

		} catch (err: unknown) {
			console.error(err);
		}
  }
</script>

<div class="p-4">
  <h1 class="text-3xl font-bold underline p-2">
    Hello freshman !
  </h1>  
  <div class="w-[50%]">
    <p class="p-2">
      Welcome to the Application Development Skills Course! This beginner-friendly course is designed to guide you through building web applications using the Motoko programming language on the Internet Computer. Whether you’re new to programming or seeking to expand your development skills, this course will provide the foundation you need to get started.
    </p>
    <p class="p-2">
      This template is built with Svelte 5, SvelteKit, Tailwind CSS, and Motoko, offering a streamlined setup for developing web applications on the Internet Computer.
    </p>
  </div>

  <div class="p-2">
    <p>
      Give me your name and say
    </p>
    <form>
			<input id="name" alt="Name" type="text" bind:value={input} placeholder="Say hello to"/>
			<button type="submit" disabled={loading} onclick={handleOnSubmit}>Click Me!</button>
		</form>

		<div> {greeting} </div>

  </div>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>