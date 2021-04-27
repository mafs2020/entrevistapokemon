import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header-d',
  templateUrl: './header-d.component.html',
  styleUrls: ['./header-d.component.scss']
})
export class HeaderDComponent implements OnInit {
  @ViewChild('enlaces') enlaces: ElementRef;
  @ViewChildren('as') as:  QueryList<ElementRef>;
  constructor(private render: Renderer2) { }

  ngOnInit(): void {
  }

  abrirEnlace(): void {
    this.enlaces.nativeElement.classList.toggle('enlaces2');
  }

  quitarClaseMenu(): void {
    this.enlaces.nativeElement.classList.toggle('enlaces2');
  }
}
