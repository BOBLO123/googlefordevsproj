
function postFeedbackToDiscord() 
  var form = FormApp.getActiveForm(); 
  var formResponses = form.getResponses();
  var newResponse = formResponses[formResponses.length-1];
  var itemResponses = newResponse.getItemResponses();
  
  var feedbackUsername = itemResponses[0].getResponse();
  var feedbackWhy = itemResponses[1].getResponse();
  var feedbackYesOrNo = itemResponses[2].getResponse();
  var feedbackDeserve = itemResponses[3].getResponse();
  var feedbackEmail = itemResponses[4].getResponse();

  
  var fields = [
    {
      name: "email (optional, but helpful)",
      value: feedbackUsername.toString()
    },
    {
      name: "whats your discord username?(FULL USERNAME, AND NOT THE NICKNAME,YOUR ACTUAL USERNAME)",
      value: feedbackWhy.toString()
    },
    {
      name: "do you have previous moderating experience?",
      value: feedbackYesOrNo.toString()
    },
    {
      name: "why do you want mod? ",
      value: feedbackDeserve.toString()
    },
    {
      name: "why do you deserve mod? ",
      value: feedbackEmail.toString()
    }
  ]

  
 
  var statusColor = (feedbackWhy.toString() == "Issue / Bug") ?  15605837 : 1879160

 
  var embededMessage = {
    color: statusColor,
    fields: fields
  };

 
  var url = "https://discordapp.com/api/webhooks/1301309528108830810/PIpjRAas9rr_fjeM3A1FiCn-6oAvM6p2qrpd_ehcI90dzJUHqmC4gH6OnCqoZggaTbym";
  var payload = JSON.stringify({embeds: [embededMessage]});
  var params = {
    headers: {"Content-Type": "application/json"},
    method: "POST",
    payload: payload,
    muteHttpExceptions: true
  };

  var res = UrlFetchApp.fetch(url, params);
  
  Logger.log(res.getContentText());
}
