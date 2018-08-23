<template>
	<div class="preview-wrapper" draggable = "true" 
	@dragover="allowDrop"
	@drop="dropIn"
	>
	<div class="preview-item-wrapper" :class="{'active':isActive}" v-for="(item,index) in previewList" :key="index">
		<span class="preview-item-del" :class="{'active': isActive}" title="删除该组件">
			<i @click="delMe">x</i>
		</span>
		<div class="preview-itew-input-wrapper">
			<div class="title-text">{{item.type}}</div>
		</div>
	</div>
	</div>
</template>

<script>
   /* eslint-disable */
	import previewMixin from '../config/previewMixin.js'

	export default {
		name: 'label_wrapper',
		mixins: [previewMixin],
		data() {
			return {
				previewList: []
			}
		},
		methods: {
			dropIn(e) {
				e.preventDefault();
				let dt = e.dataTransfer;
				let widgetData = JSON.parse(dt.getData("widgetData"));
				this.previewList.push(widgetData);
			}
		}
	}
</script>

<style>
.preview-wrapper {
	height: 100%;
}
.preview-item-wrapper {
	position: relative;
	margin-bottom: 15px;
	border: 1px solid #99CCFF;
}
.preview-item-del {
	position: absolute;
	top: 0;
	right: 10px;
}
</style>
