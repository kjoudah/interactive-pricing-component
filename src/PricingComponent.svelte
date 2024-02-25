<script>
  let checked = false;
  let views = 10000;
  let viewOptions = [10000, 50000, 100000, 500000, 1000000];
  let price = 8.0;
  let minimum = 10000;
  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  $: if (checked) {
    price = viewData[minimum] * 0.75;
  } else {
    price = viewData[minimum];
  }

  let viewData = {
    10000: 8,
    50000: 12,
    100000: 16,
    500000: 24,
    1000000: 32,
  };
  function onViewsChanged(event) {
    minimum = viewOptions.reduce((prev, curr) =>
      Math.abs(event.target.value - prev) < Math.abs(event.target.value - curr)
        ? prev
        : curr
    );
  }
</script>

<article class="pricing-component">
  <div class="pricing-component-header">
    <h3 class="uppercase">
      <span class="uppercase">{formatter.format(views)}</span> Pageviews
    </h3>
    <input
      class="range-indicator"
      type="range"
      min="10000"
      max="1000000"
      list="views-list"
      bind:value={views}
      on:change={onViewsChanged}
    />

    <datalist id="views-list">
      {#each viewOptions as viewOption}
        <option>{viewOption}</option>
      {/each}
    </datalist>
    <div class="price">
      <span class="monthly-price">${price.toFixed(2)}</span>
      <p>/ month</p>
    </div>
    <div class="billing-component">
      <p>Monthly Billing</p>
      <label class="toggle-container">
        <input bind:checked class="toggle-input" type="checkbox" />
        <span class="toggle"></span>
      </label>
      <p>Yearly Billing</p>
      <p class="discount">-25%<span class="hidden-sm">discount</span></p>
    </div>
  </div>
  <div class="divider"></div>
  <div class="pricing-component-footer">
    <ul>
      <li><p>Unlimited websites</p></li>
      <li><p>100% data ownership</p></li>
      <li><p>Email reports</p></li>
    </ul>
    <button class="primary-button" type="button">Start my trial </button>
  </div>
</article>

<style>
  .pricing-component {
    background-color: var(--white);
    --padding: 2rem;
    padding: var(--padding);
    min-width: 300px;
    margin-inline: auto;
    border-radius: 0.5rem;
    max-width: 500px;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
  }

  .pricing-component-header {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .pricing-component-header h3 {
    letter-spacing: 2px;
    order: 1;
  }

  input[type="range"] {
    appearance: none;
    background: transparent;
    cursor: pointer;
    order: 2;
    grid-column: 1/-1;
  }

  .range-indicator::-webkit-slider-runnable-track {
    background-color: var(--light-grayish-blue-slider);
    border-radius: 1rem;
    height: 0.5rem;
  }

  .range-indicator::-webkit-slider-thumb {
    appearance: none;
    margin-top: -12px;
    width: 35px;
    height: 35px;
    position: relative;
    background: url(./assets/icon-slider.svg) center no-repeat
      var(--strong-cyan);
    border-radius: 50%;
    filter: drop-shadow(0 1rem 1rem var(--strong-cyan));
  }

  .range-indicator::-webkit-slider-thumb:active {
    filter: grayscale(50%);
  }

  .price {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    order: 3;
  }

  .monthly-price {
    font-size: 2rem;
    color: var(--dark-desaturated-blue);
    font-weight: var(--weight-800);
  }

  .billing-component {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    order: 4;
    grid-column: 1/-1;
  }

  .toggle-container {
    display: inline-block;
    position: relative;
    width: 50px;
    height: 25px;
    margin-inline: 0.5rem;
    cursor: pointer;
  }

  .toggle-container input {
    width: 0;
    height: 0;
    opacity: 0;
  }
  .toggle {
    height: 100%;
    width: 100%;
    background-color: var(--light-grayish-blue-toggle);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4rem;
  }

  .toggle::before {
    content: "";
    width: 35%;
    aspect-ratio: 1/1;
    background-color: var(--white);
    position: relative;
    top: 15%;
    left: 10%;
    border-radius: 50%;
    display: block;
    transition: all 0.3s ease;
  }

  .toggle:active {
    background-color: var(--strong-cyan);
  }

  .toggle-input:checked + .toggle:before {
    transform: translateX(120%);
  }

  .discount {
    background-color: var(--light-grayish-red);
    color: var(--light-red);
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    font-weight: var(--weight-800);
  }

  .divider {
    height: 1px;
    background-color: var(--pale-blue);
    margin-block: 1.5rem;
    margin-inline: calc(var(--padding) * -1);
  }

  .pricing-component-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .pricing-component-footer ul {
    text-align: center;
  }

  .pricing-component-footer ul p::before {
    content: "";
    background: url(./assets/icon-check.svg) no-repeat bottom;
    width: 25px;
    height: 25px;
    margin-right: 0.5rem;
    display: inline-block;
  }

  .primary-button {
    cursor: pointer;
    background: var(--dark-desaturated-blue);
    padding: 1rem 4rem;
    border: none;
    border-radius: 3rem;
    color: var(--pale-blue);
    font-weight: var(--weight-600);
  }

  .primary-button:hover,
  .primary-button:focus {
    color: var(--white);
  }

  @media (min-width: 700px) {
    .pricing-component-header {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    input[type="range"] {
      order: 3;
    }

    .price {
      order: 2;
    }
  }
</style>
