//alert("안녕");
//$("#menu1")클래스로 바꾸면 작동이 됨
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
    /*복사 기능: execCommand기능 이용->textarea나 input내용밖에 카피 불가*/
    const textArea = document.createElement('textarea');
    textArea.value = `prettyjys@gmail.com`;
    /*alert(textArea.value);*//*작동 확인용*/
    document.body.appendChild(textArea);
    textArea.select();
    textArea.setSelectionRange(0, 99999);
    
    document.execCommand('copy');
    alert("copied");
    textArea.setSelectionRange(0, 0);
    document.body.removeChild(textArea);
}
