//操作数据库数据库的一切操作
//引入数据库连接池
let query =require('../mysql.js')
module.exports={
    massage:async function(data){
        let sql='insert into connect(name,email,tel,address,massage) values(?)'
        let result = await query(sql,[data]).catch(function(res){
            console.log(res)
        })
        if(result){
            return true;
        }else{
            return false;
        }
       
    },
    caseshow: async function() {
        let sql = 'select * from case_img'
        let result = await query(sql,'')
        if(result){
            return result;
        }else{
            return false;
        }
    },
    news:async function(){
        let sql='select * from news'
        let result=await query(sql,'')
        if(result){
            return result;
        }
        else{
            return false;
        }
    },
    recommend:async function(){
        let sql='select * from recommend'
        let result=await query(sql,'')
        if(result){
            return result;
        }
        else{
            return false;
        }
    },
    caseDetail:async function(){
        let sql='select * from  case_img'
        let result=await query(sql,'')
        if(result){
            return result;
        }
        else{
            return false;
        }
    },  
    app1:async function(){
        let sql='select * from  app1'
        let result=await query(sql,'')
        if(result){
            return result;
        }
        else{
            return false;
        }
    }, 
    app2:async function(){
        let sql='select * from  app1'
        let result=await query(sql,'')
        if(result){
            return result;
        }
        else{
            return false;
        }
    },  
    sign:async function(){
        let sql='select * from  sign'
        let result=await query(sql,'')
        if(result){
            return result;
        }
        else{
            return false;
        }
    },
    build:async function(){
        let sql='select * from  build'
        let result=await query(sql,'')
        if(result){
            return result;
        }
        else{
            return false;
        }
    },  

}