import { StackActions, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../core/store/store';
import handleSignupThunk from '../../../core/thunk/signup/Signup';
import { validate } from '../SignupUtils';

const SingUpController = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigation = useNavigation();

  const handleSignUp = (name: string, email: string, phoneNumber: number) => {
    if (validate(name, email, phoneNumber)) {
      dispatch(
        handleSignupThunk({
          name: name,
          email: email,
          password: phoneNumber,
        })
      ).then((response: any) => {
        console.log(response);
        navigation.dispatch(StackActions.replace('Home'));
      });
    } 
  };
  return { handleSignUp, validate };
};
export default SingUpController;
