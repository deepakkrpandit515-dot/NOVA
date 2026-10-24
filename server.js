Add Dockerfile for Node.js application
Status
Deploy failed
Duration
14.0s
Deployed
Oct 24, 2026
at
3:04:42 PM
GMT+5:30

Trigger
Manually deployed by you via Dashboard
Source
27a056c
Notices
Exited with status 1 while running your code.
Read our docs for common ways to troubleshoot your deploy.

All logs
Search
Search logs


Live tail



03:04:44 PM
==> Cloning from https://github.com/deepakkrpandit515-dot/NOVA
03:04:50 PM
==> Checking out commit 27a056ce5aac6aced3d2c743e9aad23583e3d7b9 in branch main
03:04:51 PM
#1 [internal] load build definition from Dockerfile
03:04:51 PM
#1 transferring dockerfile: 201B done
03:04:51 PM
#1 DONE 0.0s
03:04:51 PM
03:04:51 PM
#2 [auth] library/node:pull render-prod/docker-mirror-repository/library/node:pull token for us-west1-docker.pkg.dev
03:04:51 PM
#2 DONE 0.0s
03:04:51 PM
03:04:51 PM
#3 [internal] load metadata for docker.io/library/node:22-alpine
03:04:51 PM
#3 DONE 0.4s
03:04:51 PM
03:04:51 PM
#4 [internal] load .dockerignore
03:04:51 PM
#4 transferring context: 2B done
03:04:51 PM
#4 DONE 0.0s
03:04:51 PM
03:04:51 PM
#5 [internal] load build context
03:04:51 PM
#5 DONE 0.0s
03:04:51 PM
03:04:51 PM
#6 [1/5] FROM docker.io/library/node:22-alpine@sha256:fe4f6d74e20370acb04ad889077d14d0f64a9c8ea6a42bc60cddf1e844699914
03:04:51 PM
#6 resolve docker.io/library/node:22-alpine@sha256:fe4f6d74e20370acb04ad889077d14d0f64a9c8ea6a42bc60cddf1e844699914 done
03:04:51 PM
#6 DONE 0.0s
03:04:51 PM
03:04:51 PM
#7 importing cache manifest
03:04:51 PM
#7 inferred cache manifest type: application/vnd.oci.image.manifest.v1+json done
03:04:51 PM
#7 DONE 0.1s
03:04:51 PM
03:04:51 PM
#5 [internal] load build context
03:04:51 PM
#5 transferring context: 52.95kB done
03:04:51 PM
#5 DONE 0.0s
03:04:51 PM
03:04:51 PM
#8 [3/5] COPY package*.json ./
03:04:51 PM
#8 CACHED
03:04:51 PM
03:04:51 PM
#9 [4/5] RUN if [ -f package.json ]; then npm install --omit=dev; fi
03:04:51 PM
#9 CACHED
03:04:51 PM
03:04:51 PM
#10 [2/5] WORKDIR /app
03:04:51 PM
#10 CACHED
03:04:51 PM
03:04:51 PM
#11 [5/5] COPY . .
03:04:51 PM
#11 CACHED
03:04:51 PM
03:04:51 PM
#12 exporting cache to registry
03:04:51 PM
#12 sending cache export
03:04:51 PM
#12 sending cache export 0.3s done
03:04:51 PM
#12 DONE 0.3s
03:04:51 PM
03:04:51 PM
#13 exporting to image
03:04:51 PM
#13 exporting layers done
03:04:51 PM
#13 pushing layers
03:04:52 PM
#13 pushing layers 0.6s done
03:04:52 PM
#13 DONE 0.7s
03:04:52 PM
==> Deploying...
03:04:52 PM
==> Setting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance
03:04:56 PM
==> Exited with status 1
03:04:56 PM
==> Common ways to troubleshoot your deploy: https://render.com/docs/troubleshooting-deploys
03:04:55 PM
/app/server.js:15
03:04:55 PM
03:04:55 PM
03:04:55 PM
03:04:55 PM
SyntaxError: Unexpected end of input
03:04:55 PM
    at wrapSafe (node:internal/modules/cjs/loader:1713:18)
03:04:55 PM
    at Module._compile (node:internal/modules/cjs/loader:1755:20)
03:04:55 PM
    at Object..js (node:internal/modules/cjs/loader:1913:10)
03:04:55 PM
    at Module.load (node:internal/modules/cjs/loader:1505:32)
03:04:55 PM
    at Function._load (node:internal/modules/cjs/loader:1309:12)
03:04:55 PM
    at wrapModuleLoad (node:internal/modules/cjs/loader:254:19)
03:04:55 PM
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
03:04:55 PM
    at node:internal/main/run_main_module:36:49
03:04:55 PM
03:04:55 PM
Node.js v22.23.4
03:04:56 PM
/app/server.js:15
03:04:56 PM
03:04:56 PM
03:04:56 PM
03:04:56 PM
SyntaxError: Unexpected end of input
03:04:56 PM
    at wrapSafe (node:internal/modules/cjs/loader:1713:18)
03:04:56 PM
    at Module._compile (node:internal/modules/cjs/loader:1755:20)
03:04:56 PM
    at Object..js (node:internal/modules/cjs/loader:1913:10)
03:04:56 PM
    at Module.load (node:internal/modules/cjs/loader:1505:32)
03:04:56 PM
    at Function._load (node:internal/modules/cjs/loader:1309:12)
03:04:56 PM
    at wrapModuleLoad (node:internal/modules/cjs/loader:254:19)
03:04:56 PM
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
03:04:56 PM
    at node:internal/main/run_main_module:36:49
03:04:56 PM
03:04:56 PM
Node.js v22.23.4
Need better ways to work with logs
