const input = document.getElementById('textInput');
        const out = document.getElementById('out');

        input.addEventListener('input', (e) => {
            out.textContent = e.target.value;
        });