import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces';
import * as hbs from 'hbs';
import hbsUtils from 'hbs-utils';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.engine('hbs', hbs.__express);
  app.setViewEngine('hbs');

  // Register Handlebars partials
  hbs.registerPartials(join(__dirname, '..', 'views/layouts'));

  // Create hbsUtils instance and register watched partials
  const hbsUtilsInstance = hbsUtils(hbs);
  hbsUtilsInstance.registerPartials(join(__dirname, '..', 'views/layouts'));
  await app.listen(3000);
}
bootstrap();
