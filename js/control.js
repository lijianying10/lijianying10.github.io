/**
 * Created by lijianying on 14-5-10.
 */
window.onresize=function(){autoadjestreader();};
autoadjestreader();
loadlabel();

function byid(id)
{return document.getElementById(id);}

function setheigh(){
    byid('pdffile').style.height=byid('inputheigh').value+'px';
    SetCookie('readerheigh',byid('pdffile').style.height);
}

function fullscreen()
{
    if(getCookie('fn') != null)
    {
        var html="pdf/web/viewer.html?fn="+getCookie('fn');
        window.open(html,'_black');
    }
    else
    {
        window.open("pdf/web/viewer.html",'_black');
    }

}

function readerAdjest()
{
    var    s  = "\r\n网页正文部分上："+  window.screenTop;
    console.log(s);
}

function SetCookie(name,value)//两个参数，一个是cookie的名子，一个是值
{
    var Days = 30; //此 cookie 将被保存 30 天
    var exp = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getCookie(name)//取cookies函数
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) return unescape(arr[2]); return null;
}

function delCookie(name)//删除cookie
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}


function changeBook(jjj)
{
    jjj=eval('(' + jjj + ')');
    SetCookie('fn',jjj['fn']);
    Changeto(jjj['fn']);
}

function Changeto(filename)
{
    SetCookie('fn',filename);
    if(filename == "")
    {return;}
    document.getElementById('pdffile').contentWindow.ChangePdfFile(filename);
}

function loadlabel()
{
    var books= document.getElementsByName('book_link');
    for(var book in books )
    {
        if(book == "length")
        {
            break;
        }
        var targetbook = books[book];
        var book = targetbook.getAttribute('data');
        book=eval('(' + book + ')');
        targetbook.innerHTML=book['title'];
    }
}

function autoadjestreader()
{
    byid('pdffile').style.height=window.innerHeight-175+'px'
}