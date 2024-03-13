
import { NestFactory } from "@nestjs/core";
import { AppMoudule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppMoudule);
  await app.listen(3000);
}

bootstrap()