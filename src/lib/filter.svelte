<form action="" id="filter" name="filter">
  <label>
    <input type="checkbox" id="breast">
    Breast
  </label>

  <label>
    <input type="checkbox" id="gastrointestinal">
    Gastrointestinal
  </label>

  <label>
    <input type="checkbox" id="gynaecology">
    Gynaecology
  </label>

  <label>
    <input type="checkbox" id="head-neck">
    Head & neck
  </label>

  <label>
    <input type="checkbox" id="lung">
    Lung
  </label>

  <label>
    <input type="checkbox" id="neuro-oncology">
    Neuro-oncology
  </label>

  <label>
    <input type="checkbox" id="prostate">
    Prostate
  </label>

  <label>
    <input type="checkbox" id="urology">
    Urology
  </label>
</form>

<style>
  form {
    display: flex;
    overflow-x: auto;
    width: 99vw;
    -webkit-mask: linear-gradient(90deg,#0000,#000 5% 95%,#0000);
  }

  label {
    margin: .2rem;
    padding: var(--padding-label);
    text-transform: uppercase;
    background-color: var(--background-category-color);
    border-radius: var(--border-radius-small);
    flex-shrink: 0;
    cursor: pointer;
  }

  label:focus-within {
    outline: var(--focus);
    border-radius: var(--border-radius-small);
  }

  label:not(:focus-visible) {
    outline: 0;
  }
  
  label:has(input:checked) {
    background-color: var(--primary-color);
    color: var(--alt-text-color);
  }

  input {
    position: absolute;
    top: -999999em;
  }

  @media only screen and (min-width:600px) {
    form {
      flex-wrap: wrap;
      justify-content: center;
    }

    label {
      margin-inline: .5rem;
    }
  }
</style>