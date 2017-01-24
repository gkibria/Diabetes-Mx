<template>
    <div class="container">
        <h4 class="text-center">Treatment Therapy</h4>
        <hr>

        <ul class="nav nav-tabs">
            <li class="active"><a href="#oads" data-toggle="tab">OADs</a></li>
            <li><a href="#injectables" data-toggle="tab">Injectables</a></li>
            <li><a href="#insulin" data-toggle="tab">Insulin Therapy</a></li>
        </ul>

        <div class="tab-content">
            <div class="tab-pane active" id="oads">
                <Oad :oads="oads"></Oad>
            </div>
            <div class="tab-pane" id="injectables">
                <injectable :injs="injs"></injectable>
            </div>
            <div class="tab-pane" id="insulin">
                <insulin></insulin>
            </div>
        </div>

    </div>
</template>

<script>
    import _ from 'lodash'
    import Oad from './therapy/oad.vue'
    import Injectable from './therapy/Injectable.vue'
    import Insulin from './therapy/Insulin.vue'
    export default {
        data(){
            return {
                oads: [],
                injs: []
            }
        },
        components: {
            Oad, Injectable, Insulin
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