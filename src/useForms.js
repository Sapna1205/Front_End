import { useState, useEffect } from 'react';
import validateInfo from './validateInfo';

const useForms = (submitForm, submitHereForm) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
  /*  setValues({...values, [event.target.name]:[event.target.value]}) */

    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validateInfo(values));
    setIsSubmitting(true);
  };

 /*const[click, setClick]= useState(false) 
   const handleClick = e => {
    e.preventDefault();

    setErrors(validateInfo(values));
    setClick(true);
  };*/
  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        submitForm(true);
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForms;