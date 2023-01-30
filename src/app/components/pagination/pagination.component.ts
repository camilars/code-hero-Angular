import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() page: number = 1;
  @Input() totalPages!: number;
  @Input() pageSize!: number;
  @Input() collectionSize!: number;
  @Input() maxSize!: number;
  @Output() pageChange = new EventEmitter<number>();

  pageChanged(page: number) {
    this.pageChange.emit(page);
  }

}
