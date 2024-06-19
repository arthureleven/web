<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'arthureleven/web',
  meta: [
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'arthureleven',
    },
    {
      name: 'twitter:description',
      content: 'My personal webpage',
    },
    {
      name: 'twitter:image',
      content: 'https://github.com/arthureleven.png',
    },
  ],
})
</script>
