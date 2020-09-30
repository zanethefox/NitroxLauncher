<template>
<div class="login">

    <main role="main" class="col-md-12 px-4 mt-4 d-flex justify-content-center" style="height: 100vh;">
      <Particles
   id="tsparticles"
   :options="{
         background: {
             color: {
                 value: ''
             }
         },
         fpsLimit: 30,
         interactivity: {
             detectsOn: 'canvas',
             events: {
                 onClick: {
                     enable: true,
                     mode: 'push'
                 },

                 resize: true
             },
             modes: {
                 bubble: {
                     distance: 400,
                     duration: 2,
                     opacity: 0.5,
                     size: 40
                 },
                 push: {
                     quantity: 4
                 },
                 repulse: {
                     distance: 200,
                     duration: 0.4
                 }
             }
         },
         particles: {
             color: {
                 value: '#ffffff'
             },
             collisions: {
                 enable: false
             },
             move: {
                 direction: 'top',
                 enable: true,
                 outMode: 'out',
                 random: true,
                 speed: 1.5,
                 straight: false
             },
             number: {
                 density: {
                     enable: true,
                     value_area: 800
                 },
                 value: 20
             },
             opacity: {
                 value: 0.5
             },
             shape: {
                 type: 'circle'
             },
             size: {
                 random: true,
                 value: 5
             }
         },
         detectRetina: true
     }"
 />
        <div class="row px-3">
            <div class="col-md-12">
                    <transition name="fade-in" mode="out-in">
                        <!-- Login Dialog -->
                        <div class="col-md-5 m-auto my-auto">
                            <div class="bg-material-1 p-5 rounded-lg">
                              <h3>Login</h3>
                              <p class="opacity-75 mb-4">Sign in to sync your friends, profile and get the best experience.</p>
                              <button class="btn btn-secondary btn-lg text-uppercase btn-block button-fancy text-left font-14 font-weight-bold py-3" id="button-fancy" v-on:mousemove="updateCoordinates">
                                  <span class="login steam p-4">
                                      <img src="../assets/img/login/steam.svg" alt="Steam" width="24px">
                                  </span>
                                  <span>
                                      Continue with Steam
                                  </span>
                              </button>
                              <button class="btn btn-secondary login btn-lg text-uppercase btn-block button-fancy text-left font-14 font-weight-bold py-3" id="button-fancy-2" v-on:mousemove="updateCoordinates2">
                                  <span class="login epic p-4">
                                    <img src="../assets/img/login/epic.png" alt="Epic" height="24px" style="margin: 0 2px;">
                                  </span>
                                  <span>
                                      Continue with Epic
                                  </span>
                              </button>

                              <router-link to="/" class="text-decoration-none">
                                <button class="btn btn-link text-white text-decoration-none text-uppercase button-fancy btn-block font-14 font-weight-bold mt-4" id="button-fancy-3" v-on:mousemove="updateCoordinates3">
                                        Or skip Login
                                </button>
                              </router-link>
                            </div>
                        </div>
                    </transition>
            </div>
        </div>
    </main>

</div>
</template>

<style media="screen">
#tsparticles {
  position: fixed;
  width: 100%;
  height: 100%;
}
    .login {
      z-index: 2000;
      position: relative;
    }
    .btn .epic {
        background-color: #353535!important;
    }
    .btn .steam {
        background-color: #145c8f!important;
    }
    .btn .login {
        margin-left: -1rem;
        margin-right: 1rem;
        z-index: 1;
    }
    .button-fancy::before {
      z-index:2;
    }
    .fade-in-enter-active,
    .fade-in-leave-active {
        transition: all .35s ease-in-out;
    }

    .fade-in-enter,
    .fade-in-leave-to {
        opacity: 0;
    }


</style>

<script>
/* eslint no-unused-vars:0 */

const {
    remote
} = require('electron');

export default {
    name: 'Login',
    components: {
    },
    data() {
        return {
            isSettingsModalVisible: false,
            isLaunchGameModalVisible: false,
            x: 0,
            y: 0,
        };
    },
    methods: {
        showLaunchGameModal() {
            this.isLaunchGameModalVisible = true;
            setTimeout(() => {
                this.isLaunchGameModalVisible = false;
            }, 2000)
        },
        closeLaunchGameModal() {
            this.isLaunchGameModalVisible = false;
        },
        openExternalBrowser(link) {
            remote.shell.openExternal(link);
        },
        updateCoordinates(e) {
            let buttonFancy = document.getElementById('button-fancy');
            this.x = e.layerX;
            this.y = e.layerY;
            buttonFancy.style.setProperty('--x', this.x + 'px');
            buttonFancy.style.setProperty('--y', this.y + 'px');
        },
        updateCoordinates2(e) {
            let buttonFancy = document.getElementById('button-fancy-2');
            this.x = e.layerX;
            this.y = e.layerY;
            buttonFancy.style.setProperty('--x', this.x + 'px');
            buttonFancy.style.setProperty('--y', this.y + 'px');
        },
        updateCoordinates3(e) {
            let buttonFancy = document.getElementById('button-fancy-3');
            this.x = e.layerX;
            this.y = e.layerY;
            buttonFancy.style.setProperty('--x', this.x + 'px');
            buttonFancy.style.setProperty('--y', this.y + 'px');
        },
    },
};
</script>
