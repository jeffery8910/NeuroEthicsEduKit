// 資料載入器 JavaScript 檔案 

/**
 * 從指定的 URL 異步獲取 JSON 數據。
 * @param {string} url JSON 檔案的路徑。
 * @returns {Promise<Array<Object>|Object|null>} 解析後的 JSON 數據或在出錯時返回 null。
 */
async function fetchJsonData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`無法獲取數據: ${response.status} ${response.statusText} 從 ${url}`);
            return null;
        }
        // 嘗試解析為 JSON。注意：某些端點可能直接返回對象，而另一些可能返回數組。
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`獲取數據時發生錯誤從 ${url}:`, error);
        return null;
    }
}

// 全局的 loadJsonData 函數，供其他 page-specific JS 文件使用
// 確保此函數在 data_loader.js 的頂部，並且在任何依賴它的 page-specific JS 之前載入
/**
 * (公用) 從指定的 URL 異步獲取 JSON 數據。
 * 此版本設計為由其他特定頁面的 JS 文件導入和使用。
 * @param {string} filePath JSON 檔案的路徑。
 * @returns {Promise<Object|Array|null>} 解析後的 JSON 數據或在出錯時返回 null。
 */
async function loadJsonData(filePath) {
    console.log(`Attempting to load JSON from: ${filePath}`);
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            console.error(`Error fetching ${filePath}: ${response.status} ${response.statusText}`);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(`Successfully loaded JSON from: ${filePath}`, data);
        return data;
    } catch (error) {
        console.error(`Error loading JSON data from ${filePath}:`, error);
        // 在 production 環境中，可能不希望 alert，而是更優雅地處理錯誤
        // alert(`無法載入資源: ${filePath}。請檢查控制台獲取更多資訊。`);
        return null; // 或拋出錯誤，讓調用者處理
    }
}

/**
 * 將神經倫理原則數據渲染到指定的容器中。
 * @param {Array<Object>} principlesData 從 JSON 檔案載入的原則數據。
 * @param {string} containerId 要渲染內容的 HTML 元素的 ID。
 */
function renderPrinciples(principlesData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`找不到 ID 為 "${containerId}" 的容器。`);
        return;
    }

    if (!principlesData || principlesData.length === 0) {
        container.innerHTML = '<p>目前沒有可顯示的神經倫理原則。</p>';
        return;
    }

    let htmlContent = '<div class="principles-grid">'; // 可以添加一個 class 以便於樣式化
    principlesData.forEach(principle => {
        htmlContent += `
            <article class="content-card principle-card">
                <h4>${principle.title}</h4>
                <p><strong>通用定義:</strong> ${principle.definition_general}</p>
                <p><strong>在 K-12/高等教育互動中的意涵:</strong> ${principle.implication_education}</p>
                <p><strong>在個人終身學習策略中的意涵:</strong> ${principle.implication_lifelong_learning}</p>
            </article>
        `;
    });
    htmlContent += '</div>';
    container.innerHTML = htmlContent;
}

/**
 * 將案例研究數據渲染到指定的容器中。
 * @param {Array<Object>} caseStudiesData 從 JSON 檔案載入的案例研究數據。
 * @param {string} containerId 要渲染內容的 HTML 元素的 ID。
 */
function renderCaseStudies(caseStudiesData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`找不到 ID 為 "${containerId}" 的容器。`);
        return;
    }

    if (!caseStudiesData || caseStudiesData.length === 0) {
        container.innerHTML = '<p>目前沒有可顯示的案例研究。</p>';
        return;
    }

    let htmlContent = ''; // 使用 modules-grid class 來實現網格佈局
    caseStudiesData.forEach(cs => {
        htmlContent += `
            <article class="content-card case-study-card">
                <h4>${cs.title}</h4>
                <p class="scenario"><strong>情境描述:</strong> ${cs.scenario}</p>
                <h5>倫理問題探討:</h5>
                <ul>
                    ${cs.ethical_questions.map(q => `<li>${q}</li>`).join('')}
                </ul>
                <p class="tags"><strong>標籤:</strong> ${cs.tags.join(', ')}</p>
            </article>
        `;
    });
    container.innerHTML = htmlContent;
}

/**
 * 將神經迷思數據渲染到指定的容器中。
 * @param {Array<Object>} neuromythsData 從 JSON 檔案載入的神經迷思數據。
 * @param {string} containerId 要渲染內容的 HTML 元素的 ID。
 */
