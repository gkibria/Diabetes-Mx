<template>
    <div class="container">
        <h4 class="text-center">Diagnosis &amp; Interpretation</h4>
        <hr>
        <p class="text-center">Diagnosis of Diabetes mellitus can be made by measuring plasma blood glucose level. The following tests are frequently used.</p>

        <div class="row">
            <div class="col-md-6 col-sm-6">
                <Rbs></Rbs>
            </div>
            <div class="col-md-6 col-sm-6">
                <Fbs></Fbs>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-6">
                <Ogtt></Ogtt>
            </div>
            <div class="col-md-6 col-sm-6">
                <Hba1c></Hba1c>
            </div>
        </div>
    </div>
</template>

<script>
    import Rbs from './measurements/Rbs.vue'
    import Fbs from './measurements/Fbs.vue'
    import Ogtt from './measurements/Ogtt.vue'
    import Hba1c from './measurements/Hba1c.vue'
    export default {
        components: {
            Rbs, Fbs, Ogtt, Hba1c
        }
    }
</script>