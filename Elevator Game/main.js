
document.getElementById('elevatorNum').addEventListener("click",changeNum)

let selection= Number(document.getElementById('elevatorNum').value)

function changeNum(){
    console.log("jdfnkjdf")
    let selection= Number(document.getElementById('elevatorNum').value)
if(selection==2){
    document.getElementById('elev3').style.visibility="hidden";
    document.getElementById('elev4').style.visibility="hidden";
    document.getElementById('ind3').style.visibility="hidden";
    document.getElementById('ind4').style.visibility="hidden";

}else if(selection==3){
    document.getElementById('elev3').style.visibility="visible";
    document.getElementById('elev4').style.visibility="hidden";
    document.getElementById('ind3').style.visibility="visible";
    document.getElementById('ind4').style.visibility="hidden";
}else if(selection==4){
    document.getElementById('elev3').style.visibility="visble";
    document.getElementById('elev4').style.visibility="visible";
    document.getElementById('ind3').style.visibility="visible";
    document.getElementById('ind4').style.visibility="visible";
}
}