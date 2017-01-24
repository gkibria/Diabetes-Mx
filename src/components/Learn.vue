<template>
    <div class="container">
        <h4 class="text-center">Learn about diabetes</h4>
        <hr>

        <div class="row">
            <div class="col-md-3 col-sm-4 col-xs-6" v-for="item in videos">
                <div class="thumbnail">
                    <a :href="'http://www.youtube.com/watch?v=' + item.snippet.resourceId.videoId" class="lightbox" rel="gallery">
                        <img :src="item.snippet.thumbnails.medium.url"  class="img-responsive">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Learn',
        data(){
            return {
                videos: []
            }
        },
        created(){
            this.$Progress.start()
            this.$http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=PL-8hKsYqAtZKY78jqQS5Nx88TsiT5yOnF&key=AIzaSyD_JCmKch4WbgMUCJIfKzLT7aGeto6SOHY').then((response) => {
            this.videos = response.body.items;
            this.$Progress.finish()
            }, (error) => {
            this.$Progress.fail()
            alertify.alert('Error Loading Data');
            });
        },
        mounted(){
            $(function(){
                $('.lightbox').swipebox()
            })
        }
    }
</script>