
	setTimeout(function add(){
	var element = document.getElementsByTagName('h1')[0];
	element.className += 'for-h1-border-bg';
}, 2000)


	setTimeout(function(){
		document.getElementsByTagName('span')[0].className += 'span-dowload-wind', document.getElementsByTagName('span')[1].className += 'span-dowload-wind'},3700);
 
 window.onscroll = function(){

    var dives = document.getElementsByClassName('dives');
    var widthR = 600;
    for(var i = 0; i<dives.length; i++){
    	if($(window).scrollTop()>= widthR){
    		widthR +=470;
    		dives[i].classList.add('dives-anim-lefttoright')
   	 }
    }
}
  /* 	for(var a = 1; a<widthR; a++){
    	if($(window).scrollTop()>= widthR){
    		widthR +=1000;
    		dives[a].classList.add('dives-anim-righttoright')
   	 }	
   	 a++
    }
}СПРАВА НА ЛЕВО НЕ РЕАЛИЗОВАНО*/
/*Анимация дивов в секции 1*/




/*tab script*/
	var tab;
		var tabContent;

		window.onload=function(){
			tabcontent=document.getElementsByClassName('tabcontent');
			tab = document.getElementsByClassName('tab');
			hideTabsContent(1);
		}
		function hideTabsContent(a){
			for (var i = a; i<tabcontent.length; i++){
				tabcontent[i].classList.remove('show');
				tabcontent[i].classList.add('hide');
				tab[i].classList.remove('tabcontent-border');
			}
		}
		document.getElementById('tabs').onclick = function(event) {
			var target = event.target;
			if (target.className == 'tab'){
				for (var i = 0; i<tab.length; i++){
					if(target==tab[i]){
						showTabsContent(i);
						break;
					}
				}
			}
		}
		function showTabsContent(b){
			if (tabcontent[b].classList.contains('hide')) {
				hideTabsContent(0);
				tab[b].classList.add('tabcontent-border')
				tabcontent[b].classList.remove('hide')
				tabcontent[b].classList.add('show')
			}
		}

(function() {

  // Method to change states which works in IE7+ / IE8+
  var btn = document.querySelector('.burger');

  var toggleState = function(elm, att, one, two) {
    var elm = document.querySelector(elm);
    elm.setAttribute(att, elm.getAttribute(att) === one ? two : one);
  };
   btn.onclick = function(e) {
    toggleState('.btn-burger', 'data-state', 'off', 'on');
    toggleState('.burger', 'aria-expanded', 'false', 'true');
    e.preventDefault();
  }
 });