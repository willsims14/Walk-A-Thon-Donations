// Iife object that stores and handles all private donation information
var Donations = (function(olDonations){
	// Array of donations that is private to the Donations object
	var donations = [];
	return{
		// Adds the new donor to the array AND the DOM
		addDonor: function(donorObject){
			// Add Donor to array
			donations.push(donorObject);
			// Add donor to DOM table
			var table = document.getElementById("table");
			var newRowIndex = table.rows.length;

			var row = table.insertRow(newRowIndex);
			row.className = "tableRow";

			if(newRowIndex % 2 == 0){
				row.className = "even";
			}else{
				row.className = "odd";
			}

			var nameCell = row.insertCell(0);
			nameCell.className = "donation col-sm-3";
			nameCell.innerHTML = donorObject.name;

			var emailCell = row.insertCell(1);
			emailCell.className = "donation col-sm-3";
			emailCell.innerHTML = donorObject.email;

			var donationAmountCell = row.insertCell(2);
			donationAmountCell.className = "donation col-sm-3";
			donationAmountCell.innerHTML = "$" + donorObject.donation_amount;

			var donationTypeCell = row.insertCell(3);
			donationTypeCell.className = "donation col-sm-3";
			donationTypeCell.innerHTML = donorObject.donation_type;
		}
	};
})(Donations || {});