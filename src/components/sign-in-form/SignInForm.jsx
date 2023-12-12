import {useState} from 'react'
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup  } from '../../utils /firebase/firebase'; 
import FormInput from '../form-input/FormInput';
import Button, {BUTTON_TYPE_CLASSES} from '../Button/Button';
import './SignIn.scss'
// import { useDispatch } from 'react-redux';
// import { setCurrentUser } from '../../store/user/user.action';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  // const dispatch = useDispatch();
  const [formFields, setformFields] = useState(defaultFormFields);
  const {email, password } = formFields

  const resetFormFields = () => {
      setformFields(defaultFormFields)
  }
  const signInWithGoogle = async () =>{
    await signInWithGooglePopup();
    
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // const {user} = await signInAuthUserWithEmailAndPassword(email, password);
      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
      console.log('siging in use', user)
      // dispatch(setCurrentUser(user));
      resetFormFields();

    } catch (error) {
      if(error.code === "auth/invalid-login-credentials") {
        alert('your credentials  are not correct')
      } else {
        console.log(error)
      }
    }

  }

  const handleChange = (event) => {
    const { name, value } = event.target 

    setformFields({...formFields, [name]: value})
  }

  return (
    <div className='sign-in-container'>
        <h2>I already Have an account </h2>
        <span>Sign In with your email and Password</span>
        <form onSubmit={handleSubmit}>

            <FormInput
                    label="Email"
                    inputOptions = {{
                        type: "email",
                        required: true,
                        onChange: handleChange, 
                        name: 'email',
                        value: email
                    }}
            />   
            <FormInput
                    label="Password"
                    inputOptions = {{
                        type: "password",
                        required: true,
                        onChange: handleChange, 
                        name: 'password',
                        value: password
                    }}
            />   
            <div className='buttons-container'>
              <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type='submit'>Sign In  </Button>
              <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} >Google Sign In </Button>  
            </div>
        </form> 
    </div>
  )
}

export default SignInForm
