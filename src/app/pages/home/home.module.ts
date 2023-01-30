import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CharacterCardModule } from 'src/app/components/character-card/character-card.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';
import { CharactersModule } from 'src/app/services/characters/characters.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchModule } from 'src/app/components/search/search.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CharacterCardModule,
    HeaderModule,
    PaginationModule,
    CharactersModule,
    NgbModule,
    SearchModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
