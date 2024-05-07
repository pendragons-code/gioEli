document.addEventListener("DOMContentLoaded", function() {
	let passwordInput = document.getElementById("passwordToProceed");
	let submit = document.getElementById("submit");
	submit.addEventListener("click", () => {
		let passwordInputValue = passwordInput.value;
		if(passwordInputValue === "") return alert(">:(");
		return window.location.href = `/${passwordInputValue}`;
	});
});
