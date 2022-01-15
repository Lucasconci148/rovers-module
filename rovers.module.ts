import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

// components
import { RoversComponent } from './sections/rovers/rovers.component';

@NgModule({
    declarations: [
        RoversComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
    ],
    exports: [
        RoversComponent
    ]
})

export class RoverModule { }