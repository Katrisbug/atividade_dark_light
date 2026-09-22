
    function toggleMode() {

        // Ativa ou desativa a classe "dark" no HTML
        document.documentElement.classList.toggle("dark");

        // Verifica se o Dark Mode está ativo
        const darkMode =
            document.documentElement.classList.contains("dark");

        // Salva a preferência do usuário
        localStorage.setItem("darkMode", darkMode);

        // Pega o botão
        const button = document.getElementById("modeButton");

        // Altera o texto do botão
        if (darkMode) {
            button.textContent = "Light mode";
        } else {
            button.textContent = "Dark mode";
        }
    }


    // ==========================================
    // CARREGAR MODO SALVO
    // ==========================================

    document.addEventListener("DOMContentLoaded", function () {

        const button = document.getElementById("modeButton");

        // Verifica se o usuário já tinha ativado o Dark Mode
        const darkMode = localStorage.getItem("darkMode");

        if (darkMode === "true") {

            // Ativa o Dark Mode
            document.documentElement.classList.add("dark");

            // Muda o texto do botão
            if (button) {
                button.textContent = "Light mode";
            }

        } else {

            // Garante que começa no modo claro
            document.documentElement.classList.remove("dark");

            // Texto normal do botão
            if (button) {
                button.textContent = "Dark mode";
            }
        }

    });
