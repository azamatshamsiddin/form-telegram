const form = document.querySelector("#form")

form.addEventListener("submit", (e) => {
	e.preventDefault()
	
	const TOKEN_BOT = "5342053813:AAF_CBROYfiihIcvnt0EK-cNFXq6Oe4lPBc"
	
	let email = document.querySelector(".form-email").value
	let text = document.querySelector(".form-text1").value
	let my_text = `Result is:%0A - <b>Email: </b> ${email}. %0A - <b>Text: </b> ${text}.`;
	const chat_id = -1001317139562;
	let url = `https://api.telegram.org/bot${TOKEN_BOT}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`
	
	let api = new XMLHttpRequest()
	
	api.open("GET", url, true)
	api.send();
	
	console.log("Message successfully sent")
})