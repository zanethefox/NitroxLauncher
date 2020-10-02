<template>
  <div id="app">

    <title-bar/>

    <settings-modal
          v-show="isSettingsModalVisible"
          @close="closeSettingsModal"
        />

    <div id="nav">
      <nav class="col-md-12 d-md-block sidebar sidebar-main disable-select p-0">
        <div class="d-flex align-items-start">
          <ul class="nav w-100 flex-row mb-auto px-3 pt-3 pb-3">
            <li class="nav-item px-4 pt-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315.71 65.52" width="92px" fill="white" class="nitrox-logo">
                <title>Nitrox</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      d="M10.37.9h12.2a2,2,0,0,1,1.86,1.23L35.46,28a1.17,1.17,0,0,1,.09.24l3.57,12.66.36-.09L39.3,30a1.72,1.72,0,0,1,0-.32l3.78-27a2,2,0,0,1,2-1.75H57a2,2,0,0,1,2,2.31L50.7,62.87a2,2,0,0,1-2,1.75H35.5a2,2,0,0,1-1.86-1.22L23.33,39.62a.92.92,0,0,1-.09-.23L19.5,26.73l-.36.09L19.31,39a1.06,1.06,0,0,1,0,.31L16.05,62.86a2,2,0,0,1-2,1.76H2a2,2,0,0,1-2-2.31L8.36,2.65A2,2,0,0,1,10.37.9Z">
                    </path>
                    <path d="M74.88,64.62h-12a2,2,0,0,1-2-2.31L69.2,2.65a2,2,0,0,1,2-1.75h12a2,2,0,0,1,2,2.31L76.89,62.87A2,2,0,0,1,74.88,64.62Z"></path>
                    <path
                      d="M122.84,17.32l-6.26,45.54a2,2,0,0,1-2,1.76H102.37a2,2,0,0,1-2-2.31l6.12-44.43a2,2,0,0,0-2-2.31H92a2,2,0,0,1-2-2.32l1.56-10.7a2,2,0,0,1,2-1.74h46.56a2,2,0,0,1,2,2.32l-1.56,10.7a2,2,0,0,1-2,1.74H124.85A2,2,0,0,0,122.84,17.32Z">
                    </path>
                    <path
                      d="M160.58,44.37h0a2,2,0,0,0-2,1.75l-2.31,16.74a2,2,0,0,1-2,1.76H142.07a2,2,0,0,1-2-2.31L148.4,2.65a2,2,0,0,1,2-1.75h23.7c13.14,0,22.5,7,20.7,22-1.48,10.81-5.84,15-13.28,18.85a2,2,0,0,0-.75,3l11.71,16.74a2,2,0,0,1-1.67,3.2H175.76a2.05,2.05,0,0,1-1.71-.94L162.29,45.3A2,2,0,0,0,160.58,44.37Zm9.66-13.86a8.19,8.19,0,0,0,8.28-7.38c.45-3.87-1.44-7.2-6.21-7.2h-7.69a2,2,0,0,0-2,1.74l-1.5,10.52a2,2,0,0,0,2,2.32Z">
                    </path>
                    <path
                      d="M201.65,21.87C203.81,7.2,217.85,0,231.08,0s25.47,7.29,23.4,21.87l-3.15,21.78c-2.07,14.58-15.66,21.87-29.52,21.87-13.23,0-25.38-7.29-23.31-21.87Zm13,21.78c-.63,4.59,4.14,6.93,9,6.93,5.22,0,10.89-2.34,11.61-7.38l3.15-21.33c.72-4.77-3.78-7.2-9-7.2s-10.89,2.43-11.61,7.2Z">
                    </path>
                    <path
                      d="M300,.9h13.73a2,2,0,0,1,1.66,3.19L295.89,31.93a2,2,0,0,0-.2,2L307.47,61.8a2,2,0,0,1-1.87,2.82H291.35a2,2,0,0,1-1.9-1.32l-6.27-16.59a2,2,0,0,0-3.61-.37L268.49,63.68a2,2,0,0,1-1.71.94H253a2,2,0,0,1-1.66-3.2l19.43-27.65a2,2,0,0,0,.21-2l-11.8-28.1A2,2,0,0,1,261.05.9h14.33a2,2,0,0,1,1.91,1.34l6,16.6a2,2,0,0,0,3.61.42L298.25,1.82A2,2,0,0,1,300,.9Z">
                    </path>
                  </g>
                </g>
              </svg>
            </li>
            <li class="nav-item mb-1">
              <router-link to="/" class="nav-link ripple">
                <span class="h-small">Play game</span>
              </router-link>
            </li>
            <li class="nav-item mb-1">
              <router-link to="/server" class="nav-link ripple">
                <span class="h-small">Server</span>
              </router-link>
            </li>
            <li class="nav-item mb-1">
              <router-link to="/news" class="nav-link ripple">
                <span class="h-small">News</span>
              </router-link>
            </li>
            <li class="nav-item mb-1">
              <router-link to="/login" class="nav-link ripple">
                <span class="h-small">Login</span>
              </router-link>
            </li>
          </ul>

        </div>
      </nav>
    </div>

    <router-view/>

    <!-- Main Sidebar -->
    <nav class="ml-auto col-md-3 d-md-block sidebar sidebar-right bg-darker disable-select px-0">
      <div class="sidebar-sticky d-flex align-items-start flex-column pt-0 px-4">
        <!-- Sidebar -->
        <ul class="nav w-100 flex-column mb-auto pr-2">
          <div class="sticky-top bg-darker">
            <li class="nav-item mb-1 w-100">
                <div class="bg-darker p-0 mt-3 rounded-lg">
                  <div class="media">
                    <div class="position-relative align-self-start">
                      <span class="badge badge-pill badge-success status"></span>
                      <img src="https://cloud.rux.gg/index.php/s/22RwozGaDHkMSog/preview" class="mr-3 img-fluid img-round disable-select my-auto" alt="Subnautica Icon" width="52px" style="min-width: 52px">
                    </div>
                    <div class="media-body my-auto text-truncate" style="width: 80px">
                      <p class="mt-0 mb-1 pt-0 font-weight-bolder text-truncate">RuxRuxRuxRuxRux</p>
                      <p class="font-14 opacity-75 m-0">Online</p>
                    </div>
                    <div class="d-flex align-items-end flex-column align-self-center">
                        <a class="btn sm-btn btn-icon" @click="showSettingsModal" aria-label="Settings">
                          <span class="material-icons">settings</span>
                      </a>
                    </div>
                  </div>
                </div>
            </li>

          <li class="nav-item mb-3 mt-4">
              <a class="btn btn-secondary ripple btn-lg text-uppercase btn-block font-14" href="#" data-toggle="tooltip" data-placement="top" title="Find new servers">Find new servers</a>
          </li>
          </div>


          <li class="nav-item mt-2 mb-1">
            <h6>Recent Servers</h6>
          </li>

          <li class="nav-item mb-1">
              <div class="bg-darker p-0 mt-2 rounded-lg">
                <div class="media">
                  <img src="./assets/img/subnautica-icon.jpg" class="mr-3 img-fluid img-round disable-select my-auto" alt="Subnautica Icon" width="38px">
                  <div class="media-body">
                    <p class="font-14 mt-0 mb-1 pt-0 font-weight-bolder">My Nitrox Server</p>
                    <p class="font-14 opacity-75 m-0 mt-n1">127.0.0.1</p>
                  </div>
                </div>
              </div>
          </li>
          <li class="nav-item mb-1">
              <div class="bg-darker p-0 mt-2 rounded-lg">
                <div class="media">
                  <img src="./assets/img/subnautica-icon.jpg" class="mr-3 img-fluid img-round offline opacity-75 disable-select my-auto" alt="Subnautica Icon" width="38px">
                  <div class="media-body">
                    <p class="font-14 mt-0 mb-1 pt-0 font-weight-bolder">Hamachi</p>
                    <p class="font-14 opacity-75 m-0 mt-n1">63.55.23.69</p>
                  </div>
                </div>
              </div>
          </li>
          <li class="nav-item mb-1">
              <div class="bg-darker p-0 mt-2 rounded-lg">
                <div class="media">
                  <img src="./assets/img/subnautica-icon.jpg" class="mr-3 img-fluid img-round offline opacity-75 disable-select my-auto" alt="Subnautica Icon" width="38px">
                  <div class="media-body">
                    <p class="font-14 mt-0 mb-1 pt-0 font-weight-bolder">Test</p>
                    <p class="font-14 opacity-75 m-0 mt-n1">133.7.42.01</p>
                  </div>
                </div>
              </div>
          </li>

          <li class="nav-item mt-4 mb-1">
            <h6>Friends</h6>
          </li>

          <li class="nav-item mb-1">
              <div class="bg-darker p-0 mt-2 rounded-lg">
                <div class="media">
                  <div class="position-relative">
                    <span class="badge badge-pill badge-warning status"></span>
                    <img src="https://cloud.rux.gg/index.php/s/TmP3wbTrENy7fmn/preview" class="mr-3 img-fluid img-round disable-select my-auto" alt="Subnautica Icon" width="38px">
                  </div>
                  <div class="media-body">
                    <p class="font-14 mt-0 mb-1 pt-0 font-weight-bolder">Colin</p>
                    <p class="font-14 opacity-75 m-0 mt-n1">Idle</p>
                  </div>
                </div>
              </div>
          </li>
          <li class="nav-item mb-1">
              <div class="bg-darker p-0 mt-2 rounded-lg">
                <div class="media">
                  <div class="position-relative">
                    <span class="badge badge-pill badge-success status"></span>
                    <img src="https://cloud.rux.gg/index.php/s/6Ewfn5XS4DyHfND/preview" class="mr-3 img-fluid img-round disable-select my-auto" alt="Subnautica Icon" width="38px">
                  </div>
                  <div class="media-body">
                    <p class="font-14 mt-0 mb-1 pt-0 font-weight-bolder">Shalix</p>
                    <p class="font-14 opacity-75 m-0 mt-n1">Playing Nitrox</p>
                  </div>
                </div>
              </div>
          </li>
          <li class="nav-item mb-1">
              <div class="bg-darker p-0 mt-2 rounded-lg">
                <div class="media">
                    <div class="position-relative">
                      <span class="badge badge-pill badge-success status"></span>
                      <img src="./assets/img/subnautica-icon.jpg" class="mr-3 img-fluid img-round disable-select my-auto" alt="Subnautica Icon" width="38px">
                    </div>
                    <div class="media-body">
                    <p class="font-14 mt-0 mb-1 pt-0 font-weight-bolder">Tijmen</p>
                    <p class="font-14 opacity-75 m-0 mt-n1">Online</p>
                  </div>
                </div>
              </div>
          </li>
          <li class="nav-item mb-1 offline opacity-5">
              <div class="bg-darker p-0 mt-2 rounded-lg">
                <div class="media">
                    <div class="position-relative">
                      <span class="badge badge-pill badge-secondary status"></span>
                      <img src="./assets/img/subnautica-icon.jpg" class="mr-3 img-fluid img-round disable-select my-auto" alt="Subnautica Icon" width="38px">
                    </div>
                    <div class="media-body">
                    <p class="font-14 mt-0 mb-1 pt-0 font-weight-bolder">Emre</p>
                    <p class="font-14 opacity-75 m-0 mt-n1">Offline</p>
                  </div>
                </div>
              </div>
          </li>
        </ul>

        <!-- Footer -->
        <ul class="nav w-100">
          <div class="d-flex w-100">
            <div class="px-3 pb-3 pt-3 mr-1 h-small">

            </div>
          </div>
        </ul>
      </div>
    </nav>

  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar.vue'
import SettingsModal from './components/SettingsModal.vue';

export default {
  name: 'Home',

  components: {
    TitleBar,
    SettingsModal,
  },

  data () {
    return {
      isSettingsModalVisible: false,
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
