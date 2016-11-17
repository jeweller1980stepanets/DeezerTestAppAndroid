/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */








var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);



        var arr = ['init','login','play'];
        var callbackSaccess = function(arg){console.log("OK");};
         var callbackError = function(){console.log("Error!!!!!!!!")};



        var appId = "192322";
        var albumId ="6575789";
        var Radio = "22";
        var PlayList = "2268421962";
        var trackId = "124603270";

        deezerPlayer.init(callbackSaccess,callbackError,appId);

        document.getElementById('btnPlayAlbum').addEventListener('click',function(){deezerPlayer.playAlbum(callbackSaccess,callbackError,albumId)});
        document.getElementById('btnPlay').addEventListener('click',function(){deezerPlayer.play(callbackSaccess,callbackError)});
        document.getElementById('btnPause').addEventListener('click',function(){deezerPlayer.pause(callbackSaccess,callbackError)});
        document.getElementById('btnPrev').addEventListener('click',function(){deezerPlayer.prev(callbackSaccess,callbackError)});
        document.getElementById('btnNext').addEventListener('click',function(){deezerPlayer.next(callbackSaccess,callbackError)});
        document.getElementById('btnRadio').addEventListener('click',function(){deezerPlayer.playRadio(callbackSaccess,callbackError,Radio)});
        document.getElementById('btnPlayList').addEventListener('click',function(){deezerPlayer.playPlaylist(callbackSaccess,callbackError,PlayList)});
        document.getElementById('btnPlayTracks').addEventListener('click',function(){deezerPlayer.playTracks(callbackSaccess,callbackError,trackId)});
                document.getElementById('slider_seek').addEventListener('click',function(e){
                var valX = (e.offsetX)*100/220;
                                       deezerPlayer.seek(valX)});
//slider_volume
document.getElementById('slider_volume').addEventListener('click',function(e){
                var valX = (e.offsetX)*100/220;
                                       deezerPlayer.setVolume(valX/100)});
            deezerPlayer.Events.on_buffering =function (args){
           document.getElementById('buffering_time').innerHTML = args[0];},
            deezerPlayer.Events.on_current_track =function(arg){
             document.getElementById('cur_track').innerHTML = arg[1]; //arg[1] - Title of track
            },
            deezerPlayer.Events.on_player_play = function(){document.getElementById('action').innerHTML = "plyer play";},
            deezerPlayer.Events.on_track_ended = function(){document.getElementById('action').innerHTML = "treck ended";},
            deezerPlayer.Events.on_pause = function(){document.getElementById('action').innerHTML = "treck ended";},

        deezerPlayer.Events.on_position = function(args){console.log("on position changed : "+ args);
                                                         document.querySelector("#media_time").innerHTML = Math.floor(args[0]) + " sec";
                                                         document.querySelector("#duration").innerHTML = Math.floor(args[1]) + " sec";};
document.getElementById('btnVolume').addEventListener('click',function(){deezerPlayer.setVolume(0,0)});
        /*document.getElementById('slider_seek').addEventListener('click',function(e){
        var valX = (e.offsetX)*100/220;
        deezerPlayer.seek(valX);})*/

}
};


app.initialize();
