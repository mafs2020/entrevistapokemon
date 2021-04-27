import { AfterViewChecked, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu') menu: ElementRef<HTMLDivElement>;
  @ViewChildren('as') a: QueryList<ElementRef>;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  abrirMenu(){
    console.log('abrirMenu()');
    this.menu.nativeElement.classList.toggle('menu-fixed');
    this.a.forEach(ab => this.renderer.addClass( ab.nativeElement, 'mostrarA' ));
  }

}
