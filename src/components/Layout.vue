<template>
  <div class="layout">
	  <header>
		  <h1>可视化编辑页面</h1>
	  </header>
	  <div class="wrap">
		  <div class="middle">
			  <div class="middle-wrap">
				  <preview-wrapper></preview-wrapper>
			  </div>
		  </div>
		  <div class="left">
			  <label-wrapper></label-wrapper>
		  </div>
		  <div class="right">
			  编辑区域
		  </div>
	  </div>
  </div>
</template>

<script>
import labelWrapper from './LabelWrapper'
import previewWrapper from './PreviewWrapper'

export default {
  name: 'layout',
  components:{
	  labelWrapper,
	  previewWrapper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout {
	height: 100%;
}
header {
	height: 50px;
	line-height: 50px;
	text-align: center;
}
.wrap {
	margin-top: -50px;
	padding-top: 50px;
	height: 100%;
	overflow: hidden;
}
.wrap .left {
	width: 200px;
	height: 100%;
	float: left;
	margin-left: -100%;
	border: 1px dashed #FF9999;
}
.wrap .middle {
	width: 100%;
	height: 100%;
	float: left;
}
.middle-wrap {
	height: 100%;
	margin: 0 300px 0 200px;
	border: 1px dashed #009966;
}
.wrap .right {
	width: 300px;
	height: 100%;
	float: left;
	margin-left: -300px;
	border: 1px dashed #99CCFF;
}
</style>
