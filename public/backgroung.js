// chrome.action.onClicked.addListener(tab => {
//   chrome.scripting.executeScript({
//     target: {tabId: tab.id}, // Corrected the property name to 'tabId'
//     function: () => {
//       alert('hello');
//     }
//   });
// });

//chrome

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    if(changeInfo.status === "complete" && /^http/.test(tab.url)){
        chrome.scripting.executeScript({
            target: {tabId},
            files: ["./content.js"]
        }).then(()=>{
            console.log("we have injected the content script")
        }).catch(err=> console.log(err, "error in background script line 10"))
    }
})
