<template>
    <div>
        <span>name: {{ this.name }}</span>
    </div>
</template>    

<script>
export default {
    props: ['name'],
//     data:() => ({
//         name: 'Will'
//     }),
    mounted() {
        console.log(this.name)
//         const url = location.href;
//         const lang = url[url.length - 1];
//         if(lang.indexOf('zh'))  this.name = '阿扎李';
    }
}
</script>

<style scoped>
    
</style>