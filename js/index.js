
//百企数据
	$.getJSON('js/index.json',function(data){
       
        var txt="";
        var htm='';
		if (data.zt=="chenggong") {

            for (var i = 0; i < data.baiqi.length; i++) {
                txt+=['<div class="row text-center">',
                '                <div class="col-md-4">',
                '                    <fieldset class="fieldset">',
                '                        <legend>行业："'+data.baiqi[i][0].hangye+'"</legend>',
                '                        <div class="content">',
                '                            <div class="top clearfix">',
                '                                <div class="left">',
                '                                    <img src="'+data.baiqi[i][0].src+'" alt="">',
                '                                </div>',
                '                                <div class="right">',
                '                                    <span>',
                '                                        业务信息："'+data.baiqi[i][0].yewu+'"',
                '                                    </span>',
                '                                    <br />',
                '                                    <strong>电话：<a href="tel:'+data.baiqi[i][0].phone+'">'+data.baiqi[i][0].phone+'</a> 手机端轻触拨打</strong>',
                '                                </div>',
                '                            </div>',
                '                            <div class="bottom">',
                '                                <p>地址：'+data.baiqi[i][0].address+'</p>',
                '                            </div>',
                '                        </div>',
                '                    </fieldset>',
                '                </div>',
                '                <div class="col-md-4">',
                '                    <fieldset class="fieldset">',
                '                        <legend>行业："'+data.baiqi[i][1].hangye+'"</legend>',
                '                        <div class="content">',
                '                            <div class="top clearfix">',
                '                                <div class="left">',
                '                                    <img src="'+data.baiqi[i][1].src+'" alt="">',
                '                                </div>',
                '                                <div class="right">',
                '                                    <span>',
                '                                        业务信息："'+data.baiqi[i][1].yewu+'"',
                '                                    </span>',
                '                                    <br />',
                '                                    <strong>电话：<a href="tel:'+data.baiqi[i][1].phone+'">'+data.baiqi[i][1].phone+'</a> 手机端轻触拨打</strong>',
                '                                </div>',
                '                            </div>',
                '                            <div class="bottom">',
                '                                <p>地址：'+data.baiqi[i][1].address+'</p>',
                '                            </div>',
                '                        </div>',
                '                    </fieldset>',
                '                </div>',
                '                <div class="col-md-4">',
                '                    <fieldset class="fieldset">',
                '                        <legend>行业："'+data.baiqi[i][2].hangye+'"</legend>',
                '                        <div class="content">',
                '                            <div class="top clearfix">',
                '                                <div class="left">',
                '                                    <img src="'+data.baiqi[i][2].src+'" alt="">',
                '                                </div>',
                '                                <div class="right">',
                '                                    <span>',
                '                                        业务信息："'+data.baiqi[i][2].yewu+'"',
                '                                    </span>',
                '                                    <br />',
                '                                    <strong>电话：<a href="tel:'+data.baiqi[i][2].phone+'">'+data.baiqi[i][2].phone+'</a> 手机端轻触拨打</strong>',
                '                                </div>',
                '                            </div>',
                '                            <div class="bottom">',
                '                                <p>地址：'+data.baiqi[i][2].address+'</p>',
                '                            </div>',
                '                        </div>',
                '                    </fieldset>',
                '                </div>',
                '            </div>'].join("");
              
              }
              
         
		}else{
			txt+="服务器连接错误";
        }
      
	
        $('#servicesinfo .container').append(txt); 

        
        $('#servicesinfo .container .row').click(function (e) { 

            console.log(31,$(this).index())
            console.log(31,$(this).find('.fieldset').index())

      
            

            $('.contentinfo').hide();
            $('.boxinfo').show();
            $('.footer').css('background', '#fff');
            $('.footer span').css('color', '#222');
            e.preventDefault();
            
        });
    
	});
