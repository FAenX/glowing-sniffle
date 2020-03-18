import {ApplicationConfig} from '@loopback/core';
import {TododemoApplication} from './application';

export {TododemoApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new TododemoApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  return app;
}
