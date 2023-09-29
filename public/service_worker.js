chrome.action.onClicked.addListener(tab => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id}, // Corrected the property name to 'tabId'
    function: () => {
      alert('hello');
    }
  });
});
