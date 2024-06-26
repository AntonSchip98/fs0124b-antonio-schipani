import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisteredUserRoutingModule } from './registered-user-routing.module';
import { RegisteredUserComponent } from './registered-user.component';
import { GenericService } from '../../Service/generic.service';

@NgModule({
  declarations: [RegisteredUserComponent],
  imports: [CommonModule, RegisteredUserRoutingModule],
  providers: [GenericService],
})
export class RegisteredUserModule {}
