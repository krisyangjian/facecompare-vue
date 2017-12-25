<template>
    <div class="content-wrap">
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
	export default {
		data() {
			return{
			}
		},
		components: {
		},
		methods: {
		}
	}		
</script>

<style>
	.content-wrap {
        height: calc(100% - 40px);
        padding: 20px;
        background-color: #ffffff;
        overflow: hidden;
    }
    .content {
        border: 1px solid #c7c7ca;
    }
</style>
