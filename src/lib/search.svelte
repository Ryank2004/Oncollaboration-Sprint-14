<form>
  <input type="text" placeholder="Search" id="search" name="search">
  <button type="submit">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path fill="currentColor" fill-rule="evenodd" d="M10 2a8 8 0 1 0 4.906 14.32l5.387 5.387a1 1 0 0 0 1.414-1.414l-5.387-5.387A8 8 0 0 0 10 2m-6 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0" clip-rule="evenodd"></path>
    </svg>
  </button>
</form>


<style>
  form {
    margin: 1rem auto;
    display: flex;
    width: 80vw;
  }

  input {
    padding: var(--padding-label);
    width: 85%;
    border: none;
    border-start-start-radius: var(--border-radius-small);
    border-end-start-radius: var(--border-radius-small);
  }

  ::placeholder {
    color: var(--text-color);
  }

  button {
    padding: var(--padding-label);
    width: 15%;
    background-color: var(--primary-color);
    border: none;
    border-start-end-radius: var(--border-radius-small);
    border-end-end-radius: var(--border-radius-small);
    cursor: pointer;
  }

  button svg path {
    fill: var(--alt-text-color);
  }

  @media only screen and (min-width: 400px) {
    input {
      width: 90%;
    }

    button {
      width: 10%;
    }
  }

  @media only screen and (min-width: 1080px) {
    form {
      flex-direction: row-reverse;
    }

    input {
      width: 95%;
      border-start-start-radius: 0;
      border-end-start-radius: 0;
      border-start-end-radius: var(--border-radius-small);
      border-end-end-radius: var(--border-radius-small);
    }

    button {
      width: 5%;
      background-color: white;
      border-start-start-radius: var(--border-radius-small);
      border-end-start-radius: var(--border-radius-small);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
    }

    button svg path {
      fill:var(--primary-color);
    }
  }
</style>