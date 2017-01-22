<template>
    <div>
        <h4>FBS</h4>
        <div class="row">
            <div class="col-md-6">
                Fasting Blood Sugar indicate one as diabetic or IFG (Impared Fasting Glucose) but not as normal. Because a person of either normal value or IFG can become diabetic or IGT (Impared Glucose Tolerance) if OGTT done.
                <h6>Interpretation</h6>
                <div class="list-group">
                    <li class="list-group-item list-group-item-danger"><small>DM: &gt; 7.0 mmol/L</small></li>
                    <li class="list-group-item list-group-item-info"><small>IFG: 6.1 to &lt; 7.0 mmol/L</small></li>
                    <li class="list-group-item"><small>Normal: &lt; 6.1 mmol/L</small></li>
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
                            <a href="" @click.prevent="calculateFBS()" class="btn btn-sm btn-primary" :class=" glucoseData.value <= 0 ? 'disabled' : ''">check</a>
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
            calculateFBS(){
                if(this.glucoseData.value > 0){
                    switch(this.glucoseData.unit){
                        case 'mmol/L':
                        if(this.glucoseData.value >= 7){
                            this.glucoseData.result = 'Suggestive of Diabetes Melitus. Please confirm by OGTT';
                        }else if(this.glucoseData.value >= 5.6 && this.glucoseData.value < 7){
                            this.glucoseData.result = 'IFG (Impared Fasting Glucose)';
                        }else if(this.glucoseData.value <= 3.8){
                            this.glucoseData.result = 'Hypoglycemia. Glucose ingestion or infusion suggested.';
                        }else{
                            this.glucoseData.result = 'Normal Fasting Glucose. Please confirm by <i>OGTT</i>';
                        }
                        break;

                        case 'mg/dl':
                        if(this.glucoseData.value >= 126){
                            this.glucoseData.result = 'Suggestive of Diabetes Melitus. Confirm by OGTT';
                        }else if(this.glucoseData.value >= 100 && this.glucoseData.value < 126){
                            this.glucoseData.result = 'IFG (Impared Fasting Glucose)';
                        }else if(this.glucoseData.value <= 70){
                            this.glucoseData.result = 'Hypoglycemia. Glucose ingestion or infusion suggested.';
                        }else{
                            this.glucoseData.result = 'Normal Fasting Glucose. Please confirm by OGTT';
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