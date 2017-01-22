<template lang="html">
    <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/" class="navbar-brand">Diabetes Mx</router-link>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">

            <router-link to="/" activeClass="active" tag="li"exact><a>Home</a></router-link>
            <router-link to="/learn" activeClass="active" tag="li" class="nav-item"><a>Learn</a></router-link>
            <router-link to="/diagnosis" activeClass="active" tag="li" class="nav-item"><a>Diagnosis</a></router-link>
            <router-link to="/algorithm" activeClass="active" tag="li" class="nav-item"><a>Algorithm</a></router-link>
            <router-link to="/diet" activeClass="active" tag="li"exact><a>Diet</a></router-link>
            <router-link to="/therapy" activeClass="active" tag="li"exact><a>Therapy</a></router-link>
            <router-link to="/complications" activeClass="active" tag="li"exact><a>Complications</a></router-link>
            <!--<router-link to="/tools" activeClass="active" tag="li"exact><a>Tools</a></router-link>-->

          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
</template>

<script>
export default {
  mounted(){
    $(function(){
      $('.navbar-collapse ul li a').click(function(){
        $('.navbar-toggle:visible').click();
      });
    });
  }
}
</script>

<style lang="css">
</style>
