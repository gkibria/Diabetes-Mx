<template>
    <div>
        <!--<h5>Injectable Agents</h5>-->

        <div class="row">
            <div class="col-md-6 col-sm-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="row">
                        <div class="col-md-6">
                            <input type="search" v-model="keyword" @click="" class="form-control input-sm" placeholder="search">
                        </div>
                        <div class="col-md-6">
                            <select class="form-control input-sm" v-model="drugclass">
                            <option value="">Any Group</option>
                            <option value="Conventional Insulin">Conventional Insulin</option>
                            <option value="Insulin Analogues">Insulin Analogues</option>
                            <option value="Other Agents">Other Agents</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <ul class="list-group item-box">
                        <li v-for="item in searchDrugs(injs)" v-show="!singleMode">
                            <a href="#" @click.prevent="selectDrug(item)" class="list-group-item"><i class="fa fa-item"></i> {{ item.drug  }} <span class="badge">{{ item.subclass == '' ? item.class : item.subclass }}</span></a>
                        </li>
                        <li class="list-group-item" v-show="singleMode">
                            <div class="list-group">
                                <div class="list-group-item text-center">
                                    <h5>{{ selectedDrug.drug }}</h5>
                                    <span>{{ selectedDrug.subclass ? selectedDrug.subclass : selectedDrug.class }}</span>
                                </div>
                                <div class="list-group-item list-group-item-info">Onset of Action</div>
                                <div class="list-group-item">{{ selectedDrug.onset_of_action }}</div>
                                <div class="list-group-item list-group-item-info">Peak Action</div>
                                <div class="list-group-item">{{ selectedDrug.peak_action }}</div>
                                <div class="list-group-item list-group-item-info">Duration of Action</div>
                                <div class="list-group-item">{{ selectedDrug.duration_of_action }}</div>
                                <div class="list-group-item list-group-item-info">Time with Meal</div>
                                <div class="list-group-item">{{ selectedDrug.time_with_meal }}</div>
                                <div class="list-group-item list-group-item-info" v-show="selectedDrug.advantage">Advantage</div>
                                <div class="list-group-item" v-show="selectedDrug.advantage">{{ selectedDrug.advantage }}</div>
                                <div class="list-group-item list-group-item-info">Hazard</div>
                                <div class="list-group-item">{{ selectedDrug.hazard }}</div>
                                <div class="list-group-item list-group-item-info" v-show="selectedDrug.limitation">Limitation</div>
                                <div class="list-group-item" v-show="selectedDrug.limitation">{{ selectedDrug.limitation }}</div>
                            </div>
                        </li>
                    </ul>
                    <div class="panel-footer text-center">
                        <small v-show="!singleMode">Total {{ searchDrugs(injs).length }} items</small>
                        <a href="" v-show="singleMode" class="btn btn-xs btn-primary" @click.prevent="showList">Back</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6">
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
            </div>
        </div>
        

        
    </div>
</template>

<script>
    export default {
        props: ['injs'],
        data(){
            return {
                keyword: '',
                drugclass: '',
                selectedDrug: {}
            }
        },
        computed: {
            singleMode(){
                return !_.isEmpty(this.selectedDrug);
            }
        },
        methods: {
            searchDrugs(obj){
                var reg = new RegExp(this.keyword, 'i');
                return obj.filter((element) => {
                    return element.drug.match(reg) && element.class.match(this.drugclass);
                });
            },
            selectDrug(item){
                this.selectedDrug = item;
            },
            showList(){
                this.selectedDrug = {};
            }
        }
    }
</script>

<style>
    .item-box {
        height: 300px;
        overflow: scroll;
        overflow-x: hidden;
    }
</style>