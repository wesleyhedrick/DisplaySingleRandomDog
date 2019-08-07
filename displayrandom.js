function getDogImage(inpt) {
    console.log(inpt);
    fetch(`https://dog.ceo/api/breed/${inpt}/images/random`)
    .then(x => x.json())
    .then(y => displayResults(y))
    .catch(error => alert('We cannot find that breed.'));
    
}

function displayResults(inpt) {
    if(inpt.status == "error") {
        alert('We could not find that breed.')
        renderLanding();
    } else {
    console.log(inpt);
    console.log(inpt.message.length)
    $('body').html(`
        <div class="formcontainer">
            <form class="" action="" method ="">
                    <label for="">How many dogs do you want to see?</label>
                    <input placeholder="Type your number here." type="text" name="" id="" />
            </form>
        </div>
        <section>
            <img src="${inpt.message}" alt="image of a dog">
        </section>
    `)

    $('body').append(`<button>Try again</button>`)
        $('button').on('click', function(e){
            renderLanding();
        })
    }
}


function watchForm() {
    $('form').submit(e => {
        e.preventDefault();
        let inpt = $('input').val();
        console.log(inpt);
        getDogImage(inpt);
    })
}



function renderLanding () {         
    
    $('body').html(`
        <div class="formcontainer">
            <form class="" action="" method ="">
                    <label for="">What breed would you like to see?</label>
                    <input placeholder="Your breed here." type="text" name="" id="" />
            </form>
        </div>
    `)
    console.log('Form is ready for input.')
    watchForm();
}

$(renderLanding());