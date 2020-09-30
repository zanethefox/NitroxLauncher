<template>
  <!-- Main Sidebar -->
  <nav class="ml-auto col-md-3 d-md-block sidebar sidebar-right bg-darker disable-select px-0">
    <div class="sidebar-sticky d-flex align-items-start flex-column pt-0 px-4">
      <!-- Sidebar -->
      <ul class="nav w-100 flex-column mb-auto pr-2">
        <div class="sticky-top bg-darker">
          <li class="nav-item mb-1">
              <div class="bg-darker p-0 mt-3 rounded-lg">
                <div class="media">
                  <div class="position-relative">
                    <span class="badge badge-pill badge-success status"></span>
                    <img src="https://cloud.rux.gg/index.php/s/22RwozGaDHkMSog/preview" class="mr-3 img-fluid img-round disable-select my-auto" alt="Subnautica Icon" width="52px">
                  </div>
                  <div class="media-body my-auto">
                    <p class="mt-0 mb-1 pt-0 font-weight-bolder">Rux</p>
                    <p class="font-14 opacity-75 m-0">Online</p>
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
                <img src="../assets/img/subnautica-icon.jpg" class="mr-3 img-fluid img-round disable-select my-auto" alt="Subnautica Icon" width="38px">
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
                <img src="../assets/img/subnautica-icon.jpg" class="mr-3 img-fluid img-round offline opacity-75 disable-select my-auto" alt="Subnautica Icon" width="38px">
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
                <img src="../assets/img/subnautica-icon.jpg" class="mr-3 img-fluid img-round offline opacity-75 disable-select my-auto" alt="Subnautica Icon" width="38px">
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
                    <img src="../assets/img/subnautica-icon.jpg" class="mr-3 img-fluid img-round disable-select my-auto" alt="Subnautica Icon" width="38px">
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
                    <img src="../assets/img/subnautica-icon.jpg" class="mr-3 img-fluid img-round disable-select my-auto" alt="Subnautica Icon" width="38px">
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
</template>

<script>
export default {
  name: 'SideBar',
}
</script>
