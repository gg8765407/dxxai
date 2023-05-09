// 获取 canvas 元素和上下文对象
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// 图片数组和当前显示的图片下标
const images = [];
let currentImageIndex = 0;

// 加载所有图片
for (let i = 1; i <= 2; i++) {
    const img = new Image();
    img.src = `png/${i}.jpg`;
    images.push(img);
}

// 绘制当前图片到 canvas 上
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (canvas.width >= canvas.height) {
        ctx.drawImage(images[currentImageIndex], 0, 0, canvas.width / 2, canvas.height);
        ctx.drawImage(images[currentImageIndex + 1], canvas.width / 2, 0, canvas.width / 2, canvas.height);
    } else {
        ctx.drawImage(images[currentImageIndex], 0, 0, canvas.width, canvas.height / 2);
        ctx.drawImage(images[currentImageIndex + 1], 0, canvas.height / 2, canvas.width, canvas.height / 2);
    }
}

// 切换图片的函数
function changeImage(index) {
    currentImageIndex = index;
    draw();
}

// 添加键盘事件监听，左箭头键切换到上一张图片，右箭头键切换到下一张图片
document.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
        case 37: // 左箭头键
            if (currentImageIndex > 0) {
                changeImage(currentImageIndex - 2);
            }
            break;
        case 39: // 右箭头键
            if (currentImageIndex < images.length - 2) {
                changeImage(currentImageIndex + 2);
            }
            break;
    }
});

// 加载第一张图片并添加动画效果
images[0].onload = () => {
    if (canvas.width >= canvas.height) {
        canvas.width = images[0].width * 2;
        canvas.height = images[0].height;
    } else {
        canvas.width = images[0].width;
        canvas.height = images[0].height * 2;
    }
    setInterval(() => {
        if (currentImageIndex < images.length - 2) {
            currentImageIndex += 2;
        } else {
            currentImageIndex = 0;
        }
        draw();
    }, 50);
};
