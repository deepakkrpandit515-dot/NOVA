03:40:22 PM
/app/server.js:4
03:40:22 PM
Search logs
03:40:22 PM
       ^^^^
03:40:22 PM
03:40:22 PM
SyntaxError: Unexpected identifier 'logs'
03:40:22 PM
    at wrapSafe (node:internal/modules/cjs/loader:1713:18)
03:40:22 PM
    at Module._compile (node:internal/modules/cjs/loader:1755:20)
03:40:22 PM
    at Object..js (node:internal/modules/cjs/loader:1913:10)
03:40:22 PM
    at Module.load (node:internal/modules/cjs/loader:1505:32)
03:40:22 PM
    at Function._load (node:internal/modules/cjs/loader:1309:12)
03:40:22 PM
    at wrapModuleLoad (node:internal/modules/cjs/loader:254:19)
03:40:22 PM
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
03:40:22 PM
    at node:internal/main/run_main_module:36:49
03:40:22 PM
03:40:22 PM
Node.js v22.23.4
03:40:08 PM
==> Cloning from https://github.com/deepakkrpandit515-dot/NOVA
03:40:14 PM
==> Checking out commit d0f11ec873311e7c05e850b302c7a92a3bd60697 in branch main
03:40:16 PM
#1 [internal] load build definition from Dockerfile
03:40:16 PM
#1 transferring dockerfile: 201B done
03:40:16 PM
#1 DONE 0.0s
03:40:16 PM
03:40:16 PM
#2 [auth] library/node:pull render-prod/docker-mirror-repository/library/node:pull token for us-west1-docker.pkg.dev
03:40:16 PM
#2 DONE 0.0s
03:40:16 PM
03:40:16 PM
#3 [internal] load metadata for docker.io/library/node:22-alpine
03:40:16 PM
#3 DONE 0.5s
03:40:16 PM
03:40:16 PM
#4 [internal] load .dockerignore
03:40:16 PM
#4 transferring context: 2B done
03:40:16 PM
#4 DONE 0.0s
03:40:16 PM
03:40:16 PM
#5 [internal] load build context
03:40:16 PM
#5 DONE 0.0s
03:40:16 PM
03:40:16 PM
#6 [1/5] FROM docker.io/library/node:22-alpine@sha256:fe4f6d74e20370acb04ad889077d14d0f64a9c8ea6a42bc60cddf1e844699914
03:40:16 PM
#6 resolve docker.io/library/node:22-alpine@sha256:fe4f6d74e20370acb04ad889077d14d0f64a9c8ea6a42bc60cddf1e844699914 done
03:40:16 PM
#6 DONE 0.0s
03:40:16 PM
03:40:16 PM
#7 importing cache manifest
03:40:16 PM
#7 inferred cache manifest type: application/vnd.oci.image.manifest.v1+json done
03:40:16 PM
#7 DONE 0.1s
03:40:16 PM
03:40:16 PM
#5 [internal] load build context
03:40:16 PM
#5 transferring context: 53.79kB done
03:40:16 PM
#5 DONE 0.0s
03:40:16 PM
03:40:16 PM
#8 [3/5] COPY package*.json ./
03:40:16 PM
#8 CACHED
03:40:16 PM
03:40:16 PM
#9 [4/5] RUN if [ -f package.json ]; then npm install --omit=dev; fi
03:40:16 PM
#9 CACHED
03:40:16 PM
03:40:16 PM
#10 [2/5] WORKDIR /app
03:40:16 PM
#10 CACHED
03:40:16 PM
03:40:16 PM
#11 [5/5] COPY . .
03:40:16 PM
#11 CACHED
03:40:16 PM
03:40:16 PM
#12 exporting cache to registry
03:40:16 PM
#12 sending cache export
03:40:16 PM
#12 sending cache export 0.1s done
03:40:16 PM
#12 DONE 0.2s
03:40:16 PM
03:40:16 PM
#13 exporting to image
03:40:16 PM
#13 exporting layers done
03:40:16 PM
#13 pushing layers 0.1s done
03:40:16 PM
#13 DONE 0.1s
03:40:17 PM
==> Deploying...
03:40:17 PM
==> Setting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance
03:40:21 PM
/app/server.js:4
03:40:21 PM
Search logs
03:40:21 PM
       ^^^^
03:40:21 PM
03:40:21 PM
SyntaxError: Unexpected identifier 'logs'
03:40:21 PM
    at wrapSafe (node:internal/modules/cjs/loader:1713:18)
03:40:21 PM
    at Module._compile (node:internal/modules/cjs/loader:1755:20)
03:40:21 PM
    at Object..js (node:internal/modules/cjs/loader:1913:10)
03:40:21 PM
    at Module.load (node:internal/modules/cjs/loader:1505:32)
03:40:21 PM
    at Function._load (node:internal/modules/cjs/loader:1309:12)
03:40:21 PM
    at wrapModuleLoad (node:internal/modules/cjs/loader:254:19)
03:40:21 PM
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
03:40:21 PM
    at node:internal/main/run_main_module:36:49
03:40:21 PM
03:40:21 PM
Node.js v22.23.4
03:40:22 PM
/app/server.js:4
03:40:22 PM
Search logs
03:40:22 PM
       ^^^^
03:40:22 PM
03:40:22 PM
SyntaxError: Unexpected identifier 'logs'
03:40:22 PM
    at wrapSafe (node:internal/modules/cjs/loader:1713:18)
03:40:22 PM
    at Module._compile (node:internal/modules/cjs/loader:1755:20)
03:40:22 PM
    at Object..js (node:internal/modules/cjs/loader:1913:10)
03:40:22 PM
    at Module.load (node:internal/modules/cjs/loader:1505:32)
03:40:22 PM
    at Function._load (node:internal/modules/cjs/loader:1309:12)
03:40:22 PM
    at wrapModuleLoad (node:internal/modules/cjs/loader:254:19)
03:40:22 PM
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
03:40:22 PM
    at node:internal/main/run_main_module:36:49
03:40:22 PM
03:40:22 PM
Node.js v22.23.4
03:40:22 PM
==> Exited with status 1
03:40:22 PM
==> Common ways to troubleshoot your deploy: https://render.com/docs/troubleshooting-deploys
Menu
Need better ways to work with logs? Try theRender CLI, Render MCP Server, or set up a log 
