       const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

const characters = ['H','A','C','K','E','R'];

const matrixRain = {
  columns: null,
  drops: [],
  dropSpeed: 25,
  textColor: '#0F0',
  bgColor: 'rgba(0, 0, 0, 0.05)',
  fontSize: 15,
  initialize: function() {

    this.columns = Math.floor(canvas.width / this.fontSize);

    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = 1;
    }
  },
  draw: function() {

    ctx.fillStyle = this.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = this.textColor;
    ctx.font = this.fontSize + 'px monospace';

    for (let i = 0; i < this.columns; i++) {
      let x = i * this.fontSize;
      let y = this.drops[i] * this.fontSize;

      let char = characters[Math.floor(Math.random() * characters.length)];
      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
  }
};

function animate() {
  requestAnimationFrame(animate);
  matrixRain.draw();
}

matrixRain.initialize();
animate();


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
                        window.location.href = "https://link.maxwinslot.eu.org";
                    }
                }

                updateLoading();
            }

            simulateProgress();
        });
