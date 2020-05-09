//首页案例分析
$.ajax({
    type:'get',
    url:api+'indexcase',
    dataType:'json',
    success:function(result){
        console.log(result.data)
        if(result.success==200)
        {
            var item=result.data
            console.log(result.data)
            var news=document.querySelector('.sup-index-caseshow-list ')	
            var html =` `
            console.log(item.length)
            for(var i=0;i<item.length;i++)
            {
                html +=`
                <li class="sup-index-caseshow-list sup-caseshow-cover-father">
						    <img class="sup-index-caseshow-img" src="${item[i].c_img}" />
						    <div class="sup-caseshow-cover">
						    	<p class="sup-caseshow-cover-circle"><span class="iconfont icon-sousuo"></span></p>
						    </div>
						    <div class="sup-caseshow-covercon color-white font-18">
						    	${item[i].c_title}
						    </div>
						</li>
                `
            }
            $(news).html(html)
            
        } 
    }		
    })
