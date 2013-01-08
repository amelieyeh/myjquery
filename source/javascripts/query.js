//排序與刪除
function init_sortable(tr){
	// var tr = sortable.parents("tr");
  $("[data-bt=remove]", tr).on('click', function(){
  	if(confirm('sure?')){
  		tr.remove();
  	}
  });
  $("[data-bt=up]", tr).on('click', function(){
  	var prev_tr = tr.prev();
  	prev_tr.before(tr);
  	init_sortable(prev_tr.prev());
  });
  $("[data-bt=down]", sortable).on('click', function(){
  	var next_tr = tr.next();
  	next_tr.after(tr);
  	init_sortable(next_tr.next());
  });
  $("[data-bt=top]", sortable).on('click', function(){
  	var parent = tr.parent();
  	var tmp_tr = tr.remove();
  	parent.prepend(tr);
  	init_sortable(parent.children().first());
  });
  $("[data-bt=bottom]", sortable).on('click', function(){
  	var parent = tr.parent();
  	var tmp_tr = tr.remove();
  	parent.append(tr);
  	init_sortable(parent.children().last());
  });
}
$(document).ready(function(){
	$("[data-type=sortable]").each(function(){
	  var sort_root = $(this);
	  $(sort_root.attr('data-to'), sort_root).each(function(){
	  	init_sortable($(this));
	  })
	})
});







