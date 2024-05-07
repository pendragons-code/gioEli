document.addEventListener("DOMContentLoaded", function () {
	let titleStylerDiv = document.getElementById("titleStyler");
	let paraDiv = document.getElementById("para");
	const audio = document.getElementById("audioCard");
	let createRoomBtn = document.getElementById("createRoomBtn");
	let snowFlake = document.getElementById("snow");
	let muteBtn = document.getElementById("mute");
	let snowBtn = document.getElementById("snowBtn");


	snowBtn.addEventListener("click", () => {
		if(snowFlake.style.display === "block") return snowFlake.style.display = "none";
		return snowFlake.style.display = "block";
	});

	muteBtn.addEventListener("click", () => {
		toggleAudio();
	});

	createRoomBtn.addEventListener("click", () => {
		toggleAudio();
		snowFlake.style.display = "block";
		createRoomBtn.remove();
		titleStylerDiv.style.display = "block";
		paraDiv.style.display = "block";
	});

	function toggleAudio() {
		audio.volume = 0.1;
		if (audio.paused) {
			return audio.play();
		}
		audio.pause();
	}
});