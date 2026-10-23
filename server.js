const http=require("http"),fs=require("fs"),path=require("path");
const PORT=process.env.PORT||3001,KEY=process.env.OPENAI_API_KEY||"",MODEL=process.env.OPENAI_MODEL||"gpt-5.6-luna",ROOT=__dirname;
const types={".html":"text/html; charset=utf-8",".js":"application/javascript; charset=utf-8",".json":"application/json; charset=utf-8",".css":"text/css; charset=utf-8"};
const send=(res,s,d,t="application/json; charset=utf-8")=>{res.writeHead(s,{"Content-Type":t});res.end(typeof d==="string"?d:JSON.stringify(d))};
async function read(req){let b="";for await(const c of req)b+=c;return JSON.parse(b||"{}")}
async function ai(m){if(!KEY)return"AI backend अभी configured नहीं है। NOVA local demo mode में है। Real AI के लिए server में OPENAI_API_KEY सेट करना होगा।";
let r=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+KEY},body:JSON.stringify({model:MODEL,input:m})}),j=await r.json();if(!r.ok)throw Error(j?.error?.message||"AI request failed");return(j.output||[]).flatMap(x=>x.content||[]).filter(x=>x.type==="output_text").map(x=>x.text).join("\n")||"कोई जवाब नहीं मिला।"}
http.createServer(async(req,res)=>{try{
if(req.url==="/api/health")return send(res,200,{ok:true,aiConfigured:!!KEY,model:MODEL});
if(req.url==="/api/chat"&&req.method==="POST"){let b=await read(req);if(!b.message)return send(res,400,{error:"message required"});try{return send(res,200,{ok:true,reply:await ai(String(b.message))})}catch(e){return send(res,502,{ok:false,error:e.message})}}
let f=path.basename((req.url||"/").split("?")[0]||"index.html");if(req.url==="/")f="index.html";let p=path.join(ROOT,f);
if(fs.existsSync(p)&&fs.statSync(p).isFile())return send(res,200,fs.readFileSync(p),types[path.extname(p)]||"application/octet-stream");send(res,404,{error:"Not found"})

.listen(PORT,"0.0.0.0",()=>console.log(`NOVA running on port ${PORT}`));
