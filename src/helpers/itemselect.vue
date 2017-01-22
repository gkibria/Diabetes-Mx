<template lang="html">
  <li class="list-group-item">
    <input type="checkbox" v-model="drug" @click="showvalue" value="">
    <span v-for="part in string2">
      <a href="#"
          v-if="part.options"
          class="drop-option"
          :options="[part.options]">{{ part.name }}</a>
      <span v-else>{{ part.name }}</span>
    </span>
  </li>
</template>

<script>
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
        this.$emit('input', txt);
      }
    }
  },
  computed: {
    string2(){
      // var str = this.string.match(/\[(.*?)\]/g);
      var str = this.item.split(/\[(.*?)\]/g);
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
  }
}

$(document).ready(function() {
  $('.drop-option').editable({
    title: 'Select Option',
    source: function(){
      var options = $(this).attr('options');
      return options.split(',');
    },
    showbuttons: false,
    type: 'select',
    send: 'never',
    mode: 'popup'
  });
});
</script>

<style lang="css">
</style>
