
        const canvas = document.getElementById("matrixCanvas");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const matrixChars = "Injectorvbot";
        const charsArray = matrixChars.split("");

        const fontSize = 16;
        const columns = canvas.width / fontSize;

        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 100;
        }

        function drawMatrix() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#3ff420";
            ctx.font = `${fontSize}px roboto`;

            for (let i = 0; i < drops.length; i++) {
                const text =
                    charsArray[Math.floor(Math.random() * charsArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

        function updateMatrix() {
            drawMatrix();
            requestAnimationFrame(updateMatrix);
        }

        updateMatrix();

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            updateMatrix();
        });

        const submitForm = document.getElementById("submitForm");
        const progressBar = document.getElementById("progressBar");
        const progressContainer = document.getElementById("progressContainer");
        const progressText = document.getElementById("progressText");
        const progressInfo = document.getElementById("progressInfo");

        submitForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Simulasi proses pengiriman formulir
            submitForm.style.display = "none";
            progressContainer.style.display = "block";

            let progress = 0;
            const username = document.getElementById("username").value;

            function simulateProgress() {
                if (progress < 100) {
                    progress += 20;
                    progressBar.style.width = `${progress}%`;
                    progressInfo.textContent = `${progress}%`;

                    // Update teks progress secara acak
                    let progressTextContent = "";
                    if (progress < 30) {
                        progressTextContent = "Finding Server...";
                    } else if (progress < 40) {
                        progressTextContent = "Redirecting Server...";
                    } else if (progress < 60) {
                        progressTextContent = "Block Firewall...";
                    } else if (progress < 80) {
                        progressTextContent = "Injecting bot...";
                    } else if (progress < 90) {
                        progressTextContent = "Locking bot...";
                    } else {
                        progressTextContent = "Roboto Success...";
                    }
                    progressText.textContent = progressTextContent;

                    setTimeout(simulateProgress, 100);
                } else {
                    // Jika progres selesai, tampilkan teks selesai dan lakukan loading sebelum redirect
                    progressText.textContent = "Success Injection Username";
                    simulateLoading();
                }
            }

            function simulateLoading() {
                progressText.textContent =
                    "INJECT ROBOTO SUCCESS, WELCOME TO YOUR WEBSITE!...";
                let loadingProgress = 0;

                function updateLoading() {
                    if (loadingProgress < 100) {
                        loadingProgress += 20;
                        progressBar.style.width = `${loadingProgress}%`;
                        progressInfo.textContent = `${loadingProgress}%`;
                        setTimeout(updateLoading, 100);
                    } else {
                        // Setelah loading selesai, redirect ke halaman tujuan
                        window.location.href = "https://heylink.me/monperalink";
                    }
                }

                updateLoading();
            }

            simulateProgress();
        });
