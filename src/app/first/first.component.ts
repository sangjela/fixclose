import { Component } from '@angular/core';
declare function windowCloseForce(): void;

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  ngOnInit() {
    console.log('[ngOnInit] execute');
    // try{
    //   window.close(); //warn not self close, cannot try-catch detection
    // }catch(e){
    //   console.log("second route close when init fail", e);
    // }

    //window.close(); //warn not self close, cannot try-catch detection

    // //一度再表示してからClose
    // let win = window.open('about:blank', '_self');
    // if(win) win.close()
    // else console.log("win open return Nil")

    console.log("before force root");
    let forClose = windowCloseForce;
    forClose();
    console.log("after force root");
  }
}
