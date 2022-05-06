const form = document.querySelector("#form")

form.addEventListener("submit", (e) => {
	e.preventDefault()
	
	const TOKEN_BOT = "5342053813:AAF_CBROYfiihIcvnt0EK-cNFXq6Oe4lPBc"
	
	let fullName = document.querySelector(".form-fullname").value
	let phone = document.querySelector(".form-phone").value
	let description = document.querySelector(".form-textArea").value
	console.log(description)
	let my_text = `Result is:%0A - <b>User fullname: </b> ${fullName}. %0A - <b>User phone number: </b> ${phone}. %0A - <b>User message: </b> ${description}.`;
	const chat_id = -1001317139562;
	let url = `https://api.telegram.org/bot${TOKEN_BOT}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`
	fullName.innerHTML = null
	phone.innerHTML = null
	description.innerHTML = null
	let api = new XMLHttpRequest()
	api.open("GET", url, true)
	api.send();

	
	console.log("Message successfully sent")
})