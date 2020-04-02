<template>
<div class="server">
    <main role="main" class="col-md-9 col-lg-9 ml-auto px-4">
        <div class="server-start-page" v-if="!this.isServerStarted">

            <div class="row">
                <!-- Header -->
                <div class="col-md-12 text-center pt-3">
                    <div class="py-5">
                        <h3 class="font-400">Nitrox server</h3>
                        <p class="opacity-75 mt-3">Welcome to your Subnautica multiplayer server!</p>
                    </div>
                </div>

                <div class="col-md-8 offset-md-2">
                    <img src="../assets/img/illustration/start-server.svg" alt="Start Server" class="img-fluid disable-select" draggable="false">
                </div>

                <!-- Start button -->
                <div class="col-md-12 text-center pt-5 mt-3">
                    <a class="btn btn-primary btn-lg text-uppercase px-5" @click.prevent="toggleServer()">
                        Start Server
                        <h6 class="pt-0 mb-1 text-uppercase">multiplayer</h6>
                    </a>
                </div>
            </div>

        </div>

        <div class="server-console-page" v-else>

            <!-- Console output -->
            <div class="row">
                <div class="col-md-12">
                    <div class="server-console font-mono overflow-scroll mt-3">
                        <div class="server-console-output">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Console input -->
            <div class="row mt-auto">
                <div class="col-md-12">
                    <div class="input-group">
                      <input type="text" class="form-control form-control-lg form-console" placeholder="Message">
                      <div class="input-group-append" id="button-addon4">
                        <button class="btn btn-console btn-send" type="button"><span class="material-icons" data-toggle="tooltip" data-placement="top" title="Send console command">send</span></button>
                        <button class="btn btn-console btn-stop" type="button" @click.prevent="toggleServer()"><span class="material-icons" data-toggle="tooltip" data-placement="top" title="Save and stop the server">stop</span></button>
                      </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</div>
</template>

<script>
export default {

    data() {
        return {
            isServerStarted: false,
        };
    },

    methods: {
        toggleServer() {
            this.isServerStarted = !this.isServerStarted
        },
    },
};


</script>
