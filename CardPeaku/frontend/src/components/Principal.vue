<template>
  <div id="app">
    <MenuBar/>
    <MainPage/>
    <SectionOne/>
    <section-two style="margin-top: 7rem;"/>

  </div>
</template>

<script>
import MenuBar from '../components/MenuBar.vue'
import MainPage from '../components/MainPage.vue'
import SectionOne from '../components/SectionOne.vue'
import SectionTwo from './SectionTwo.vue'



export default {
  name: 'Principal',
components:{
    MenuBar,
    MainPage,
    SectionOne,
    SectionTwo,
}
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
