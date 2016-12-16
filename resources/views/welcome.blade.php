<!DOCTYPE html>
<html lang="en">
<head>    
</head>
<body>
<h1>New Users</h1>
<ul id="app">
    <li v-for="user in users">@{{ user }}</li>
</ul>
<script src="{{ asset('/plugins/vue.js/vue.min.js') }}"></script>
<script src="{{ asset('/plugins/socket.io/socket.io.min.js') }}"></script>
<script src="{{ asset('/js/app.js') }}"></script>
<script language="JavaScript">
// var socket = io("http://127.0.0.1:3005");
/*
new Vue({
    el: '#app',
    data: {
        users: []
    },
    mounted: function() {
        this.$nextTick(function () {
            console.log("setting socket...");

            Echo.private('test-channel').listen('UserSignedUp', (e) => {
                console.log(e.update);
            });
            // socket.on('test-channel:App\\Events\\UserSignedUp', function(data) {
            // socket.on('test-channel:UserSignedUp', function(data) {
                // console.log(data);
                // this.users.push(data.username);
            // }.bind(this));
        });
    }
});
*/
</script>
</body>
</html>
