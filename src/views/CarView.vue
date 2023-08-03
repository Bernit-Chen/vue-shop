<template>
  <h1>訂單</h1>
  <h2>品項:</h2>
  <h2>
    Apple: {{quantity1}} 個<br/>
    Banana {{quantity2}} 個<br/>
    Grape: {{quantity3}} 個<br/>
  </h2>
  <h2>總金額: {{last}} 元</h2>
  <button @click="myFunction">繼續購物</button>
  <br/>
  <button @click="myFunction2">歷史紀錄</button>
</template>
<script setup>
  import {ref} from "vue";
  import router from "@/router";
  const total=ref(localStorage.getItem("totalpass"))
  const last=ref(localStorage.getItem("lastpass"))
  const quantity1=ref(localStorage.getItem("quantity1pass"))
  const quantity2=ref(localStorage.getItem("quantity2pass"))
  const quantity3=ref(localStorage.getItem("quantity3pass"))
  function myFunction() {
    router.push('/')
  }
  function myFunction2() {
    router.push('/history')
  }
</script>