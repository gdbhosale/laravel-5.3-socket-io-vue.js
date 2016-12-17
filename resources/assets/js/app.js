
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

// Vue.component('example', require('./components/Example.vue'));

var socket = io("http://127.0.0.1:3005");

const app = new Vue({
    el: '#app',
    data: {
        users: []
    },
    mounted: function() {
        this.$nextTick(function () {
            console.log("setting socket...");

            // Echo.private('test-channel').listen('App\\Events\\UserSignedUp', (e, data) => {
            //     console.log("Echo.private - test-channel:App\\Events\\UserSignedUp", e.update, data);
            // });
            // Echo.private('test-channel').listen('App\Events\UserSignedUp', (e, data) => {
            //     console.log("Echo.private - test-channel:App\Events\UserSignedUp", e.update, data);
            // });
            Echo.private('test-channel').listen('UserSignedUp', function (data) {
                console.log("Echo.private - test-channel:UserSignedUp", data);
                this.users.push(data.username);
            });
            /*
            socket.on('private-test-channel:App\Events\UserSignedUp', function(data) {
                // socket.on('test-channel:UserSignedUp', function(data) {
                console.log("socket.on - private-test-channel:App\Events\UserSignedUp", data);
                this.users.push(data.username);
            }.bind(this));

            socket.on('private-test-channel:App\\Events\\UserSignedUp', function(data) {
                // socket.on('test-channel:UserSignedUp', function(data) {
                console.log("socket.on - private-test-channel:App\\Events\\UserSignedUp", data);
                this.users.push(data.username);
            }.bind(this));
            */
        });
    }
});
