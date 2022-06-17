
function mySubmit(){

    firstNameValidator();

    lastNameValidator();

    emailValidator();

    passwordValidator();
    

}

firstNameValidator();

lastNameValidator();

emailValidator();

passwordValidator();

function firstNameValidator(){
    //gets the user input by id
    const fn = document.getElementById('first_name');
    //gets the input container by id
    let contain_one = document.getElementById('contain_one');
    
    //checks for empty input or wrong input
    fn.oninvalid = function (){
        //adds 'error' to container classlist if invalid
        contain_one.classList.add('error');
    };
    

    fn.oninput = function(){ 
        
        if (fn.value.length !== 0){
            //removes 'error' from container classlist if user has entered something and adds 'success' if valid
            contain_one.classList.add('success');
            contain_one.classList.remove('error');
        }else{
            //removes 'success' from container classlist if user has entered something and adds 'error' if invalid
            contain_one.classList.remove('success');
            contain_one.classList.add('error');
        }
        ;   
    };
};

function lastNameValidator(){
    const ln = document.getElementById('last_name')
    let contain_two = document.getElementById('contain_two');

    ln.oninvalid = function (){
        contain_two.classList.add('error');
    };

    ln.oninput = function(){ 
        if (ln.value.length !== 0){
            contain_two.classList.add('success');
            contain_two.classList.remove('error');
        }else{
            contain_two.classList.remove('success');
            contain_two.classList.add('error');
        }
        ;   
    };

};


function emailValidator(){
    const em = document.getElementById('email');
    let contain_three = document.getElementById('contain_three');

    em.oninvalid = function (){
        contain_three.classList.add('error');
        email.classList.add('placeholder');
        email.placeholder = 'email@example.com';
        
    };
    
    em.oninput = function(){

        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (em.value.match(reg)){
            contain_three.classList.add('success');
            contain_three.classList.remove('error');
        }else{
            contain_three.classList.remove('success');
            contain_three.classList.add('error');
            email.placeholder = 'Email Address';
        }
        ;
        
    };

};


function passwordValidator(){
    const pass = document.getElementById('password')
    let contain_four = document.getElementById('contain_four');
    let upper = document.getElementById('upper');
    let symbol = document.getElementById('symbol');
    let lower = document.getElementById('lower');
    let number = document.getElementById('number');
    let eight = document.getElementById('eight');
    let whitespace = document.getElementById('whitespace')

    pass.oninvalid = function (){
        contain_four.classList.add('error');
    };

    pass.oninput = function(){ 
        if (pass.value.length !== 0){
            contain_four.classList.add('success');
            contain_four.classList.remove('error');
        }else{
            contain_four.classList.remove('success');
            contain_four.classList.add('error');
        }
        ;

        if ((pass.value.length >= 8) && (pass.value.length <= 15)) {
            eight.classList.add('pass-success');
            eight.classList.remove('pass-error');
            eight.textContent = 'Password up to 8 letters but less than 16';
        
        }else if(pass.value.length >= 16){
            eight.classList.add('pass-success');
            eight.classList.remove('pass-error');
            eight.textContent = 'Password up to 16 (max length reached)';
        }else if (pass.value.length == ''){
            eight.classList.remove('pass-success');
            eight.classList.remove('pass-error');
            contain_four.classList.remove('success');
            contain_four.classList.add('error');
            eight.textContent = 'Password cannot be empty';
        }else{
            eight.classList.remove('pass-success');
            eight.classList.remove('pass-error');
            contain_four.classList.remove('success');
            contain_four.classList.add('error');
            eight.textContent = 'Password not up to 8 letters';
        };


        //testing for lower case
        var reglower = /[a-z]/g;
        if (pass.value.match(reglower)){
            lower.classList.add('pass-success');
            lower.classList.remove('pass-error');
            lower.textContent = "Password contains lowercase";
        } else{
            lower.classList.remove('pass-success');
            lower.classList.remove('pass-error');
            contain_four.classList.remove('success');
            contain_four.classList.add('error');
            lower.textContent = "Password doesn't contain lowercase";
        }

        //testing for uppercase
        var regupper = /[A-Z]/g;
        if (pass.value.match(regupper)){
            upper.classList.add('pass-success');
            upper.classList.remove('pass-error');
            upper.textContent = "Password contains uppercase";
        } else{
            upper.classList.remove('pass-success');
            upper.classList.remove('pass-error');
            contain_four.classList.remove('success');
            contain_four.classList.add('error');
            upper.textContent = "Password doesn't contain uppercase";
        }

        //testing for number
        var regnumber = /[0-9]/g;
        if (pass.value.match(regnumber)){
            number.classList.add('pass-success');
            number.classList.remove('pass-error');
            number.textContent = "Password contains number";
        } else{
            number.classList.remove('pass-success');
            number.classList.remove('pass-error');
            contain_four.classList.remove('success');
            contain_four.classList.add('error');
            number.textContent = "Password doesn't contain number";
        }

        //testing for symbol
        var regsymbol = /[$&+,:;=?@#|'<>.^*()%!-]/g;
        if (pass.value.match(regsymbol)){
            symbol.classList.add('pass-success');
            symbol.classList.remove('pass-error');
            symbol.textContent = "Password contains symbol";
        } else{
            symbol.classList.remove('pass-success');
            symbol.classList.remove('pass-error');
            contain_four.classList.remove('success');
            contain_four.classList.add('error');
            symbol.textContent = "Password doesn't contain symbol";
        }

        var regwhitespace = /[ ]/g;
        if (pass.value.match(regwhitespace)){
            contain_four.classList.remove('newerror');
            whitespace.textContent = "Password contains space (not advised! but will still be accepted)";
        } else{
            whitespace.textContent = "Password doesn't contain space (Advised!)";
        }
    };
    
};




