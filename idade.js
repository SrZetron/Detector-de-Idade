function idade() {
    let idadeDoUsuario = document.getElementById("Deku").value;
    idadeDoUsuario = parseInt(idadeDoUsuario);
    if (idadeDoUsuario < 12) {
        console.log("Voce é uma criança");
        alert("Voce é uma criança");
    } else if (idadeDoUsuario < 18) {
        console.log("Voce é um adolescente");
        alert("Você é um adolesecente");
    } else if (idadeDoUsuario < 60) {
        console.log("Você é um adulto");
        alert("Você é um adulto");
    } else {
        console.log("Você é um idoso")
        alert("Você é um idoso")
    }
}
