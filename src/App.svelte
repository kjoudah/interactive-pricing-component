<script>
  import { fade } from "svelte/transition";
  import PricingComponent from "./PricingComponent.svelte";
  import { onMount } from "svelte";
  let init = false;

  onMount(() => {
    init = true;
  });
</script>

{#if init}
  <main transition:fade={{ duration: 1000 }}>
    <div class="heading" transition:fade>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. <br /> No credit card required.</p>
    </div>
    <PricingComponent />
  </main>
{/if}

<style>
  main {
    min-height: 100%;
    padding: 2rem;
  }

  .heading {
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 3rem 1rem;
    gap: 1rem;
  }

  .heading h1 {
    line-height: 2rem;
  }
</style>
