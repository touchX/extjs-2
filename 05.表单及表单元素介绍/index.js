/**
 * 最常用的表单
 */
Ext.onReady(function(){
    // 1.表单实例字段
    // Ext.QuickTips.init() ;  // 插件初始化的方法
    // var form = Ext.create('Ext.form.Panel',{
    //     title : '系统表单' ,
    //     renderTo : 'form',
    //     width : 600 ,
    //     height :  150 ,
    //     frame : true ,
    //     defaults : {
    //         autoFitError : false ,
    //         labelSeparator : ':' , // 分隔符
    //         width : 300 ,
    //         allowBlank : false , // 是否允许为空
    //         blankText : '不允许为空' ,
    //         labelAlign : 'right' ,
    //         // 提示信息
    //         // msgTarget : 'qtip' ,
    //         // msgTarget : 'under' ,
    //         msgTarget : 'errorMsg' ,
    //     },
    //     items :[
    //         {xtype : 'textfield',fieldLabel : '姓名'} ,
    //         {xtype : 'numberfield',fieldLabel : '年龄'} ,
    //     ]
    // });

    // 2. 表单实例
    Ext.QuickTips.init();  // 插件初始化的方法
    var form = Ext.create('Ext.form.Panel',{
        // 设置表单的属性
        renderTo : 'form' ,
        title : '用户登录' ,
        bodyStyle : 'pading :5 5 5 5 ',
        width : 400 ,
        height: 200 ,
        frame : true ,
        defaults : [
            // 添加表单的组件
            {labelSeparator : ':',xtype:'textfield',labelWidth : 150,width : 200,allowBlank:false,labelAligin:'right',msgTarget : 'side'} ,
        ],
        items : [
            // 添加标签
            {fieldLabel : '姓名',name :'username',regex :'/^([\w]+),([\w]+)*@([\w-]+\.{1,5}([A-Za-z]))%4',regexText:'对不起,用户名格式不正确'},
            {fieldLabel : '密码',name : 'password',inputType:'password'},
        ] ,
        buttons : [
            {text : '立即登录' , handler : function(){
                form.form.setValues({username : 'admin',password : '123456'});
            }}
        ]
    }) ;
})