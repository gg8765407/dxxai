<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Canvas Demo</title>
  <style>
    canvas {
      border: 1px solid black;
      margin-right: 10px;
    }
  </style>
</head>
<body>
  <canvas id="myCanvas1"></canvas>
  <canvas id="myCanvas2"></canvas>

  <script>
    // 获取canvas元素和上下文对象
    const canvas1 = document.getElementById("myCanvas1");
    const ctx1 = canvas1.getContext("2d");

    const canvas2 = document.getElementById("myCanvas2");
    const ctx2 = canvas2.getContext("2d");

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
    function draw1() {
        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
        ctx1.drawImage(images[currentImageIndex], 0, 0, canvas1.width, canvas1.height);
    }

    function draw2() {
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        ctx2.drawImage(images[currentImageIndex], 0, 0, canvas2.width, canvas2.height);
    }

    // 切换图片的函数
    function changeImage(index) {
        currentImageIndex = index;
        draw1();
        draw2();
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
        canvas1.width = images[0].width;
        canvas1.height = images[0].height;
        canvas2.width = images[0].width;
        canvas2.height = images[0].height;
        setInterval(() => {
            if (currentImageIndex < images.length - 1) {
                currentImageIndex++;
            } else {
                currentImageIndex = 0;
            }
            draw1();
            draw2();
        }, 50);
    };
  </script>
</body>
</html>
