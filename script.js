// 获取canvas元素和上下文对象
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// 图片数组和当前显示的图片下标
const images = [];
let currentImageIndex = 0;

// 加载所有图片
for (let i = 1; i <= 219; i++) {
  const img = new Image();
  img.src = "png/a (" + i + ").png";
  images.push(img);
}

// 绘制当前图片到canvas上
function draw() {
  // 将canvas尺寸调整为全屏
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 将当前图片按比例扩大到全屏
  ctx.drawImage(images[currentImageIndex], 0, 0, canvas.width, canvas.width * (images[currentImageIndex].height / images[currentImageIndex].width));
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
        changeImage(currentImageIndex - 1);
      }
      break;
    case 39: // 右箭头键
      if (currentImageIndex < images.length - 1) {
        changeImage(currentImageIndex + 1);
      }
      break;
  }
});

// 加载第一张图片并添加动画效果
images[0].onload = () => {
  // 将canvas尺寸调整为全屏
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  setInterval(() => {
    if (currentImageIndex < images.length - 1) {
      currentImageIndex++;
    } else {
      currentImageIndex = 0;
    }
    draw();
  }, 50);
};
