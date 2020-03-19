it("Runs an integration test", () => {
  const data = { item: "Hello" };
  expect(data?.nullish ?? "Operator").toEqual("Operator");
});
