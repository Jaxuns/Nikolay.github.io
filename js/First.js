
setTimeout(function add(){
	var element = document.getElementsByTagName('h1')[0];

	element.className += 'for-h1-border-bg';}, 2000)


setTimeout(function(){
	document.getElementsByTagName('span')[1].className += 'span-dowload-wind',
	document.getElementsByTagName('span')[2].className += 'span-dowload-wind'},3700);

/*Анимация контента секции1*/ 
 window.onscroll = function(){

    var dives = document.getElementsByClassName('contents');
    var widthY = 600;
   
    	for(var i = 0; i<dives.length; i++){
	    	
	    	if(window.pageYOffset>= widthY){
/*Чет*/			
				if(i%2==0){
		    		widthY+=500
		    		dives[i].classList.add('contents-anim-righttoleft')
	    		}
	    		else if(window.pageYOffset>=5100){
	    			dives.classList.add('contents-anim-righttoleft')
	    			dives.classList.add('contents-anim-lefttoright')
	    		}
/*Нечет*/		else
				{
					widthY+=500
		    		dives[i].classList.add('contents-anim-lefttoright')
	   	 		}
	   	 	}
    	}
	
}


/*Паралакс*/
$('.goheader').parallax({imageSrc: 'Images/fog-3622519_1920-min.jpg'});


/*tab script*/
		var tab;
		var tabContent;

		window.onload=function(){
			tabcontent=document.getElementsByClassName('tabcontent');
			tab = document.getElementsByClassName('tab');
			noVisionTab(1);
		}
		function noVisionTab(tabs){
			for (var i = tabs; i<tabcontent.length; i++){
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
						visionTab(i);
						break;
					}
				}
			}
		}
		function visionTab(b){
			if (tabcontent[b].classList.contains('hide')) {
				noVisionTab(0);
				tab[b].classList.add('tabcontent-border')
				tabcontent[b].classList.remove('hide')
				tabcontent[b].classList.add('show')
			}
		}

(function() {

  // Метод для изменения состояний, который работает в IE7 + / IE8 +
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