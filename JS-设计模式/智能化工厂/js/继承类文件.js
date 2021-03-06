// 创建extend函数为了程序中所有的继承操作
//subClass: 子类。 superClass: 超类。
function extend(subClass, superClass) {
    //1.使子类原型属性等于父类的原型属性。
    //初始化一个中间空对象，目的是为了转换主父关系。
    var F = function() {};
    F.prototype = superClass.prototype;
    //2.让子类继承F。
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    //3.为子类添加属性 superClass ==》原型链的引用。
    subClass.superClass = superClass.prototype;
    //4.增加一个保险，就算你的原型类是超类(Object)那么也要把你的构造函数级别降低。
    if (superClass.prototype.constructor == Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
}