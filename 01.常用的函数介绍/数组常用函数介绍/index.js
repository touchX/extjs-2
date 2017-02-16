
/**
 * 创建时间: 2017/2/15 0015.
 * 创建功能:EXTJS的内置数组方法
 * Ext.Array.clean(Array) : Array 过滤数组中的空元素
 * Ext.Array.clone(Array) :Array 克隆数组
 * Ext.Array.contains(Array,Mixeditem) : boolean 查询指定的元素是否在数组中
 * Ext.Array.difference(Array,Array) : Array 获取两个数组的差异[存在A数组中而不在B数组中形成的数组]
 *
 *
 *
 */
// EXTJS的入口函数:相当于Java和C语言的main函数
Ext.onReady(function() {
    //数组类函数 : Ext.Array.clean(Array) : Array 过滤数组中的空元素
    //var num = [1,2,3,45,6,7,'',9,''] ; // 定义一个数组
    //console.log('原来的数组:'+num) ;
    //console.log('后来的数组:'+Ext.Array.clean(num) ) ;// 过滤数组中的空元素 : [1,2,3,45,6,7,9]

    ////数组类函数 : Ext.Array.clone(Array) :Array 克隆数组
    //var num = [1,2,3,5,9] ;
    //console.log(Ext.Array.clone(num));  // [1, 2, 3, 5, 9]

    //var num = [1,3,4,5,6,6,7] ;
    //console.log(Ext.Array.contains(num,2));  // 返回false
    //console.log(Ext.Array.contains(num,1));  // 返回true

    //var num1 = [1,2,3,4,5,6] ;
    //var num2 = [2,3,5,8,9,0] ;
    //console.log(Ext.Array.difference(num1,num2)); // [1, 4, 6]

    //var num1 = [10,2,3,4,5,6] ;
    //Ext.Array.every(num1,function(str,index,array){
    //    console.log('当前遍历的元素值:'+str);
    //    return true ;  // 此处一定要返回true 否则执行一次
    //},this) ;

    //var num = Ext.Array.filter(num1,function(value){
    //    return value < 10 ;
    //},this) ;
    //console.log(num); // 打印出数组

    //var num = [1,2,3,4,[1,2,3,[3,4,[3,5]]]] ;
    //var num1 = Ext.Array.flatten(num) ;  // 将多维数组的值平铺程一维数组
    //console.log(num1);

    var num = [1,2,3,4,5,6,67,7,9] ;
    //Ext.Array.forEach(num,function(val){
    //    console.log('当前输出:'+val);
    //},this);
    var numnew = Ext.Array.include(num,8);
    console.log(numnew);
});
