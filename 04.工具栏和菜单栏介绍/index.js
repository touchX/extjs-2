/**
 * Created by Administrator on 2017/2/16 0016.
 */
Ext.onReady(function(){
    // 1.认识Ext.toolbar.Toolbar
    // 1.1.简单的工具栏案例
//  var toolbar = new Ext.toolbar.Toolbar({  // 创建工具栏
//      renderTo : 'toolbar',
//      width : '600%',
//  }) ;
//  // 在工具栏中添加菜单 ...
//  toolbar.add([
//      {text : '新建',handler:onButtonClick},
//      {text : '打开',handler:onButtonClick},
//      {text : '保存',handler:onButtonClick},
//      {text : '项目',handler:onButtonClick},
//      {text : '工具',handler:onButtonClick},
//      {text : '授权',handler:onButtonClick},
//  ]);
//	
//	
//	
//  /**
//   * 执行回调函数
//   * @param btn
//   */
//  function onButtonClick(btn){
//      alert(btn.text);
//  }
	
	// 2 . 使用add方法添加菜单的元素
	var toolbar = new Ext.toolbar.Toolbar({
		renderTo : 'toolbar' ,
		width : '100%' ,
	});
	// console.log(toolbar);
	toolbar.add([
		{text : '编辑',handler :onButtonClick},{text : '打开',handler :onButtonClick},
		{text : '新建',handler :onButtonClick},{text : '保存',handler :onButtonClick},
		'-',
		{
			xtype : 'textfield',
			hideLabel : true ,
			width :'30%',
		} ,
		'<a href="javascript:void(0);">超链接</a>',
		{xtype : 'tbspacer',width : 12} ,
		'静态文件',
	]);
});
function onButtonClick (btn) {
	// console.log(btn) ;
	Ext.MessageBox.alert('系统提示',btn.text);
}