<template>
    <div id="app">
        <!-- <ScoreBoard></ScoreBoard> -->
        <App1 v-if="checkApp"></App1>
		<App2 v-if="!checkApp"></App2>
    </div>
</template>

<script>
// import ScoreBoard from "./components/ScoreBoard.vue";
// import Login from "./components/Login.vue";
// import Register from "./components/Register.vue";
import axios from "axios";
import { BASE_API } from "./config/dev";
import { ElMessage } from "element-plus";
import { defineComponent } from "vue";
import App1 from "./App1.vue";
import App2 from "./App2.vue";

export default defineComponent({
    name: "App",
    data() {
        return {
            screenWidth: document.body.clientWidth,
			checkApp: true,
        };
    },
    components: {
        App1,
		App2,
        // ScoreBoard,
        // Login,
        // Register,
    },
    mounted() {
        const _this = this;
        window.onresize = () => {
            window.screenWidth = document.body.clientWidth;
            _this.screenWidth = window.screenWidth;
        };
    },
    watch: {
        screenWidth: {
			immediate: true,
			handler: function(newVal){
            // console.log(newVal);
				if(newVal < 1024){
					this.checkApp = false;
				} else{
					this.checkApp = true;
				}
			}
        },
    },
});
</script>

<style>
.app{
	/* background-color: #e6e6e6; */
}
</style>