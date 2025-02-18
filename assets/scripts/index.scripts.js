
function teste() {
    const nome = document.getElementById("nome").value;
    alert(nome);
}

const public_key = "sm8eb5oIjisGe_-YD"
const secret_key = "9jjmSVRvdVgjHbobaaiR6"

(function () {
    emailjs.init(public_key);
})();

/*document 
    .getElementById("contatoForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();
     

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        alert(nome);

        if (!nome || !email || !mensagem) {
            alert("Preencha todos os campos!");
            return;
        }

        const params = {
            nome: nome,
            email: email,
            mensagem: mensagem,
        };

        const service_id = "service_m31a6r7";
        const template_id = "template_nri1g0n";

        emailjs.send(service_id, template_id, params)
            .then((res) => {
                document.getElementById("nome").value = "";
                document.getElementById("email").value = "";
                document.getElementById("mensagem").value = "";
                console.log(res);
                alert("Sua mensagem foi enviada com sucesso!");
         })
        .catch((err) => console.log(err));
    });*/

    function enviarEmail() {
        (function () {
            emailjs.init(public_key);
        })();
        
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        alert(nome);

        if (!nome || !email || !mensagem) {
            alert("Preencha todos os campos!");
            return;
        }

        const params = {
            nome: nome,
            email: email,
            mensagem: mensagem,
        };

        const service_id = "service_m31a6r7";
        const template_id = "template_nri1g0n";

        emailjs.send(service_id, template_id, params)
            .then((res) => {
                document.getElementById("nome").value = "";
                document.getElementById("email").value = "";
                document.getElementById("mensagem").value = "";
                console.log(res);
                alert("Sua mensagem foi enviada com sucesso!");
         })
        .catch((err) => console.log(err));
    }