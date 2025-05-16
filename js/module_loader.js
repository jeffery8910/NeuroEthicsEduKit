/**
 * module_loader.js
 * 負責動態加載和呈現教育模組的內容。
 */

const ModuleLoader = {
    /**
     * 初始化模組加載器。
     * @param {string} contentAreaSelector - 用於顯示模組內容的 DOM 元素的 CSS 選擇器。
     */
    init(contentAreaSelector = '#module-content-area') {
        this.contentArea = document.querySelector(contentAreaSelector);
        if (!this.contentArea) {
            console.error(`模組內容區域 '${contentAreaSelector}' 未找到。`);
            return;
        }
        console.log('模組加載器已初始化。');
    },

    /**
     * 加載並顯示指定模組的內容。
     * @param {string} moduleId - 模組的 ID (例如 'module1')。
     * @param {string} moduleSlug - 模組的 slug (例如 'learning_hub')。
     */
    async loadModule(moduleId, moduleSlug) {
        if (!this.contentArea) {
            console.error('內容區域未初始化，無法加載模組。');
            return;
        }

        if (!window.DataLoader) {
            console.error('DataLoader 未定義，無法獲取模組數據。');
            this.contentArea.innerHTML = '<p class="error-message">錯誤：無法加載模組數據 (DataLoader 缺失)。</p>';
            return;
        }

        this.contentArea.innerHTML = '<p class="loading-message">正在加載模組內容...</p>';

        try {
            const moduleData = await DataLoader.loadModuleContent(moduleId, moduleSlug);

            if (moduleData && moduleData.title && moduleData.sections) {
                this.renderModule(moduleData);
            } else {
                console.error(`無法從 ${moduleId}_${moduleSlug} 加載有效的模組數據或數據格式不正確。`, moduleData);
                this.contentArea.innerHTML = `<p class="error-message">抱歉，加載模組 ${moduleId} (${moduleSlug}) 的內容時發生錯誤。請稍後再試。</p>`;
            }
        } catch (error) {
            console.error(`加載模組 ${moduleId}_${moduleSlug} 時發生異常:`, error);
            this.contentArea.innerHTML = `<p class="error-message">加載模組內容時發生嚴重錯誤。</p>`;
        }
    },

    /**
     * 將模組數據渲染到內容區域。
     * @param {Object} moduleData - 從 JSON 文件加載的模組數據。
     *                                應包含 title (string) 和 sections (array of objects)。
     *                                每個 section 應包含 title (string) 和 content (string, HTML allowed)。
     */
    renderModule(moduleData) {
        if (!this.contentArea) return;

        let htmlContent = `<article class="module module-${moduleData.id || 'generic'}">`;
        htmlContent += `<header class="module-header"><h1>${this.escapeHtml(moduleData.title)}</h1></header>`;
        htmlContent += '<div class="module-body">';

        if (moduleData.introduction) {
            htmlContent += `<section class="module-introduction content-card"><p>${moduleData.introduction}</p></section>`; // 允許 HTML
        }

        moduleData.sections.forEach((section, index) => {
            htmlContent += `<section id="section-${index + 1}" class="module-section content-card">`;
            if (section.title) {
                htmlContent += `<h2>${this.escapeHtml(section.title)}</h2>`;
            }
            if (section.content) {
                htmlContent += `<div>${section.content}</div>`; // 允許 HTML 內容
            }
            // 如果 section 有子項目 (subsections or items)，可以在此處遞歸渲染
            if (section.items && Array.isArray(section.items)){
                htmlContent += '<ul>';
                section.items.forEach(item => {
                    htmlContent += `<li>${this.escapeHtml(item)}</li>`;
                });
                htmlContent += '</ul>';
            }
            htmlContent += '</section>';
        });

        htmlContent += '</div>'; // close module-body
        htmlContent += '</article>';

        this.contentArea.innerHTML = htmlContent;
    },

    /**
     * 簡單的 HTML 轉義函數，防止 XSS。
     * @param {string} unsafeString - 可能包含 HTML 特殊字符的字符串。
     * @returns {string} 轉義後的字符串。
     */
    escapeHtml(unsafeString) {
        if (typeof unsafeString !== 'string') return '';
        return unsafeString
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
};

// 使 ModuleLoader 可在其他腳本中使用
// 通常會在特定頁面的腳本中調用 ModuleLoader.init() 和 ModuleLoader.loadModule()
window.ModuleLoader = ModuleLoader;

// 示例：如果頁面需要自動加載特定模組，可以這樣做：
// document.addEventListener('DOMContentLoaded', () => {
//     // 假設我們在 module1_learning_hub.html 頁面
//     // 並且該頁面有一個 <div id="module-content-area"></div>
//     const pageSpecificModuleId = document.body.dataset.moduleId; // e.g., data-module-id="module1"
//     const pageSpecificModuleSlug = document.body.dataset.moduleSlug; // e.g., data-module-slug="learning_hub"

//     if (pageSpecificModuleId && pageSpecificModuleSlug) {
//         ModuleLoader.init(); // 使用默認選擇器 '#module-content-area'
//         ModuleLoader.loadModule(pageSpecificModuleId, pageSpecificModuleSlug);
//     }
// }); 