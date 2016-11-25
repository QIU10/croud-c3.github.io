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
        loopSleep(1, 1000, function(i){
            this.vincluLed.on();
        });
        this.vincluLed.off();
    };
    this.clickBtnStop = function(){
        this.vincluLed.off();  
    }
};

var p = new Page();
$(function(){
    p.init();
});