import typeDataMap from './typeDataMap'

export default {
	methods: {
		dragStart(e) {
			let id = parseInt(Date.now() + parseInt(Math.random() * 90));
			let widgetData = typeDataMap[this.type];
			let dt = e.dataTransfer;
			widgetData["id"] = id;
			dt.setData("id",id);
			dt.setData("type",this.type);
			dt.setData("widgetData",JSON.stringify(widgetData));
		}
	}
}