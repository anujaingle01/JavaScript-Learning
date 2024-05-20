## Project - 5 ( Keyboard Magic )

```html 
****************** HTML Code ******************

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Event KeyCodes</title>
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <link rel="stylesheet" href="style.css"/>
  </head>

  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    
    <div class="project">
      <div id="insert">
        <div class="key">Press the key and watch magic</div>
      </div>
    </div>

    <script src="./chaiaurcode.js"></script>
  </body>
</html>

```

``` css
****************** CSS Code ******************

      table,
      th,
      td {
        border: 1px solid #e7e7e7;
      }
      
      .project {
        background-color: #1c1c1c;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100vh;
      }

      .color {
        color: rgb(219, 230, 70);
        display: flex;
        flex-direction: row;
      }

      .key {
        color: rgb(70, 193, 230);
      }

```

```javascript
****************** JS Code ******************

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
  
});

```