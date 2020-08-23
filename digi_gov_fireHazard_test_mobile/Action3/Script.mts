'AIUtil.SetContext Device("Device")
AIUtil.FindTextBlock("Emergency").Click
wait 2
AIUtil.FindTextBlock("Report a fire hazard").Click
wait 2
print Datatable.Value("Latitude","Global")
print Datatable.Value("Longitude", "Global")
Device("Device").GPSRelocate Datatable.Value("Latitude","Global"), Datatable.Value("Longitude", "Global") 
'Device("Device").GPSRelocate 1.283335729, 103.8044712
wait 2
Device("Device").InsightObject("InsightObject_4").Click @@ hightlight id_;_14_;_script infofile_;_ZIP::ssf8.xml_;_

wait 5
Device("Device").InsightObject("InsightObject_8").LongClick @@ hightlight id_;_9_;_script infofile_;_ZIP::ssf12.xml_;_
wait 3 @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf1.xml_;_

'AIUtil.SetContext Device("Device")
AIUtil.FindTextBlock("Select the hazard type").Click
AIUtil.FindTextBlock("Overcrowded Venue").Click

AIUtil.FindTextBlock("Hazard Description").Click
Dim mySendKeys
Set mySendKeys = CreateObject("WScript.shell")
mySendKeys.SendKeys("test") 
wait 5

AIUtil.FindTextBlock("Submit").Click

IF AIUtil.FindTextBlock("Ticket Details").Exist THEN
	' Get the text above as an anchor to "ticket ID" text
	Set anchor = AIUtil.FindTextBlock("One of our officers will be in contact")
	'Get the text of "Ticket ID"
	ticketID=AIUtil.FindTextBlock(micAnyText,micWithAnchorAbove,anchor).GetText()
	
	reporter.ReportEvent micPass, "Report Submit Succeed", "Succeed to report a new firehazard report: ticket details is shown"
Else 
	reporter.ReportEvent micFail, "Report Submit Failure", "Failed to report a new firehazard report: ticket details is not shown"
	ExitTest
End If

If IsNull(ticketID) Then
	reporter.ReportEvent micFail, "ticketID is null", "Fail to generate a ticket ID in SMAX"
Else
	reporter.ReportEvent micPass, "ticketID is not null", "Succeeed to generate a ticket ID in SMAX"
	Datatable.Value("ticketID", dtGlobalSheet)=ticketID
	print Datatable.Value("ticketID", dtGlobalSheet)
End If

