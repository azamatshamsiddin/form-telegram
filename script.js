const form = document.querySelector("#form")


form.addEventListener("submit", (e) => {
	e.preventDefault()
	
	const TOKEN_BOT = "5342053813:AAF_CBROYfiihIcvnt0EK-cNFXq6Oe4lPBc";
	const regEx = /^\+?[(]?9\d[)]?[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/im;
	
	let fullName = document.querySelector(".form-fullname").value
	
	let phone = document.querySelector(".form-phone").value
	let description = document.querySelector(".form-textArea").value
	
	function validation() {
		if (!fullName.length < 3) {
			return fullName
		}
		if (regEx.match(phone)) {
			return phone
		} else {
			
			return
		}
	}
	
	validation()
	let my_text = `Result is:%0A - <b>User fullname: </b> ${fullName}. %0A - <b>User phone number: </b> ${phone}. %0A - <b>User message: </b> ${description}.`;
	const chat_id = -1001317139562;
	let url = `https://api.telegram.org/bot${TOKEN_BOT}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`
	
	let api = new XMLHttpRequest()
	api.open("GET", url, true)
	api.send();
	form.reset()
	
	console.log("Message successfully sent")
})


