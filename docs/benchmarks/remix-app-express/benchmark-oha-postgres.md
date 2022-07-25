# Remix Express App
This remix app was created using Remix's express template. (`npx create-remix@latest --template express`)

## Small JSON Payload

```
oha -z 10s -c 100 --http-version 1.1 --no-tui http://127.0.0.1:3000/small-json-payload
Summary:
  Success rate: 1.0000
  Total:        10.0014 secs
  Slowest:      0.2312 secs
  Fastest:      0.0568 secs
  Average:      0.0740 secs
  Requests/sec: 1345.0069

  Total data:   247.90 MiB
  Size/request: 18.87 KiB
  Size/sec:     24.79 MiB

Response time histogram:
  0.072 [6435] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.087 [5506] |■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.102 [1234] |■■■■■■
  0.117 [122]  |
  0.132 [55]   |
  0.147 [17]   |
  0.162 [15]   |
  0.177 [20]   |
  0.192 [14]   |
  0.207 [14]   |
  0.222 [20]   |

Latency distribution:
  10% in 0.0625 secs
  25% in 0.0648 secs
  50% in 0.0725 secs
  75% in 0.0790 secs
  90% in 0.0877 secs
  95% in 0.0921 secs
  99% in 0.1197 secs

Details (average, fastest, slowest):
  DNS+dialup:   0.0359 secs, 0.0135 secs, 0.0462 secs
  DNS-lookup:   0.0000 secs, 0.0000 secs, 0.0001 secs

Status code distribution:
  [200] 13452 responses
```