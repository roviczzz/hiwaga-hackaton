function doPost(e) {
  const sheet = SpreadsheetApp.openById('1-ewHF8zItp4gcj1-f2sJa0C5iggQPizsBkaR8qlG6bE')
    .getSheetByName('HiwagaHackaton');
  const data = e.parameter;

  sheet.appendRow([
    new Date(),
    data.participant,
    data.team,
    data.section,
    data.email,
    data.phone,
    data.type,
    data.payment,
    data.ticket_pax,
    data.total_price
  ]);

  return ContentService.createTextOutput("Success");
}
