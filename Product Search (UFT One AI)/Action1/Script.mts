﻿Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon

AIUtil.SetContext AppContext																'Tell the AI engine to point at the application

AIUtil("search").Search Parameter.Item("SearchText")										'Search for the product passed in from the parameter
AppContext.Sync																			'Wait for the browser to stop spinning
AIUtil("close").Click																			'Close the search diaglog
AppContext.Sync																			'Wait for the browser to stop spinning
AIUtil("close").CheckExists False
AIUtil.FindTextBlock(micAnyText, micWithAnchorOnRight, AIUtil("search")).Click
AppContext.Sync																			'Wait for the browser to stop spinning

