const Koa = require("koa");
const Router = require("@koa/router");
const app = new Koa();
const router = new Router();

router.get("/index", (ctx) => {
  ctx.status = 200;
  ctx.type = "text/html";
  ctx.body = "<h1>Index Sayfasi</h1>";
});

router.get("/about", (ctx) => {
  ctx.status = 200;
  ctx.type = "text/html";
  ctx.body = "<h1>About Sayfasi</h1>";
});

router.get("/contact", (ctx) => {
  ctx.status = 200;
  ctx.type = "text/html";
  ctx.body = "<h1>Contact Sayfasi</h1>";
});

app.use(router.routes()).use(router.allowedMethods());
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu port ${port} da çalişmaya başladi`);
});
