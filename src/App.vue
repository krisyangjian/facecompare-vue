<template>
	<div class="page-wrap">
		<header-layout></header-layout>
		<div class="page-container">
			<menu-layout></menu-layout>
			<content-layout></content-layout>
		</div>
	</div>
</template>
<script>
	import HeaderLayout from '@/components/layout/header';
	import MenuLayout from '@/components/layout/menu';
	import ContentLayout from '@/components/layout/content';
	export default {
		name: 'app',
		components: {
			HeaderLayout,
			MenuLayout,
			ContentLayout
		}
	}
</script>
<style>
    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,
    form,fieldset,legend,textarea,p,th,td,input,
    select,textarea,button {margin:0;padding:0}
    dl,ul,ol,menu,li {list-style:none}
    a {text-decoration:none;outline:none}
    body, html, .page-wrap{
        width: 100%;
        height: 100%;
    }
    .container {
		width:100%;
		height:100%
	}
	.page-container {
		height: calc(100% - 50px);
		overflow: hidden;
	}
</style>