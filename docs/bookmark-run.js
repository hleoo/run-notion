(function(senderID, webURL, timezone) {
    // Extracting information from the page
    var currentUrl = window.location.href;
    var runTitle = document.querySelector('[data-test-id="runPageTitleInput"]').value;
    var runStatus = document.querySelector('[data-test-id="runStatusBadge"]').innerText;
    var runDateRange = document.querySelector('[data-test-id="rangePickerComponentWrapper"]').innerText;
    var testLead = document.querySelector('[data-test-id="runPageAssignTestLeadModalToggle"]').innerText;
  
    // Building query string with encoded information
    var queryString = 'url=' + encodeURIComponent(currentUrl) + '&title=' + encodeURIComponent(runTitle) +
                      '&status=' + encodeURIComponent(runStatus) + '&dateRange=' + encodeURIComponent(runDateRange) +
                      '&testLead=' + encodeURIComponent(testLead) + '&senderID=' + encodeURIComponent(senderID) +
                      '&timezone=' + encodeURIComponent(timezone);
  
    // Constructing the webhook URL
    var webhookUrl = webURL + '?' + queryString;
  
    // Sending data to webhook using fetch
    fetch(webhookUrl, { method: 'POST' })
      .then(response => response.text())
      .then(result => {
        // Displaying a prompt with the result
        var message = 'Success!\n\nResult:\n' + result;
        window.prompt(message, result);
      })
      .catch(error => {
        // Handling errors and displaying a prompt
        var errorMessage = 'Error sending data: ' + error.message;
        window.prompt(errorMessage, null);
        console.error(errorMessage);
      });
  })(senderID, webURL, timezone);
  