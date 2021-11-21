
function Calculate(){
    var a=parseInt(document.getElementById('bookone').value);
    var b=parseInt(document.getElementById('booktwo').value);
    var c=parseInt(document.getElementById('bookthree').value);
    var d=parseInt(document.getElementById('bookfour').value);
    var e=parseInt(document.getElementById('bookfive').value);
    var f=parseInt(document.getElementById('booksix').value);
    if(a>100 || b>100 || c>100 || d>100 || e>100 || f>100 || a<0 || b<0 || c<0 || d<0 || e<0 || f<0) {
        alert("please enter  values between 0 and 100");
    }
    else
    {
        var obtain=a+b+c+d+e+f;
        if(!obtain) return
        document.getElementById("obtain").innerHTML=obtain;
        var per=obtain/600*100;
        document.getElementById("per").innerHTML=per;
        if(a>32 && b>32 && c>32 && d>32 && e>32 && f>32) {
            document.getElementById("Remarks").innerHTML="<span style='color:#292'>pass</span>";
       }
       else {
       document.getElementById("Remarks").innerHTML="<span style='color:red'>Fail</span>";
       }
       if(per>=90) {
           document.getElementById("grade").textContent="A++";
       }
        
        else if(per>=80) {
        document.getElementById("grade").textContent="A+";
       }
       else if(per>=70) {
       document.getElementById("grade").textContent="A";
       }
       else if(per>=60) {
        document.getElementById("grade").textContent="B";
       }
    
        else if(per>=50) {
        document.getElementById("grade").textContent="C";
       }

        
        else if(per>=33) {
        document.getElementById("grade").textContent="D";
       }
       else  {
        document.getElementById("grade").textContent="F";
       }

    }
    
}