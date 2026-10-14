import { cp, mkdir, rm } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist/client", { recursive: true });
await mkdir("dist/server", { recursive: true });
await cp("index.html", "dist/client/index.html");
await cp("app.js", "dist/client/app.js");
await cp("pinyin-data.js", "dist/client/pinyin-data.js");
await cp("style.css", "dist/client/style.css");
await cp("admin", "dist/client/admin", { recursive: true });
await cp("favicon.svg", "dist/client/favicon.svg");
await cp("public/og.png", "dist/client/og.png");
await cp("scripts/worker-static.js", "dist/server/index.js");
