/**
 * navigation.js
 * 處理網站的導航邏輯，例如高亮當前頁面連結、動態生成導航項目等。
 */

const SiteNavigation = {
    /**
     * 初始化導航功能。
     * 目前主要實現高亮當前活動頁面的導航連結。
     */
    init() {
        this.highlightActiveLink();
        // 可以根據需要在此處添加其他導航初始化邏輯
    },

    /**
     * 高亮顯示導航欄中與當前頁面匹配的連結。
     * 它會比較當前 URL 的路徑與導航連結的 href 屬性。
     */
    highlightActiveLink() {
        const currentPath = window.location.pathname.split('/').pop(); // 獲取文件名，例如 "learning_hub.html"
        const navLinks = document.querySelectorAll('nav ul li a');

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href').split('/').pop();
            // 如果是首頁，特殊處理
            if (currentPath === '' || currentPath === 'index.html') {
                if (linkPath === '' || linkPath === 'index.html' || link.getAttribute('href') === './' || link.getAttribute('href') === 'index.html') {
                    link.classList.add('active');
                }
            } else if (linkPath === currentPath) {
                link.classList.add('active');
            }
        });
    },

    /**
     * 平滑滾動到頁面上的指定錨點。
     * @param {string} anchorId - 目標錨點的 ID (不帶 #)。
     */
    scrollToAnchor(anchorId) {
        const element = document.getElementById(anchorId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // 未來可以添加更多導航相關功能：
    // - 根據用戶角色動態生成導航菜單
    // - 處理子菜單的顯示與隱藏
    // - 麵包屑導覽生成
};

// 當 DOM 完全加載後初始化導航
document.addEventListener('DOMContentLoaded', () => {
    SiteNavigation.init();

    // 為頁內錨點連結添加平滑滾動 (如果有的話)
    // 示例：<a href="#section1" class="smooth-scroll">Go to Section 1</a>
    const smoothScrollLinks = document.querySelectorAll('a.smooth-scroll');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                event.preventDefault();
                SiteNavigation.scrollToAnchor(href.substring(1));
            }
        });
    });
});

// 使 SiteNavigation 可在其他腳本中使用 (如果需要)
window.SiteNavigation = SiteNavigation; 