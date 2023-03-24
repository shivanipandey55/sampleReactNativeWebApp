// import { useNavigation } from '@react-navigation/native';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../../../core/store/store';
import { request } from '../../../network/wrap-request';
import { validEmailFormat, validNameFormat, validPhoneNumberFormat } from '../../../util';

const SingUpController = () => {
  // const dispatch: AppDispatch = useDispatch();
  // const navigation = useNavigation();

  const validate = (name: string, email: string, phoneNumber: number | string) => {
    return validEmailFormat(email) && validNameFormat(name) && validPhoneNumberFormat(phoneNumber)
  }

  const handleSignUp = (name: string, email: string, phoneNumber: number) => {    
    if (validate(name, email, phoneNumber)) {      
      return request({
        url: "https://www.example.com/api/setCounter",
        method: "POST",
        data: { name, email, phoneNumber },
    })
        .then(res => {
            if (res.result === 0) return { result: 0, msg: "success" };
            if (res.result === -100) return { result: -100, msg: "need login" };
            return { result: -999, msg: "fail" };
        })
        .catch(err => {
            return { result: -999, msg: err };
        });
    } 
  };
  return { handleSignUp, validate };
};
export default SingUpController;
