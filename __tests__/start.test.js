const request = require("supertest");

describe("/", () => {
  const agent = request.agent("http://localhost:8000");
  it("should return 200", async () => {
    const response = await agent.get("/");
    expect(response.status).toBe(200);
  });
});
