<template>
    <div class="container">
        <h1 v-if="error.statusCode === 404">
            Page not found - 404
        </h1>

        <h1 v-else>
            Wystąpił błąd
        </h1>

        <nuxt-link to="/">
            Homepage
        </nuxt-link>
    </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog'
}
</script>
