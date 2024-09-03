
        const scriptURL = 'https://script.google.com/macros/s/AKfycby4Q8N-hrlWnTIc6DfyicmG_temywEiVjqk3oz7FuIvmjK3C8zdErUp9NqkFhZU2F8/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Thank Your for subscribing!";

                setTimeout(function(){
                    msg.innerHTML = "";
                },5000)
                form.reset();

            })
            .catch(error => console.error('Error!', error.message))
        })
   