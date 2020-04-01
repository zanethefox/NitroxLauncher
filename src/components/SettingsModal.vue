<script>
export default {
  name: 'SettingsModal',
  methods: {
    close() {
      this.$emit('close');
    },
  },
  mounted() {
  const close = (e) => {
    const ESC = 27;
    if (e.keyCode !== ESC) return;
    this.$emit('close');
  };
  // Close the modal when the
  // user presses the ESC key.
  document.addEventListener('keyup', close);
  this.$on('hook:destroyed', () => {
    document.removeEventListener('keyup', close);
  });

  // Activate the modal when the component is mounted.
  this.activate();
  this.$on('hook:destroyed', () => {
    // Deactivate when the component is destroyed.
    this.deactivate();
  });
},
};
</script>
<template>
<transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">

      <nav class="col-md-3 d-md-block sidebar modal-menu disable-select">
        <div class="sidebar-sticky d-flex align-items-start flex-column">
          <!-- Modal navigation -->
          <ul class="nav w-100 flex-column mb-auto">
            <li class="nav-item mt-4 mb-1 pl-3">
              <h6>Nitrox settings</h6>
            </li>
            <li class="nav-item mb-1">
              <a class="nav-link active">
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
              <div class="px-3 pb-3 pt-3 mr-1 h-small">
                <h6 class="mb-1 font-11 opacity-5">Version</h6>
                <p class="mb-0 font-14 opacity-75" id="version-number">1.0.0</p>
              </div>
            </div>
          </ul>
        </div>
      </nav>

      <section class="modal-body" id="modalDescription">
        <div class="row m-0 p-0">
          <div class="col-md-8 col-lg-8 ml-auto px-4">
            <!-- Modal content -->
            <slot name="body">
              <div class="pt-3">
                <h6>Subnautica Installation</h6>
                <div class="bg-on-dark-variant p-4 mt-3 rounded-lg">
                  <div class="media">
                    <img src="../assets/img/subnautica-icon.jpg" class="mr-3 img-fluid rounded disable-select" alt="Subnautica Icon" width="64px">
                    <div class="media-body mt-1">
                      <h5 class="mt-0 mb-1 font-400">Subnautica</h5>
                      <p class="font-14 opacity-75 m-0">D:\Games\Epic Games\Subnautica</p>
                    </div>
                  </div>
                </div>

                <p class="mt-4">Incorrect installation path?</p>
                <button type="button" name="button" class="btn btn-primary font-16 btn-lg px-5">Browse</button>
              </div>


            </slot>
          </div>
          <div class="col-md-1">
            <button type="button" class="btn sm-btn btn-icon position-fixed" @click="close" aria-label="Close modal" style="right: 32px;">
              <span class="material-icons">close</span>
            </button>
            <h6 class="esc-text disable-select opacity-5">ESC</h6>
          </div>
        </div>

      </section>
    </div>
  </div>
</transition>
</template>
<style>
.esc-text {
  position: fixed;
  top: 85px;
  right: 43px;
  letter-spacing: 0.5px;
  font-size: 10px;
}
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
  transition: all .5s cubic-bezier(1, -0.4, 0, 1.4);
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #1F1F22;
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
