<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

:root {
  --red: #bd1751;
  --green: #899b26;
  --orange: #e97f05;
}

.container, .container-fluid {
  display: flex;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  align-items: flex-start;
  box-sizing: border-box;
}

.container {
  margin-left: 54px;
  margin-right: 54px;
}
</style>
