const app = new Vue({
    el: '#app',
    data: {
        albums: [],
    },
    created() {
        axios.get('http://localhost/php-ajax-dischi/phpElement/api.php')
        .then((response) => {
            this.albums = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    },
});