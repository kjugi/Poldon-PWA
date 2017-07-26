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
    </div>
</template>

<script>
export default {
  props: [
    'show'
  ],
}
</script>

<style>
.block {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    display: none;
}

.block.show {
    display: flex;
    justify-content: center;
    align-items: center;
}

.spinner {
    animation: rotate 1.5s linear infinite;
    animation-play-state: running;
}

@keyframes rotate {
    0% {
        transform: scale(0.5) rotate(0deg);
    }

    100% {
        transform: scale(0.5) rotate(270deg);
    }
}

.spinner .path {
    stroke: #4fc08d;
    stroke-dasharray: 16;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: dash 1.5s ease-in-out infinite; 
}

@keyframes dash {
    0% {
        stroke-dashoffset: 126;
    }

    50% {
        stroke-dashoffset: 32;
        transform: rotate(135deg);
    }

    100% {
        stroke-dashoffset: 126;
        transform: rotate(450deg);
    }
}
</style>
