class Customer{
    id;
    name;
    account;
    
    constructor(id,name,account){
        this.id=id;
        this.name=name;
        this.account=account;
    }

    toString(){
        return "id:"+this.id+" "+"name:"+this.name+" "+"account Info:"+this.account;
    }
}
class Account{
    balance;
    constructor(balance){
        this.balance=balance;
    }

    toString(){
        return "Remaining balance:"+this.balance;
    }
}

class PrimeAccount extends Account{
    supercoins;
    constructor(balance,supercoins){
        super(balance);
        this.supercoins=supercoins;
    }
    toString(){
        return "Remaining balance:"+this.balance+" "+"supercoins:"+this.supercoins;
    }
}

let account1=new Account(8000);
let account2=new Account(2000);
let customer1=new Customer(1,"naresh",account1);
let customer2=new Customer(2,"ramesh",account2);
let primeAccount1=new PrimeAccount(5000,20);
let primeAccount2=new PrimeAccount(10000,45);
let customer3=new Customer(3,"rajesh",primeAccount1);
let customer4=new Customer(4,"suresh",primeAccount2);

let customers=[customer1,customer2,customer3,customer4];

for(i=0;i<customers.length;i++){
    let customer=customers[i];
    let string=customer.toString();
    console.log(string);
}