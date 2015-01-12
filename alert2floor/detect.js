var winid = 0;
var tabid = 0;
chrome.extension.onRequest.addListener(
               function(request,sender,sendResponse){ 
                      chrome.pageAction.show(sender.tab.id);
                      chrome.windows.getCurrent(function(Win){ 
                               winid = Win.id
                      });
                      circle();
            }
);
function circle()
{
      radomURL = "http://tieba.baidu.com/f?kw=%C4%CF%BE%A9%B4%F3%D1%A7&fr=index"; //随机生成论坛网页代码，需要根据自己实际情况修改
      chrome.tabs.create({windowId:winid,url: radomURL,selected:false},function(tab){tabid = tab.id}); 
      chrome.tabs.remove(tabid); 
      setTimeout(circle,60000); 
}