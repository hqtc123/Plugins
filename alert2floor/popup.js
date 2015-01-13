function init(){
    contentDiv = document.createElement("div")
    contentDiv.id = "contentDiv"
    document.body.appendChild(contentDiv)
    noResultDiv = document.createElement("div")
    noResultDiv.textContent = "暂未检测到新贴"
    contentDiv.appendChild(noResultDiv)
}

function go(){
  chrome.tabs.query({
    active:true,
    currentWindow:true
  },function(tabs){
    chrome.tabs.sendMessage(tabs[0].id,{
      message: "sofa"
    }, function(response){
      for(var i = 0, pair; pair = response.result[i]; i++){
        var p_ele = document.createElement("p");
        var title = pair.title;
        var author_id = pair.author_id;

        noResultDiv.style.display = "none"
        p_ele.innerHTML = "<strong>"+author_id +
        "</strong> 刚刚发了一贴《"+title+"》！;</br> 快去抢个2楼 !";
        contentDiv.appendChild(p_ele);
      }
    })
  })
}


var contentDiv //内容块
var noResultDiv

//----------------main----------------------
init()
go()