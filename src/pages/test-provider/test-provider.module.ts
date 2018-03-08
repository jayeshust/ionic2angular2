import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestProviderPage } from './test-provider';

@NgModule({
  declarations: [
    TestProviderPage,
  ],
  imports: [
    IonicPageModule.forChild(TestProviderPage),
  ],
})
export class TestProviderPageModule {}
