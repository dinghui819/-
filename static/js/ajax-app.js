// 产品中心app1
$.ajax({
    type:'get',
    url:api+'appone',
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
                <li class="text-center sup-product-corver-father">
                <img src="${lists[i].p_img}"/>
                <span class="sup-product-descript-line"></span>
                <span class="sup-product-descript margin-20-t">${lists[i].p_title}</span>
                <div class="sup-product-corver">
                    <div class="sup-product-corver-box">
                        <p class="sup-product-corve-circle"><span >+</span></p>
                    </div>
                </div>
            </li>
                    												
                `
            }
            $(casedetail).html(html)           
        } 
    }		
})
// 产品中心app2
$.ajax({
    type:'get',
    url:api+'apptwo',
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
                <li class="text-center sup-product-corver-father">
                    <img src="${lists[i].p_img}"/>
                    <span class="sup-product-descript-line"></span>
                    <span class="sup-product-descript margin-20-t">${lists[i].p_title}</span>
                    <div class="sup-product-corver">
                        <div class="sup-product-corver-box">
                            <p class="sup-product-corve-circle"><span >+</span></p>
                        </div>
                    </div>
                </li>
                    												
                `
            }
            $(casedetail).html(html)           
        } 
    }		
})
   // 产品中心appbuild
$.ajax({
    type:'get',
    url:api+'build',
    dataType:'json',
    success:function(result){
        console.log(result.data)
        if(result.status==200)
        {
            var item=result.data
            var casedetail=document.querySelector('.media-list')	
            var html =` `
            for(var i=0;i<item.length;i++)
            {
                html +=`
                <li class="text-center sup-product-corver-father">
                    <img src="${item[i].p_img}}"/>
                    <span class="sup-product-descript-line"></span>
                    <span class="sup-product-descript margin-20-t">${lists[i].p_title}</span>
                    <div class="sup-product-corver">
                        <div class="sup-product-corver-box">
                            <p class="sup-product-corve-circle"><span >+</span></p>
                        </div>
                    </div>
                </li>
                    												
                `
            }
            $(casedetail).html(html)           
        } 
    }		
})
   
// 产品中心sign
$.ajax({
    type:'get',
    url:api+'sign',
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
                <li class="text-center sup-product-corver-father">
                    <img src="${lists[i].p_img}"/>
                    <span class="sup-product-descript-line"></span>
                    <span class="sup-product-descript margin-20-t">${lists[i].p_title}</span>
                    <div class="sup-product-corver">
                        <div class="sup-product-corver-box">
                            <p class="sup-product-corve-circle"><span >+</span></p>
                        </div>
                    </div>
                </li>                   												
                `
            }
            $(casedetail).html(html)           
        } 
    }		
})
   


