import { caesarCipher } from "./caesarCipher.js";

test("shift the letter", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
  expect(caesarCipher("hello", 3)).toBe("khoor");
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
