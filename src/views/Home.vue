
<style media="screen">
.button-fancy {
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  color: white;
  cursor: pointer;
  outline: none;
  -webkit-transition: ease-in-out 0.15s;
  transition: ease-in-out 0.15s;
  overflow: hidden;
}

.btn-primary.button-fancy, .btn-primary.button-fancy:hover {
    background: #007bff!important;
}

.button-fancy span {
  position: relative;
  pointer-events: none;
}

.button-fancy::before {
  --size: 0px;
  opacity: 0;
  content: "";
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle closest-side, rgba(255, 255, 255, 0.2), transparent);
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out, opacity 0.2s ease-in-out, background 0.5s ease-in-out;
}

.button-fancy:hover::before {
  --size: 300px;
  opacity: 1;
}

.button-fancy:active {
  transform: scale(0.98);
  opacity: 1;
}

.button-fancy:active:hover::before {
  --size: 800px;
}

</style>

<template>
<div class="home">

    <launch-game-modal v-show="isLaunchGameModalVisible" @close="closeLaunchGameModal" />

    <main role="main" class="col-md-9 col-lg-9 ml-auto pl-4 ">
        <div class="home-image d-flex">
            <div class="subnautica-logo"></div>
        </div>
        <div class="row mt-4">
            <div class="col-md-8">
                <p class="size-14">Nitrox is an open-source, multiplayer modification for the game Subnautica.
                    The project is maintained by the community with regular support and updates from the generous contributors.</p>
                <div class="row">
                    <div class="col-md-4">
                        <h6 class="pt-0 mb-1 text-uppercase size-11">Game developer</h6>
                        <p class="size-14">Unknownworlds</p>
                    </div>
                    <div class="col-md-4">
                        <h6 class="pt-0 mb-1 text-uppercase size-11">Mod developer</h6>
                        <p class="size-14">Nitrox Team</p>
                    </div>
                </div>

            </div>
            <div class="col-md-4 start-game-buttons">
                <button class="btn btn-primary btn-lg text-uppercase btn-block button-fancy" id="button-fancy" @click="showLaunchGameModal" v-on:mousemove="updateCoordinates">
                    <span>
                        Play
                        <h6 class="pt-0 mb-1 text-uppercase">multiplayer</h6>
                    </span>
                </button>
                <a class="btn btn-secondary btn-lg text-uppercase btn-block font-16" href="#" data-toggle="tooltip" data-placement="top" title="Play Subnautica singleplayer">Singleplayer</a>
            </div>
        </div>

        <div class="row">
            <div class="col-12 mb-4 pb-1 mt-3">
                <div class="line"></div>
            </div>

            <div class="col-md-3">
                <p>Follow Nitrox</p>
            </div>
            <div class="col-md-9">
                <div class="bg-on-dark-variant social rounded-lg d-flex justify-content-center py-5 disable-select">
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link" href="https://discord.gg/E8B4X9s" target="_blank" @click.prevent="openExternalBrowser" draggable="false" data-toggle="tooltip" data-placement="top" title="Join the Discord server">
                                <img src="../assets/img/svg/discord.svg" alt="Discord Logo">
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://twitter.com/modnitrox" target="_blank" @click.prevent="openExternalBrowser" draggable="false" data-toggle="tooltip" data-placement="top" title="Follow on Twitter">
                                <img src="../assets/img/svg/twitter.svg" alt="Twitter">
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.reddit.com/r/SubnauticaNitrox/" target="_blank" @click.prevent="openExternalBrowser" draggable="false" data-toggle="tooltip" data-placement="top" title="Join the Subreddit">
                                <img src="../assets/img/svg/reddit.svg" alt="Reddit">
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://github.com/SubnauticaNitrox/Nitrox" target="_blank" @click.prevent="openExternalBrowser" draggable="false" data-toggle="tooltip" data-placement="top" title="Contribute on GitHub">
                                <img src="../assets/img/svg/github.svg" alt="GitHub" width="24px">
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://nitrox.rux.gg" target="_blank" @click.prevent="openExternalBrowser" draggable="false" data-toggle="tooltip" data-placement="top" title="Visit the official website">
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
                <p>About Nitrox</p>
            </div>
            <div class="col-md-3">
                <h6 class="pt-0 mb-1 text-uppercase size-11">Mod version</h6>
                <p class="size-14">Alpha 1.3.0.0</p>
            </div>
            <div class="col-md-3">
                <h6 class="pt-0 mb-1 text-uppercase size-11">Release</h6>
                <p class="size-14">4th April 2020</p>
            </div>
            <div class="col-md-3">
                <h6 class="pt-0 mb-1 text-uppercase size-11">Size</h6>
                <p class="size-14">24.71 MB</p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-12 mb-4"></div>

            <div class="col-md-3">
                <p>Contributors</p>
            </div>
            <div class="col-md-9">
                <h6 class="pt-0 mb-1 text-uppercase size-11">Developers</h6>
                <p class="size-14">Sunrunner, Killzoms, Jannify, Marjin, Measurity, MadMax, Nes, _HeN_, CatSZekely, Garsia, RabidCrab, AquariusSidhe, Amarok, iCleeem</p>

                <h6 class="pt-0 mb-1 text-uppercase size-11">Staff</h6>
                <p class="size-14">Werewolfs, Shalix, CriticalCookie, InfamousJay, and a big thanks to the discord support team (Artic-Peepers, Peepers)</p>

                <h6 class="pt-0 mb-1 text-uppercase size-11">Design</h6>
                <p class="size-14">Rux</p>
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
const {
    remote
} = require('electron');

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
        openExternalBrowser(e) {
            remote.shell.openExternal(e.target.href);
        },
        updateCoordinates: function(event) {
            this.x = event.layerX;
            this.y = event.layerY;
            document.getElementById('button-fancy').style.setProperty('--x', this.x + 'px');
            document.getElementById('button-fancy').style.setProperty('--y', this.y + 'px');
        },
    },
};
</script>
