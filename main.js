// 當前輪播圖的編號，從零開始
var index = 0;
// 下一張按鈕
var nextBth = document.querySelector("#slider-next");

var items = document.getElementsByClassName("slider-item");

console.log(item.length);

// 下一張按鈕的功能
function next() {
    index++;
    // 如果編號是 項目數量 就將編號改為 零
    if (index == items.length) {
    index = 0;
    }
}
// 下一張按鈕.點擊 = 下一張按鈕的功能
nextBth.onclick = next;