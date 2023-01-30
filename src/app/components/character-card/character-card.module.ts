import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [CharacterCardComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [CharacterCardComponent]
})
export class CharacterCardModule { }
