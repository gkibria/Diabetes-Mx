<template>
    <div class="container">
        <h4 class="text-center">Treatment Therapy</h4>
        <hr>

        <div class="row">
            <div class="col-md-6 col-sm-6">
                <Oad :oads="oads"></Oad>
            </div>
            <div class="col-md-6 col-sm-6">
                <injectable :injs="injs"></injectable>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'
    import Oad from './therapy/oad.vue'
    import Injectable from './therapy/Injectable.vue'
    export default {
        data(){
            return {
                oads: [],
                injs: []
            }
        },
        components: {
            Oad, Injectable
        },
        methods: {
            
        },
        created(){
            this.$Progress.start()
            this.$http.get('https://diabetesmx-d5b81.firebaseio.com/therapy.json').then((response) => {
            var vm = this;
            // _.forEach(response.body, function(value){
            //     // console.log(response.body);
            //     vm.oads.push(value);
            // });
            vm.oads = response.body.oad;
            vm.injs = response.body.inj;
            this.$Progress.finish()
            }, (error) => {
            this.$Progress.fail()
            alertify.alert('Error Loading Data');
            });
        }
    }
</script>