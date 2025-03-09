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

// 随机数生成器功能
const firstGroup = document.querySelector('.number-group.first');
const secondGroup = document.querySelector('.number-group.second');
const thirdGroup = document.querySelector('.number-group.third');
const pauseBtn = document.getElementById('pauseBtn');
const timestampValue = document.querySelector('.timestamp-value');

let isRunning = true;
let animationFrameId = null;

function generateUniqueRandomDigits(count) {
    const digits = Array.from({length: 10}, (_, i) => i); // 0-9的数组
    const result = [];
    
    // Fisher-Yates 洗牌算法
    for (let i = digits.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [digits[i], digits[j]] = [digits[j], digits[i]];
    }
    
    return digits.slice(0, count).join('');
}

function updateRandomNumbers() {
    if (!isRunning) return;
    
    // 生成6个不重复的数字
    const allDigits = generateUniqueRandomDigits(6);
    
    // 分配给三个组
    firstGroup.textContent = allDigits.slice(0, 3);
    secondGroup.textContent = allDigits[3];
    thirdGroup.textContent = allDigits.slice(4, 6);
    
    // 控制更新速度
    setTimeout(() => {
        animationFrameId = requestAnimationFrame(updateRandomNumbers);
    }, 100); // 添加100ms的延迟使数字变化更容易观察
}

function getUnixTimestamp() {
    return Math.floor(Date.now() / 1000);
}

pauseBtn.addEventListener('click', () => {
    isRunning = !isRunning;
    pauseBtn.textContent = isRunning ? '暂停' : '开始';
    pauseBtn.classList.toggle('active');
    
    if (isRunning) {
        updateRandomNumbers();
    } else {
        cancelAnimationFrame(animationFrameId);
        // 记录Unix时间戳
        timestampValue.textContent = getUnixTimestamp();
    }
});

// 启动随机数生成器
updateRandomNumbers();

// 初始化时间戳显示
timestampValue.textContent = '--';