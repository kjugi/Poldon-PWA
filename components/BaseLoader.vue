<template>
    <div class="block" v-bind:class="{ show: show }">
        <svg class="spinner" 
             width="44px" 
             height="44px" 
             viewBox="0 0 44 44"
        >
            <circle class="path" 
                    fill="none" 
                    stroke-width="4" 
                    stroke-linecap="round" 
                    cx="22" 
                    cy="22" 
                    r="20"
            >
            </circle>
        </svg>
        
        <p class="block__error" v-bind:class="{ showError: showError }">
            Something goes wrong with loading data :/
        </p>
    </div>
</template>

<script>
export default {
  computed: {
    show() {
      if (this.$store.state.loading) {
        return true;
      }
      else {
        return false;
      }
    },
    showError() {
      if(this.$store.state.laoderError) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}
</script>