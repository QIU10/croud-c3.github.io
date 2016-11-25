var Page = function(){
    //点灯させる
   // this.vincluLed = new VincluLed(100,100);
   
    //激しく点滅させる
    this.vincluLed = new VincluLed(100, 10);
    
    //初期化
    this.init = function(){
       $("#btnStart").click( $.proxy(this.clickBtnStart,this) );
        $("#btnStop").click( $.proxy(this.clickBtnStop,this) );
    };
    
    //点灯 ボタン
    this.clickBtnStart = function(){
        this.vincluLed.on();
        setTimeout("this.vincluLed.off()", 5000);
    };
    this.clickBtnStop = function(){
        this.vincluLed.off();  
    }
};

var p = new Page();
$(function(){
    p.init();
});