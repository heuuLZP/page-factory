<template>
	<div class="label-item-wrapper" title="拖入模板设计区域" draggable="true" @dragStart="dragStart">
		<span class="label-text">{{name}}</span>
	</div>
</template>

<script>
	/**
	 * 输入：
	 * name：标签名字
	 * type：mixin中的公共方法会用到
	 */
	import labelMixin from '../config/labelMixin.js'
	export default {
		name: 'label_item',
		props: {
			name: String,
			type: String
		},
		mixins: [labelMixin],
		computed: {
			// 需要计算的可以写在这里.
		}
	}
</script>

<style>
.label-item-wrapper {
	border: 1px solid #CCC;
	width: 100px;
	text-align: center;
	margin-bottom: 10px;
	cursor: move;
}
</style>
