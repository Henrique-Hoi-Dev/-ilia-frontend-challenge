<template>
<div></div>
</template>
<script>
    export default {
        name: 'Init',
        methods: {
            isMobile() {
                if( screen.width <= 760 ) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        created() {
            if (this.isMobile()) {
                this.$router.push('/cards');
            }
            else {
                this.$router.push('/home');
            }
        }
    }
</script>
<style scoped>
</style>