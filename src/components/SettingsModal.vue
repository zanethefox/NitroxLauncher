<script>
export default {
  name: 'SettingsModal',
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>
<template>
<transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">

      <nav class="col-md-3 d-md-block sidebar modal-menu disable-select">
        <div class="sidebar-sticky d-flex align-items-start flex-column">
          <ul class="nav w-100 flex-column mb-auto">
            <li class="nav-item mt-4 mb-1 pl-3">
              <h6>Nitrox settings</h6>
            </li>
            <li class="nav-item mb-1">
              <a class="nav-link">
                <span class="h-small">General</span>
              </a>
            </li>
            <li class="nav-item mb-1">
              <a class="nav-link">
                <span class="h-small">Server</span>
              </a>
            </li>
            <li class="nav-item mb-1" >
              <a class="nav-link">
                <span class="h-small">Changelog</span>
              </a>
            </li>
          </ul>

          <ul class="nav w-100">
            <div class="d-flex w-100">
              <div class="px-3 mr-1 pb-4 h-small">
                <h6>Version</h6>
                <p class="mb-0 font-11" id="version-number">1.0.0</p>
              </div>
            </div>

          </ul>
        </div>
      </nav>


      <section class="modal-body" id="modalDescription">
        <div class="row m-0 p-0">
          <div class="col-md-8 col-lg-8 ml-auto px-4">
            <slot name="body">
              <h1>I'm the default body!</h1>
              <h1>I'm the default body!</h1>
              <h1>I'm the default body!</h1>
              <h1>I'm the default body!</h1>
              <h1>I'm the default body!</h1>
              <h1>I'm the default body!</h1>
              <h1>I'm the default body!</h1>
              <h1>I'm the default body!</h1>
              <h1>I'm the default body!</h1>
              <h1>I'm the default body!</h1>
              <h1>I'm the default body!</h1>
            </slot>
          </div>
          <div class="col-md-1">
            <button type="button" class="btn sm-btn btn-icon position-fixed" @click="close" aria-label="Close modal">
              <span class="material-icons">close</span>
            </button>
          </div>
        </div>

      </section>
    </div>
  </div>
</transition>
</template>
<style>

.modal .sidebar {
  background: #28292C;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
  transform: scale(1.1);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all .4s cubic-bezier(1, -0.4, 0, 1.4);
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #333437;
  overflow-x: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  height: calc(100vh - 24px);
}

.modal::-webkit-scrollbar-track {
  background: none;        /* color of the tracking area */
  border: 4px solid #333437;  /* creates padding around scroll thumb */
}

.modal::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,.5);    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 4px solid #333437;  /* creates padding around scroll thumb */
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  justify-content: space-between;
}

.modal-footer {
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}


</style>
