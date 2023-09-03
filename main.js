var logBtn = document.querySelector(".log");
var input = document.querySelectorAll("input");

logBtn.addEventListener("click",loginInsta);

    function loginInsta(e){
        e.preventDefault();
        console.log(input);
        function getValue (){
            var strObj = JSON.parse(sessionStorage.getItem("user"));
            mobileItem = [strObj.MobileNo,strObj.PassWord];
        }
        getValue();
        if(mobileItem[0]==input[0].value && mobileItem[1]==input[1].value){
            location.href="insta.html";
            logBtn.style.pointerEvents = "all";
        }
        
    }

for(let i=0; i<input.length; i++){
    input[i].addEventListener("blur",doneForm);

    function doneForm(){
            if(input[0].value!="" && input[1].value!=""){
                logBtn.style.pointerEvents = "all";
            }
            else{
                logBtn.style.pointerEvents = "none";
            }
        }
}
