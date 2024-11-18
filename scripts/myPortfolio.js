$(function(){
	//스크롤 시 네비 변경하기
	let menu1 = $(".menu1");
	let menu2 = $(".menu2");

	menu2.hide();

	$(window).scroll(function(){
		let scrollTop = $(window).scrollTop();
		if(scrollTop >= 100){
			menu2.show();
			menu1.hide();
		}
		if(scrollTop < 100){
			menu1.show();
			menu2.hide();
		}
	})

})
function copy() {
    
    //1) execCommand기능 이용
    //->textarea나 input내용밖에 카피 불가
    const textArea = document.createElement('textarea');
    textArea.value = `prettyjys@gmail.com`;
    
    document.body.appendChild(textArea);
    textArea.select();
    textArea.setSelectionRange(0, 99999);
    
    document.execCommand('copy');
    alert("copied");
    textArea.setSelectionRange(0, 0);
    document.body.removeChild(textArea);

	/* 2) Clipboard API 이용 -> 비동기적으로 클립보드에 접근하는 방법 제공, 최신 브라우저*/
	/*js의 then()함수: 비동기 코드 작성시 사용*/
	/*const textToCopy = 'prettyjys@gmail.com';
	navigator.clipboard.writeText(textToCopy).then(function(){
		alert('copied');
	}).catch(function(error){
		console.error('Error copying text: ', error);
	});*/

}

