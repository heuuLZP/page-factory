<template>
	<div class="label-wrapper">
		<div class="label-title">标签区域</div>
		<div class="label-box">
			<common-label v-for="label in labelArr" :key="label.id" :name="label.name" :type="label.type"></common-label>
		</div>
	</div>
</template>

<script>
	import commonLabel from './commonLabel.vue'
	export default {
		name: 'label_wrapper',
		components: {
			commonLabel
		},
		data() {
			return {
				labelArr: [
					{name: "Button", type: 'button'},
					{name: "Input", type: 'input'}
				]
			}
		}
	}
</script>

<style>
.label-title {
	text-align: center;
	border-bottom: 1px dashed #FF9999;
}
.label-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 10px;
}
</style>

