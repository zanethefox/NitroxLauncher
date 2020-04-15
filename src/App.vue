<template>
  <div id="app">

    <title-bar/>

    <settings-modal
          v-show="isSettingsModalVisible"
          @close="closeSettingsModal"
        />

    <div id="nav">
      <nav class="col-md-3 d-md-block sidebar disable-select p-0">
        <div class="sidebar-sticky d-flex align-items-start flex-column">
          <ul class="nav w-100 flex-column mb-auto px-3">
            <li class="nav-item p-4 mb-3">
              <img src="/img/logoNitrox.svg" width="92px" class="nitrox-logo">
            </li>
            <li class="nav-item mb-1">
              <router-link to="/" class="nav-link">
                <span class="material-icons">sports_esports</span>
                <span class="h-small">Play game</span>
              </router-link>
            </li>
            <li class="nav-item mb-1">
              <router-link to="/server" class="nav-link">
                <span class="material-icons">memory</span>
                <span class="h-small">Server</span>
              </router-link>
            </li>
            <li class="nav-item mb-1">
              <router-link to="/news" class="nav-link">
                <svg width="24px" height="24px" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M20,11H4V8H20M20,15H13V13H20M20,19H13V17H20M11,19H4V13H11M20.33,4.67L18.67,3L17,4.67L15.33,3L13.67,4.67L12,3L10.33,4.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V3L20.33,4.67Z" />
                </svg>
                <span class="h-small">News</span>
              </router-link>
            </li>
            <li class="nav-item mb-1" >
              <a class="nav-link" @click="showSettingsModal">
                <span class="material-icons">settings</span>
                <span class="h-small">Settings</span>
              </a>
            </li>
          </ul>

          <ul class="nav w-100 bg-darkest px-3">
            <div class="d-flex w-100">
              <div class="px-3 pb-3 pt-3 mr-1 h-small">
                <h6 class="mb-1 font-11 opacity-5">Version</h6>
                <p class="mb-0 font-14 opacity-75" id="version-number" v-once>{{modVersion}}</p>
              </div>
              <div class="ml-auto d-none">
                <a class="nav-link sm-btn" href="#" data-toggle="tooltip" data-placement="top" title="Check for updates">
                  <span class="material-icons">update</span>
                </a>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </div>

    <router-view/>


  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar.vue'
import SettingsModal from './components/SettingsModal.vue';

export default {
  name: 'Home',

  components: {
    TitleBar,
    SettingsModal
  },

  data () {
    return {
      isSettingsModalVisible: false,
      modVersion: window.NitroxNative.project.mod.version
    };
  },

  methods: {
    showSettingsModal() {
      this.isSettingsModalVisible = true;
    },

    closeSettingsModal() {
      this.isSettingsModalVisible = false;
    },
  },
};
</script>
