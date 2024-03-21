window.sendRun = function(senderID, timezone, webURL){
       // Extracting information from the page
       var currentUrl = window.location.href;
       var runTitle = document.querySelector('[data-test-id="runPageTitleInput"]').value;
       var runStatus = document.querySelector('[data-test-id="runStatusBadge"]').innerText;
       var runDateRange = document.querySelector('[data-test-id="rangePickerComponentWrapper"]').innerText;
       var testLead = document.querySelector('[data-test-id="runPageAssignTestLeadModalToggle"]').innerText;
     
       var data = {
           url: currentUrl,
           title: runTitle,
           status: runStatus,
           dateRange: runDateRange,
           testLead: testLead,
           senderID: senderID,
           timezone: timezone
       };
   
       // Constructing the webhook URL
       var webhookUrl = webURL;
   
       console.table(data);
}