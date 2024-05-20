## Project - 6 ( Background Color Changer )

```html 
****************** HTML Code ******************

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
  </head>

  <body class="bg-color">
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>

    <h1 class="content">Start should change the Background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>

    <script src="chaiaurcode.js"></script>
  </body>
</html>

```

``` css
****************** CSS Code ******************

.bg-color{
  background-color: #212121; 
  color: #fff;
}

.content{
  text-align: justify;
}

#start{
  margin-left: 20px;
  color: rgb(63, 42, 14);
  background-color: #05e04e; 
}

#stop{
  margin-left: 5px;
  color: rgb(236, 230, 221);
  background-color: #df1f1f; 
}

```

```javascript
****************** JS Code ******************

//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```