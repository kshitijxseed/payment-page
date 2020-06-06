<template>
    <div>
        <el-input type="tel" v-model="value" style="width:30%" placeholder="Enter your PayTM Number"></el-input>&emsp;
        <el-button type="primary">Proceed</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:''
        }
    }
}
</script>
