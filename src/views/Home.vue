<template>
<div class="home">

    <launch-game-modal v-show="isLaunchGameModalVisible" @close="closeLaunchGameModal" />

    <main role="main" class="">
        <div class="home-image d-flex">
        </div>

        <div class="col-md-9 col-lg-9 ml-auto pl-5 pr-5">
          <div class="row cta-row">
              <div class="col-md-7">
                <h1>Subnautica Nitrox</h1>
                <a href="#" class="text-white opacity-75 font-weight-bold mr-3">Default Profile</a>
                <a href="#" class="text-white opacity-75 font-weight-bold">Steam</a>
                <p class="size-16 opacity-75 mt-3">Start your Subnautica adventure in multiplayer mode together with your friends, powered by the Nitrox mod.</p>
              </div>
              <div class="col-md-5 start-game-buttons">
                <div class="p-4 rounded-lg bg-material-2">
                  <button class="btn btn-primary btn-lg text-uppercase btn-block button-fancy" id="button-fancy" @click="showLaunchGameModal" v-on:mousemove="updateCoordinates">
                      <span>
                          Play
                          <h6 class="pt-0 mb-1 text-uppercase">multiplayer</h6>
                      </span>
                  </button>
                  <a class="btn btn-secondary btn-lg text-uppercase btn-block font-14" href="#" data-toggle="tooltip" data-placement="top" title="Play Subnautica singleplayer">Singleplayer</a>
                  <p class="font-14 opacity-5 mb-n2 mt-3 text-center">Nitrox Alpha 1.4.0.0</p>
                </div>
              </div>
          </div>

          <div class="row mt-5 mr-n1">
              <div class="col-md-4 pr-1">
                  <img src="../assets/img/slider/subnautica1.jpg" alt="Subnautica" class="img-fluid rounded-lg">
              </div>
              <div class="col-md-4 pr-1">
                  <img src="../assets/img/slider/subnautica2.jpg" alt="Subnautica" class="img-fluid rounded-lg">
              </div>
              <div class="col-md-4 pr-1">
                  <img src="../assets/img/slider/subnautica3.jpg" alt="Subnautica" class="img-fluid rounded-lg">
              </div>
          </div>

          <div class="row mt-5">

              <div class="col-md-3">
                  <h4>Follow Nitrox</h4>
              </div>
              <div class="col-md-9">
                  <div class="bg-material-1 social rounded-lg d-flex justify-content-center py-5 disable-select">
                      <ul class="nav">
                          <li class="nav-item">
                              <a class="nav-link" href="#" target="_blank" @click.prevent="openExternalBrowser('https://discord.gg/E8B4X9s')" draggable="false" data-tooltip="Join the Discord server">
                                  <img src="../assets/img/svg/discord.svg" alt="Discord Logo">
                              </a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#" target="_blank" @click.prevent="openExternalBrowser('https://twitter.com/modnitrox')" draggable="false" data-tooltip="Follow on Twitter">
                                  <img src="../assets/img/svg/twitter.svg" alt="Twitter">
                              </a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#" target="_blank" @click.prevent="openExternalBrowser('https://www.reddit.com/r/SubnauticaNitrox/')" draggable="false" data-tooltip="Join the Subreddit">
                                  <img src="../assets/img/svg/reddit.svg" alt="Reddit">
                              </a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#" target="_blank" @click.prevent="openExternalBrowser('https://github.com/SubnauticaNitrox/Nitrox')" draggable="false" data-tooltip="Contribute on GitHub">
                                  <img src="../assets/img/svg/github.svg" alt="GitHub" width="24px">
                              </a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#" target="_blank" @click.prevent="openExternalBrowser('https://nitrox.rux.gg')" draggable="false" data-tooltip="Visit the official website">
                                  <img src="../assets/img/svg/website.svg" alt="Website" width="26px">
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>

          <div class="row">
              <div class="col-12 mb-4 mt-1"></div>

              <div class="col-md-3">
                  <h4>About Nitrox</h4>
              </div>
              <div class="col-md-3">
                  <h6 class="pt-0 mb-1 text-uppercase size-11">Mod version</h6>
                  <p>Alpha 1.3.0.0</p>
              </div>
              <div class="col-md-3">
                  <h6 class="pt-0 mb-1 text-uppercase size-11">Release</h6>
                  <p>4th April 2020</p>
              </div>
              <div class="col-md-3">
                  <h6 class="pt-0 mb-1 text-uppercase size-11">Size</h6>
                  <p>24.71 MB</p>
              </div>
          </div>

          <div class="row mb-2">
              <div class="col-12 mb-4"></div>

              <div class="col-md-3">
                  <h4>Contributors</h4>
              </div>
              <div class="col-md-9">
                  <h6 class="pt-0 mb-1 text-uppercase size-11">Developers</h6>
                  <p>Sunrunner, Killzoms, Jannify, Marjin, Measurity, MadMax, Nes, _HeN_, CatSZekely, Garsia, RabidCrab, AquariusSidhe, Amarok, iCleeem</p>

                  <h6 class="pt-0 mb-1 text-uppercase size-11">Staff</h6>
                  <p>Werewolfs, Shalix, CriticalCookie, InfamousJay, and a big thanks to the discord support team (Artic-Peepers, Peepers)</p>

                  <h6 class="pt-0 mb-1 text-uppercase size-11">Design</h6>
                  <p>Rux</p>
              </div>
          </div>
        </div>



    </main>
</div>
</template>

<style media="screen">
.subnautica-logo {
    background-image: url('../assets/img/subnauticaLogo.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 352px;
    margin: 0 auto;
}
</style>

<script>
/* eslint no-unused-vars:0 */

const { remote } = require('electron');

import LaunchGameModal from '@/components/LaunchGameModal.vue';

export default {
    name: 'Home',
    components: {
        LaunchGameModal,
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
    },
};
</script>
