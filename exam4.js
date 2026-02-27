const lamp = document.getElementById('lamp');
const body = document.body;

        let lamp1 = false;
        lamp.addEventListener('click', () => {
            if (lamp1) {
                lamp.textContent = 'mug'; 
                body.classList.remove('light-on');
                lamp1 = false;
            } else {
                lamp.textContent = 'light'; 
                body.classList.add('light-on');
                lamp1 = true;
            }
        });