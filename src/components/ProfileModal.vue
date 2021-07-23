<script>
export default {
  name: 'ProfileModal',

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
  },
};
</script>
<template>
<transition name="modal-confirmation">

  <div class="confirmation-modal-backdrop align-items-start flex-column ">
    <div class="modal align-self-center shadow-lg" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">

      <section class="modal-body" id="modalDescription">
        <div class="row m-0">
            <div class="col-md-12">
            <!-- Modal content -->
                <h4>Create new profile</h4>
                <div class="row">
                    <div class="col-3 mt-3">
                        <h6 class="disable-select pb-1">Icon</h6>

                        <select class="form-control" id="form-profile-icon">
                            <option>
                                <img src="../assets/img/subnautica-icon.jpg" class="bg-on-dark img-fluid disable-select" alt="Subnautica Icon" width="44px">
                            </option>
                            <option>
                                <img src="../assets/img/subnautica-icon.jpg" class="bg-on-dark img-fluid disable-select" alt="Subnautica Icon" width="44px">
                            </option>
                        </select>
                    </div>
                    <div class="col pl-0 mt-3">
                        <h6 class="disable-select pb-1">Name</h6>
                        <input type="text" class="form-control" id="form-profile-name" placeholder="New Profile">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 mt-3">
                        <h6 class="disable-select pb-1">Game mode</h6>
                        <select class="form-control" id="form-profile-game-mode">
                            <option>Survival</option>
                            <option>Creative</option>
                        </select>
                    </div>
                    <div class="col-md-12 mt-3">
                        <h6 class="disable-select pb-1">Save Location</h6>
                        <input type="text" class="form-control" id="form-profile-location" placeholder="C:/Nitrox/Saves/New Profile">
                    </div>
                </div>
            </div>
          </div>
          <div class="row m-0 mt-4">
              <div class="col-6 pr-2">
                  <button type="button" name="button" class="btn btn-secondary ripple font-16 btn-lg btn-block" @click="close" aria-label="Close modal">Go back</button>
              </div>
              <div class="col-6 pl-2">
                  <button type="button" name="button" class="btn btn-primary ripple font-16 btn-lg btn-block">Create</button>
              </div>
          </div>
      </section>
    </div>
  </div>
</transition>
</template>
<style>
.modal-confirmation-enter {
  opacity: 0;
  transform: scale(1.1);
}

.modal-confirmation-leave-active {
  opacity: 0;
}

.modal-confirmation-leave-active.confirmation-modal-backdrop .modal {
  transform: scale(0.9);
  transition: all .25s ease-in-out;
}

.modal-confirmation-enter-active,
.modal-confirmation-leave-active {
  transition: all .25s ease-in-out;
}

.confirmation-modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(26, 26, 29, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.confirmation-modal-backdrop .modal {
  background-position: center;
  background-size: cover;
  overflow-x: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 342px;
  position: relative;
  border-radius: 8px
}

</style>
