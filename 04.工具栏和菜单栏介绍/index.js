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
//  /**
//   * 执行回调函数
//   * @param btn
//   */
//  function onButtonClick(btn){
//      alert(btn.text);
//  }
	
	// // 2 . 使用add方法添加菜单的元素
	// var toolbar = new Ext.toolbar.Toolbar({
	// 	renderTo : 'toolbar' ,
	// 	width : '100%' ,
	// });
	// // console.log(toolbar);
	// toolbar.add([
	// 	{text : '编辑',handler :onButtonClick},{text : '打开',handler :onButtonClick},
	// 	{text : '新建',handler :onButtonClick},{text : '保存',handler :onButtonClick},
	// 	'-',
	// 	{
	// 		xtype : 'textfield',
	// 		hideLabel : true ,
	// 		width :'30%',
	// 	} ,
	// 	'<a href="javascript:void(0);">超链接</a>',
	// 	{xtype : 'tbspacer',width : 12} ,
	// 	'静态文件',
	// ]);

	// 3.启用和禁用的方法
	// var toolbar = Ext.create('Ext.toolbar.Toolbar',{  // 创建组件的方法
     //    renderTo : 'toolbar' ,
     //    width : '100%' ,
	// 	// 添加子菜单
	// 	items : [
	// 		{text : '新建',handler : onButtonClick} ,
     //        {text : '打开',handler : onButtonClick} ,
     //        {text : '保存',handler : onButtonClick} ,
	// 	] ,
	// });
	// // console.log(toolbar) ;  // 打印当前的对象
	// Ext.get('enabledBtn').on('click',function(){
	// 	toolbar.enable() ;  // 启用菜单
	// }) ;
	// Ext.get('disabledBtn').on('click',function(){
	// 	toolbar.disable(); // 禁用菜单
	// })

	// 4.认识Ext.menu.Menu菜单
	// var toolbar = Ext.create('Ext.toolbar.Toolbar',{
	// 	renderTo : 'toolbar' ,
	// 	width : '100%' ,
	// }) ;
    //
	// // 定义文件菜单选项
	// var fileMenu = Ext.create('Ext.menu.Menu',{
	// 	shadow : 'frame' ,
	// 	allowOtherMenus : true ,
	// 	items : [
	// 		new Ext.menu.Menu({
	// 			text : '新建' ,
	// 			handler : onMenuItem ,
	// 		}),
	// 		{text : '打开',handler : onMenuItem} ,
	// 		{text : '关闭',handler : onMenuItem} ,
	// 	] ,
	// }) ;
	// // 定义编辑菜单选项
	// var editMenu = Ext.create('Ext.menu.Menu',{
	// 	shadow : 'drop' ,
     //    allowOtherMenus : true ,
	// 	items : [
	// 		{text : '复制',handler : onMenuItem} ,
	// 		{text : '删除',handler : onMenuItem} ,
	// 	] ,
	// }) ;
	// toolbar.add([
	// 	{text : '文件',menu : fileMenu} ,
	// 	{text : '编辑',menu : editMenu} ,
	// ]) ;

	// 4.创建多级菜单
	// var toolbar = Ext.create('Ext.toolbar.Toolbar',{
	// 	renderTo : 'toolbar' ,
	// 	width : '100%' ,
	// }) ;
	// // 创建三级菜单
	// var menu_3 = Ext.create('Ext.menu.Menu',{
	// 	items : [
	// 		{text : '身高',handler : onMenuItem} ,
	// 		{text : '体重',handler : onMenuItem} ,
	// 		{text : '体质',handler : onMenuItem} ,
	// 	] ,
	// }) ;
    //
	// // 创建二级菜单
	// var menu_2 = Ext.create('Ext.menu.Menu',{
	// 	ignoreParentClicks : true ,  // 忽略父级菜单的点击事件
	// 	items : [
	// 		{text : '基本信息',menu : menu_3} ,
	// 	] ,
	// }) ;
    //
	// // 创建一级菜单
	// var menu_1 = Ext.create('Ext.menu.Menu',{
	// 	ignoreParentClicks : true ,
	// 	plain : true ,
	// 	items : [
	// 		{text : '个人信息',menu : menu_2} ,
     //        {text : '公司信息'} ,
	// 	],
	// }) ;
	// // 添加菜单
	// toolbar.add({text : '设置',menu : menu_1}) ;

	// 模拟菜单
    // var toolbar = Ext.create('Ext.toolbar.Toolbar',{
    	// renderTo : 'toolbar' ,
    	// width : '100%' ,
    // }) ;

    // var menu = [
		// {text : '文件',menu : Ext.create('Ext.menu.Menu',{
		// 	ignoreParentClicks : true ,
		// 	items : [
		// 		{text : '打开',handler : onMenuItem},
    //             {text : '从控制台中打开',handler : onMenuItem},
    //             {text : '联机创建',handler : onMenuItem},
    //             {text : '保存',handler : onMenuItem},
    //             {text : '另存为',handler : onMenuItem},
    //             {text : '另存为其他',menu : Ext.create('Ext.menu.Menu',{
    //                 ignoreParentClicks : true ,
		// 			items : [
		// 				{text : '文本格式',handler:onMenuItem},
		// 				{text : '联机服务',handler:onMenuItem},
		// 			],
		// 		})},
    //             {text : '保存至控制台',handler : onMenuItem},
    //             {text : '在线发送',handler : onMenuItem},
    //             {text : '将文档签名',handler : onMenuItem},
    //             {text : '恢复',handler : onMenuItem},
    //             {text : '关闭',handler : onMenuItem},
    //             {text : '属性',handler : onMenuItem},
    //             {text : '打印',handler : onMenuItem},
    //             {text : '查看文档',handler : onMenuItem},
    //             {text : '退出',handler : onMenuItem},
		// 	],
		// })},
    //     {text : '编辑' ,menu : Ext.create('Ext.menu.Menu',{
    //         ignoreParentClicks : true ,
		// 	items : [
    //             {text : '撤销',handler : onMenuItem},
    //             {text : '重复',handler : onMenuItem},
    //             {text : '剪切',handler : onMenuItem},
    //             {text : '复制',handler : onMenuItem},
    //             {text : '粘贴',handler : onMenuItem},
    //             {text : '删除',handler : onMenuItem},
    //             {text : '全选',handler : onMenuItem},
    //             {text : '全不选',handler : onMenuItem},
    //             {text : '拍照',handler : onMenuItem},
    //             {text : '拼写检查',menu : Ext.create('Ext.menu.Menu',{
    //                 ignoreParentClicks : true ,
		// 			items : [
		// 				{text : '注释',handler:onMenuItem},
    //                     {text : '编辑词典',handler:onMenuItem},
    //                     {text : '补充',handler:onMenuItem},
		// 			],
		// 		})},
    //             {text : '查找',handler : onMenuItem},
    //             {text : '高级搜索',handler : onMenuItem},
    //             {text : '保护',menu :Ext.create('Ext.menu.Menu',{
    //                 ignoreParentClicks : true ,
    //                 items : [
    //                     {text : '安全性属性',handler:onMenuItem,disabled : true},
    //                     {text : '吊销文档',handler:onMenuItem},
    //                     {text : '查看审核记录',handler:onMenuItem},
    //                     {text : '同步脱机数据',handler:onMenuItem},
    //                     {text : '权限管理账户',handler:onMenuItem},
    //                 ],
		// 		})},
    //             {text : '分析',menu:Ext.create('Ext.menu.Menu',{
    //                 ignoreParentClicks : true ,
    //                 items : [
    //                     {text : '对象数据工具',handler:onMenuItem,disabled : true},
    //                     {text : '测试工具',handler:onMenuItem},
    //                     {text : '地理空间位置工具',handler:onMenuItem},
    //                 ],
		// 		})},
    //             {text : '辅助工具',menu : Ext.create('Ext.menu.Menu',{
    //                 ignoreParentClicks : true ,
    //                 items : [
    //                     {text : '更改阅读手册',handler:onMenuItem,disabled : true},
    //                     {text : '设置助手',handler:onMenuItem},
    //                 ],
		// 		})},
    //             {text : '首选项',handler : onMenuItem},
		// 	] ,
		// })},
    //     {text : '视图' ,handler : onMenuItem},
    //     {text : '窗口' ,handler : onMenuItem},
    //     {text : '帮助' ,handler : onMenuItem},
    // ] ;
    //
    // toolbar.add(menu);

	// 5.将更多的组件加入菜单
    var toolbar = Ext.create('Ext.toolbar.Toolbar',{  // 定义菜单工具对象
        renderTo : 'toolbar' ,
        width : '100%' ,
    }) ;
    // var fileName = Ext.create('Ext.menu.Menu',{
    	// items : [
	// 		{xtype : 'textfield',hideLabel : true ,width : 200},  // 表单文本框组件
	// 		{text : '颜色选择',menu : new Ext.menu.ColorPicker()},  // 颜色选择器组件
	// 		{xtype : 'datepicker'} , // 日期组件
	// 		{xtype : 'buttongroup',columns : 3,title : '按钮组' , items :[
	// 			{text : '用户管理',scale : 'large',colspan : 3,width : 170,iconCls : 'userManagerIcon',iconAlgin : 'top'},
	// 			{text : '新建',iconCls : 'newIcon'} ,
	// 			{text : '打开',iconCls : 'openIcon'} ,
	// 			{text : '保存',iconCls : 'saveIcon'},
	// 		]},
	// 	] ,
	// }) ;
	// toolbar.add({text : '文件',menu : fileName});

	// 6.带选择框的菜单实例
	var themeMenu = Ext.create('Ext.menu.Menu',{
		items : [
			{text : '主题颜色' , menu : new Ext.menu.Menu({
				items : [
					{text : '红色主题' , checked : true ,group : 'theme' , checkHandler : onMenuItemCheck} ,
                    {text : '蓝色主题' , checked : true ,group : 'theme' , checkHandler : onMenuItemCheck} ,
                    {text : '黑色主题' , checked : true ,group : 'theme' , checkHandler : onMenuItemCheck} ,
				],
			})},
			{text : '是否启用' , checked : false,}
		] ,
	}) ;
    toolbar.add({text : '风格选择',menu : themeMenu});
});


/**
 * 自定义函数
 * @param btn : 当前的按钮对象
 */
function onButtonClick (btn) {
	// console.log(btn) ;
	Ext.MessageBox.alert('系统提示',btn.getText());
}

function onMenuItem(item){
	Ext.MessageBox.alert('系统提示',item.text);
}

function onMenuItemCheck(item){
    Ext.MessageBox.alert('系统提示',item.text);
}