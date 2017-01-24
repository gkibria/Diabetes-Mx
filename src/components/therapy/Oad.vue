<template>
    <div>
        <!--<h5>Oral Antidiabetic Agents</h5>-->

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
                            <option value="Secretagogues">Secretagogues</option>
                            <option value="Insulin Sensitizers">Insulin Sensitizers</option>
                            <option value="Alpha-glucosidase inhibitors">Alpha-glucosidase inhibitors</option>
                            <option value="Incretin mimetics">Incretin mimetics</option>
                            <option value="Other Agents">Other Agents</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <ul class="list-group item-box">
                        <li v-for="item in searchDrugs(oads)" v-show="!singleMode">
                            <a href="#" @click.prevent="selectDrug(item)" class="list-group-item"><i class="fa fa-item"></i> {{ item.drug  }} <span class="badge">{{ item.subclass == '' ? item.class : item.subclass }}</span></a>
                        </li>
                        <li class="list-group-item" v-show="singleMode">
                            <div class="list-group">
                                <div class="list-group-item text-center">
                                    <h5>{{ selectedDrug.drug }}</h5>
                                    <span>{{ selectedDrug.subclass ? selectedDrug.subclass : selectedDrug.class }}</span>
                                </div>
                                <div class="list-group-item list-group-item-info">Starting Dose</div>
                                <div class="list-group-item">{{ selectedDrug.starting_dose }}</div>
                                <div class="list-group-item list-group-item-info">Maximum Dose</div>
                                <div class="list-group-item">{{ selectedDrug.maximum_dose }}</div>
                                <div class="list-group-item list-group-item-info">Dose Adjustment</div>
                                <div class="list-group-item">{{ selectedDrug.dose_adjustment }}</div>
                                <div class="list-group-item list-group-item-info">Duration of Action</div>
                                <div class="list-group-item">{{ selectedDrug.duration_of_action }}</div>
                                <div class="list-group-item list-group-item-info">Mode of Excretion</div>
                                <div class="list-group-item">{{ selectedDrug.mode_of_excretion }}</div>
                                <div class="list-group-item list-group-item-info">Advantage</div>
                                <div class="list-group-item">{{ selectedDrug.advantage }}</div>
                                <div class="list-group-item list-group-item-info">Hazard</div>
                                <div class="list-group-item">{{ selectedDrug.hazard }}</div>
                                <div class="list-group-item list-group-item-info">Limitation</div>
                                <div class="list-group-item">{{ selectedDrug.limitation }}</div>
                            </div>
                        </li>
                    </ul>
                    <div class="panel-footer text-center">
                        <small v-show="!singleMode">Total {{ searchDrugs(oads).length }} items</small>
                        <a href="" v-show="singleMode" class="btn btn-xs btn-primary" @click.prevent="showList">Back</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6">
                <h5>Key points</h5>
                <ul class="htmlul">
                    <li>Usually an OAD is the first choice in type2 DM.</li>
                    <li>For most OADs to have any significant effect, the presence of sufficient amount of insulin or the ability of beta-cells to secret endogenous insulin is a must.</li>
                    <li>Some authorities prefer to combine the second or third agent before maximizing the previous one.</li>
                    <li>Combination of two secretagogues should be avoided. DPP-4 inhibitors cannot be combined with GLP-1 agonists.</li>
                    <li>OADs may be used with insulin or other injectable agents.</li>
                </ul>
            </div>
        </div>
        

        
    </div>
</template>

<script>
    export default {
        props: ['oads'],
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