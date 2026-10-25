Status

Duration
18.2s
Deployed
Oct 26, 2026
at
1:13:27 AM
GMT+5:30

Trigger
Manually deployed by you via Dashboard
Source
b72a816
Notices
Exited with status 1 while running your code.
Read our docs for common ways to troubleshoot your deploy.

All logs
Search
Search logs


Live tail



01:13:37 AM
01:13:37 AM
#7 importing cache manifest
01:13:37 AM
#7 inferred cache manifest type: application/vnd.oci.image.manifest.v1+json done
01:13:37 AM
#7 DONE 0.1s
01:13:37 AM
01:13:37 AM
#5 [internal] load build context
01:13:37 AM
#5 transferring context: 69.65kB done
01:13:37 AM
#5 DONE 0.0s
01:13:37 AM
01:13:37 AM
#8 [2/5] WORKDIR /app
01:13:37 AM
#8 CACHED
01:13:37 AM
01:13:37 AM
#9 [3/5] COPY package*.json ./
01:13:37 AM
#9 CACHED
01:13:37 AM
01:13:37 AM
#10 [4/5] RUN if [ -f package.json ]; then npm install --omit=dev; fi
01:13:37 AM
#10 CACHED
01:13:37 AM
01:13:37 AM
#11 [5/5] COPY . .
01:13:37 AM
#11 CACHED
01:13:37 AM
01:13:37 AM
#12 exporting cache to registry
01:13:37 AM
#12 sending cache export
01:13:38 AM
#12 ...
01:13:38 AM
01:13:38 AM
#13 exporting to image
01:13:38 AM
#13 exporting layers done
01:13:38 AM
#13 pushing layers 0.1s done
01:13:38 AM
#13 DONE 0.2s
01:13:38 AM
01:13:38 AM
#12 exporting cache to registry
01:13:38 AM
#12 sending cache export 0.3s done
01:13:38 AM
#12 DONE 0.3s
01:13:39 AM
==> Deploying...
01:13:39 AM
==> Setting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance
01:13:44 AM
/app/server.js:1
01:13:44 AM
03:40:22 PM
01:13:44 AM
  ^
01:13:44 AM
01:13:44 AM
SyntaxError: Unexpected token ':'
01:13:44 AM
    at wrapSafe (node:internal/modules/cjs/loader:1713:18)
01:13:44 AM
    at Module._compile (node:internal/modules/cjs/loader:1755:20)
01:13:44 AM
    at Object..js (node:internal/modules/cjs/loader:1913:10)
01:13:44 AM
    at Module.load (node:internal/modules/cjs/loader:1505:32)
01:13:44 AM
    at Function._load (node:internal/modules/cjs/loader:1309:12)
01:13:44 AM
    at wrapModuleLoad (node:internal/modules/cjs/loader:254:19)
01:13:44 AM
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
01:13:44 AM
    at node:internal/main/run_main_module:36:49
01:13:44 AM
01:13:44 AM
Node.js v22.23.4
01:13:45 AM
==> Exited with status 1
01:13:45 AM
==> Common ways to troubleshoot your deploy: https://render.com/docs/troubleshooting-deploys
01:13:45 AM
/app/server.js:1
01:13:45 AM
03:40:22 PM
01:13:45 AM
  ^
01:13:45 AM
01:13:45 AM
SyntaxError: Unexpected token ':'
01:13:45 AM
    at wrapSafe (node:internal/modules/cjs/loader:1713:18)
01:13:45 AM
    at Module._compile (node:internal/modules/cjs/loader:1755:20)
01:13:45 AM
    at Object..js (node:internal/modules/cjs/loader:1913:10)
01:13:45 AM
    at Module.load (node:internal/modules/cjs/loader:1505:32)
01:13:45 AM
    at Function._load (node:internal/modules/cjs/loader:1309:12)
01:13:45 AM
    at wrapModuleLoad (node:internal/modules/cjs/loader:254:19)
01:13:45 AM
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
01:13:45 AM
    at node:internal/main/run_main_module:36:49
Menu
01:13:45 AM
01:13:45 AM
Node.js v22.23.4
Need better ways to work
