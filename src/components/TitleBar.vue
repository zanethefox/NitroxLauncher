<template>
  <!-- Title bar -->
  <header id="titlebar">
    <div id="drag-region">
      <div class="sizeregion"></div>
      <div id="window-controls">
        <div class="button" id="min-button"></div>
        <div class="button" id="max-button"></div>
        <div class="button" id="restore-button"></div>
        <div class="button" id="close-button"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TitleBar'
}
</script>
