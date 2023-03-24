import { useDispatch } from "react-redux";
import SingUpController from "../../screens/Signup/controller/SignupController"
import { validEmailFormat, validNameFormat, validPhoneNumberFormat } from "../../util";

const { validate, handleSignUp } = SingUpController()

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}));

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn()
}))

jest.mock("../../network/wrap-request");

describe("Email Validity test", () => {
  test("Valid email", () => {
    expect(validEmailFormat("naman@gmail.com")).toBe(true)
  })
  test("Invalid email -> doesn't contain .com", () => {
    expect(validEmailFormat("naman@gmail")).not.toBe(true)
  })
  test("Invalid email -> doesn't contain @gmail", () => {
    expect(validEmailFormat("namanil.com")).not.toBe(true)
  })
  test("Invalid email -> doesn't contain character between @ and .com", () => {
    expect(validEmailFormat("naman@.com")).not.toBe(true)
  })
})

describe("Name validity test", () => {
  test("valid name -> with atleast 2 characters", () => {
    expect(validNameFormat("naman")).toBe(true)
  })
  test("valid name -> with atmost 20 characters", () => {
    expect(validNameFormat("namanagarwaldbs")).toBe(true)
  })
  test("invalid name -> with less than 2 characters", () => {
    expect(validNameFormat("n")).not.toBe(true)
  })
  test("invalid name -> with more than 20 characters", () => {
    expect(validNameFormat("namanagarwalsandipguptashivanipandeyganeshagarwal")).not.toBe(true)
  })
  test("invalid name -> with numeric values", () => {
    expect(validNameFormat("123455")).not.toBe(true)
  })
  test("invalid name -> alpha-numeric values", () => {
    expect(validNameFormat("namanagarwal438")).not.toBe(true)
  })
})

describe("Phone Number Validity Test", () => {
  test("Valid Phone Number -> with 10 digits", () => {
    expect(validPhoneNumberFormat(1234567890)).toBe(true)
  })
  test("Invalid Phone Number -> with less than 10 digits", () => {
    expect(validPhoneNumberFormat(123455)).not.toBe(true)
  })
  test("Invalid Phone Number -> with more than 10 digits", () => {
    expect(validPhoneNumberFormat(123456789012)).not.toBe(true)
  })
  test("Invalid Phone Number -> alpha-numeric characters", () => {
    expect(validPhoneNumberFormat("naman123456")).not.toBe(true)
  })
})

describe("Signup Page", () => {
  test("valid values", () => {
    expect(validate("abc", "abc@gmail.com", 1234567890)).toBe(true)
  })
  test("Invalid Values -> invalid name(less than 2 characters)", () => {
    expect(validate("a", "abc@gmail.com", 1234567890)).not.toBe(true)
  })
  test("Invalid Values -> invalid email", () => {
    expect(validate("naman", "abc@gmail", 1234567890)).not.toBe(true)
  })
  test("Invalid Values -> invalid phone(less than 10 digits)", () => {
    expect(validate("naman", "abc@gmail.com", 123456)).not.toBe(true)
  })
})

describe("Simple mock", () => {
  it("test success", () => {
      handleSignUp("naman", "naman@gmail.com", 1234567890)?.then(res => {
          expect(res).toStrictEqual({ result: 0, msg: "success" });
      });
  });
});
