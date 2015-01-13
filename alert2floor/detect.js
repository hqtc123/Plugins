function search() {
    return Array.prototype.map.call(
        document.getElementsByClassName("j_thread_list"),
        function(feed){
            var reply = feed.getElementsByClassName("threadlist_rep_num")[0];
            var replyNum = reply.textContent;
            if(replyNum < 1){
                var title = feed.getElementsByClassName("j_th_tit")[0].textContent
                var author_id = feed.getElementsByClassName("j_user_card")[0].textContent

                return {
                    title: title,
                    author_id: author_id
//                     position: position(feed)
                }; //sofa：沙发名，lz：楼主名，position：状态在页面中的绝对坐标
            }
        }).filter(function(n){return !!n;});
}

//function position(feed) {
//    var x = feed.offsetLeft,
//        y = feed.offsetTop
//            while (feed = feed.offsetParent) {
//                x += feed.offsetLeft
//                    y += feed.offsetTop
//            }
//    return {
//        x: x,
//        y: y
//    }
//}
//
////----------------main----------------------
console.log("监听器启动")
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    switch (request.message) {
    case "sofa":
        sendResponse({
            result: search()
        });
        break;
    default:
        sendResponse({
            result: "不告诉你"
        });
    }
})

//-----------------全局变量-------------------
var paddingTop = 20 //状态的CSS里找到的属性