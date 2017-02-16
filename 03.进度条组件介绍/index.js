/**
 * Created by Administrator on 2017/2/16 0016.
 */
Ext.onReady(function(){

    //3.1.认识Ext.ProgressBar
    var progressBar = Ext.create('Ext.ProgressBar',{
        text : '进度条的介绍' ,
        width : 400 ,
        renderTo : 'progress',
    }) ;

    //progressBar.wait({
    //    interval: 1000, //bar will move fast!
    //    duration : 50000,
    //    increment : 10,
    //    text : '正在更新系统(0)...',
    //    scope : this ,
    //    fn : function(){
    //        progressBar.update('正在更新系统('+10+')...') ;
    //    }
    //});

    //3.2.手动模式的进度条
    //var count = 0 ;
    //var pencentage = 0 ;
    //var progressText = '' ;
    //
    //var task = {
    //    run : function(){
    //        count ++ ;
    //        if(count > 20){
    //            progressBar.hide(); // 隐藏
    //        }
    //        pencentage = count / 10 ;
    //        progressText = pencentage * 100 + '%' ;
    //        // 更新提示框
    //        progressBar.updateProgress(pencentage,progressText,true) ;
    //    },
    //    interval : 1000 ,
    //    repart : 2 , // 执行次数
    //} ;
    //
    //// 执行函数
    //Ext.TaskManager.start(task);

    //3.3.自动模式的进度条
    progressBar.wait({
        interval : 1000 , // 执行时间1s
        increment : 10 , // 每次执行的数量,
        duration : 10000 , // 进度条持续的时间
        text : '系统正在更新中 ... ' ,
        scope : this ,
        fn : function(){
            Ext.MessageBox.alert('系统提示','恭喜您,系统更新成功...');
        }
    });

});