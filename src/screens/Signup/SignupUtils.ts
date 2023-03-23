export const validate = (name: string, email: string, phoneNumber: number) => {
    if (name === "" || email === "" || phoneNumber === 0 || phoneNumber.toString().length !== 5) {
      return false
    } else {
      return true
    }
  }
