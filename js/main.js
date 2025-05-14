// 主要 JavaScript 檔案 

document.addEventListener('DOMContentLoaded', function () {
    // 導航選單切換 (漢堡選單)
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('is-active');
            // 切換 aria-expanded 狀態
            const isExpanded = navMenu.classList.contains('is-active');
            navToggle.setAttribute('aria-expanded', isExpanded);

            // 可選：切換漢堡圖示的樣式 (例如變為 X)
            // navToggle.classList.toggle('is-active'); 
        });
    }

    // 動態更新頁尾年份
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 平滑滾動到錨點 (可選)
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);
    //         if(targetElement) {
    //             targetElement.scrollIntoView({
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });

    // 其他全域 JavaScript 功能可在此處添加
    console.log('NeuroEthicsEduKit main.js loaded.');
}); 