const switchModeButton = document.getElementById('switch');
        const body = document.body;

        switchModeButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
        });