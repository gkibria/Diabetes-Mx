<template>
    <div>
        <h4>RBS</h4>
        <div class="row">
            <div class="col-md-6">
                Random Blood Sugar can only suspect one as diabetic or not. Cannot confirm diagnosis, monitoring purpose only. Result
                may very depending on device.
                <h6>Interpretation</h6>
                <div class="list-group">
                    <li class="list-group-item list-group-item-danger">DM: &ge; 11.1 mmol/L (+ Symptoms)</li>
                    <li class="list-group-item list-group-item-info">DM uncertain: 5.5 to &lt; 11.1 mmol/L</li>
                    <li class="list-group-item">DM unlikely: &lt; 5.5 mmol/L</li>
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
                                <select class="form-control" v-model="glucoseData.unit">
                                    <option value="mmol/L">mmol/L</option>
                                    <option value="mg/dl">mg/dl</option>
                                </select>
                            </div>
                        </div>
                        <div class="text-center">
                            <a href="" @click.prevent="calculateRBS()" class="btn btn-sm btn-primary" :class=" glucoseData.value <= 0 ? 'disabled' : ''">check</a>
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
                    unit: 'mmol/L',
                    result: ''
                },
            }
        },
        methods: {
            calculateRBS(){
                if(this.glucoseData.value > 0){
                    switch(this.glucoseData.unit){
                        case 'mmol/L':
                        if(this.glucoseData.value >= 11.1){
                            this.glucoseData.result = 'Suggestive of Diabetes Melitus if there is symptoms of hyperglycemia';
                        }else if(this.glucoseData.value >= 5.5 && this.glucoseData.value < 11.1){
                            this.glucoseData.result = 'Diabetes Melitus Uncertain. Please confirm by <i>OGTT</i>';
                        }else if(this.glucoseData.value <= 3.8){
                            this.glucoseData.result = 'Hypoglycemia';
                        }else{
                            this.glucoseData.result = 'Diabetes Melitus Unlikely. Please confirm by <i>OGTT</i>';
                        }
                        break;

                        case 'mg/dl':
                        if(this.glucoseData.value >= 200){
                            this.glucoseData.result = 'Suggestive of Diabetes Melitus if there is symptoms of hyperglycemia';
                        }else if(this.glucoseData.value >= 99 && this.glucoseData.value < 200){
                            this.glucoseData.result = 'Diabetes Melitus Uncertain. Please confirm by <i>OGTT</i>';
                        }else if(this.glucoseData.value <= 70){
                            this.glucoseData.result = 'Hypoglycemia. Glucose ingestion or infusion suggested.';
                        }else{
                            this.glucoseData.result = 'Diabetes Melitus Unlikely. Please confirm by <i>OGTT</i>';
                        }
                        break;
                    } 
                }else{
                    this.glucoseData.result = '';
                }
            }
        }
    }
</script>