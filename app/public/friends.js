
	$(".btn btn-danger").on("click", function(){

		// Here we grab the form elements
		var newSurvey = {
			name: $('#name').val().trim(),
			photo: $('#photo').val().trim(),

			questionOne: $('#reserve_email').val().trim(),
			questionTwo: $('#reserve_uniqueID').val().trim(),
			questionThree: $('#reserve_email').val().trim(),
			questionFour: $('#reserve_uniqueID').val().trim(),
			questionFive: $('#reserve_email').val().trim(),
			questionSix: $('#reserve_uniqueID').val().trim(),
			questionSeven: $('#reserve_email').val().trim(),
			questionEight: $('#reserve_uniqueID').val().trim(),
			questionNine: $('#reserve_email').val().trim(),
			questionTen: $('#reserve_uniqueID').val().trim()
		};

		$(".user-name").append(newSurvey.name);
		$(".user-pic").append(<h1>What The</h1>);
	}

		console.log(newReservation);