import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: CreateComponent },
        ])
    ],
    declarations: [
        CreateComponent,
    ]
})
export class CreateModule { }