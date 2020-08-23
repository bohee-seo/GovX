AIUtil.SetContext Device("Device")

AIUtil("input", "Username").Type "tenant-admin"
AIUtil("input", "Password").Type "MFS0ftware%"

AIUtil.FindTextBlock("Environment Name").Click 
Dim mySendKeys
Set mySendKeys = CreateObject("WScript.shell")
mySendKeys.SendKeys("environment") 
wait 5 
AIUtil.FindTextBlock("URL").Click
mySendKeys.SendKeys("https://portal.advantageinc.org:8456/") 
wait 5
AIUtil.FindTextBlock("Tenant ID").Click
mySendKeys.SendKeys("811673049") 
wait 5
'AIUtil("input", "URL").Type  "https://portal.advantageinc.org:8456/"
'
'If AIUtil("input", "Tenant ID").Exist(5) Then
'	AIUtil("input", "Tenant ID").Type "811673049"
'else
'	AIUtil.FindTextBlock("Tenant ID").Click 
'	mySendKeys.SendKeys("811673049") 
'End If

'wait 2
'AIUtil.SetContext Device("Device")
AIUtil("button", "Login").Click

wait 5

RunAction "Report_fire_Hazard", oneIteration
