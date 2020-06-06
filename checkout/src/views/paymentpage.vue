<template>
    <el-collapse v-model="activeNames" style="padding:0 16px;" accordion>
        <el-collapse-item title="Credit Card" name="1">
            <div style="padding:0 16px;"><CreditCard/></div>
        </el-collapse-item>
        <el-collapse-item title="Debit Card" name="2">
            <div style="padding:0 16px;"><DebitCard/></div>
        </el-collapse-item>
        <el-collapse-item title="Net Banking" name="3">
            <div style="padding:0 16px;"><NetBanking/></div>
        </el-collapse-item>
        <el-collapse-item title="BHIM UPI" name="4">
            <div style="padding:0 16px;"><BHIM/></div>
        </el-collapse-item>
        <el-collapse-item title="PayTM" name="5">
            <div style="padding:0 16px;"><PayTM/></div>
        </el-collapse-item>
    </el-collapse>    
</template>
<script>
import CreditCard from '../components/creditcard.vue'
import DebitCard from '../components/debitcard.vue'
import NetBanking from '../components/netbanking.vue'
import BHIM from '../components/BHIM.vue'
import PayTM from '../components/PayTM.vue'
export default {
    name:'payment',
    components:{
        CreditCard,
        DebitCard,
        NetBanking,
        BHIM,
        PayTM
    },
    data(){
        return{
            activeNames:['1']
        }
    }
    
}
</script>