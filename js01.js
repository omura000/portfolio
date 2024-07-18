document.addEventListener("DOMContentLoaded", () => {
    const fast = document.querySelector(".fast");

    // ページがロードされたときにfastを表示
    fast.style.display = "block";

    // 3秒後にfastをゆっくりフェードアウト
    setTimeout(() => {
        fast.classList.add("hidden");

        // フェードアウトが完了した後、要素を完全に非表示にする
        setTimeout(() => {
            fast.style.display = "none";
        }, 2000); // 2秒後に完全に非表示
    }, 3000); // 3秒後にフェードアウト開始
});