import { DatabaseForTesting } from "./database-for-testing";

afterEach(() => {
  jest.restoreAllMocks();
});

afterAll(async () => {
  await DatabaseForTesting.destroy();
});
