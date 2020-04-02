<template>
  <div class="server">
    <main role="main" class="col-md-9 col-lg-9 ml-auto px-4">
      <div class="" v-if="!this.isServerStarted">
        <h1>This is a server page</h1>
        <a class="btn btn-primary" @click.prevent="toggleServer()">
          Start Server
        </a>
      </div>

      <div class="" v-else>
        <h1>CONSOLE</h1>
        <a class="btn btn-danger" @click.prevent="toggleServer()">
          stop Server
        </a>
      </div>

    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isServerStarted: false,
    };
  },

  methods: {
    toggleServer() {
      this.isServerStarted = !this.isServerStarted
    }
  },
};
</script>
