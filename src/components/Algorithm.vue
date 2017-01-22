<template>
    <div class="container">
        <h4 class="text-center">Treatment Algorithm</h4>
        <hr>
        <p class="text-center">There are some specific algorithm of initiating and followup of treatment .</p>

        <div class="row">
            <div class="col-md-4 col-sm-4">
                <Target></Target>
            </div>
            <div class="col-md-4 col-sm-4">
                <Initiate></Initiate>
            </div>
            <div class="col-md-4 col-sm-4">
                <followup></followup>
            </div>
        </div>
    </div>
</template>

<script>
    import Target from './algorithm/Target.vue'
    import Initiate from './algorithm/Initiate.vue'
    import Followup from './algorithm/Followup.vue'
    export default {
        components: {
            Target, Initiate, Followup
        }
    }
</script>