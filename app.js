const form = document.getElementById('form');
const userName = document.getElementById('fullNameInput');
const userPhone = document.getElementById('phoneInput');
const userMessage = document.getElementById('textArea');

const regEx = /^\+?[(]?9\d[)]?[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/im;

function checkInputs() {
	const usernameValue = userName.value.trim();
	const userPhoneValue = userPhone.value.trim();
	const userText = userMessage.value.trim();
	
	const newArr = []
	
	if (usernameValue === '' || usernameValue.length < 3) {
		return setErrorFor(userName, 'Username cannot be blank');
	} else {
		setSuccessFor(userName)
		newArr.push(usernameValue)
	}
	
	if (userPhoneValue === '' || !regEx.test(userPhoneValue)) {
		return setErrorFor(userPhone, 'Please write your valid phone number');
	} else {
		setSuccessFor(userPhone);
		newArr.push(userPhoneValue)
	}
	
	if (userText === '' || userText.length < 10) {
		return setErrorFor(userMessage, 'Please fill the blank');
	} else {
		setSuccessFor(userMessage);
		newArr.push(userText)
	}
	return newArr
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
	setTimeout(() => {
		formControl.classList.remove("error")
	}, 1000)
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	setTimeout(() => {
		formControl.classList.remove("success")
	}, 1000)
}


form.addEventListener('submit', e => {
	e.preventDefault();
	const TOKEN_BOT = "5342053813:AAF_CBROYfiihIcvnt0EK-cNFXq6Oe4lPBc";
	let userData = checkInputs();
	let userInfo = `User:%0A - <b>Fullname: </b> ${userData[0]}. %0A - <b>Phone number: </b> ${userData[1]}. %0A - <b>Message: </b> ${userData[2]}.`
	
	
	const chat_id = -1001620327414; // id : name of Messages channel
	let url = `https://api.telegram.org/bot${TOKEN_BOT}/sendMessage?chat_id=${chat_id}&text=${userInfo}&parse_mode=html`
	
	let api = new XMLHttpRequest()
	api.open("GET", url, true)
	api.send();
	userName.value = ""
	userPhone.value = ""
	userMessage.value = ""
	
	console.log("Message successfully sent")
});


