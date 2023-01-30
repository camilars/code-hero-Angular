import { Component, Input, OnInit } from '@angular/core';
import { NgbAccordionModule  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  isCollapsed = true;
  opened: boolean = false;
  img: string = '';
  @Input() name: string = '';
  @Input() path: string = '';
  @Input() extension: string = '';
  @Input() id? : number;
  @Input() description: string = '';
  @Input() comics = [
    {
      name: ''
    }
  ];
  @Input() series = [
    {
      name: ''
    }
  ];

  constructor(private accordion: NgbAccordionModule ) { }

  ngOnInit(): void {
    this.img = `${this.path}.${this.extension}`;
  }

}
