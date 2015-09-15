<? php

		require 'CFService.class.php';

		$celsius = $GET['celsius'];
		$CFIndex=0.0;

		if(is_numeric($celsius)){

			$CFIndex = CFService::convert($celsius);
		}

		sleep(1);

	echo $CFIndex;


?>