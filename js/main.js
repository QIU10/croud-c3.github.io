$(function(){
    //�ϐ�arg�̓I�u�W�F�N�g�ł���
	var arg = new Object;

	// �ϐ�pair��URL��?�̌���&�ŋ�؂������̂�z��ɂ��đ��
	var pair=location.search.substring(1).split('&');
	    // location.search.substring(1)�́AURL����ŏ���1���� (?�L��) ����������������擾����
	    // .split('&')��&�ŋ�؂�z��ɕ�������


	// for����rair��������胋�[�v������
	for(var i=0;pair[i];i++) {
		// �ϐ�kv��pair��=�ŋ�؂�z��ɕ�������
	    var kv = pair[i].split('=');// kv��key-value
		
		// �ŏ��ɒ�`�����I�u�W�F�N�garg�ɘA�z�z��Ƃ��Ċi�[
	    arg[kv[0]]=kv[1];  // kv[0]��key,kv[1]��value
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
		    /*�}�C�y�[�W��������*/
		    elements = document.getElementsByClassName("mypURL");
		    
		    for (var i = 0, len = elements.length; i < len; i++) {
		    	elements[i].setAttribute("href","mypage.html?id=gakusei");
			}		

			elements = document.getElementById("totop").setAttribute("href","index.html?id=gakusei");

		}
	}	
});


<!-- �w���p�Ɗ�Ɨp��؂�ւ���(Javascript)-->
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
    
    /*�}�C�y�[�W��������*/
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
    
    
        /*�}�C�y�[�W��������*/
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
