document.getElementById("submitButton").addEventListener("click", getDonationValues);

// Event Handler for submit button
function getDonationValues(event){
	var userName = document.getElementById("name").value;
	var userEmail = document.getElementById("mail").value;
	var donationAmount = parseInt(document.getElementById("amount").value);

	var donationType;
	var perLapDonation = document.getElementById("perLap");
	var singleDonation = document.getElementById("singleAmount");

	if(perLapDonation.checked){
		donationType = "Per Lap";
	}else if(singleDonation.checked){
		donationType = "Single Amount";
	}else{
		alert("Please choose a donation type.");
	}

	// Call iife function to add it to array
	var newDonor = {
		name: userName,
		email: userEmail,
		donation_amount: donationAmount,
		donation_type: donationType 
	};
	// Call private iife method to add the new object to:
	//		* The Private Array (stored in Donations)
	//		* The table in the DOM
	Donations.addDonor(newDonor);
}


