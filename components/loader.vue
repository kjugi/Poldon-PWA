<template>
    <div class="block" :class="{ show: show }">
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
        
        <p class="block__error" :class="{ showError: showError }">
            Something goes wrong with loading data :/
        </p>
    </div>
</template>

<script>
export default {
  props: [
    'show',
    'showError'
  ],
}
</script>
