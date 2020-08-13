var campoembranco = false;
var c = 0;
function enviar(){
 if (document.getElementById("Nome").value == ""){
  document.getElementById("Nome").style.backgroundColor = "red";
  campoembranco = true;
  c = c + 1;
 }
 if (document.getElementById("Email").value == ""){
  document.getElementById("Email").style.backgroundColor = "red";
  campoembranco = true;
  c = c + 1;
 }
 if (document.getElementById("Phone").value == ""){
  document.getElementById("Phone").style.backgroundColor = "red";
  campoembranco = true;
  c = c + 1;
 }
 if (document.getElementById("Adress").value == ""){
  document.getElementById("Adress").style.backgroundColor = "red";
  campoembranco = true;
  c = c + 1;
 }
 while(campoembranco){
 if (c > 1){
 alert("Campos Obrigatorios");
 } else { 
 alert("Campo Obrigatorio");
 }
 campoembranco = false;
 c = 0;
 return false;
 }
 if (document.form1.pacote[0].checked == false && document.form1.pacote[1].checked == false){
 alert("Selecione um pacote");
 return false;
 }
 alert("Dados enviados com sucesso! Em breve entraremos em contato!");
}
function tirarvermelho(caixinha){ 
 document.getElementById(caixinha.id).style.backgroundColor = "white";
}