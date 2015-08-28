# JQuery---mentionfx
A one line solution to the @ mention / tagging system used by social networks. Using an Ajax request to a server script to get usernames of a database. Example given will give a simple explanation on how to use the plugin


Example of what is needed:
latest version of JQuery on the page:
Then the following markup for script and example CSS:

<script src="mentionfx.js"></script>
<link rel="stylesheet" type="text/css" href="mentionfx.css">
<script type="text/javascript" >
		$(document).ready( function(){
      $('#uniqueID').mentionfx('exampleScript.php', '#displayUniqueID');
		});
	</script>

<!--HTML required-->
<textarea id="uniqueID"></textarea>
<div id="displayUniqueID"></div>

<!--or-->

<input id="uniqueID" type="text" />
<div id="displayUniqueID"></div>
