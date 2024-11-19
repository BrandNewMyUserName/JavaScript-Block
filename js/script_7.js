const btn_1 = document.querySelector(".button-task_1");

function showCountries() {
	var countriesList = document.getElementById('input-countries').value; 
	var result_1 = countriesList.split(','); 

	var html = "<ul>";
	for (let i = 0; i < result_1.length; i++) {
		html += "<li>" + result_1[i].trim() + "</li>"; 
	}
	html += "</ul>";
	document.getElementById("task_1-list").innerHTML = html;
}

btn_1.addEventListener("click", () => {
	showCountries();
});






const cells = document.querySelectorAll("td");

cells.forEach(cell => {
    
    cell.addEventListener("click", function handleClick() {
        
        if (cell.querySelector("input")) return;

        
        const originalText = cell.textContent;
        
        const input = document.createElement("input");
        input.type = "text";
        input.value = originalText;
        input.className = "edit-input";

        const saveButton = document.createElement("button");
        saveButton.textContent = "Зберегти";
        saveButton.className = "save-button";

        
        cell.textContent = "";
        cell.appendChild(input);
        cell.appendChild(saveButton);

        
        // cell.removeEventListener("click", handleClick);

        
        saveButton.addEventListener("click", function() {
            
			var text = input.value;
            cell.removeChild(input)
            cell.removeChild(saveButton)
			cell.textContent = text;

            
            // cell.addEventListener("click", handleClick);
        });

        
    });
});


