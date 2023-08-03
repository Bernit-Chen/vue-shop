<template>
  <div class="text-center">
    <h1>Online Shop</h1>
  </div>
  <div class="text-center">
    <h2>
      Apple 10元/個 :
      <input type="number" placeholder="數量" v-model="quantity1">
      個
    </h2>
    <h2>
      Banana 15元/個 :
      <input type="number" placeholder="數量" v-model="quantity2">
      個
    </h2>
    <h2>
      Grape 20元/個 :
      <input type="number" placeholder="數量" v-model="quantity3">
      個
    </h2>
    Apple*{{quantity1}}+Banana*{{quantity2}}+Grape*{{quantity3}}={{total}}<br/>(運費50 滿250免運)<br/>
    <h2>
      優惠卷 :
      <input placeholder="優惠碼" v-model="dc">
    </h2>
    <h2>
      結帳金額:{{last}}元
    </h2>
    <button @click="myFunction">結帳</button>
  </div>

</template>

<script setup>
  import {computed, ref} from "vue";
  import router from "@/router";
  const quantity1=ref(0);
  const quantity2=ref(0);
  const quantity3=ref(0);
  const total=computed(()=>{
    return 10*quantity1.value+15*quantity2.value+20*quantity3.value;
  })

  const dc=ref("");
  const last=computed(()=>{
    if(dc.value==="滿50打8折"&&total.value>=250) return total.value*0.8;
    else if(dc.value==="滿50打8折"&&total.value>=50) return total.value*0.8+50;
    else if(dc.value==="滿100折5元"&&total.value>=250) return total.value-5;
    else if(dc.value==="滿100折5元"&&total.value>=100) return total.value-5+50;
    else if(dc.value==="滿150免運"&&total.value>=150) return total.value;
    else if(total.value>=250) return total.value;
    else return total.value+50;
  })
  function myFunction() {
    localStorage.setItem("totalpass", total.value);
    localStorage.setItem("lastpass", last.value);
    localStorage.setItem("quantity1pass", quantity1.value);
    localStorage.setItem("quantity2pass", quantity2.value);
    localStorage.setItem("quantity3pass", quantity3.value);

    let l=Number(localStorage.getItem("nstore"));
    if(isNaN(l)) l=0;
    localStorage.setItem("nstore", l+1);

    let q1=(localStorage.getItem("q1store")?.split(',')??[0]);
    let q2=(localStorage.getItem("q2store")?.split(',')??[0]);
    let q3=(localStorage.getItem("q3store")?.split(',')??[0]);
    let ll=(localStorage.getItem("llstore")?.split(',')??[0]);

    ll=[...ll,last.value];
    q1=[...q1,quantity1.value];
    q2=[...q2,quantity2.value];
    q3=[...q3,quantity3.value];

    localStorage.setItem("llstore", ll);
    localStorage.setItem("q1store", q1);
    localStorage.setItem("q2store", q2);
    localStorage.setItem("q3store", q3);

    router.push('/car')
  }
</script>
