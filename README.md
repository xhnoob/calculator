# Calculator

这是一个简单的计算器应用程序，您可以通过以下链接访问它：

[Calculator 应用](https://xhnoob.github.io/calculator/)

## 应用截图

![Calculator](screenshot.png)

## 使用说明

1. 打开应用程序链接。
2. 使用界面上的按钮进行计算。
3. 在显示屏上查看结果。

## 功能

- 基本的加减乘除运算
- 清除功能
- 随机数生成器
- Unix 时间戳显示

## 示例代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="taiji-container">
        <div class="taiji" id="taiji"></div>
        <input type="range" id="speedSlider" min="1" max="10" value="5">
    </div>
    <div class="calculator">
        <div class="display" id="display">0</div>
        <div class="buttons">
            <button class="btn" data-value="7">7</button>
            <button class="btn" data-value="8">8</button>
            <button class="btn" data-value="9">9</button>
            <button class="btn" data-value="/" class="operator">÷</button>
            <button class="btn" data-value="4">4</button>
            <button class="btn" data-value="5">5</button>
            <button class="btn" data-value="6">6</button>
            <button class="btn" data-value="*" class="operator">×</button>
            <button class="btn" data-value="1">1</button>
            <button class="btn" data-value="2">2</button>
            <button class="btn" data-value="3">3</button>
            <button class="btn" data-value="-" class="operator">−</button>
            <button class="btn" data-value="0">0</button>
            <button class="btn" data-value="." class="operator">.</button>
            <button class="btn" data-clear="all">C</button>
            <button class="btn" data-value="+" class="operator">+</button>
            <button class="btn" data-clear="last">CE</button>
            <button class="btn" data-value="=" class="equal">=</button>
        </div>
    </div>
    <div class="random-number-container">
        <div class="random-display">
            <span class="number-group first">000</span>
            <span class="number-group second">0</span>
            <span class="number-group third">00</span>
        </div>
        <button class="pause-btn" id="pauseBtn">暂停</button>
    </div>
    <div class="timestamp-container">
        <div class="timestamp-display">
            <span class="timestamp-label">Unix时间戳：</span>
            <span class="timestamp-value">--</span>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
