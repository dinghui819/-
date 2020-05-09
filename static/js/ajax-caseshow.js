// 案例展示
$.ajax({
    type:'get',
    url:api+'case',
    dataType:'json',
    success:function(result){
        console.log(result.data)
        if(result.status==200)
        {
            var lists=result.data
            var goods=document.querySelector('.sup-caseshow-lists')	
            console.log(goods)
            var html =` `
            for(var i=0;i<lists.length;i++)
            {
                html +=`
                    <li class="sup-caseshow-list">
                       <img src="${api+lists[i].c_img}" />
                    </li>
                `
            }
            $(goods).html(html)
            
        } 
    }		
    })

