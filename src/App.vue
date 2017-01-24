<template lang="html">
  <div>
    <app-header></app-header>
    <div class="container" style="min-height:450px;">
      <div class="row">
        <div class="col-md-12">
          <transition name="slide" mode="out-in">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
          <vue-progress-bar></vue-progress-bar>
          <appFooter></appFooter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
export default {
  components: {
    'appHeader': Header,
    'appFooter': Footer
  }
}
</script>

<style lang="css">
  .navbar {
      margin-bottom: 10px;
      min-height: 10px;
    }

    hr {
      margin: 10px 0px; 
    }

    .list-group-item {
      padding: 5px;
    }
  /*h2 {
    font-size: 25px;
  }*/
  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }
  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }

  /*!
   * bootstrap-vertical-tabs - v1.2.2
   * https://dbtek.github.io/bootstrap-vertical-tabs
   * 2016-12-02
   * Copyright (c) 2016 İsmail Demirbilek
   * License: MIT
   */
  .tabs-left, .tabs-right {
    border-bottom: none;
    padding-top: 2px;
  }
  .tabs-left {
    border-right: 1px solid #ddd;
  }
  .tabs-right {
    border-left: 1px solid #ddd;
  }
  .tabs-left>li, .tabs-right>li {
    float: none;
    margin-bottom: 2px;
  }
  .tabs-left>li {
    margin-right: -1px;
  }
  .tabs-right>li {
    margin-left: -1px;
  }
  .tabs-left>li.active>a,
  .tabs-left>li.active>a:hover,
  .tabs-left>li.active>a:focus {
    border-bottom-color: #ddd;
    border-right-color: transparent;
  }

  .tabs-right>li.active>a,
  .tabs-right>li.active>a:hover,
  .tabs-right>li.active>a:focus {
    border-bottom: 1px solid #ddd;
    border-left-color: transparent;
  }
  .tabs-left>li>a {
    border-radius: 4px 0 0 4px;
    margin-right: 0;
    display:block;
  }
  .tabs-right>li>a {
    border-radius: 0 4px 4px 0;
    margin-right: 0;
  }
  .sideways {
    margin-top:50px;
    border: none;
    position: relative;
  }
  .sideways>li {
    height: 20px;
    width: 120px;
    margin-bottom: 100px;
  }
  .sideways>li>a {
    border-bottom: 1px solid #ddd;
    border-right-color: transparent;
    text-align: center;
    border-radius: 4px 4px 0px 0px;
  }
  .sideways>li.active>a,
  .sideways>li.active>a:hover,
  .sideways>li.active>a:focus {
    border-bottom-color: transparent;
    border-right-color: #ddd;
    border-left-color: #ddd;
  }
  .sideways.tabs-left {
    left: -50px;
  }
  .sideways.tabs-right {
    right: -50px;
  }
  .sideways.tabs-right>li {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .sideways.tabs-left>li {
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
</style>
