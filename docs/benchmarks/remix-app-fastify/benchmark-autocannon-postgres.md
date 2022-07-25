# Remix Fastify App

This remix app was created using [`remix-fastify`](https://github.com/mcansh/remix-fastify) package 

## Small JSON Payload

```
oha -z 10s -c 100 --http-version 1.1 --no-tui http://127.0.0.1:3000/small-json-payload
Summary:
  Success rate: 1.0000
  Total:        10.0009 secs
  Slowest:      0.1940 secs
  Fastest:      0.0337 secs
  Average:      0.0649 secs
  Requests/sec: 1536.3561

  Total data:   283.16 MiB
  Size/request: 18.87 KiB
  Size/sec:     28.31 MiB

Response time histogram:
  0.048 [21]   |
  0.063 [8364] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.077 [5323] |■■■■■■■■■■■■■■■■■■■■
  0.092 [1419] |■■■■■
  0.107 [137]  |
  0.121 [20]   |
  0.136 [19]   |
  0.150 [13]   |
  0.165 [20]   |
  0.179 [16]   |
  0.194 [13]   |

Latency distribution:
  10% in 0.0546 secs
  25% in 0.0570 secs
  50% in 0.0618 secs
  75% in 0.0709 secs
  90% in 0.0780 secs
  95% in 0.0825 secs
  99% in 0.0993 secs

Details (average, fastest, slowest):
  DNS+dialup:   0.0331 secs, 0.0114 secs, 0.0420 secs
  DNS-lookup:   0.0000 secs, 0.0000 secs, 0.0000 secs

Status code distribution:
  [200] 15365 responses
```
