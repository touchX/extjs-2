/**
 * Created by Administrator on 2017/2/16 0016.
 */
Ext.onReady(function(){
    // 1.认识Ext.toolbar.Toolbar
    // 1.1.简单的工具栏案例
    var toolbar = new Ext.toolbar.Toolbar({  // 创建工具栏
        renderTo : 'toolbar',
        width : 600,
    }) ;
    // 在工具栏中添加菜单 ...
    toolbar.add([
        {text : '新建',handler:onButtonClick},
        {text : '打开',handler:onButtonClick},
        {text : '保存',handler:onButtonClick},
        {text : '项目',handler:onButtonClick},
        {text : '工具',handler:onButtonClick},
        {text : '授权',handler:onButtonClick},
    ]);

    /**
     * 执行回调函数
     * @param btn
     */
    function onButtonClick(btn){
        alert(btn.text);
    }

});