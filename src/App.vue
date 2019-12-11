
<template>
  <div id="app">
    <div class="container">
       <transition name="moveInUp">
         <router-view/>
       </transition>
        
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

