const form = document.getElementById('form');
const result = document.getElementById('result');
const buttonText = document.getElementById('submitText')
const icon = document.getElementById('icon')
const button = document.getElementById('submitButton')
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
    icon.innerHTML =  "<div class='lds-ring'><div></div><div></div><div></div><div></div></div>"

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                buttonText.innerHTML = "MESSAGE SENT"
                icon.innerHTML =  "<i class='fa-solid fa-check'></i>"
            } else {
                console.log(response);
                result.innerHTML = json.message;
                buttonText.innerHTML = "MESSAGE NOT SENT"
                icon.innerHTML =  "<i class='fa-solid fa-x'></i>"
            }
        })
        .catch(error => {
            console.log(error);
            buttonText.innerHTML = "MESSAGE NOT SENT"
            icon.innerHTML =  "<i class='fa-solid fa-x'></i>"
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                button.blur()
                result.style.display = "none";
                buttonText.innerHTML = "SEND MESSAGE"
                icon.innerHTML =  "<i class='fa-solid fa-paper-plane'></i>"
            }, 3000);
        });
});