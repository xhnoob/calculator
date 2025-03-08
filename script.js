const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        const clearType = button.getAttribute('data-clear');

        if (clearType) {
            if (clearType === 'all') {
                display.innerText = '0';
            } else if (clearType === 'last') {
                display.innerText = display.innerText.slice(0, -1) || '0';
            }
        } else if (value === '=') {
            try {
                display.innerText = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
            } catch {
                display.innerText = 'Error';
            }
        } else {
            if (display.innerText === '0') {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        }
    });
});