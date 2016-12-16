
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

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
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
