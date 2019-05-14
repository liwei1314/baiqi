
//百企数据
	$.getJSON('js/index.json',function(data){
       
        var txt="";
        var htm='';
		if (data.zt=="chenggong") {

            for (var i = 0; i < data.baiqi.length; i++) {
                txt+=['<div class="row text-center">',
                '                <div class="col-md-4">',
                '                    <fieldset class="fieldset">',
                '                        <legend>行业：'+data.baiqi[i][0].hangye+'</legend>',
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
                '                                <p>公司：'+data.baiqi[i][0].company+'</p>',
                '                            </div>',
                '                        </div>',
                '                    </fieldset>',
                '                </div>',
                '                <div class="col-md-4">',
                '                    <fieldset class="fieldset">',
                '                        <legend>行业：'+data.baiqi[i][1].hangye+'</legend>',
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
                '                                <p>公司：'+data.baiqi[i][1].company+'</p>',
                '                            </div>',
                '                        </div>',
                '                    </fieldset>',
                '                </div>',
                '                <div class="col-md-4">',
                '                    <fieldset class="fieldset">',
                '                        <legend>行业：'+data.baiqi[i][2].hangye+'</legend>',
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
                '                                <p>公司：'+data.baiqi[i][2].company+'</p>',
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

        
        $('#servicesinfo .container .row .col-md-4').click(function (e) { 
           var baiqi_cross=$(this).parent().index()
           var baiqi_vertical=$(this).index()
           var referred=$('.intro-lead-in span,.navbar-nav li:nth-child(4) a span,.navbar-nav li:nth-child(6) a span')

          /* 公司详情 */
           //电话
           var datainfo=data.baiqi[baiqi_cross][baiqi_vertical];
           var phone=datainfo.phone;
          $('.navbar-nav li:nth-child(7)').html('<a class="" href="tel:'+phone+'">电话：<span>'+phone+'</span></a>');

           //公司简称
           referred.text(datainfo.Referred);
           //公司介绍
           $('.mission').text(datainfo.mission);
           $('.slogan').text(datainfo.slogan);
           $('.objective').text(datainfo.objective);
           $('.slogan').text(datainfo.slogan);



            company()
            

            $('.contentinfo').hide();
            $('.boxinfo').show();
            $('.footer').css('background', '#fff');
            $('.footer span').css('color', '#222');
            e.preventDefault();
            
        });
        $('#pageLimit').bootstrapPaginator({
            currentPage: 1,//当前的请求页面。
            totalPages: 20,//一共多少页。
            size:"normal",//应该是页眉的大小。
            bootstrapMajorVersion: 3,//bootstrap的版本要求。
            alignment:"right",
            numberOfPages:5,//一页列出多少数据。
            itemTexts: function (type, page, current) {//如下的代码是将页眉显示的中文显示我们自定义的中文。
                switch (type) {
                case "first": return "首页";
                case "prev": return "上一页";
                case "next": return "下一页";
                case "last": return "末页";
                case "page": return page;
                }
            }
        });
    
    });
    
   
function company(params) {
    
}