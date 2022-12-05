<script>
  import { page } from "$app/stores";
</script>

<div class="content">
  <div class="error-svg">
    <svg class="error" width="60%" height="100%">
      <h1 id="error-not-found" color="#CC7575" >Error</h1>
    </svg>
  </div>
  <div class="error-text">
    <h2>{$page.status}</h2>
    <h3>{$page.error.message}</h3>
  </div>
</div>

<style>
  svg {
    font-size: 7vh;
  }

  .content {
    position: relative;
    top: 10vh;
    left: 10%;
    width: 60%;
    height: 100%;
  }

  .error-text {
    margin-top: -5%;
  }

  .error {
    margin-left: -1%;
    height: 9vh;
    text-anchor: top;
    stroke: var(--white);
  }


  @media (min-aspect-ratio: 1/1) {
    .content {
      top: 11vh;
      left: 25%;
      width: 50%;
      height: 100%;
    }

    .error-text {
      margin-top: -2%;
    }
  }
</style>
