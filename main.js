
let bot = 'create';
let index;
// let btn = document.getElementById('btn');
let resultat = document.getElementById('cate');
function valid(){
// let  validname =false;
// let  validbrande = false;
// let  validprix = false;
// let  validDate = false;
// let  validType = false;

let nom = document.getElementById('nom');
let brande = document.getElementById('brande');
let price = document.getElementById('price');
let date = document.getElementById('date');
let Type = document.getElementById('Type');

output1 = document.getElementById("error-1");
output2 = document.getElementById("error-2");
output3 = document.getElementById("error-3");
output4 = document.getElementById("error-4");
output5 = document.getElementById("error-5");

if (nom.value == ""){
    output1.innerHTML = "*The Name Not valid";
    document.getElementById("nom").style.border = "1px solid #DE0068";
    validname = false;
}

else if(nom.value.length < 30 && nom.value.length > 3){
    output1.innerHTML = "";
    document.getElementById("nom").style.border = "1px solid #59CE8F";
    validname = true;
}

else{
    output1.innerHTML = "*The Name Not valid";
    document.getElementById("nom" ).style.border = "1px solid #DE0068";
    validname = false;
}


if (brande.value == ""){
    output2.innerHTML = "*The Name Not valid";
    document.getElementById("brande").style.border = "1px solid #DE0068";
    validbrande = false;
}

else if(brande.value.length < 30 && brande.value.length > 3){
    output2.innerHTML = "";
    document.getElementById("brande").style.border = "1px solid #59CE8F";
    validbrande =true;
}

else{
    output2.innerHTML = "*The Name Not valid";
    document.getElementById("brande").style.border = "1px solid #DE0068";
    validbrande = false;
}

if (price.value.match(/[0-9]+/g)){
    output3.innerHTML = "";
    document.getElementById("price").style.border = "1px solid #59CE8F";
    validprix = true;
}

else{
    output3.innerHTML = "*The Name Not valid";
    document.getElementById("price").style.border = "1px solid #DE0068";
    validprix = false;
}


if (date.value == ""){
    output4.innerHTML = "*The Name Not valid";
    document.getElementById("date").style.border = "1px solid #DE0068";
    validDate = false;
}

else{
    output4.innerHTML = "";
    document.getElementById("date").style.border = "1px solid #59CE8F";
    validDate = true;
}


if (Type.value == "Veuillez selectionner ..."){
    output5.innerHTML = "*The Name Not valid";
    document.getElementById("Type").style.border = "1px solid #DE0068";
    validType = false;
}


else{
    output5.innerHTML = "";
    document.getElementById("Type").style.border = "1px solid #59CE8F";
    validType =true;
}

if (output1.innerHTML == "" && output2.innerHTML == "" && output3.innerHTML == "" &&  output4.innerHTML == ""&& 
output5.innerHTML == "" ) {
       

        addToLocalStorage();
        cleardate();
        model();
        go();

    }
}

let Promo;
let mood = 'create';
let tmp;

let dataPro =[];
if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product);
}else{

    dataPro = [];
}

//--- OBJECT--- //

function addToLocalStorage(){
    let newPro = {
        nom:nom.value,
        brande:brande.value,
        price:price.value,
        date:date.value,
        Type:Type.value,
        Promo:  validi(),

    }
    
    
        if(mood === 'create'){      

        dataPro.push(newPro);// Add an array in the object
        // sortedArray();
        
    }else{

        dataPro[ tmp  ]  =  newPro;   //Modify in index + add data input:
        mood === 'create';
        submit.innerHTML = 'Create';
    
    localStorage.setItem('product', JSON.stringify(dataPro)); //Convert array to string + store data in product + fetch data from 
    PrintData(); //print data

}
}


function cleardate(){
    nom.value = "" ;
    brande.value = "" ;
    price.value = "" ;
    date.value = "" ;
    Type.value = "" ;

    document.getElementById("nom").style.border = "1px solid #ccc";
    document.getElementById("brande").style.border = "1px solid #ccc";
    document.getElementById("price").style.border = "1px solid #ccc";
    document.getElementById("date").style.border = "1px solid #ccc";
    document.getElementById("Type").style.border = "1px solid #ccc";
}


function validi(){
    if( document.getElementById("Yes").checked)
    return "yes"
    else
    return "No";

}






function PrintData(){

    // validi();
    sortedArray();
    document.getElementById('tbody').innerHTML = '';
    let table = '';
    for(let i = 0 ; i < dataPro.length ; i++){
        table += `
        <tr>
            <td>${dataPro[i].nom}</td>
            <td>${dataPro[i].brande}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].date}</td>
            <td>${dataPro[i].Type}</td>
            <td>${dataPro[i].Promo}</td>
            <td><button onclick = "ModifiData( ${i} )" id = "Modify">Modify</button></td>
            <td><button onclick = "DleteData(  ${i}  )" id = "Delete">Delete</button></td>
        </tr>`;
    
}

localStorage.product = JSON.stringify(dataPro);
    document.getElementById('tbody').innerHTML = table;
 
}
// btn.onclick=done;
function model(){
    
    // let btn = document.getElementById('btn');
    document.getElementById('prent_window').innerHTML = '';
    let tablewindow = '';
    for(let i = 0 ; i < dataPro.length ; i++){
            tablewindow  += `
        
        <div id="window" >
        <p class = "p-window" >Are you sure of the information you want to enter?</p>
        <span class="close" onclick= "mo()" >x</span>

        
        

        
        <ul>
            <li>Nom : ${dataPro[i].nom}</li>
            <li>Brand : ${dataPro[i].brande}</li>
            <li>Price : ${dataPro[i].price}</li>
            <li>Date : ${dataPro[i].date}</li>
            <li>Type : ${dataPro[i].Type}</li>
            <li>Is on sale : ${dataPro[i].Promo}</li>
            <li><button  id="btn" onclick = "PrintData()">OK</button></li>
            
            </ul>
            </div>`;
            
    
        }
        // localStorage.product = JSON.stringify(dataPro);
        document.getElementById('prent_window').innerHTML = tablewindow;
        
    }
    // var span = document.getElementsByClassName("close")[0];
      function mo(){
        prent_window.style.display = "none";
    }

    function go(){
        prent_window.style.display = "block";
    }

    





function DleteData(i){
    if (confirm('Are You Sur From Deleted') == true) {
        dataPro.splice(i,1)
    localStorage.product = JSON.stringify(dataPro) //Add a array after deleting it
    PrintData()
    }
    
}
function ModifiData(i){
    nom.value = dataPro[i].nom;
    brande.value = dataPro[i].brande;
    price.value = dataPro[i].price ;
    date.value = dataPro[i].date;
    Type.value = dataPro[i].Type;
    nom.value = dataPro[i].nom;
    submit.innerText = 'Modifi';
    document.getElementById("submit").style.background = "rgb(0,172,238)";
    mood = 'Modifi';
    tmp = i;
}


//sort arr
function sortedArray(){
    dataPro.sort(function (a, b) {
    if (a.nom.toLowerCase() < b.nom.toLowerCase()) {
        return -1;
    }
    if (a.nom.toLowerCase() > b.nom.toLowerCase()) {
        return 1;
    }
    return 0;
    });
    }


    

   
PrintData();

