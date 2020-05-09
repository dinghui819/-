// 案例x展示详情页ajax请求
$.ajax({
    type:'get',
    url:api+'casedetail',
    dataType:'json',
    success:function(result){
        console.log(result.data)
        if(result.status==200)
        {
            var lists=result.data
            var casedetail=document.querySelector('.media-list')	
            var html =` `
            for(var i=0;i<lists.length;i++)
            {
                html +=`
                    <li class="media sup-caseshow-detail-lists">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object sup-detail-caseshow" src="title="${lists[i].c_img}" >
                            </a>
                        </div>
                        <div class="media-body font-14">
                            <p title="${lists[i].c_title}" class="media-heading padding-10-t" >${lists[i].c_title}</p>
                            <p class="media-heading  padding-10-t">
                                <p class="sup-detail-time ">
                                    <span>${lists[i].c_time}<span>																									
                                </p>
                            </p>
                        </div>
                    </li>													
                `
            }
            $(casedetail).html(html)           
        } 
    }		
})
   

