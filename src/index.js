function add(a) {
	function sum(b) { // 使用闭包
        a = a + b; // 累加
		return sum;
    }

}

var a = add(1); 
console.log(a); // 1
