import { Module } from '@nestjs/common';
import { ConfigModule } from 'nestjs-config';
import { V1Module } from './modules/v1/v1.module';
import * as path from 'path';

@Module({
  imports: [V1Module,
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}'))
  ]
})
export class AppModule {}
