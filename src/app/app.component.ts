import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  bil1 ;
  bil2 ;
  hasil;
  patern='';
  hitung(){
    this.hasil = Math.pow(this.bil1,this.bil2);
    if(this.hasil % 2 == 0){
      // genap pola B
      this.patern +="Pola B \n";
      for(var a=this.bil2;a<=this.hasil;a++){
        for(var b=0;b<a;b++){
          this.patern+='*';
        }
        this.patern+='\n';
      }
    }else{
      // ganjil pola A
      var temp1 = 1;
      var temp2 = this.bil2;
      this.patern +="Pola A \n";
      while(temp1<=this.bil1 || temp2>=0){
      if(temp2>0){
        for(var x=temp2;x>0;x--){
          this.patern+='*';
        }
      }
      if(temp1<=this.bil1){
        for(var y=0;y<temp1;y++){
          this.patern+='O';
        }
      }
        this.patern+='\n';
        temp1++;
        temp2--;
      }
    }
  }
  reset(){
    this.bil1='';
    this.bil2='';
    this.hasil='';
    this.patern='';
  }
}
