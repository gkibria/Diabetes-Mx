<template>
    <div>
        <div class="row">
            <div class="col-md-6 col-sm-6 item-box">
                <h5>History</h5>
                <p>In 1922 the first shot of insulin was pushed into human after discovery in 1921. Initially it was called isletin. This oldest anti-diabetic agent is still the most potent one.</p>
                <h5>Indications</h5>
                <ul class="htmlul">
                    <li>Type-1 DM.</li>
                    <li>Severe acute complications or illness.</li>
                    <li>Uncompansated chronic complications or illness.</li>
                    <li>Pregnancy, lactation</li>
                    <li>Major surgery.</li>
                    <li>Very high blood glucose.</li>
                    <li>OAD or non-insulin agents failure.</li>
                    <li>Adverse effects with OAD or non-insulin agents.</li>
                </ul>
                
                <h5>Regimens</h5>      
                <div class="list-group">
                    <div class="list-group-item list-group-item-info text-center">One injection a day:</div>
                    <div class="list-group-item">
                        One injection of intermediate acting insulin is given in evening or long acting insulin analogue is given in morning or evening. Effective only in Type-2 DM as monotherapy or in combination with OADs.
                    </div>

                    <div class="list-group-item list-group-item-info text-center">Two injections a day:</div>
                    <div class="list-group-item">
                        Most commonly used regimen. Injections are given before breakfast and dinner. Pre-mixed or Split-mixed insulin is used. Dose devided into morning: 2/3, evening: 1/3 providing short acting: 1/3, long acting: 2/3 
                    </div>

                    <div class="list-group-item list-group-item-info text-center">Multiple injections a day:</div>
                    <div class="list-group-item">
                        3-7 injections per day are used where there is difficulty in achieving optimal control with previous regimen. Total daily dose is devided into 50% long acting and 50% short acting.
                    </div>

                    <div class="list-group-item list-group-item-info text-center">Insulin Pump:</div>
                    <div class="list-group-item">
                        Continuous subceutaneous insulin infusion (CSII): small device delivering insulin at basal rate throught 24 hours and patient activated boluses during meal time through a subcutaneous cannula. Some of this devices are also equipped with continuous glucose monitoring (CGM) system.
                    </div>

                    <div class="list-group-item list-group-item-info text-center">Intravenous insulin infusion:</div>
                    <div class="list-group-item">
                        <ul class="htmlul">
                            <li>DKA, HHS</li>
                            <li>Critical illness - acute MI, stroke etc.</li>
                            <li>prolonged (&gt;12 hrs) NPO status.</li>
                            <li>TPN</li>
                            <li>Perioperative peroid.</li>
                            <li>During delivery.</li>
                            <li>Uncontrolled hyperglycemia exacerbated by illness or steroid.</li>
                            <li>Any condition requiring prompt lowering of blood glucose.</li>
                        </ul>
                    </div>
                </div>

                <h5>Combination with OADs</h5>
                <ul class="htmlul">
                    <li>Most authorities advocate not using secretagogues with insulin.</li>
                    <li>To replace secretagogues with insulin, some prefer to taper the OAD and simultaneous initiation and replacement of insulin dose, with some peroid of overlaping.</li>
                    <li>OAD can replace insulin when the prevailing conditions are over and patient is having stable glycemic control.
                </ul>

                <h5>Site of injection</h5>
                <p align="center"><img src="../../assets/insulin-injection-site-1.gif" class="img-responsive"></p>
            </div>
            <div class="col-md-6 col-sm-6">
                <h5>Dose Calculator</h5>
                <h6>Starting Dose</h6>
                <ul class="htmlul">
                    <li><strong>Type-1 DM:</strong> Initial total dose is <span class="text-info"><strong>0.2 to 0.5</strong></span> unit/Kg/Day</li>
                    <li><strong>Type-2 DM:</strong> Initial total dose is <span class="text-info"><strong>0.2 to 0.4</strong></span> unit/Kg/Day</li>
                </ul>

                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <h6>Calculate</h6>
                        <div class="well well-sm">
                            <div class="form-group">
                                <label>Insulin Unit/Kg/Day</label>
                                <input class="form-control" type="number" v-model="insulinData.unit" placeholder="eg. 0.2" step="any" required>
                            </div>
                            <div class="form-group">
                                <label>Weight in Kg</label>
                                <input class="form-control" type="number" v-model="insulinData.weight" placeholder="eg. 70" step="any">
                            </div>
                            <div class="text-center"><a href="#" class="btn btn-sm btn-primary" @click.prevent="calculateInsulin" :class="btnClass">calculate</a></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6" v-show="showResult">
                        <h6>Result: Total <strong>{{result.total}}</strong> Unit</h6>
                        <div class="list-group">
                            <div class="list-group-item list-group-item-info text-center">
                                Morning dose: <strong>{{result.morning_dose}}</strong> Unit
                            </div>
                            <div class="list-group-item text-center">
                                Short Acting: {{result.morning_short_acting}}, Long Acting: {{result.morning_long_acting}}
                            </div>

                            <div class="list-group-item list-group-item-info text-center">
                                Evening Dose: <strong>{{result.evening_dose}}</strong> Unit
                            </div>
                            <div class="list-group-item text-center">
                                Short Acting: {{result.evening_short_acting}}, Long Acting: {{result.evening_long_acting}}
                            </div>
                        </div>
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
                insulinData: {
                    unit: '',
                    weight: ''
                },
                result: {
                    unit : 0,
                    weight : 0,
                    total : 0,
                    morning_dose : 0,
                    evening_dose : 0,
                    morning_short_acting : 0,
                    morning_long_acting : 0,
                    evening_short_acting : 0,
                    evening_long_acting : 0,
                },
                showResult: false
            }
        },
        computed: {
            btnClass(){
                if(this.insulinData.unit > 0 && this.insulinData.weight > 0){
                    return ''
                }
                return 'disabled'
            }
        },
        methods: {
            calculateInsulin(){
                let unit = Math.abs(this.insulinData.unit);
                let weight, insulin_total;
                if(this.insulinData.weight > 0){
                    weight = Math.abs(this.insulinData.weight);
                    insulin_total = Math.round(unit * weight);
                }else{
                    weight = 0;
                    insulin_total = unit;
                }
                
                let morning_dose = Math.round(insulin_total * 2/3);
                let evening_dose = Math.round(insulin_total * 1/3);
                let morning_short_acting = Math.round(morning_dose * 1/3);
                let morning_long_acting = Math.round(morning_dose * 2/3);
                let evening_short_acting = Math.round(evening_dose * 1/3);
                let evening_long_acting = Math.round(evening_dose * 2/3);

                this.result.unit = unit;
                this.result.weight = weight;
                this.result.total = insulin_total;
                this.result.morning_dose = morning_dose;
                this.result.evening_dose = evening_dose;
                this.result.morning_short_acting = morning_short_acting;
                this.result.morning_long_acting = morning_long_acting;
                this.result.evening_short_acting = evening_short_acting;
                this.result.evening_long_acting = evening_long_acting;

                if(morning_dose > 0 && evening_dose > 0){
                    this.showResult = true;
                }else{
                    this.showResult = false
                }
            }
        }
    }
</script>

<style scoped>
    .item-box {
        height: 350px;
        overflow: scroll;
        overflow-x: hidden;
    }
</style>