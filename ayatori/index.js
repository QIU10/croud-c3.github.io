var Page = function(){
    //点灯させる
	this.vincluLed = new VincluLed(100,100);
   
    //激しく点滅させる
    // this.vincluLed = new VincluLed(100, 10);
    
    //初期化
    this.init = function(){
       $("#btnStart").click( $.proxy(this.clickBtnStart,this) );
        $("#btnStop1").click( $.proxy(this.clickBtnStop,this) );
        $("#btnStop2").click( $.proxy(this.clickBtnStop,this) );
        $("#btnStop3").click( $.proxy(this.clickBtnStop,this) );
        
    };
    
    //点灯 ボタン
    this.clickBtnStart = function(){
        this.vincluLed.on();
    };
    
    this.clickBtnStop = function(){
        this.vincluLed.off();  
    } 
};

var p = new Page();
var userId = "null";
$(function(){
    p.init();
           
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
	
	userId = arg.id;
	console.log(arg.id);
    console.log(userId);
});


this.vincluLed = new VincluLed(100, 10);


function selectMeishi(obj){

	elements = document.getElementsByClassName('meishiList');

	/*名刺候補のmselect要素をfalseに*/
	/*すべての名刺画像の枠線をを初期設定に戻す*/
    for (var i = 0, len = elements.length; i < len; i++) {
    	elements[i].setAttribute('mselect','false');
    	elements[i].setAttribute('style','border:solid 1px #000000');
	}
	/*選ばれた名刺のmselect要素をtrueに*/
	obj.setAttribute('mselect','true');
	
	/*選ばれた名刺の枠の設定を変更*/
	obj.setAttribute('style','border:solid 3px #0000FF');

}


$("#mChange").click(function(){
    
    meishi = document.getElementById('myMeishi').getAttribute('src');
    
    elements = document.getElementsByClassName('meishiList');

    for (var i = 0, len = elements.length; i < len; i++) {
    	state = elements[i].getAttribute('mselect');
    	if(state == "true"){
    		img = elements[i].getAttribute('src');
    		document.getElementById('myMeishi').setAttribute('src',img);
    		
    		break;
    	}
	}
	
	
	/*selectの時に変更した応訴を元に戻す*/
	for (var i = 0, len = elements.length; i < len; i++) {
    	elements[i].setAttribute('mselect','false');
    	elements[i].setAttribute('style','border:solid 1px #000000');
	}
	
	
/*	
	setTimeout(function(){
		this.vincluLed = new VincluLed(100, 10);
     	document.getElementById('myMeishi').setAttribute('src',meishi);
     	 this.vincluLed.on();
	},5000);
*/
    
});



$("#mKokan").click(function(){

	document.getElementById('kokan2').setAttribute('style','width:100%;display:none;');
    document.getElementById('kokan0').setAttribute('style','width:100%;display:block;');
    
	setTimeout(function(){
     	document.getElementById('kokan0').setAttribute('style','width:100%;display:none;');
     	document.getElementById('kokan1').setAttribute('style','width:100%;display:block;');
	},5000);

	setTimeout(function(){
		document.getElementById('kokan1').setAttribute('style','width:100%;display:none;');
     	document.getElementById('kokan2').setAttribute('style','width:100%;display:block;');
    	this.vincluLed.on();
	},15000);

	setTimeout(function(){
    	this.vincluLed.off();
	},20000);

		

});


