import app from "./app";

const LOCALPORT = Number(process.env.PORT) || 3330;

app.listen(LOCALPORT, () =>
	console.log(`[📄] Swagger: ${process.env.BASE_URL}:${LOCALPORT}/swagger`)
);