Browser("Log In").Page("Log In").WebEdit("WebEdit").Set "bohee" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Log In").Page("Log In").WebButton("Next").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Log In").Page("Log In").WebElement("Password").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Log In").Page("Log In").WebEdit("WebEdit_2").SetSecure "5f1d7c0600b61f3f547630ce2d40ecf7ba9b7524aeb78c7d0eb4acd8" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Log In").Page("Log In").WebButton("Log In").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
AIUtil.SetContext Browser("Log In")
AIUtil("down_triangle").Click
 @@ script infofile_;_ZIP::ssf19.xml_;_
Browser("Log In").Page("Service Portal").Link("Agent Interface").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait 5
Browser("Dashboard").Page("Dashboard").WebElement("Main menu dropdown").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dashboard").Page("Dashboard").WebMenu("menu-categories").Select "Fire Department" @@ script infofile_;_ZIP::ssf8.xml_;_

allText=Browser("Dashboard").Page("Fire Hazard").WebElement("Hazard Information").GetROProperty("innertext")
print allText

  a = Split(allText,"*")
         b = ubound(a)
         
         For i = 0 to b
	         print "The value of array in " & i & " is :"  & a(i)& "<br />"
		         If i=4 Then
		         	print i
		         	aText = Split(a(i), "Hazard")
		         	print aText(0)
		         	DataTable("Lat_out",  dtGlobalSheet) = aText(0)
		         End If
    			 If i=5 Then
    			 	print i
		         	bText = Split(a(i), "Show")
		         	print bText(0)
		         	DataTable("Long_out",  dtGlobalSheet) = bText(0)
		         End If
         Next
 

 print DataTable.value("Lat_out", dtGlobalSheet)
 print DataTable.Value("Long_out", dtGlobalSheet)

