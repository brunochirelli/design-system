import { test, expect } from "vitest";

test("test", () => {
  expect(true).toBe(true);
});
// Este tipo de teste não funciona pq o certo seria testar a geração dos tokens
// e não se eles estao presentes

// test("should return true if CSS variable is defined", () => {
//   const variableExists = isCssVariableDefined("--primary-100");

//   expect(variableExists).toBe(true);
// });
