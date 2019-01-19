<template>
  <div class="page-clear">
    <div class="btn btn-back" @click="$router.push({name: 'home'})">
      <fa icon="arrow-left" />
    </div>
    <hr>
    <slot />
  </div>
</template>
