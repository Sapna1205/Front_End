export default function validateInfo(values){
    let errors ={};

    if (!values.username.trim()){
        errors.username = "username required";
    }
    //Email
    if (!values.email){
        errors.email = "email required";
    }
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
    }
    //Passwords 
    if (!values.password){
        errors.password ="password required";
    }
    else if (values.password.length<6){
        errors.password ="password must be more than 6 characters";
    }
    if (!values.password2){
        errors.password2="password required";
    }
    else if (values.password2!==values.password){
        errors.password2 ="passwords do not match";
    }
    return errors;
}