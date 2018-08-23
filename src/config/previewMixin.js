export default {
	computed: {
		// 该预览组件是否为当前点击的
		isActive() {
			return this.id == this.currentEditWidgetId;
		}
	},
	methods: {
		// 删除该预览组件
		delMe() {
			this.deleteWidgetPreview(this.id);
		},
		// 显示该预览组件对应的编辑组件
		showEdit() {
			this.changeWidgetEdit(this.id);
		},
		// 允许向该预览组件拖放其他组件
		allowDrop(e) {
			e.preventDefault();
		},
		// 开始拖放该预览组件
		dragStart (e) {
			let dt = e.dataTransfer;
			dt.setData("index",this.index); 		
		}
	}
}