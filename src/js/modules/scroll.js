export default () => {
    let temp;
    
    function anim(duration = 1000) {
		
		return function(sel) {
			let start = performance.now();
			let from = window.pageYOffset || document.documentElement.scrollTop,
			to = document.querySelector(sel).getBoundingClientRect().top - 30;
			requestAnimationFrame(function step(timestamp) {
				let progress = (timestamp - start) / duration;
				
				if(progress >= 1) {
					progress = 1;
				} else {
					temp = requestAnimationFrame(step);
				}
				window.scrollTo(0, from + to * progress | 0);
				
			}) 
			
		}
	};
    
    
	function runScroll(selector, func) {
		document.querySelectorAll(`a[href="${selector}"]`).forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                cancelAnimationFrame(temp);
                func(selector);
            });
        })
	};
    
    let smoothScroll = anim();

	runScroll("#surf", smoothScroll);
    runScroll("#book_surf", smoothScroll);
    runScroll("#kite", smoothScroll);
    runScroll("#book_kite", smoothScroll);
    runScroll("#sup", smoothScroll);
    runScroll("#book_sup", smoothScroll);
    runScroll("#shop", smoothScroll);
};

