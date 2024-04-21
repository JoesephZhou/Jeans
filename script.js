function validateForm(){
    let matches = 0;
    let required = document.querySelectorAll('.required');

    for(let x of required){
        if(x.value == ''){
            x.classList.add('form_error')
            matches++;
        }
        else{
            x.classList.remove('form_error')
        }
    }

    let error_message = document.querySelector('#error_message');
    error_message.style.display = 'none';

    if(matches == 0){
        return true
    }

    error_message.style.display = 'block';
    return false;
}



function toggleActive(id1, id2) {
    document.getElementById(id1).addEventListener('click', function() {
        document.getElementById(id1).classList.add('active');
        document.getElementById(id2).classList.remove('active');
        document.getElementById(id1 + '_menu').classList.add('active');
        document.getElementById(id2 + '_menu').classList.remove('active');
    });
}

toggleActive('lunch', 'dinner');
toggleActive('dinner', 'lunch');