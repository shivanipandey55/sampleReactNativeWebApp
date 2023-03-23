import { validate } from "../../screens/Signup/SignupUtils"

describe("Test function for signup page", () => {
  test("Password of length 5", () => {
    expect(validate("abc", "abc@gmail.com", 12345)).toBe(true)
  })
  test("Password of length not equal to 5", () => {
    expect(validate("abc", "abc@gmail.com", 1234)).not.toBe(true)
  })
  test("Email is blank", () => {
    expect(validate("abc", "", 12345)).not.toBe(true)
  })
  test("Email is not blank", () => {
    expect(validate("abc", "abc@gmail.com", 12345)).toBe(true)
  })
  test("Name is blank", () => {
    expect(validate("", "abc@gmail.com", 12345)).not.toBe(true)
  })
  test("Name is not blank", () => {
    expect(validate("abc", "abc@gmail.com", 12345)).toBe(true)
  })
  test("Password is 0", () => {
    expect(validate("abc", "abc@gmail.com", 0)).not.toBe(true)
  })
  test("Password is not 0", () => {
    expect(validate("abc", "abc@gmail.com", 12343)).toBe(true)
  })
})