function renderNeuromyths(neuromythsData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`找不到 ID 為 "${containerId}" 的容器。`);
        return;
    }

    if (!neuromythsData || neuromythsData.length === 0) {
        container.innerHTML = '<p>目前沒有可顯示的神經迷思內容。</p>';
        return;
    }

    let htmlContent = ''; // 使用 modules-grid class 來實現網格佈局
    neuromythsData.forEach(myth => {
        htmlContent += `
            <article class="content-card neuromyth-card">
                <h4>${myth.myth_title}</h4>
                <p><strong>迷思陳述:</strong> ${myth.myth_statement}</p>
                <p><strong>科學解釋:</strong> ${myth.reality_explanation}</p>
                <p><strong>教育意涵:</strong> ${myth.educational_implication}</p>
                <p class="tags"><strong>標籤:</strong> ${myth.tags.join(', ')}</p>
            </article>
        `;
    });
    container.innerHTML = htmlContent;
}

// 學習中心頁面特定的載入邏輯
document.addEventListener('DOMContentLoaded', async function() {
    // 檢查是否在 learning_hub.html 頁面
    if (document.getElementById('principles-container')) {
        const principles = await fetchJsonData('../assets/data/module1_learning_hub/principles.json');
        if (principles) {
            renderPrinciples(principles, 'principles-container');
        }
    }

    if (document.getElementById('case-studies-container')) {
        const caseStudies = await fetchJsonData('../assets/data/module1_learning_hub/case_studies.json');
        if (caseStudies) {
            renderCaseStudies(caseStudies, 'case-studies-container');
        }
    }

    if (document.getElementById('neuromyths-container')) {
        const neuromyths = await fetchJsonData('../assets/data/module1_learning_hub/neuromyths.json');
        if (neuromyths) {
            renderNeuromyths(neuromyths, 'neuromyths-container');
        }
    }
});

// 範例：未來可以添加一個更通用的渲染函數，或者針對不同類型的數據創建不同的渲染函數
/**
 * (範例) 將通用卡片數據渲染到指定的容器中。
 * @param {Array<Object>} cardData 要渲染的卡片數據 (期望有 title, description, link 屬性)。
 * @param {string} containerId 要渲染內容的 HTML 元素的 ID。
 */
/*
function renderGenericCards(cardData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`找不到 ID 為 "${containerId}" 的容器。`);
        return;
    }

    if (!cardData || cardData.length === 0) {
        container.innerHTML = '<p>目前沒有可顯示的內容。</p>';
        return;
    }

    let htmlContent = '';
    cardData.forEach(item => {
        htmlContent += `
            <article class="module-card"> 
                <h4><a href="${item.link || '#'}">${item.title}</a></h4>
                <p>${item.description}</p>
            </article>
        `;
    });
    container.innerHTML = htmlContent;
}
*/

console.log('data_loader.js loaded.'); 

// Function to render the Resource Library
async function renderResourceLibrary(containerId, jsonPath) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id ${containerId} not found for resource library.`);
        return;
    }
    container.innerHTML = '<p>正在載入資源庫內容...</p>';

    try {
        const resources = await fetchJsonData(jsonPath);
        if (!resources || resources.length === 0) {
            container.innerHTML = '<p>目前沒有資源可顯示。</p>';
            return;
        }

        let htmlContent = '';
        resources.forEach(category => {
            htmlContent += `<div class="resource-category content-card">
                              <h4>${category.category}</h4>
                              <ul class="resource-list">`;
            category.items.forEach(item => {
                htmlContent += `<li class="resource-item">
                                  <h5><a href="${item.url || '#'}" target="_blank" rel="noopener noreferrer">${item.title}</a> <span class="resource-type">(${item.type})</span></h5>
                                  ${item.author ? `<p class="resource-author">作者：${item.author} ${item.year ? `(${item.year})` : ''}</p>` : ''}
                                  <p class="resource-description">${item.description}</p>
                              </li>`;
            });
            htmlContent += '</ul></div>';
        });
        container.innerHTML = htmlContent;
    } catch (error) {
        console.error('Error loading or rendering resource library:', error);
        container.innerHTML = '<p>載入資源庫內容時發生錯誤。請稍後再試。</p>';
    }
}

// Function to render the Glossary
async function renderGlossary(containerId, jsonPath) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id ${containerId} not found for glossary.`);
        return;
    }
    container.innerHTML = '<p>正在載入詞彙表內容...</p>';

    try {
        const terms = await fetchJsonData(jsonPath);
        if (!terms || terms.length === 0) {
            container.innerHTML = '<p>目前沒有詞彙可顯示。</p>';
            return;
        }

        let htmlContent = '<div class="glossary-grid">';
        terms.forEach(termData => {
            htmlContent += `<div class="glossary-term content-card">
                                <h4>${termData.term}</h4>
                                <p>${termData.definition}</p>`;
            if (termData.related_terms && termData.related_terms.length > 0) {
                htmlContent += `<p class="related-terms"><strong>相關術語：</strong>${termData.related_terms.join(', ')}</p>`;
            }
            htmlContent += '</div>';
        });
        htmlContent += '</div>';
        container.innerHTML = htmlContent;
    } catch (error) {
        console.error('Error loading or rendering glossary:', error);
        container.innerHTML = '<p>載入詞彙表內容時發生錯誤。請稍後再試。</p>';
    }
}

