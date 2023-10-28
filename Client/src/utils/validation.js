export default function validate(userData){
  const errors = {
    email: "",
    password:"",
  }

  if(!userData.email){
    errors.email = "Email es requerido"
  } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)){
    errors.email = "Email es invalido"
  }

  if (userData.email.length >= 35) {
    errors.email = "Email invalido";
  }
  if (!/\d/.test(userData.password)) {
    errors.password = "Password debe contener un número";
  }

  if (!userData.password) {
    errors.password = "Password es requerido";
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Password debe tener 6 to 10 caracteres";
  }

  return errors;
}