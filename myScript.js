var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
function myfunction(num1, num2) {
    return (num1 + num2);
}
console.log(myfunction(1, 4));
function addfunction(num1, num2) {
    return (num1 + num2);
}
console.log(addfunction("hi", 4));
function addNumber(num1, num2) {
    if (typeof (num1) == 'string' && typeof (num2) == 'string') {
        var x = void 0;
        var y = void 0;
        x = parseInt(num1);
        y = parseInt(num2);
        return (x + y);
    }
    else
        return (num1 + num2);
}
console.log(addNumber(1, 9));
function getname(firstname, lastname) {
    return (firstname + " " + lastname);
}
console.log(getname("chala", "jyo"));
function Ifunction(mydata) {
    return (mydata.Name + " " + mydata.Title);
}
var dat = { Name: "jyo", Title: "Associate" };
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
var User1 = /** @class */ (function () {
    function User1(id, name, email, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("user created");
    }
    User1.prototype.register = function () {
        console.log(this.name + "sucessfully registered");
        console.log(firstUser1.id + " " + firstUser1.name + " ");
    };
    User1.prototype.getage = function (id) {
        if (this.id == id)
            return this.age;
        else
            return 0;
    };
    return User1;
}());
var firstUser1 = new User1(1, "jyo", "jyothsna@gmail.com", 21);
firstUser1.register();
console.log(firstUser1.getage(1));
//inheritance
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(id, name, email, age, type) {
        var _this = _super.call(this, id, name, email, age) || this;
        _this.Type = type;
        return _this;
    }
    AdminUser.prototype.displayAdmin = function () {
        console.log("ur are" + this.Type == "Admin");
        console.log(this.id + " " + this.name + " " + this.email + " " + this.age + " " + this.Type + " ");
    };
    return AdminUser;
}(User1));
var cuser = new AdminUser(2, "jyo", "jyo@gmail.com", 12, "renu");
cuser.register();
cuser.displayAdmin();
var user = /** @class */ (function () {
    function user(id, name, email, age) {
        this.Id = id;
        this.Name = name;
        this.Email = email;
        this.Age = age;
        console.log("usr created");
    }
    user.prototype.Register = function () {
        console.log(this.Name + "SuccesfullyRegistered");
        console.log(this.Id + "" + this.Name + "" + this.Email + "" + this.Age);
    };
    user.prototype.getAge = function (id) {
        if (this.Id == id)
            return this.Age;
        else
            return 0;
    };
    return user;
}());
var cUser = new user(2, "ram", "r@gmail.com", 23);
cUser.Register();
console.log(cUser.getAge(1));
