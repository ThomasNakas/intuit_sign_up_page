var email= $(".email");
var phone= $(".phone");
var pass= $(".password");
var cPass= $(".confirm");
var submit= $("#create_an_account");
var caution=$("#caution")
//---------creating the caution element------------//
var newLi= $(`<li></li>`)



//------------event listeners and their functions------------------//

    //---------------email eventListener and its function-------------//
        email.on('input', includesAt);
        function includesAt(e){
        var val=e.target.value;
        if(atOnString(val)&&val.includes(".com")){
            email.css("border","1px solid green");
        }else{
            email.css("border","1px solid red");
        }
        }

    //------------------------- phone listener and its function ---------//
        phone.on("input", onlyNum );

        function onlyNum(e){
        var val=e.target.value;
        var chVal=val.slice(1,3)+val.slice(4,7)+val.slice(8,11)+val.slice(12,);
        if(onlyNumbers(chVal)&&val[0]=="+"&&chVal.length==12){
            phone.css("border","1px solid green");
        }else{
            phone.css("border","1px solid red");
        }
        }
    //---------------------password/confirmation listener and their functions-------------------//
        pass.on("input", strongPass);
        function strongPass(e){
        var val=e.target.value;
        checked(checkLenght,val,1);
        checked(IncUpOrLow,val,2);
        checked(someNumbers,val,3);
        checked(speshialChar,val,4);
        if(checkLenght(val)&&IncUpOrLow(val)&&someNumbers(val)&&speshialChar(val)){
            pass.css("border","1px solid green");
        }
        }
        cPass.on("input", conRight);
        function conRight(e){
        var val=e.target.value;
        if(sameStr(val,pass.val())){
            cPass.css("border","1px solid green"); 
        }
        }
    //-------------------- submit listener and its function------------------------------------//
    submit.click(check);
    function check(e){
        // let val=e.target.value;
        let p=1;
        let cB="";
        let checkingS="";
        for(let i=1; i<=4; i++){
            if(4*i!=8){
            cB=$(`fieldset input:nth-child(${4*i})`).css("border");
            checkingS="1px solid rgb(0, 128, 0)";
            console.log(cB==checkingS);
            if(cB==checkingS){p*=1}else{ p=0;}}
            else{continue;}  
        }
        if(p==1){
           caution.empty();
           caution.append($(`<li class="checked">Successed Submition!</li>`));
           $("fieldset input:nth-child(4n)").empty();
        }else{
            caution.empty();
            caution.append($(`<li class="required_list">Some of the required elements are not filled correctly! Please, try again!</li>`));
        }
    }

//--------------------------------------JS conditional functions------------------------------//
// function for changing color

// const changingColor=(obj,color)=>{
//    return obj.css("color", color);
// };

// function length

function checkLenght(str1){
        return str1.length>=10;
};

// function includes the speshial !@#$$%%^&*(()_++-0-=~><>?<>?)
function speshialChar(str){
let spStr="!@#$%^&*()_++-0-=~><?";
   return str.split("").some((x)=>spStr.split("").includes(x)); 
};
// function atOnString

function atOnString(str){
    return str.includes("@");

}
// function includes UpperCases

function IncUpOrLow(str){
 
return !(str==str.toLowerCase()||(str==str.toUpperCase()));

};

// function same string
 function sameStr(str1,str2){
        return str1==str2;
 };
// function numberOnly

function onlyNumbers(str){
    let numStr="01234456789";
    return str.split("").every((x)=>numStr.includes(x));
}

function someNumbers(str){
    return str.split("").some((x)=>"0123456789".includes(x));
}
// checked function 

function checked(f,val,n){
    let li=$(`ul li:nth-child(${n})`);
    if(f(val)){
        li.attr("class","checked");
    }else{
        li.attr("class","required_list");
    }
  }



//===========================Notes=========================//



// I making my variables
//the speshial functions that I will need 
// Event Listeners
// Event Listeners that are checking 
//in real time what is the input and are checking 
//if has the requirements or not

//$(".email").css("border","1px solid green");
// $(" ul li:nth-child(1)").css("list-style-type","'' ");



