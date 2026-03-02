function assess()
{
    let arr=[1,2,3,4,5,6]
    document.writeln(arr);
    arr.push(8);
    document.writeln("After pushing:"+arr);
    arr.unshift(10);
    document.writeln("After unshift:"+arr);
    arr.pop();
    document.writeln("After pop:"+arr);
    arr.shift();
    document.writeln("After shifting:"+arr);
    document.writeln("index of 2"+arr.indexOf(2));
    document.writeln("check of 1"+arr.includes(2));
}