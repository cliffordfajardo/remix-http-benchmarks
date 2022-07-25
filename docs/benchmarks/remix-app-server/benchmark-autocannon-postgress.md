# Remix App Server
This remix app was created using the `Remix App Server` template from the remix CLI ` npx create-remix@latest`

## Small JSON Payload

```sh
$ autocannon -c 100 -d 10  http://localhost:3000/small-json-payload
Running 10s test @ http://localhost:3000/small-json-payload
100 connections


┌─────────┬───────┬───────┬────────┬────────┬──────────┬──────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5%  │ 99%    │ Avg      │ Stdev    │ Max    │
├─────────┼───────┼───────┼────────┼────────┼──────────┼──────────┼────────┤
│ Latency │ 71 ms │ 86 ms │ 153 ms │ 165 ms │ 95.59 ms │ 23.65 ms │ 258 ms │
└─────────┴───────┴───────┴────────┴────────┴──────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 692     │ 692     │ 1069    │ 1204    │ 1037.3  │ 155.53  │ 692     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 13.5 MB │ 13.5 MB │ 20.9 MB │ 23.5 MB │ 20.3 MB │ 3.04 MB │ 13.5 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

10k requests in 10.04s, 203 MB read

```