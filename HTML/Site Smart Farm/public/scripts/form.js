document.querySelector("#submit").addEventListener('click', submit)
function submit() {
    if (document.querySelector("#contrate").pacote[0].checked == false && document.querySelector("#contrate").pacote[1].checked == false) {
        alert("Selecione um pacote");
        return false;
    }
    alert("Dados enviados com sucesso! Em breve entraremos em contato!");
}