$(function(){
    //変数argはオブジェクトですよ
	var arg = new Object;

	// 変数pairにURLの?の後ろを&で区切ったものを配列にして代入
	var pair=location.search.substring(1).split('&');
	    // location.search.substring(1)は、URLから最初の1文字 (?記号) を除いた文字列を取得する
	    // .split('&')は&で区切り配列に分割する


	// for文でrairがある限りループさせる
	for(var i=0;pair[i];i++) {
		// 変数kvにpairを=で区切り配列に分割する
	    var kv = pair[i].split('=');// kvはkey-value
		
		// 最初に定義したオブジェクトargに連想配列として格納
	    arg[kv[0]]=kv[1];  // kv[0]がkey,kv[1]がvalue
	}
	
	
			console.log(arg.id);
			var uId = arg.id;
	
	if (arg.id != null){
		userId = arg.id;

		$('#false-parameter').hide();
		$('#user_id').hide();
		$('#password').hide();
	    $('#signin').hide();
	    $('#signup').hide();
		$('#mypage').show();
	    $('.mInfo').show();		    

		if (userId=="kigyo"){
		    $('#company').show();

		    $('#senior_voices').hide();
		    $('#job_hunting_infomation').hide();
		    
	        elements = document.getElementsByClassName("mypURL");
    
		    for (var i = 0, len = elements.length; i < len; i++) {
		    	elements[i].setAttribute("href","mypage.html?id=kigyo");
			}
			
			elements = document.getElementById("totop").setAttribute("href","index.html?id=kigyo");
		    
		}else{
			   $('#student').show();
	    	$('#rate_plan').hide();
		    /*マイページ書き換え*/
		    elements = document.getElementsByClassName("mypURL");
		    
		    for (var i = 0, len = elements.length; i < len; i++) {
		    	elements[i].setAttribute("href","mypage.html?id=gakusei");
			}		

			elements = document.getElementById("totop").setAttribute("href","index.html?id=gakusei");

		}
	}	
});


<!-- 学生用と企業用を切り替える(Javascript)-->
function init(){
  $('#false-parameter').hide();
  $('#student').hide();
  $('#company').hide();
  $('#signup').show();
  $('#mypage').hide();
  $('#event_list').show();
  $('#manual').show();
  $('#rate_plan').show();
  $('#cooperation_companies').show();
  $('#senior_voices').show();
  $('#job_hunting_infomation').show();
  $('.mInfo').hide();
}



function judge(){
  var userId = document.getElementById("user_id").value;
  var password = document.getElementById("password").value;

  if(userId == 'gakusei' && password == '1234'){
    $('#false-parameter').hide();
    $('#user_id').hide();
    $('#password').hide();
    $('#signin').hide();
    $('#signup').hide();
    $('#student').show();
    $('#mypage').show();
    $('#rate_plan').hide();
    $('.mInfo').show();
    
    /*マイページ書き換え*/
    elements = document.getElementsByClassName("mypURL");
    
    for (var i = 0, len = elements.length; i < len; i++) {
    	elements[i].setAttribute("href","mypage_gaku.html");
	}
    
    
  } else if (userId == 'kigyo' && password == '1234') {
    $('#false-parameter').hide();
    $('#user_id').hide();
    $('#password').hide();
    $('#signin').hide();
    $('#signup').hide();
    $('#company').show();
    $('#mypage').show();
    $('#senior_voices').hide();
    $('#job_hunting_infomation').hide();
    $('.mInfo').show();
    
    
        /*マイページ書き換え*/
    elements = document.getElementsByClassName("mypURL");
    
    for (var i = 0, len = elements.length; i < len; i++) {
    	elements[i].setAttribute("href","mypage_kigyo.html");
	}
     

    
  } else{
    $('#false-parameter').show();
  }
  //console.log(userId);
  //console.log(password);
}
