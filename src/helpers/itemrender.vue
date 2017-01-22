<template lang="html">
  <li class="list-group-item">
    <input type="checkbox" @click="showvalue" :checked="item.checked">
    <span v-for="part in string2">
      <a href="#"
          v-if="part.options"
          class="drop-option"
          :options="[part.options]">{{ part.name }}</a>
      <span v-else>{{ part.name }}</span>
    </span>
    <span class="label">
      <a href="#" class="btn btn-xs"><i class="fa fa-edit"></i></a>
      <a href="#" class="btn btn-xs"><i class="fa fa-trash"></i></a>
    </span>
  </li>
</template>

<script>
import _ from 'lodash'
export default {
  props: ['item'],
  data(){
    return {
      drug: [],
    }
  },
  methods: {
    showvalue(e){
      if(e.target.checked){
        var txt = $(e.target).parent().text();
        console.log(txt);
        this.$emit('setPlanItems', txt);
      }
    },
    getCheckedItem(){

    }
  },
  computed: {
    string2(){
      // console.log(_.isEmpty(this.item));
      // var str = this.string.match(/\[(.*?)\]/g);
      var str;
      // if(_.isEmpty(this.item)){
      //   this.item = {};
      //   this.item.title = null;
      // }else{
      // }
      str = this.item.title.split(/\[(.*?)\]/g);
      var obj = [];
      // console.log(str);
      for( var part in str){
        if(str[part] == '') continue;
        var arr = str[part].split('|');
        var option = null;
        for(var j in arr){
          if(arr.length > 1){
            option = arr;
          }
        }
        obj.push({
          name : arr[0],
          options: option
        });
        // console.log(obj);
      }
      // var str = this.string.match(/[^[\]]+(?=])/g);
      return obj;

    }
  },
  created(){
    $('.drop-option').editable({
      title: 'Select Option',
      source: function(){
        var options = $(this).attr('options');
        return options.split(',');
      },
      showbuttons: false,
      type: 'select',
      send: 'never',
      mode: 'inline'
    });
  }
}
</script>

<style lang="css">
</style>