// Function to render the Educator Toolkit Content
async function renderEducatorToolkitContent(jsonPath) {
    const toolkitData = await fetchJsonData(jsonPath);
    if (!toolkitData) {
        console.error("Failed to load educator toolkit data.");
        // Optionally, display an error in all toolkit containers
        const containerIds = [
            'assessment-guides-container',
            'neurodiversity-resources-container',
            'edtech-checklists-container',
            'international-guidelines-container'
        ];
        containerIds.forEach(id => {
            const container = document.getElementById(id);
            if (container) {
                container.innerHTML = '<p>載入教育者工具包內容時發生錯誤。</p>';
            }
        });
        return;
    }

    const sectionMapping = {
        'assessment_guides': 'assessment-guides-container',
        'neurodiversity_resources': 'neurodiversity-resources-container',
        'edtech_checklists': 'edtech-checklists-container',
        'international_guidelines': 'international-guidelines-container'
    };

    for (const key in toolkitData) {
        if (toolkitData.hasOwnProperty(key) && sectionMapping[key]) {
            const sectionContent = toolkitData[key];
            const containerId = sectionMapping[key];
            const container = document.getElementById(containerId);

            if (container) {
                let htmlContent = '';
                if (sectionContent.introduction) {
                    htmlContent += `<p class="toolkit-section-intro">${sectionContent.introduction}</p>`;
                }

                if (sectionContent.sections && sectionContent.sections.length > 0) {
                    sectionContent.sections.forEach(subSection => {
                        htmlContent += `<div class="toolkit-subsection content-card">`; // Using content-card for base styling
                        if (subSection.heading) {
                            htmlContent += `<h4>${subSection.heading}</h4>`;
                        }

                        if (subSection.points && subSection.points.length > 0) {
                            htmlContent += '<ul class="toolkit-points">';
                            subSection.points.forEach(point => {
                                htmlContent += `<li>${point}</li>`;
                            });
                            htmlContent += '</ul>';
                        }

                        if (subSection.list_type === 'checklist' && subSection.items && subSection.items.length > 0) {
                            htmlContent += '<ul class="toolkit-checklist">';
                            subSection.items.forEach(item => {
                                htmlContent += `<li>${item}</li>`;
                            });
                            htmlContent += '</ul>';
                        }

                        if (subSection.content_type === 'text_with_link' && subSection.text) {
                            htmlContent += `<p>${subSection.text}</p>`;
                            if (subSection.url && subSection.link_text) {
                                htmlContent += `<p><a href="${subSection.url}" target="_blank" rel="noopener noreferrer" class="cta-button secondary">${subSection.link_text}</a></p>`;
                            }
                        }

                        if (subSection.content_type === 'resource_list' && subSection.items && subSection.items.length > 0) {
                            htmlContent += '<ul class="toolkit-resource-list">';
                            subSection.items.forEach(item => {
                                htmlContent += `<li><strong>${item.title}</strong>: ${item.description}</li>`;
                            });
                            htmlContent += '</ul>';
                        }
                        
                        if (subSection.content_type === 'resource_list_linked' && subSection.items && subSection.items.length > 0) {
                            htmlContent += '<ul class="toolkit-resource-list linked">';
                            subSection.items.forEach(item => {
                                htmlContent += `<li><h5><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.title}</a></h5><p>${item.description}</p></li>`;
                            });
                            htmlContent += '</ul>';
                        }

                        htmlContent += '</div>'; // close toolkit-subsection
                    });
                }
                container.innerHTML = htmlContent;
            } else {
                console.warn(`Container with id ${containerId} not found for toolkit section ${key}.`);
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'learning_hub.html') {
        // Load Principles
        if (document.getElementById('principles-container')) {
            // The existing renderPrinciples function in the prompt is synchronous
            // but fetchJsonData is async. Adjusting to await fetch and then render.
            (async () => {
                const principlesData = await fetchJsonData('../assets/data/module1_learning_hub/principles.json');
                if(principlesData) renderPrinciples(principlesData, 'principles-container');
            })();
        }
        // Load Case Studies
        if (document.getElementById('case-studies-container')) {
            (async () => {
                const caseStudiesData = await fetchJsonData('../assets/data/module1_learning_hub/case_studies.json');
                if(caseStudiesData) renderCaseStudies(caseStudiesData, 'case-studies-container');
            })();
        }
        // Load Neuromyths
        if (document.getElementById('neuromyths-container')) {
            (async () => {
                const neuromythsData = await fetchJsonData('../assets/data/module1_learning_hub/neuromyths.json');
                if(neuromythsData) renderNeuromyths(neuromythsData, 'neuromyths-container');
            })();
        }
        // Load Resource Library
        if (document.getElementById('resource-library-container')) {
            renderResourceLibrary('resource-library-container', '../assets/data/module1_learning_hub/resources.json');
        }
        // Load Glossary
        if (document.getElementById('glossary-container')) {
            renderGlossary('glossary-container', '../assets/data/module1_learning_hub/glossary.json');
        }
    } else if (currentPage === 'educator_toolkit.html') {
        renderEducatorToolkitContent('../assets/data/module2_educator_toolkit/toolkit_content.json');
    }
}); 

// 教育者工具包內容渲染
async function renderEducatorToolkitContent(containerId, jsonPath, sectionKey, renderer) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Container with id ${containerId} not found for ${sectionKey}.`);
        return;
    }
    container.innerHTML = '<p>正在載入內容...</p>';
    try {
        const data = await loadJsonData(jsonPath);
        if (data && data[sectionKey]) {
            renderer(data[sectionKey], container);
        } else if (data && !data[sectionKey]) {
            console.warn(`Section ${sectionKey} not found in ${jsonPath}`);
            container.innerHTML = '<p>找不到指定的內容部分。</p>';
        } else {
            container.innerHTML = '<p>無法載入內容。數據為空或路徑錯誤。</p>';
        }
    } catch (error) {
        console.error(`Error loading or rendering ${sectionKey}:`, error);
        container.innerHTML = '<p>載入內容時發生錯誤。</p>';
    }
}

// 隱私模擬頁面內容渲染
async function renderPrivacySimulationContent(containerId, jsonPath, sectionKey, renderer) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Container ${containerId} not found for ${sectionKey}.`);
        return;
    }
    container.innerHTML = '<p>正在載入內容...</p>';
    try {
        const alldata = await loadJsonData(jsonPath);
        if (alldata && sectionKey && alldata[sectionKey]) { // 如果提供了 sectionKey 且存在
             renderer(alldata[sectionKey], container);
        } else if (alldata && !sectionKey) { // 如果沒有提供 sectionKey，則假定整個數據對象就是要渲染的內容
            renderer(alldata, container);
        }
        else {
            console.warn(`Content for ${sectionKey || 'section'} not found or data is invalid in ${jsonPath}`);
            container.innerHTML = '<p>無法載入指定的內容部分。</p>';
        }
    } catch (error) {
        console.error(`Error loading/rendering ${sectionKey || 'content'} from ${jsonPath}:`, error);
        container.innerHTML = '<p>載入內容時發生錯誤。</p>';
    }
}


