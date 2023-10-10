window.addEventListener("load", () => {
  // This is a check to see if there's a username stored
  let username = localStorage.getItem("username");
  if (!username) {
    // Prompt for one if a username isn't found
    username = window.prompt("What is your name?");
    localStorage.setItem("username", username);
  }

  const containerEl = document.querySelector("#newsfeed");

  // This makes things appear
  for (let index = bacefook.newsfeed.length - 1; index >= 0; index--) {
    const post = bacefook.newsfeed[index];

    const friendEl = document.createElement("div");
    friendEl.className = "friend";
    friendEl.innerText = post.friend;

    const postEl = document.createElement("div");
    postEl.innerText = post.text;
    postEl.append(friendEl);

    // 追加(start)
    // タイムスタンプを追加
    const timestampEl = document.createElement("div");
    let createTime = "posted " + moment(bacefook.newsfeed[index]["timestamp"]).startOf("h:mm:ss").fromNow(); // "posted 5 hours ago"
    timestampEl.innerHTML = createTime;
    postEl.append(timestampEl);
 
    // 気持ちを追加
    const feelingEl = document.createElement("div");
    feelingEl.innerHTML = bacefook.newsfeed[index]["feeling"];
    postEl.append(feelingEl);

    // 画像を追加
    const imageEl = document.createElement("img");
    imageEl.src = bacefook.newsfeed[index]["image"];
    imageEl.width = 50;
    imageEl.height = 50;
    postEl.append(imageEl);

    // 追加(end)
    containerEl.append(postEl);
  }
});


// 追加 (start)
window.onload = function() {

// 投稿作成時に新しい投稿を自動的に表示する
function watchArray(arr, func) {
  Object.defineProperty(arr, 'push', {
      value: function () {
          const oldArray = [...this];
          // push() の動作
          let n = this.length;
          for (let i = 0; i < arguments.length; i++ , n++) {
              this[n] = arguments[i];
          }
          // 追加後に任意の処理を呼ぶ
          func(oldArray, this);
          return n;
      }
  });
}

watchArray(bacefook.newsfeed, function() {
  const containerEl = document.querySelector("#newsfeed");

  let lastIndex = bacefook.newsfeed.length-1;
  const post = bacefook.newsfeed[lastIndex];

  const friendEl = document.createElement("div");
  friendEl.className = "friend";
  friendEl.innerText = post.friend;

  const postEl = document.createElement("div");
  postEl.innerText = post.text;
  postEl.append(friendEl);

  // タイムスタンプを追加
  const timestampEl = document.createElement("div");
  let createTime = "posted " + moment(bacefook.newsfeed[lastIndex]["timestamp"]).startOf("h:mm:ss").fromNow(); // "posted 5 hours ago"
  timestampEl.innerHTML = createTime;
  postEl.append(timestampEl);

  // 気持ちを追加
  const feelingEl = document.createElement("div");
  feelingEl.innerHTML = bacefook.newsfeed[lastIndex]["feeling"];
  postEl.append(feelingEl);

  // 画像を追加
  const imageEl = document.createElement("img");
  imageEl.src = bacefook.newsfeed[lastIndex]["image"];
  imageEl.width = 50;
  imageEl.height = 50;
  postEl.append(imageEl);
  
  containerEl.prepend(postEl);

});
}
// 追加 (end)





