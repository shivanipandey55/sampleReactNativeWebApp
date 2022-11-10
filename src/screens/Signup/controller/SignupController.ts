import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../core/store/store';
import handleSignupThunk from '../../../core/thunk/signup/Signup';

const SingUpController = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleSignUp = () => {
    dispatch(
      handleSignupThunk({
        name: 'Developer',
        email: 'Developerss5@gmail.com',
        password: 123456,
      })
    ).then((response: any) => {
      console.log(response);
    });
  };
  return { handleSignUp };
};
export default SingUpController;
