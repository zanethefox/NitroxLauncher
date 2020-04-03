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
                    <div class="illustration-start-server"></div>
                </div>

                <!-- Start button -->
                <div class="col-md-12 text-center pt-5 mt-3">
                    <a class="btn btn-primary btn-lg text-uppercase px-5 button-fancy" @click.prevent="toggleServer()" id="button-fancy" v-on:mousemove="updateCoordinates">
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
                    <div class="server-console font-mono font-14 overflow-scroll mt-3">
                        <div class="server-console-output">
                            <p>[19:46:23 Server INFO]: Could not load world: System.IO.InvalidDataException: Persisted state is not valid at NitroxServer.Serialization.World.WorldPersistence.LoadFromFile() in C:\Users\Sunrunner\Desktop\Code\Nitrox\NitroxServer\Serialization\World\WorldPersistence.cs:line 87 creating a new one.</p>
                            <p>[19:46:23 Server DEBUG]: Event Triggerer started!</p>
                            <p>[19:46:23 Server INFO]: World GameMode: Survival</p>
                            <p>[19:46:23 Server INFO]: Server Password: None. Public Server.</p>
                            <p>[19:46:23 Server INFO]: Admin Password: NONBPFWPFPHL</p>
                            <p>[19:46:23 Server INFO]: To get help for commands, run help in console or /help in chatbox</p>
                            <p>[19:46:23 Server INFO]: If playing on LAN, use this IP: 192.168.178.37</p>
                            <p>[19:46:23 Server INFO]: Using LiteNetLib as networking library</p>
                            <p>[19:46:23 Server INFO]: Nitrox Server Started</p>
                            <p>[19:46:23 Server INFO]: If using port forwarding, use this IP: 21.1337.420.21</p>
                            <p>[19:46:23 Server INFO]: Could not load world: System.IO.InvalidDataException: Persisted state is not valid at NitroxServer.Serialization.World.WorldPersistence.LoadFromFile() in C:\Users\Sunrunner\Desktop\Code\Nitrox\NitroxServer\Serialization\World\WorldPersistence.cs:line 87 creating a new one.</p>
                            <p>[19:46:23 Server DEBUG]: Event Triggerer started!</p>
                            <p>[19:46:23 Server INFO]: World GameMode: Survival</p>
                            <p>[19:46:23 Server INFO]: Server Password: None. Public Server.</p>
                            <p>[19:46:23 Server INFO]: Admin Password: NONBPFWPFPHL</p>
                            <p>[19:46:23 Server INFO]: To get help for commands, run help in console or /help in chatbox</p>
                            <p>[19:46:23 Server INFO]: If playing on LAN, use this IP: 192.168.178.37</p>
                            <p>[19:46:23 Server INFO]: Using LiteNetLib as networking library</p>
                            <p>[19:46:23 Server INFO]: Nitrox Server Started</p>
                            <p>[19:46:23 Server INFO]: If using port forwarding, use this IP: 21.1337.420.21</p>
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

<style media="screen">
    .illustration-start-server {
        background-image: url('../assets/img/illustration/start-server.svg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        height: 180px;
    }
</style>

<script>
export default {

    data() {
        return {
            isServerStarted: false,
            x: 0,
            y: 0,
        };
    },

    methods: {
        toggleServer() {
            this.isServerStarted = !this.isServerStarted
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
