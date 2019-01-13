import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string= ' Customer Details';
  msg: string = '';
  searchName: string = '';
  pageCurent: number = 1;

persons = [
  {
  'id':'1',
  'name':'Ivana', 
  'address':'Dushan Mitreski',
  'pcode':'234',
  'city':'M.brod',
  'country':'Macedonia'},

   {
  'id':'2',
  'name':'Bobi', 
  'address':'Jane sandanski',
  'pcode':'234',
  'city':'M.brod',
  'country':'Macedonia'},
   {
    'id':'3',
    'name':'Sofi', 
    'address':'ilija Igeski',
    'pcode':'234',
    'city':'M.brod',
    'country':'Macedonia'}

];

model: any = {};
model2:any = {};

add():void {
  this.model.id = this.persons.length + 1;
  this.persons.push(this.model);
  console.log(this.persons)
  this.msg = 'Successfully added';

}
 delete(i):void {
   var ansver = confirm('delete?');
   console.log(ansver);
   if(ansver){
     this.persons.splice(i,1);
   }


 }
 myValue;
 edit(i):void{
   
   this.model2.id = this.persons.length + 1;
   this.model2.name = this.persons[i].name;
   this.model2.address = this.persons[i].address;
   this.model2.pcode = this.persons[i].pcode;
   this.model2.city = this.persons[i].city;
   this.model2.country = this.persons[i].country;
   this.myValue = i;

 }

 red = {}
 update():void{
   let i = this.myValue;
   for(let j=0; j<this.persons.length; j++){
     if(i == j){
       this.persons[i] = this.model2;
       this.model2= {};
       this.msg= " Successfully Upadate";
       this.model2 = {};
     }
   }


 }
 read(inex):void{
  console.log(inex)
  for (var i= 0; i < this.persons.length; i++) {
    if (inex == this.persons[i].id) {
      this.red = this.persons[i];
      alert(' name : ' + this.persons[i+1].name  + "\n" +
      ' address : ' + this.persons[i + 1].address+ "\n" +
      ' city : ' + this.persons[i + 1].city +"\n" +
      ' pcode : '+this.persons[i+1].pcode + "\n" +
      ' country : ' + this.persons[i+1].country )
    }
  }
 }
 search():void{
   
   //if(this.name !=""){

   //}else if(this.name == ""){
    // this.ngOninit();
  // }
   //this.persons = this.persons.filter( res=>){
    // return res.name.toPersons().match(this.name.toPersons());
   //}

 }
 closeAlert():void{
  this.msg= '';

}
}
