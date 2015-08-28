<?php
	//@author - Ryan Flynn
	if($_POST):
		// the mention system uses the first and last name to find possible usernames
		// examples below with arrays but suggested SQL with %LIKE% statements
		$searchTerm = $_POST['searchword'];
		$users = array(
			0 => array(
			  "Ryan",
			  "Surname",
			  "Ryan95Z"
			),
			1 => array(
			  "Test",
			  "User",
			  "Tester"
			),
			2 => array(
			  "Ryan",
			  "Tester",
			  "AnotherRyan"
			)
		);

		$searchTerm = str_replace("@", "", $searchTerm);
		foreach($users as $k => $v){
			if(preg_match_all("/".$searchTerm."/i", $v[0]) || preg_match_all("/".$searchTerm."/i", $v[1])): ?>
				<!-- a div with the class "display_box" is needed and the ID of this div will need to be the desired username -->
				<!-- rest of the html is however you want it -->
				<div class="display_box" id=<?php print($v[2]);?> >
					<span><?php print("@".$v[2]);?></span><span><?php print(" - ".$v[0]." ".$v[1]);?></span>
				</div>
		<?php endif; 
		}; ?>
<?php endif;?>