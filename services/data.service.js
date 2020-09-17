let   accountDetails={
    1001:{name:"user1", acno:1001, pin:1234, password:'userone', balance:3000, transactions:[]},
    1002:{name:"user2", acno:1002, pin:2345, password:'usertwo', balance:2500, transactions:[]},
    1003:{name:"user3", acno:1003, pin:3456, password:'userthree', balance:3500, transactions:[]},
    1004:{name:"user4", acno:1004, pin:4567, password:'userfour', balance:4000, transactions:[]},
    1005:{name:"user5", acno:1005, pin:5678, password:'userfive', balance:5000, transactions:[]},
  }
let currentUser;
  const register = (name,acno,pin,password)=>{
    if (acno in accountDetails){
     return {
         status:false,
         message:"Account already exists. Pleas login"

     } 
     
    }
    accountDetails[acno]={
      name,
      acno,
      pin,
      password,
      balance:0,
      transactions:[]
    }
    // this.saveDetails();
    return {
        status:true,
        message:'account created successfully '
    }
  }
  const login= (acno1, password)=>{
    var acno=parseInt(acno1);
    var data=accountDetails;
    if (acno in data){
      var pwd = data[acno].password
      if (pwd==password){
        currentUser = data[acno];
        // this.saveDetails();
        return {
            status:true,
            message:'logged in'
        }
      }
    }
    return {
        status:false,
        message:"invalid credentials"
    }
  }



  module.exports={
      register,
      login
  }