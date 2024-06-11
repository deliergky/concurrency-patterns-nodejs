# Fan-In/Fan-Out

## Common use Cases

1. The fan-out/fan-in pattern is a concurrency pattern used to parallelize work, often to achieve better performance and scalability. It involves fanning out multiple tasks to run in parallel (fan-out) and then collecting and combining their results once they are all completed (fan-in). 

2. API Aggregation: In scenarios where a response requires data from multiple APIs, requests to these APIs can be made in parallel (fan-out), and the responses aggregated (fan-in) to form a unified response to the client.

3. Microservices Architecture: In a microservices-based application, a service might need to aggregate data from multiple other services. It can fan out requests to these services in parallel and then fan in the responses to aggregate the data before responding to the client.

4. **424** usages of `Prmoise.all` in On