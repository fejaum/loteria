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
    }
};

var html = "",
    jogos = {
        0 : ["03", "18", "22", "34", "37", "58"],
        1 : ["22", "40", "43", "49", "56", "58"],
        2 : ["14", "15", "16", "20", "52", "57"],
        3 : ["08", "09", "17", "21", "27", "60"],
        4 : ["02", "15", "24", "27", "43", "45"],
        5 : ["07", "18", "25", "37", "41", "49"],
        6 : ["08", "10", "17", "31", "46", "53"],
        7 : ["06", "08", "14", "25", "34", "42"],
        8 : ["18", "26", "28", "56", "58", "59"],
        9 : ["11", "16", "21", "25", "30", "52"],
        10 : ["30", "34", "37", "46", "47", "49"],
        11 : ["17", "24", "27", "33", "46", "59"],
        12 : ["02", "05", "10", "26", "33", "39"],
        13 : ["08", "26", "45", "53", "54", "59"]
    };



$("form#VerificaResultado").submit(function (event){


    html = "";

$("section.resultados").html(html);

    html += '<div class="form-group">';

    var concurso = [$("#numero1").val(), $("#numero2").val(), $("#numero3").val(), $("#numero4").val(), $("#numero5").val(), $("#numero6").val()];

    for (var key in jogos) {

        var obj = jogos[key],
            count = 0,
            acertos = 0,
            acerto = '';

        html += '<div class="row text-center form-group">' +
                    '<div class="col-xs-10 col-md-10">' +
                        '<div class="row text-center">';

        for (var prop in obj) {

            acerto = 'btn-default';

            for (var pos in concurso) {
                if (acerto != 'btn-info')
                {
                    if (parseInt(obj[prop]) == parseInt(concurso[pos])) {
                        acerto = 'btn-info';
                        acertos++;
                    }
                }
            }

            html += '<div class="col-xs-2 col-md-2">' +
                        '<a class="btn ' + acerto + ' btn-sm disabled">' + obj[prop] + '</a>' +
                    '</div>';

            count++;

            if (count == 6) {
                acerto = 'btn-default'
                if (acertos == 6) {
                    acerto = "btn-success";
                } else if (acertos == 5) {
                    acerto = "btn-primary";
                } else if (acertos == 4) {
                    acerto = "btn-warning";
                }

                html +=     '</div>' +
                        '</div>' +
                        '<div class="col-xs-2 col-md-2">' +
                            '<a class="btn btn-sm ' + acerto + ' disabled ">' + acertos + '</a>' +
                        '</div>' +
                    '</div>';
            }
        }
    }

    html += '</div>';

    $("section.resultados").append(html);

    event.preventDefault();

});