// EdTech 沙盒頁面內容渲染
async function renderEdTechSandboxContent(containerId, jsonPath, sectionKey, renderer) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Container ${containerId} not found for EdTech Sandbox content.`);
        return;
    }
    container.innerHTML = '<p>正在載入內容...</p>';
    try {
        const data = await loadJsonData(jsonPath); // 假設 EdTech 沙盒的 JSON 結構可能是一個包含單個對象的數組
        
        // 如果數據是一個數組並且我們期望一個對象，取第一個元素
        const contentToRender = Array.isArray(data) && data.length > 0 ? data[0] : data;

        if (contentToRender) {
            if (sectionKey && contentToRender[sectionKey]) {
                renderer(contentToRender[sectionKey], container);
            } else if (!sectionKey) { // 如果沒有 sectionKey，或者 sectionKey 不存在，但 contentToRender 本身是期望的數據
                renderer(contentToRender, container);
            } else {
                 container.innerHTML = '<p>找不到指定的 EdTech 沙盒內容部分。</p>';
            }
        } else {
            container.innerHTML = '<p>無法載入 EdTech 沙盒內容。</p>';
        }
    } catch (error) {
        console.error('Error loading or rendering EdTech Sandbox content:', error);
        container.innerHTML = '<p>載入 EdTech 沙盒內容時發生錯誤。</p>';
    }
}


/**
 * DOMContentLoaded 事件觸發後執行的初始化函數。
 * 此函數現在主要負責設置那些不由特定頁面 JS 文件處理的通用內容加載器。
 */
document.addEventListener('DOMContentLoaded', async function() {
    console.log('DOMContentLoaded in data_loader.js - Initializing general content loaders if any.');

    // 移除或註解掉特定於 learning_hub.html 的 setupLearningHubContent() 調用
    // setupLearningHubContent(); 

    // 其他頁面的初始化邏輯可以保留，如果它們不由各自的 page.js 文件處理
    // 例如，如果 educator_toolkit.html 等頁面沒有自己的 .js 文件來觸發內容加載
    // setupEducatorToolkitContent(); // 假設有這樣的函數
    // setupPrivacySimulationContent(); // 假設有這樣的函數
    // setupEdTechSandboxContent(); // 假設有這樣的函數
});

console.log('data_loader.js executed.'); 