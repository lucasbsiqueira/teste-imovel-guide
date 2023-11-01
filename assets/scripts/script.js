

// Menu "hamburguer"
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));


// Função para exibir/ocultar telefone do corretor.
function toggleEstado(divid) {
    var div = document.getElementById(divid);
    var disp = div.style.display;
    div.style.display = disp == 'none' ? 'block' : 'none';
}


// Função para criar mascara de CPF e telefone no formulário.
function formatar(mascara, documento) {
    let i = documento.value.length;
    let saida = '#';
    let texto = mascara.substring(i);
    while (texto.substring(0, 1) != saida && texto.length) {
        documento.value += texto.substring(0, 1);
        i++;
        texto = mascara.substring(i);
    }
}


// Função da regra de 3 exibindo resultado em tempo real.
function calc() {

    var a = document.querySelector(".a").value;
    var b = document.querySelector(".b").value;
    var c = document.querySelector(".c").value;
    var x = document.querySelector(".x");

    var resultado = (parseInt(c) * parseInt(b) / parseInt(a));

    document.querySelector(".x").value = parseInt(resultado);
}


// Exibir e fechar modal.
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
})


// Donwload da imagem.
let btnGenerate = document.querySelector('.generate-img');
let btnDownload = document.querySelector('.downloadImg');

btnGenerate.addEventListener('click', () => {
    html2canvas(document.querySelector(".casa-download")).then(canvas => {
        btnDownload.href = canvas.toDataURL('image/png');
        btnDownload.download = 'minha-imagem';
        btnDownload.click();
    })
});