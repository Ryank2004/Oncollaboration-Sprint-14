<div class="filter-container">
  <legend>Filter</legend>
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
</div>


<style>
  .filter-container {
    margin: var(--margin-center);
    width: fit-content;
  }

  legend {
    text-align: center;
  }

  form {
    display: flex;
    flex-wrap: wrap;
  }

  label {
    margin: .2rem;
    padding: var(--padding-label);
    text-transform: uppercase;
    background-color: var(--background-category-color);
    border-radius: var(--border-radius-small);
    cursor: pointer;
  }

  label:focus-within {
    outline: var(--focus);
    border-radius: var(--border-radius-small);
  }

  label:has(input:checked) {
    background-color: var(--primary-color);
    color: var(--alt-text-color);
  }

  input {
    position: absolute;
    left: -999999em;
  }

  @media only screen and (min-width:600px) {
    legend {
      display: none;
    }

    form {
      justify-content: center;
    }

    label {
      margin-inline: .5rem;
    }
  }
</style>