//排序與刪除
$(document).ready(function(){
	//刪除
	$("[data-act=delete]").each(function(){ 
		var tr = $(this).parents("tr");    //先宣告tr是誰(a往上走到tr),這行我卡很久…也有過結果只刪了td而已(因寫成 var tr = $(this).parent(); )的情況
		$("[data-act=delete]",tr).on("click", function(){  //為何這裡的tr 若沒有則會每個都會有動作,是因為跑.each的關系嗎？
			if(confirm('確定要刪除嗎？')){     //先跳出確認刪除的popup
				tr.remove();                   //若是，則刪除tr
			}
			console.log(tr);     //抓到=>[<tr>, prevObject: v.fn.v.init[1], context: <a>, selector: ".parents(tr)"]
		});	
	});
	//上移
	$("[data-act=up]").each(function(){
		var tr = $(this).parents("tr");    
		$("[data-act=up]", tr).on("click", function(){
			var tr_prev = tr.prev();        //先宣告tr_prev 是此tr的上一個tr
			tr_prev.before(tr);              //執行把tr(this)加到上一個tr的上面
			console.log(tr_prev);   //雖然可以work但不知道這樣抓ok不ok =>[<tr>, prevObject: v.fn.v.init[1], context: <a>, selector: ".parents(tr).prev()"]
		});
	});
	//下移
	$("[data-act=down]").each(function(){
		var tr = $(this).parents("tr");    
		$("[data-act=down]", tr).on("click", function(){
			var tr_next = tr.next();        //先宣告tr_next 是此tr的下一個tr
			tr_next.after(tr);              //執行把tr(this)加到下一個tr的下面
			console.log(tr_next);   //雖然可以work但不知道這樣抓ok不ok =>[<tr>, prevObject: v.fn.v.init[1], context: <a>, selector: ".parents(tr).next()"]
		});
	});
	//置頂
	$("[data-act=top]").each(function(){
		var tr = $(this).parents("tr");
		$("[data-act=top]", tr).on("click", function(){
			var tbody = tr.parent();       //先宣tr_top 是此tr的爸爸(tbody)>這樣抓到的是tbody,變數命名要直觀易懂
			tbody.prepend(tr);             //把我自己insert到tr_top層級下(在tbody下)的最前面
			console.log(tr_top);    //雖然可以work但不知道這樣抓ok不ok =>[<tbody>, prevObject: v.fn.v.init[1], context: <a>, selector: ".parents(tr).parent()"]
		});
	});
	//置底
	$("[data-act=bottom]").each(function(){
		var tr = $(this).parents("tr");
		$("[data-act=bottom]", tr).on("click", function(){
			var tbody = tr.parent();       //先宣tr_bottom 是此tr的爸爸(tbody)>這樣抓到的是tbody,變數命名要直觀易懂
			tbody.append(tr);             //把我自己insert到tr_bottom層級下(在tbody下)的最後面
			console.log(tr_bottom);    //雖然可以work但不知道這樣抓ok不ok =>[<tbody>, prevObject: v.fn.v.init[1], context: <a>, selector: ".parents(tr).parent()"]
		});
	});
});