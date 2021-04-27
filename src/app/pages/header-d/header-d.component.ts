import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-d',
  templateUrl: './header-d.component.html',
  styleUrls: ['./header-d.component.scss']
})
export class HeaderDComponent implements OnInit {
  @ViewChild('enlaces') enlaces: ElementRef;
  constructor(private render: Renderer2) { }

  ngOnInit(): void {
  }

  abrirEnlace(): void {
    this.enlaces.nativeElement.classList.toggle('enlaces2');
  }
}
