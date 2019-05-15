
// 获取数据接口
function getMockData ({ currentPage, pageSize }) {
    return new Promise((resolve, reject) => {
        $.getJSON('js/index.json', data => {
            let startIndex = (currentPage - 1) * pageSize
            let endIndex = startIndex + pageSize
            /* console.log(21,currentPage) */
            resolve({ count: data.baiqi.length, data: data.baiqi.slice(startIndex, endIndex) })
        })

    })
    
}

let pagedata = {
    // 当前页面
    currentPage: 1,
    // 每页数量
    pageSize: 9,
    count: 0
}

// 刷新数据
function restData () {
    getMockData({ currentPage: pagedata.currentPage, pageSize: pagedata.pageSize }).then(res => {
        pagedata.count = res.count;
       
       
        renderDom(res.data)
        setPage()
    })
}

// 设置分页
function setPage () {
    $('#pageLimit').bootstrapPaginator({
        currentPage: pagedata.currentPage,//当前的请求页面。
        totalPages: Math.ceil(pagedata.count / pagedata.pageSize),//一共多少页。
        size: "normal",//应该是页眉的大小。
        bootstrapMajorVersion: 3,//bootstrap的版本要求。
        alignment: "right",
        // numberOfPages: 5,//一页列出多少数据。
        itemTexts: function (type, page, current) {//如下的代码是将页眉显示的中文显示我们自定义的中文。
            switch (type) {
                case "first": return "首页";
                case "prev": return "上一页";
                case "next": return "下一页";
                case "last": return "末页";
                case "page": return page;
            }
        },
        onPageClicked: function (event, originalEvent, type, page) {
            pagedata.currentPage = page
            restData()

        }
    });
}

// 渲染页面
function renderDom (data) {
    $('#servicesinfo .container').empty();
    let rown = Math.ceil(data.length / 3)
    let txt = '';
    for (let i = 0; i < rown; i++) {
        txt += `<div class="row text-center">`
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j
           
            if (index <= data.length - 1) {
             
                txt += `
                <div class="col-md-4">
                    <fieldset class="fieldset">
                        <legend>行业：${data[index].hangye}</legend>
                        <div class="content">
                            <div class="top clearfix">
                                <div class="left">
                                    <img src="${data[index].src}" alt="">
                                </div>
                                <div class="right">
                                    <span>
                                        业务信息："${data[index].yewu}"
                                    </span>
                                    <br />
                                    <strong>电话：<a href="tel:${data[index].phone}">${data[index].phone}</a> 手机端轻触拨打</strong>
                                </div>
                            </div>
                            <div class="bottom">
                                <p>地址：${data[index].address}</p>
                                <p>公司：${data[index].company}</p>
                            </div>
                        </div>
                    </fieldset>
                </div>
                `
            }
        }
        txt += `</div>`
    }
    $('#servicesinfo .container').append(txt);
    $('#servicesinfo .container .row .col-md-4').click(function (e) {

     
        var inx=$(this).parent().index()*3+$(this).index();
        console.log(31,data[inx])
       
        $('.contentinfo').hide();
        $('.boxinfo').show();
        $('.footer').css('background', '#fff');
        $('.footer span').css('color', '#222');
        e.preventDefault();
        
        details(data[inx]);

    
    
    }); 
}
restData()
/* 公司详情 */
function details(datas) {
    

    var htm='';
    var tex='';
    var productS=datas.product;

    var referred = $('.intro-lead-in span,.navbar-nav li:nth-child(4) a span,.navbar-nav li:nth-child(6) a span')

    var Aphone = '<a class="" href="tel:' +  datas.phone + '">电话：<span>' + datas.phone + '</span></a>';

    $('.navbar-nav li:nth-child(7)').html(Aphone);

    //公司简称
    referred.text(datas.Referred);
    //公司介绍
    $('.mission').text(datas.mission);
    $('.slogan').text(datas.slogan);
    $('.objective').text(datas.objective);
    $('.slogan').text(datas.slogan);

    for (let index = 0; index < productS.length; index++) {
       console.log(13,productS.length)
        htm+=`
            <div class="col-md-4 col-sm-6 portfolio-item">
                <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img src="${productS[index].imgsrc}" class="img-responsive" alt="">
                </a>
                <div class="portfolio-caption">
                    <h4>${productS[index].title}</h4>
                    <p class="text-muted">${productS[index].English}</p>
                </div>
            </div>
        `
    }
    $('#portfolio .container .row:nth-child(2)').append(htm);

    for (let index = 0; index <productS.length; index++) {
       
        tex+=`
    <div class="portfolio-modal modal fade" id="portfolioModal${index+1}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <!-- Project Details Go Here -->
                            <h2>${productS[index].Longtopic}</h2>
                            <p class="item-intro text-muted">${productS[index].proEng}</p>
                            <img class="img-responsive" src="${productS[index].proIMG}" alt="">
                            <p>${productS[index].info}</p>
                            <p>
                                <strong>${productS[index].yewu}</strong>您可以访问这个网址 ${productS[index].Theurl}<a href="${productS[index].Theurl}"
                                    target="_blank">${productS[index].Theurl}</a>, 或者您可以拨打这个电话 <a
                                    href="tel:${datas.phone}">${datas.phone}</a>.</p>
                            <ul class="list-inline">
                                <li>${productS[index].paper1}</li>
                                <li>${productS[index].paper2}</li>
                                <li>${productS[index].paper3}</li>
                            </ul>
                            <button type="button" class="btn btn-primary" data-dismiss="modal"><i
                                    class="fa fa-times"></i> 关闭项目</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }
    $('.footer').after(tex);
}

