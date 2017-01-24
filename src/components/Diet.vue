<template>
    <div class="container">
        <h4 class="text-center">Diabetic Diet for Adults</h4>
        <div class="text-center"><small>for Bangladeshi people only</small></div>
        <hr>
        
        <div class="well well-sm text-center">
            <form class="form-inline">
                <div class="form-group">
                    <label class="">Height:</label>
                    <select class="form-control input-sm" v-model="formData.height.ft">
                        <option value="0">0 Foot</option>
                        <option value="4">4 Foot</option>
                        <option value="5">5 Foot</option>
                        <option value="6">6 Foot</option>
                    </select>
                    <select class="form-control input-sm" v-model="formData.height.inch">
                        <option value="0">0 Inch</option>
                        <option v-for="n in 11" :value="n">{{n}} Inch</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Weight (Kg):</label>
                    <select class="form-control input-sm" v-model="formData.weight">
                        <option v-for="n in weightList" :value="n">{{n}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Activity level:</label>
                    <select class="form-control input-sm" v-model="formData.activityLevel">
                        <option>Sedentary</option>
                        <option>Moderately Active</option>
                        <option>Active</option>
                    </select>
                </div>
                <a href="" class="btn btn-xs btn-primary" @click.prevent="calorieResult" :class="formData.height.ft > 0 ? '' : 'disabled'">calculate</a>
            </form>
        </div>

        <div class="text-center" v-show="showResult">
            <h6>BMI: <strong>{{ person.bmi }} ({{ person.bmi_text }})</strong>, Daily Calorie: <strong>{{ person.kcal }} KCal</strong>, Ideal Weight: <strong>{{ person.ideal_bw }}</strong></h6>
            <hr>
            Available Diet Chart:<br> 
            <a href="" class="btn btn-sm btn-default btn-default" v-for="item in dietData.dietCharts" @click.prevent="selectChart(item)">{{ item.calorie }} KCal</a>
            <hr>
        </div>

        <div class="row" v-show="showResult && chartShowed">
            <div class="col-md-6 col-sm-6">
                <h6><strong>দৈনন্দিন খাদ্য রুটিন - মোট ক্যালোরীঃ {{ diet.calorieBN }}</strong></h6>
                <div class="list-group">
                    <div class="list-group-item list-group-item-success text-center">
                        সকাল
                    </div>
                    <div class="list-group-item">
                        <ul>
                            <li v-for="item in diet.morning">{{ item }}</li>
                        </ul>
                    </div>
                    <div class="list-group-item list-group-item-success text-center">
                        বেলা
                    </div>
                    <div class="list-group-item">
                        <ul>
                            <li>{{ diet.midMorning }}</li>
                        </ul>
                    </div>
                    <div class="list-group-item list-group-item-success text-center">
                        দুপুর
                    </div>
                    <div class="list-group-item">
                        <ul>
                            <li v-for="item in diet.lunch">{{ item }}</li>
                        </ul>
                    </div>
                    <div class="list-group-item list-group-item-success text-center">
                        বিকাল
                    </div>
                    <div class="list-group-item">
                        <ul>
                            <li>{{ diet.evening }}</li>
                        </ul>
                    </div>
                    <div class="list-group-item list-group-item-success text-center">
                        রাত্রি
                    </div>
                    <div class="list-group-item">
                        <ul>
                            <li v-for="item in diet.dinner">{{ item }}</li>
                        </ul>
                    </div>
                    <div class="list-group-item list-group-item-success text-center">
                        শোবার আগে (রাতে খাওয়ার কমপক্ষে ১-২ ঘন্টা পর)
                    </div>
                    <div class="list-group-item">
                        <ul>
                            <li>{{ diet.beforeSleep }}</li>
                        </ul>
                    </div>
                </div>
                <div class="text-center">
                    <span class="badge" v-for="item in dietData.measurement">{{ item }}</span>
                </div>

                <h6>Note</h6>
                <div class="list-group">
                    <div class="list-group-item list-group-item-info text-center">
                        খেতে বাধা নেই
                    </div>
                    <div class="list-group-item">
                        {{ dietData.foodAny }}
                    </div>
                    <div class="list-group-item list-group-item-info text-center">
                        খাওয়া নিষেধ
                    </div>
                    <div class="list-group-item">
                        {{ dietData.foodRestrict }}
                    </div>
                    <div class="list-group-item list-group-item-info text-center">
                        অসুস্থ হলে
                    </div>
                    <div class="list-group-item">
                        {{ dietData.foodDuringIll }}
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6">
                <h6><strong>খাদ্য তালিকা</strong></h6>
                <div class="list-group">
                    <div class="list-group-item list-group-item-info text-center">
                        শস্য ও শর্করা জাতীয় খাবার
                    </div>
                    <div class="list-group-item">
                        {{ dietData.foodCarbohydrate }}
                    </div>
                    <div class="list-group-item list-group-item-info text-center">
                        মাছ মাংস ও প্রোটিন জাতীয় খাবার
                    </div>
                    <div class="list-group-item">
                        {{ dietData.foodProtein }}
                    </div>
                    <div class="list-group-item list-group-item-info text-center">
                        দুধ ও দুগ্ধ জাতীয় খাবার
                    </div>
                    <div class="list-group-item">
                        {{ dietData.foodMilkProduct }}
                    </div>
                    <div class="list-group-item list-group-item-info text-center">
                        ডাল জাতীয় খাবার
                    </div>
                    <div class="list-group-item">
                        {{ dietData.foodLegume }}
                    </div>
                    <div class="list-group-item list-group-item-info text-center">
                        শাক-সবজি ১নং
                    </div>
                    <div class="list-group-item">
                        {{ dietData.foodVeg1 }}
                    </div>
                    <div class="list-group-item list-group-item-info text-center">
                        শাক-সবজি ২নং
                    </div>
                    <div class="list-group-item">
                        {{ dietData.foodVeg2 }}
                    </div>
                    <div class="list-group-item list-group-item-info text-center">
                        ফলমূল ১ নং
                    </div>
                    <div class="list-group-item">
                        {{ dietData.foodFruits1 }}
                    </div>
                    <div class="list-group-item list-group-item-info text-center">
                        ফলমূল ২ নং
                    </div>
                    <div class="list-group-item">
                        {{ dietData.foodFruits2 }}
                    </div>
                    <div class="list-group-item list-group-item-info text-center">
                        ফ্যাট ও তৈল জাতীয় খাবার
                    </div>
                    <div class="list-group-item">
                        {{ dietData.foodFat }}
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Diet',
        data(){
            return {
                weightList: [],
                dietData: {},
                diet: {},
                person: {},
                formData: {
                    height: {
                        ft: 0, inch: 0
                    },
                    weight: 50,
                    activityLevel: "Sedentary"
                },
                showResult: false,

            }
        },
        methods: {
            selectChart(item){

                this.diet = item;
            },
            calorieResult(){
                if(this.formData.height.ft <= 0 || this.formData.weight <= 0){
                    return;
                    this.showResult = false;
                }
                let height = (Number(this.formData.height.ft) * 12) + Number(this.formData.height.inch);
                var height_cm = Math.round(Math.abs(height) * 2.54);
                var ideal_bw = Math.round( height_cm - 100 );
                var height_meter = height_cm/100;
                var bmi = Math.round(Math.abs(this.formData.weight) / (height_meter * height_meter));
                var bmi_text = '';
                var cf = 0;
                var kcal = 0;
                if(bmi < 18.5){
                    bmi_text = 'Under-weight';
                }else if(bmi < 25){
                    bmi_text = 'Normal';
                }else if(bmi < 30){
                    bmi_text = 'Over-weight';
                }else if(bmi < 40){
                    bmi_text = 'Obese';
                }else if(bmi >= 40){
                    bmi_text = 'Morbidly-obese'
                }

                switch(this.formData.activityLevel){
                    case 'Sedentary':
                        if(bmi_text == 'Under-weight') cf = 35;
                        if(bmi_text == 'Normal') cf = 30;
                        if(bmi_text == 'Over-weight') cf = 25;
                        if(bmi_text == 'Obese') cf = 20;
                        if(bmi_text == 'Morbidly-obese') cf = 15;
                        break;
                    case 'Moderately Active':
                        if(bmi_text == 'Under-weight') cf = 40;
                        if(bmi_text == 'Normal') cf = 35;
                        if(bmi_text == 'Over-weight') cf = 30;
                        if(bmi_text == 'Obese') cf = 25;
                        if(bmi_text == 'Morbidly-obese') cf = 20;
                        break;
                    case 'Active':
                        if(bmi_text == 'Under-weight') cf = 45;
                        if(bmi_text == 'Normal') cf = 40;
                        if(bmi_text == 'Over-weight') cf = 35;
                        if(bmi_text == 'Obese') cf = 30;
                        if(bmi_text == 'Morbidly-obese') cf = 25;
                        break;
                }

                kcal = Math.round(ideal_bw * cf);
                this.person = {},
                this.person.ideal_bw = ideal_bw;
                this.person.bmi = bmi;
                this.person.bmi_text = bmi_text;
                this.person.cf = cf;
                this.person.kcal = kcal;
                this.person.height = height_cm;
                this.person.weight = Math.abs(this.formData.weight);
                this.person.activityLevel = this.formData.activityLevel;

                this.showResult = true;
            },
        },
        computed: {
            chartShowed(){
                return !_.isEmpty(this.diet);
            }
        },
        created(){
            for(let i = 10; i < 190; i++){
                this.weightList.push(i);
            }
            this.$Progress.start()
            this.$http.get('https://diabetesmx-d5b81.firebaseio.com/diet.json').then((response) => {
                this.dietData = response.body;
                // this.diet = _.find(this.dietData.dietCharts, {calorie: 1000});
                this.$Progress.finish()
            }, (error) => {
                this.$Progress.fail()
                alertify.alert('Error Loading Data');
            });
            
        },
        mounted(){
            
        }
    }
</script>

<style lang="">
    .number{
        width: 100px !important;
    }
</style>