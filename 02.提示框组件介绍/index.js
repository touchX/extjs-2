/**
 * Created by Administrator on 2017/2/15 0015.
 */
Ext.onReady(function(){
    //2.1.认识Ext.window.MessageBox
    // 使用html元素格式化
    //Ext.MessageBox.alert('系统提示','<font color=red>支持HTML格式文本</font>');

    // 2.2.Ext.MessageBox.alert(String title,String content,[Function fn],[Object scope])
    //Ext.MessageBox.alert('系统提示','请点击我,确定',function(id){
    //    alert('单击的id是:'+id);  // id => ok
    //},this);

    // 2.3.Ext.MessageBox.confirm(String titie,String context,[Function fn],[Object scope])
    //Ext.MessageBox.confirm('系统提示','请选择操作结果',function(id,message){
    //    alert('您单击的是:'+id+',内容是:'+message);  // id => yes,no
    //},this) ;

    // 2.4.Ext.MessageBox.prompt(String title,String context,[Function fn],[Object scope],[Boolean/Number number],[String value])
    //Ext.MessageBox.prompt('系统提示','请输入一些内容看看',function(id,message){
    //    alert('您单击的是:'+id+',内容是:'+message);
    //},this,true,'我是默认值') ;

    // 2.5.Ext.MessageBox.wait(String title,String context,[Object config])
    //Ext.MessageBox.wait('系统正在安装中,请稍等...','系统提示',{
    //    text : '进度条上的文字',
    //});

    // 2.6.Ext.MessageBox.show(Object config)
    /**
     * title : 提示框的标题
     * msg : 提示的内容
     * width :对话框的宽度,像素为单位
     * maxWidth :对话框的最大的宽度,默认是600px
     * minWidth :对话框的最小的宽度,默认是100px
     * closable :false将隐藏右上角的关闭按钮,默认是true
     * modal:true为模式窗口,false为非模式窗口
     * fn : 回调函数
     * buttons : 按钮选中
     */
    // 配置按钮的文件
    //Ext.MessageBox.show({
    //    title : '系统提示',
    //    msg : '使用显示框的内容管理系统,正在更新中...',
    //    width : 400,
    //    closable : false,
    //    modal : true ,
    //    fn : function(id,msg){
    //        Ext.MessageBox.alert('系统提示','您单击的:'+id+",信息:"+msg);
    //    },
    //    prompt : true ,
    //    value : '请输入值' ,
    //    buttons : Ext.Msg.YESNOCANCEL,
    //    icon : Ext.Msg.QUESTION,
    //});
    //console.log(Ext.MessageBox.msgButtons[1].getText()); // 获取按钮的文本
    //Ext.MessageBox.msgButtons[1].setText('按钮一');  // 设置按钮的文本
    //Ext.MessageBox.msgButtons[2].setText('按钮二');
    //Ext.MessageBox.msgButtons[3].setText('按钮三');

    // 更新文字
    var msgshow = Ext.MessageBox.show({
        title : '系统提示',
        msg : '动态改变文字',
        modal : true ,
        buttons : Ext.Msg.OK,
        fn : function(){
            Ext.TaskManager.stop(task) ;
        }
    });

    // 定义一个
    var task = {
        run : function(){
            msgshow.updateText('当前时间:' + Ext.Date.format(new Date(), 'Y-m-d g:i:s A')) ;
            console.log('执行时间....');
        },
        interval : 1000,
    }
    Ext.TaskManager.start(task);

    // 滚动条显示
    //var show = Ext.MessageBox.show({
    //    title : '系统提示',
    //    msg : '动态更新的进度和信息文字' ,
    //    modal : true ,
    //    width : 600 ,
    //    progress : true ,
    //});
    //
    //var count = 0 ;
    //var percentage = 0 ;  // 显示百分比
    //var progressText = '' ;
    //var task = {
    //    run : function(){
    //        count ++ ;
    //        percentage = count / 10 ;
    //        progressText = '当前完成进度:' + percentage * 100 + '%' ;
    //        show.updateProgress(percentage,progressText,Ext.Date.format(new Date(), 'Y-m-d g:i:s A'));  // 格式化时间的方法
    //        if(count > 10){
    //            Ext.TaskManager.stop(task);
    //            show.hide();  // 当前显示
    //        }
    //        console.log('当前时间:');
    //    },
    //    interval : 1000,
    //} ;
    //Ext.TaskManager.start(task);
});