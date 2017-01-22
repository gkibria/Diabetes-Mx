<template>
    <div>
        <h4>OGTT</h4>
        <div class="row">
            <div class="col-md-6">
                Oral Glucose Tolerance Test, OGTT has to be done to declare a person as Diabetic. It is confirmatory to detect glucose intolerance.
                <h6>Interpretation</h6>
                <div class="list-group">
                    <li class="list-group-item list-group-item-danger">DM: <span class="label label-primary">&ge; 7.0 mmol/L</span> and/or <span class="label label-info">&ge; 11.1 mmol/L</span></li>
                    <li class="list-group-item list-group-item-info">IGT: <span class="label label-primary">&lt; 7.0 mmol/L</span> and <span class="label label-info">7.8 to &lt; 11.1 mmol/L</span></li>
                    <li class="list-group-item list-group-item-warning">IFG: <span class="label label-primary">6.1 to &lt; 7.0 mmol/L</span> and <span class="label label-info">&lt; 7.8 mmol/L</span></li>
                    <li class="list-group-item">Normal: <span class="label label-primary">&lt; 6.1 mmol/L</span> and <span class="label label-info">&lt; 7.8 mmol/L</span></li>
                    <li class="list-group-item text-center"><span class="label label-primary">Fasting</span> <span class="label label-info">After 2 hours</span></li>
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
                                <input type="number" v-model="glucoseData.value1" class="form-control" placeholder="fasting">
                            </div>
                            <div class="form-group col-md-6 col-sm-6">
                                <input type="number" v-model="glucoseData.value2" class="form-control" placeholder="2 hrs">
                            </div>
                        </div>
                        <div class="form-group">
                                <select class="form-control" v-model="glucoseData.unit">
                                    <option value="mmol/L">mmol/L</option>
                                    <option value="mg/dl">mg/dl</option>
                                </select>
                            </div>
                        <div class="text-center">
                            <a href="" @click.prevent="calculateOGTT()" class="btn btn-sm btn-primary" :class=" glucoseData.value1 <= 0 || glucoseData.value2 <= 0 ? 'disabled' : ''">check</a>
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
                    value1: '', 
                    value2: '',
                    unit: 'mmol/L',
                    result: ''
                },
            }
        },
        methods: {
            calculateOGTT(){
                if(this.glucoseData.value1 > 0){
                    switch(this.glucoseData.unit){
                        case 'mmol/L':
                        if(this.glucoseData.value1 >= 7 || this.glucoseData.value2 >= 11.1){
                            this.glucoseData.result = 'Diabetes Melitus. Please confirm by HbA1c or initiate Rx by Algorithm';
                        }else if(this.glucoseData.value1 < 7 && ( this.glucoseData.value2 >= 7.8 && this.glucoseData.value2 < 11.1) ){
                            this.glucoseData.result = 'IGT (Impared Glucose Tolerance)';
                        }else if((this.glucoseData.value1 >= 6.1 && this.glucoseData.value1 < 7) && this.glucoseData.value2 < 7.8){
                            this.glucoseData.result = 'IFG (Impared Fasting Glucose).';
                        }else if(this.glucoseData.value1 < 6.1 && this.glucoseData.value2 < 7.8){
                            this.glucoseData.result = 'Normal Blood Sugar.';
                        }
                        break;

                        case 'mg/dl':
                        if(this.glucoseData.value1 >= 126 || this.glucoseData.value2 >= 200){
                            this.glucoseData.result = 'Diabetes Melitus. Please confirm by HbA1c or initiate Rx by Algorithm';
                        }else if(this.glucoseData.value1 < 126 && ( this.glucoseData.value2 >= 140 && this.glucoseData.value2 < 200) ){
                            this.glucoseData.result = 'IGT (Impared Glucose Tolerance)';
                        }else if((this.glucoseData.value1 >= 100 && this.glucoseData.value1 < 126) && this.glucoseData.value2 < 140){
                            this.glucoseData.result = 'IFG (Impared Fasting Glucose).';
                        }else if(this.glucoseData.value1 < 100 && this.glucoseData.value2 < 126){
                            this.glucoseData.result = 'Normal Blood Sugar.';
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