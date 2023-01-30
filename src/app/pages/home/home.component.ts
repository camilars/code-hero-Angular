import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { CharactersService } from 'src/app/services/characters/characters.service';
import { Characters, ResponseCharacters } from 'src/app/services/characters/characters.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters: Characters[] = [];

  totalResults! : number;
  page: number = 1;
  maxSize: number = 5;
  pageSize: number = 10;
  limit: number = 10;
  offset: number = 10;
  loading: boolean = false;
  searchText: string = '';


  constructor(private charactersService: CharactersService) { }


  ngOnInit(): void {
    this.getCharacters(0);
  }

  onSearchTextChanged(searchValue: string) {
    this.searchText = searchValue;
  }

  getCharacters(offset: number) {
    this.charactersService.getCharacters(this.limit, offset).subscribe((response) => {
      this.characters = response.data.results;
      this.totalResults = response.data.total;
    })
  }

  pageChange(page: number) {
    this.offset = (page -1) * 10;
    this.getCharacters(this.offset);
  }

}
