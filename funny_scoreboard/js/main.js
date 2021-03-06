/*
 * @author Korkeat W. <khasathan@gmail.com>
 */

var socket = io.connect('http://localhost:8083');

socket.on('connect', function () {
    console.log('connected');
});

socket.on('update score', function (score) {
    var teams = Object.keys(score);
    teams.forEach(function (team) {
        $('#' + team + '_score').html(score[team]);
    });
});

function cheer_this_team(team) {
    highlight_team(team);
    var user = $('#user').val();
    socket.emit('select team', {team: team, user: user});
}

function highlight_team(team) {
    $('span[id*="_score"]').removeClass('green');
    $('#' + team + '_score').addClass('green');
}
