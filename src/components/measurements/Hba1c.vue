<template>
    <div>
        <h4>HbA1c</h4>
        <div class="row">
            <div class="col-md-6">
                Glycated Hemoglobin. Most confirmatory test. Reflect status over 2-3 months. Should be done twice a 
                year in controlled diabetes and thrice a year in uncontrolled diabetes. Gold Standard Test.
                <h6>Interpretation</h6>
                <div class="list-group">
                    <li class="list-group-item list-group-item-danger"><small>DM: &ge; 6.5 %</small></li>
                    <li class="list-group-item list-group-item-info"><small>Pre-diabetes: 6.0 to 6.4 %</small></li>
                    <li class="list-group-item"><small>Normal: &lt; 6.0 %</small></li>
                </div>
            </div>
            <div class="col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h2 class="panel-title">Check Value</h2>
                    </div>
                    <div class="panel-body">
                        <small>Enter value and select unit</small>
                        <div class="row">
                            <div class="form-group col-md-6 col-sm-6">
                                <input type="number" v-model="glucoseData.value" class="form-control" placeholder="eg 6.5">
                            </div>
                            <div class="form-group col-md-6 col-sm-6">
                                <select class="form-control">
                                    <option value="%">%</option>
                                </select>
                            </div>
                        </div>
                        <div class="text-center">
                            <a href="" @click.prevent="calculateHba1c()" class="btn btn-sm btn-primary" :class=" glucoseData.value <= 0 ? 'disabled' : ''">check</a>
                        </div>
                    </div>
                    <div class="panel-footer text-center" v-show="glucoseData.result != ''">
                        <strong>Result</strong>
                        <div class="text-center" v-html="glucoseData.result"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                glucoseData: {
                    value: '', 
                    result: ''
                },
            }
        },
        methods: {
            calculateHba1c(){
                if(this.glucoseData.value > 0){
                    if(this.glucoseData.value >= 6.5){
                        this.glucoseData.result = 'Diabetes Melitus. Initiate Rx by Algorithm';
                    }else if(this.glucoseData.value >= 5.7 && this.glucoseData.value <= 6.4){
                        this.glucoseData.result = 'Pre-Diabetes';
                    }else if(this.glucoseData.value < 5.7){
                        this.glucoseData.result = 'Normal';
                    } 
                }else{
                    this.glucoseData.result = '';
                }
            }
        }
    }
</script>