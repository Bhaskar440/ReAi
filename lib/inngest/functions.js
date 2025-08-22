import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "app/hello.world" },
  async () => {
    return { message: "Hello from ReAi!" };
  }
);

