$ = jQuery;

if (!window.console) console = {log: function() {}};

function c(){
for (var i = 0; i < arguments.length; i++) {
console.log(arguments[i]);
}
}

$(function(){
$('#block-os-primary-menu > ul > li.menuparent').mouseenter(function(){
$(this).addClass('mouseenter')
.children(':last').css({display:'block', visibility:'visible'});
}).mouseleave(function(){
$(this).removeClass('mouseenter')
.children(':last').css({display:'none', visibility:'invisible'});
});
});

