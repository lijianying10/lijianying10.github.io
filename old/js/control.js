/**
 * Created by lijianying on 14-5-10.
 */
window.onresize=function(){autoadjestreader();};
autoadjestreader();
loadlabel();

SetCookie('fn','default.pdf');


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