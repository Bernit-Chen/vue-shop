<template>
  <h1 v-for="(item,i) in new Array(n).fill()">
    第{{ i+1 }}筆訂單
    <li>Apple : {{q1[i+1]}}個</li>
    <li>Banana : {{q2[i+1]}}個</li>
    <li>Grape : {{q3[i+1]}}個</li>
    共{{ll[i+1]}}元
    <br/><br/>
  </h1>
    <button @click="myFunction">返回主頁</button>
  <br/>
</template>
<script setup>
  import {ref} from "vue";
  const n= ref(Number(localStorage.getItem("nstore")));
  const q1= ref(localStorage.getItem("q1store").split(','));
  const q2= ref(localStorage.getItem("q2store").split(','));
  const q3= ref(localStorage.getItem("q3store").split(','));
  const ll= ref(localStorage.getItem("llstore").split(','));

  import router from "@/router";
  function myFunction() {
    router.push('/')
  }
</script>