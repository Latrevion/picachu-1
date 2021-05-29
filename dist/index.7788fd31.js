(function () {
  const $ebbfc3ad06cac250adbefc121a0c2672$export$default = `.skin * {
    box-sizing: border-box;
margin: 0;
padding: 0;
}
.skin *::after {
    box-sizing: border-box;
}
.skin *::before {
    box-sizing: border-box;
}


.skin {
    position: relative;
    background: #ffe600;
    min-height: 50vh;
}
.nose {
    border: 10px solid black;
    border-color: black transparent blue transparent;
    border-bottom: none;
    height: 0px;
    width: 0px;
    position: absolute;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
}
@keyframes wave {
    0% {
        transform: rotate(0deg);
}
    33% {
        transform: rotate(5deg);
}
    66% {
        transform: rotate(5deg);
}
    100% {
        transform: rotate(0deg);
}
}
.nose:hover {
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
}
.yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    /* border: 1px solid green; */
    top: -16px;
    left: -10px;
    border-radius: 14px 14px 0 0;
    background-color: black;
}

.eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background-color: #2e2e2e;
    border-radius: 50%;
}

.eye::before {
    content: "";
    display: block;
    border: 3px solid #000;
    height: 30px;
    width: 30px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    left: 4px;
    top: 2px;
}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

.mouth {
    /* border: 1px solid red; */
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}

.mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
}

.mouth .up .lip {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    background-color: #ffe600;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
}

.mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
}

.mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(53px);
}

.mouth .up .lip::before {
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
}

.mouth .up .lip.left::before {
    right: -6px;
}

.mouth .up .lip.right::before {
    left: -6px;
}

.mouth .down {
    /* border: 1px solid red; */
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
}

.mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background-color: #9b000a;
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2 {
    /* border: 1px solid green; */
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    background-color: #ff485f;
    border-radius: 100px;
}

.face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin: -44px;
    z-index: 3;
}
.face > img {
    /* border: 1px solid red; */
    position: absolute;
    top: 50%;
    left: 50%;
}

.face.left {
    transform: translateX(-200px);
    background: #ff0000;
    border-radius: 50%;
}

.face.left > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
}

.face.right {
    transform: translateX(200px);
    background: #ff0000;
    border-radius: 50%;
}
`;
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$player = {
    id: undefined,
    time: 100,
    ui: {
      demo: document.querySelector('#demo'),
      demo2: document.querySelector('#demo2')
    },
    n: 1,
    init: () => {
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.ui.demo.innerText = $ebbfc3ad06cac250adbefc121a0c2672$export$default.substring(0, $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.n);
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.ui.demo2.innerHTML = $ebbfc3ad06cac250adbefc121a0c2672$export$default.substring(0, $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.n);
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.bindEvents();
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.play();
    },
    events: {
      '#btnPause': 'pause',
      '#btnPlay': 'play',
      '#btnSlow': 'slow',
      '#btnNormal': 'normal',
      '#btnFast': 'fast'
    },
    bindEvents: () => {
      for (let key in $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.events) {
        if ($16b5ad875ae907e2f7f79e7b8fe116cc$var$player.events.hasOwnProperty(key)) {
          const value = $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.events[key];
          document.querySelector(key).onclick = $16b5ad875ae907e2f7f79e7b8fe116cc$var$player[value];
        }
      }
    },
    run: () => {
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.n += 1;
      if ($16b5ad875ae907e2f7f79e7b8fe116cc$var$player.n > $ebbfc3ad06cac250adbefc121a0c2672$export$default.length) {
        window.clearInterval($16b5ad875ae907e2f7f79e7b8fe116cc$var$player.id);
        return;
      }
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.ui.demo.innerText = $ebbfc3ad06cac250adbefc121a0c2672$export$default.substring(0, $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.n);
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.ui.demo2.innerHTML = $ebbfc3ad06cac250adbefc121a0c2672$export$default.substring(0, $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.n);
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.ui.demo.scrollTop = $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.ui.demo.scrollHeight;
    },
    play: () => {
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.id = setInterval($16b5ad875ae907e2f7f79e7b8fe116cc$var$player.run, $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.time);
    },
    pause: () => {
      window.clearInterval($16b5ad875ae907e2f7f79e7b8fe116cc$var$player.id);
    },
    slow: () => {
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.time = 300;
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.pause();
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.play();
    },
    normal: () => {
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.time = 100;
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.pause();
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.play();
    },
    fast: () => {
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.time = 0;
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.pause();
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.play();
    }
  };
  $16b5ad875ae907e2f7f79e7b8fe116cc$var$player.init();
})();

//# sourceMappingURL=index.7788fd31.js.map
