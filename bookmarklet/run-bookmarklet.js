javascript:(function(){
    // Contact Henry Leonardo for senderID, timezone, and webURL;
    senderID = 'SENDER_ID'; timezone = 'TIMEZONE';
    webURL = 'URL';    

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

    var planData = [];
    var planDivs = document.querySelectorAll('div[data-test-id="runPageRunAssignmentRowNameContainer"]');

    if (planDivs.length > 0){
        planDivs.forEach(function(planDiv){
            var plan = {
                "planNumber" : planDiv.querySelector('button').textContent.trim(),
                "planTitle" : planDiv.querySelector('.Typography_ink-main__1vYor').textContent.trim()
            };
            planData.push(plan);
        });
        data.planData = planData;
    };

    fetch(webURL, {
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(response => response.text())
        .then(result => {
            // Displaying a prompt with the result
            var message = 'API call successful!\n\nResult:\n' + result;
            window.prompt(message, result);
        })
        .catch(error => {
            // Handling errors and displaying a prompt
            var errorMessage = 'Error sending data: ' + error.message;
            window.prompt(errorMessage, null);
            console.error(errorMessage);
        });

})