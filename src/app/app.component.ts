import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

declare function windowCloseForce(): void;

// // 自windowを閉じる
// function winClose(){
//   open('about:blank', '_self').close();    //一度再表示してからClose
// }

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [RouterOutlet],
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fixclose';

  //constructor(private router: RouterOutlet) { }  

  public closeThis(): void {
    //window.close();
    
    // try{ //cannot catch warn for self close
    //   window.close();
    // }catch(e){
    //   console.log("root route close when init fail", e);
    // }
    //window.close();//not work for route case
 
    //一度再表示してからClose -> edge blank not closed.
    // let win = window.open('about:blank', '_self');
    // if(win) win.close()
    // else console.log("win open return Nil")

    console.log("before force root");
    let forClose = windowCloseForce;
    forClose();
    console.log("after force root");
  }
    
  public pushToClose(): void {
    //this.router..navigate(['/another-route']);
  }

}
