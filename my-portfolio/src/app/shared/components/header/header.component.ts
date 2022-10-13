import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() onBurgerAction = new EventEmitter();
  public getScreenWidth!: number;
  public getScreenHeight!: number;
  burgerIsOpen = false;
  constructor() {}

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  openBurger() {
    this.burgerIsOpen = true;
    this.onBurgerAction.emit(this.burgerIsOpen);
  }
  closeBurger() {
    this.burgerIsOpen = false;
    this.onBurgerAction.emit(this.burgerIsOpen);
  }
}
