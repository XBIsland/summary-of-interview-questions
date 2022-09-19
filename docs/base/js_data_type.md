
# 数据类型

## JS 有哪些数据类型
JS 中有 7 中数据类型，分为基本数据类型和引用数据类型

基本数据类型：
  - 字符串（string）
  - 数字（number）
  - 布尔值（boolean）
  - 空值（null）
  - 未定义（undefined）
  - 符号（symbol）
  - 大整数（bigint）

引用数据类型：
  - 对象（object）

## 基本类型和引用类型的区别
1. 内存分配

基本类型变量的值存储在栈中（stack），即值为变量访问位置。
   
引用类型变量的值存储在堆中（head），栈中存储的是指向堆的指针。

2. 访问机制

基本类型的值可以直接访问

引用类型的是通过栈中的指针地址访问堆中的对应数据，即**按引用访问**

## 如何判断数据类型

### 通过 `typeof` 操作符
常用语判断基本类型，无法精确判断引用类型

| 类型         | 结果          |
| ------------ | ------------- |
| Undefined    | `"undefined"` |
| Null         | `"object"`    |
| Boolean      | `"boolean"`   |
| Number       | `"number"`    |
| BigInt       | `"bigint"`    |
| String       | `"string"`    |
| Symbol       | `"symbol"`    |
| Function     | `"function"`  |
| 其他任何对象   | `"object"`    |

::: tip
`typeof` 判断 `NaN` 为 `"number"`
:::

### instanceOf
`instanceOf` 运算符用于检测构造函数的 `prototype` 是否出现在某个实例对象的原型链上

无法精确判断对象实例，比如数组既可以判断为 `Array` 也可以判断为 `Object`
```javascript
[] instanceof Array // true
[] instanceof Object // true
```

### Object.prototype.toString.call()
`toString()` 返回一个表示该对象的字符串 `"[object type]"`，`type` 是对象类型

```javascript
var toString = Object.prototype.toString;

toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]

//Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]

```


