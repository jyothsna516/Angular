//console.log("hello from typescript");
/*let mystring:string;
//let myNumber:number;
//let myStatus:boolean;
//mystring="TypeScript"
//myNumber=120;
//myStatus=true;
//console.log(mystring);
//console.log(myNumber);
//console.log(myStatus);*/
/*let mydata:any;
mydata="Hello"+" "+"welcome";
console.log(mydata);
mydata=12;
console.log(mydata);
let mystring:string;
mystring="welcome to chennai";
console.log(mystring.slice(0,3));
let myNumber=100;
console.log(myNumber,toString()+"my result");*/
//let mysArray:string;
//let mynArray:
/*let Array1:string[];
let Array2:number[];
Array1=["hello world","jyo"];
Array2*/
/*let myTuple:[string,number,number]
myTuple=["Typescript",1,4];
console.log(myTuple);
let myvar:void;
myvar=undefined;
console.log(myvar);
let myvar1:null;
myvar1=null;
console.log(myvar1);
console.log(myTuple.pop());
myTuple.push(23);
console.log(myTuple);*/
/*enum myEnum{sunday=0,monday,tuesday};
console.log(myEnum.tuesday);
console.log(myEnum.monday);*/
//functions 
function myfunction(num1:number,num2:number):number{
    return(num1+num2);
}
console.log(myfunction(1,4));
function addfunction(num1:any,num2:any):any{
    return(num1+num2);
}
console.log(addfunction("hi",4));
function addNumber(num1:any,num2:any):number{
    if(typeof(num1)=='string'&&typeof(num2)=='string')
    {
        let x:number;
        let y:number;
        x=parseInt(num1);
        y=parseInt(num2);
    return(x+y);
}
else
return (num1+num2);
}
console.log(addNumber(1,9));
function getname(firstname
    :string,lastname:string):string{
    return(firstname+" "+lastname);
}
console.log(getname("chala","jyo"));
//interface
interface myInterface{
    Name:string;
    Title:string;

}
function Ifunction(mydata:myInterface):string{
    return(mydata.Name+" "+mydata.Title);
}
let  dat={Name:"jyo",Title:"Associate"}
console.log(Ifunction(dat));
//class
/*class User{
    id:number;
    name:string;
    email:string;
    age:number;
    constructor (id:number,name:string,email:string,age:number){
        this.id=id;
        this.name=name;
        this.email=email;
        this.age=age;
    
    console.log("user created");}
    }
   let  firstUser =new User(123,"jyo","jyo@gmail.com",20);
   console.log(firstUser.id+" "+firstUser.name+""+firstUser.email+""+
   firstUser.age+"");*/
//class with functions

class User1{
  protected  id:number;
   protected name:string;
   protected email:string;
   protected age:number;
    constructor (id:number,name:string,email:string,age:number){
        this.id=id;
        this.name=name;
        this.email=email;
        this.age=age;
    
    console.log("user created");}
    
    register()
    {

        console.log(this.name+"sucessfully registered");
        console.log(firstUser1.id+" "+firstUser1.name+" ");
    }
    getage(id:number):number{
        if(this.id==id)return this.age;
        else return 0;
    }
}
let firstUser1=new  User1(1,"jyo","jyothsna@gmail.com",21);
firstUser1.register();
console.log(firstUser1.getage(1));
//inheritance
class AdminUser extends User1{
    Type:string;
    constructor (id:number,name:string,email:string,age:number,type:string){
        super(id,name,email,age);
        this.Type=type;
    }
displayAdmin(){
    console.log("ur are"+this.Type=="Admin");
    console.log(this.id+" "+this.name+" "+this.email+" "+this.age+" "+this.Type+" ");
}
}
let cuser=new AdminUser(2,"jyo","jyo@gmail.com",12,"renu");
cuser.register();
cuser.displayAdmin();
//interface
interface Iuser
{
    Id:number;
    Name:string;
    Email:string;
    Age:number;
    Register():void;
    getAge(id:number):number

}
class user implements Iuser
{
    Id:number;
    Name:string;
    Email:string;
    Age:number;
    constructor(id:number,name:string,email:string,age:number)
    {
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.Age=age;
        console.log("usr created");
    }
    Register()
    {
    console.log(this.Name+"SuccesfullyRegistered");
   console.log(this.Id+""+this.Name+""+this.Email+""+this.Age);
    }

    getAge(id:number):number
    {
        if(this.Id==id)return this.Age;
        else return 0;

    }


}
let cUser=new user(2,"ram","r@gmail.com",23);
cUser.Register();
console.log(cUser.getAge(1));