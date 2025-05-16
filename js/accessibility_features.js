/**
 * accessibility_features.js
 * 提供增強網站可訪問性的功能，以符合 WCAG 2.1 AA 標準。
 */

const AccessibilityFeatures = {
    fontSizeStep: 2, // 字體大小調整的步長 (px)
    currentFontSize: 16, // 假設基礎字體大小為 16px
    maxFontSize: 24,
    minFontSize: 12,
    highContrastEnabled: false,

    /**
     * 初始化無障礙功能。
     * 例如，綁定控制按鈕的事件監聽器。
     */
    init() {
        // 嘗試從 localStorage 恢復用戶偏好
        this.loadPreferences();

        const increaseFontButton = document.getElementById('increase-font-size');
        const decreaseFontButton = document.getElementById('decrease-font-size');
        const toggleContrastButton = document.getElementById('toggle-high-contrast');
        const resetAccessibilityButton = document.getElementById('reset-accessibility');

        if (increaseFontButton) {
            increaseFontButton.addEventListener('click', () => this.changeFontSize(true));
        }
        if (decreaseFontButton) {
            decreaseFontButton.addEventListener('click', () => this.changeFontSize(false));
        }
        if (toggleContrastButton) {
            toggleContrastButton.addEventListener('click', () => this.toggleHighContrast());
        }
        if (resetAccessibilityButton) {
            resetAccessibilityButton.addEventListener('click', () => this.resetToDefaults());
        }

        // 應用已保存的偏好
        this.applyFontSize();
        this.applyContrast();

        console.log('無障礙功能已初始化。');
    },

    /**
     * 更改根元素的字體大小。
     * @param {boolean} increase - true 表示增大字體，false 表示減小字體。
     */
    changeFontSize(increase) {
        if (increase) {
            this.currentFontSize = Math.min(this.maxFontSize, this.currentFontSize + this.fontSizeStep);
        } else {
            this.currentFontSize = Math.max(this.minFontSize, this.currentFontSize - this.fontSizeStep);
        }
        this.applyFontSize();
        this.savePreferences();
    },

    /**
     * 應用當前字體大小到文檔根元素。
     */
    applyFontSize() {
        document.documentElement.style.fontSize = `${this.currentFontSize}px`;
        console.log(`字體大小已設置為: ${this.currentFontSize}px`);
    },

    /**
     * 切換高對比度模式。
     */
    toggleHighContrast() {
        this.highContrastEnabled = !this.highContrastEnabled;
        this.applyContrast();
        this.savePreferences();
    },

    /**
     * 應用高對比度模式到 body 元素。
     */
    applyContrast() {
        if (this.highContrastEnabled) {
            document.body.classList.add('high-contrast');
            console.log('高對比度模式已啟用。');
        } else {
            document.body.classList.remove('high-contrast');
            console.log('高對比度模式已禁用。');
        }
    },

    /**
     * 將無障礙設置重置為默認值。
     */
    resetToDefaults() {
        this.currentFontSize = 16; // 假設的默認字體大小
        this.highContrastEnabled = false;
        this.applyFontSize();
        this.applyContrast();
        this.savePreferences();
        console.log('無障礙設置已重置為默認值。');
    },

    /**
     * 保存用戶的無障礙偏好到 localStorage。
     */
    savePreferences() {
        try {
            localStorage.setItem('accessibilityPreferences', JSON.stringify({
                fontSize: this.currentFontSize,
                highContrast: this.highContrastEnabled
            }));
        } catch (e) {
            console.warn('無法保存無障礙偏好到 localStorage:', e);
        }
    },

    /**
     * 從 localStorage 加載用戶的無障礙偏好。
     */
    loadPreferences() {
        try {
            const prefs = localStorage.getItem('accessibilityPreferences');
            if (prefs) {
                const parsedPrefs = JSON.parse(prefs);
                this.currentFontSize = parsedPrefs.fontSize || this.currentFontSize;
                this.highContrastEnabled = parsedPrefs.highContrast || false;
                console.log('已加載無障礙偏好:', parsedPrefs);
            }
        } catch (e) {
            console.warn('無法從 localStorage 加載無障礙偏好:', e);
        }
    }

    // 未來可以添加更多無障礙功能：
    // - ARIA 屬性管理
    // - 鍵盤導航增強 (例如 skip links)
    // - 文字轉語音 (TTS) 的基本控制接口
    // - 動畫效果控制 (減少/停止動畫)
};

// 當 DOM 完全加載後初始化無障礙功能
document.addEventListener('DOMContentLoaded', () => {
    AccessibilityFeatures.init();
});

// 使 AccessibilityFeatures 可在其他腳本中使用
window.AccessibilityFeatures = AccessibilityFeatures; 