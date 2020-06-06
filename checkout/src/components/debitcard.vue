<template>
    <div >
		<div>
			<div style="float:left;width:50%">
			<h5>NAME ON CARD</h5>
			<el-input v-model="dc.name" placeholder="Ex:ABC D" style="width:80%"></el-input>
			</div>
			<div style="float:right;width:50%">
			<h5>CARD NUMBER</h5>													
			<el-input v-model="dc.no"  placeholder="0000-0000-0000-0000" style="width:80%" v-cardformat:formatCardNumber required></el-input>
			</div>		
		</div>	
		<div>
			<div style="float:left;width:50%">
					<h5>EXPIRY</h5>
					<ul>
							<el-input  style="width:20%"  v-model="dc.expiry" v-cardformat:formatCardExpiry />&emsp;													
					</ul>
			</div>
			<div style="float:left;width:50%">
					<h5>CVV NUMBER</h5>													
					<el-input type="password" style="width:20%" v-model="dc.cvv" placeholder="xxx" v-cardformat:formatCardCVC required=""/>
			</div>
		</div>
		<div>
			<br>
			<br>
			<el-checkbox v-model="dc.save" >Save the card for future purposes.</el-checkbox>	<br>
		<center><el-button type="primary" @click="print()">Proceed</el-button></center><br>
		
		</div>
	</div>
</template>
<script>
import Vue from 'vue';
import VueCardFormat from 'vue-credit-card-validation';
Vue.use(VueCardFormat)

export default {
	data(){
		return {
            dc:{name:'',no:'',cvv:'',expiry:'',save:true},
            cardErrors:{},
            $cardFormat:Vue.prototype.$cardFormat
		}
		},
		methods:{
        print(){

          
          this.cardErrors = {};
          
          // validate card number
          if(!this.$cardFormat.validateCardNumber(this.dc.no)){
            alert("Invalid Credit Card Number.")

          // validate card expiry
          if (!this.$cardFormat.validateCardExpiry(this.dc.expiry)) {
            alert("Invalid Expiration Date.")

          // validate card CVC
          if (!this.$cardFormat.validateCardCVC(this.dc.cvv)) {
            alert("Invalid CVV.")
          console.log(this.dc)

        }}}}
	}
}

</script>
<style src="../assets/css/style.css"></style>