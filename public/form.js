document.addEventListener("DOMContentLoaded", function() {
	let passwordInput = document.getElementById("passwordToProceed");
	let submit = document.getElementById("submit");
	submit.addEventListener("click", () => {
		let passwordInputValue = passwordInput.value;
		if(passwordInputValue !== "stage1") return alert(">:(");
		return window.location.href = `/stage1`;
	});
});
