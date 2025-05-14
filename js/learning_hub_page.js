document.addEventListener('DOMContentLoaded', async () => {
  // 確保 data_loader.js 中的 loadJsonData 函數可用
  if (typeof loadJsonData !== 'function') {
    console.error('Error: loadJsonData function is not defined. Make sure data_loader.js is loaded correctly.');
    return;
  }

  // 學習中心各內容區塊的容器 ID (與 learning_hub.html 一致)
  const principlesContainerId = 'principles-container';
  const caseStudiesContainerId = 'case-studies-container';
  const neuromythsContainerId = 'neuromyths-container';
  const resourceLibraryContainerId = 'resource-library-container';
  const glossaryContainerId = 'glossary-container';

  // 獲取容器元素
  const principlesContainer = document.getElementById(principlesContainerId);
  const caseStudiesContainer = document.getElementById(caseStudiesContainerId);
  const neuromythsContainer = document.getElementById(neuromythsContainerId);
  const resourceLibraryContainer = document.getElementById(resourceLibraryContainerId);
  const glossaryContainer = document.getElementById(glossaryContainerId);

  // 輔助函數：檢查容器是否存在並記錄警告
  function checkContainer(container, id) {
    if (!container) {
      console.warn(`Warning: Container with ID '${id}' not found in learning_hub.html.`);
      return false;
    }
    return true;
  }

  // 載入並渲染神經倫理原則
  if (checkContainer(principlesContainer, principlesContainerId)) {
    try {
      const principles = await loadJsonData('../assets/data/module1_learning_hub/neuroethical_principles.json');
      if (principles) {
        renderNeuroethicalPrinciples(principles, principlesContainer);
      } else {
        principlesContainer.innerHTML = '<p class="error-message">無法載入神經倫理原則數據。</p>';
      }
    } catch (error) {
      console.error('Error processing neuroethical principles:', error);
      principlesContainer.innerHTML = '<p class="error-message">處理神經倫理原則內容時發生錯誤。</p>';
    }
  }

  // 載入並渲染案例研究
  if (checkContainer(caseStudiesContainer, caseStudiesContainerId)) {
    try {
      const caseStudies = await loadJsonData('../assets/data/module1_learning_hub/case_studies.json');
      if (caseStudies) {
        renderCaseStudies(caseStudies, caseStudiesContainer);
      } else {
        caseStudiesContainer.innerHTML = '<p class="error-message">無法載入案例研究數據。</p>';
      }
    } catch (error) {
      console.error('Error processing case studies:', error);
      caseStudiesContainer.innerHTML = '<p class="error-message">處理案例研究內容時發生錯誤。</p>';
    }
  }

  // 載入並渲染神經迷思
  if (checkContainer(neuromythsContainer, neuromythsContainerId)) {
    try {
      const neuromyths = await loadJsonData('../assets/data/module1_learning_hub/neuromyths.json');
      if (neuromyths) {
        renderNeuromyths(neuromyths, neuromythsContainer);
      } else {
        neuromythsContainer.innerHTML = '<p class="error-message">無法載入神經迷思數據。</p>';
      }
    } catch (error) {
      console.error('Error processing neuromyths:', error);
      neuromythsContainer.innerHTML = '<p class="error-message">處理神經迷思內容時發生錯誤。</p>';
    }
  }

  // 載入並渲染資源庫
  if (checkContainer(resourceLibraryContainer, resourceLibraryContainerId)) {
    try {
      const resources = await loadJsonData('../assets/data/module1_learning_hub/resources.json');
      if (resources) {
        renderResourceLibrary(resources, resourceLibraryContainer);
      } else {
        resourceLibraryContainer.innerHTML = '<p class="error-message">無法載入資源庫數據。</p>';
      }
    } catch (error) {
      console.error('Error processing resource library:', error);
      resourceLibraryContainer.innerHTML = '<p class="error-message">處理資源庫內容時發生錯誤。</p>';
    }
  }

  // 載入並渲染詞彙表
  if (checkContainer(glossaryContainer, glossaryContainerId)) {
    try {
      const glossary = await loadJsonData('../assets/data/module1_learning_hub/glossary.json');
      if (glossary) {
        renderGlossary(glossary, glossaryContainer);
      } else {
        glossaryContainer.innerHTML = '<p class="error-message">無法載入詞彙表數據。</p>';
      }
    } catch (error) {
      console.error('Error processing glossary:', error);
      glossaryContainer.innerHTML = '<p class="error-message">處理詞彙表內容時發生錯誤。</p>';
    }
  }
});

function renderNeuroethicalPrinciples(principles, container) {
  if (!Array.isArray(principles)) {
    console.error('Neuroethical principles data is not an array:', principles);
    container.innerHTML = '<p class="error-message">神經倫理原則資料格式錯誤。</p>';
    return;
  }
  let html = '<h2>核心神經倫理原則</h2>';
  html += '<div class="principles-list modules-grid">';
  principles.forEach(principle => {
    html += `
      <details class="principle-card card content-toggle-card">
        <summary class="card-title">
          ${principle.title_zh_TW}
          <span class="toggle-icon"></span> <!-- For CSS-based icon -->
        </summary>
        <div class="card-content-collapsible">
          <p class="card-content">${principle.description_zh_TW}</p>
          ${principle.keywords_zh_TW && principle.keywords_zh_TW.length > 0 ? 
            `<p class="keywords"><strong>關鍵詞：</strong>${principle.keywords_zh_TW.join('，')}</p>` : ''}
        </div>
      </details>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

function renderNeuromyths(neuromyths, container) {
  if (!Array.isArray(neuromyths)) {
    console.error('Neuromyths data is not an array:', neuromyths);
    container.innerHTML = '<p class="error-message">神經迷思資料格式錯誤。</p>';
    return;
  }
  let html = '<h2>常見神經迷思破解</h2>';
  html += '<div class="neuromyths-list modules-grid">';
  neuromyths.forEach(myth => {
    html += `
      <div class="neuromyth-card card interactive-card" tabindex="0">
        <div class="card-inner">
          <div class="card-front">
            <h3 class="card-title">迷思：${myth.myth_zh_TW}</h3>
            <p class="instruction-text">點擊查看破解</p>
          </div>
          <div class="card-back">
            <h3 class="card-title">迷思：${myth.myth_zh_TW}</h3>
            <div class="card-content">
              <p><strong>破解：</strong>${myth.busted_zh_TW}</p>
              <p><strong>科學證據：</strong>${myth.evidence_zh_TW}</p>
              <p><strong>教育意涵：</strong>${myth.educational_implication_zh_TW}</p>
            </div>
            <p class="instruction-text">點擊返回迷思</p>
          </div>
        </div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;

  // 添加事件監聽器以處理卡片翻轉
  const mythCards = container.querySelectorAll('.neuromyth-card.interactive-card');
  mythCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
    // 鍵盤可訪問性：允許 Enter 或 Space 鍵觸發翻轉
    card.addEventListener('keypress', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        card.classList.toggle('is-flipped');
      }
    });
  });
}

function renderCaseStudies(caseStudies, container) {
  if (!Array.isArray(caseStudies)) {
    console.error('Case studies data is not an array:', caseStudies);
    container.innerHTML = '<p class="error-message">案例研究資料格式錯誤。</p>';
    return;
  }
  let html = '<h2>神經倫理案例研究</h2>';
  html += '<div class="case-studies-list modules-grid">';
  caseStudies.forEach(study => {
    html += `
      <details class="case-study-card card content-toggle-card">
        <summary class="card-title">
          ${study.title_zh_TW}
          <span class="toggle-icon"></span> <!-- For CSS-based icon -->
        </summary>
        <div class="card-content-collapsible">
          <p><strong>場景描述：</strong>${study.scenario_zh_TW}</p>
          <p><strong>倫理困境：</strong></p>
          <ul>
            ${study.ethical_dilemmas_zh_TW.map(dilemma => `<li>${dilemma}</li>`).join('')}
          </ul>
          <p><strong>討論點：</strong></p>
          <ul>
            ${study.discussion_points_zh_TW.map(point => `<li>${point}</li>`).join('')}
          </ul>
          ${study.related_principles_ids && study.related_principles_ids.length > 0 ? 
            `<p class="related-principles"><strong>相關倫理原則ID：</strong>${study.related_principles_ids.join('，')}</p>` : ''}
        </div>
      </details>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

// 從 data_loader.js 遷移過來並適配
function renderResourceLibrary(resources, container) {
  if (!Array.isArray(resources) || resources.length === 0) {
    container.innerHTML = '<p>目前沒有資源可顯示。</p>';
    return;
  }
  let htmlContent = '<h2>資源分類</h2>';
  htmlContent += '<div class="resources-list modules-grid">';
  resources.forEach(category => {
    // 假設 resources.json 的頂層是分類數組
    // 如果 resources 直接就是項目數組，則需要調整此處邏輯
    htmlContent += `<div class="resource-category-card card">
                      <h3 class="card-title">${category.category_zh_TW || category.category}</h3>
                      <ul class="resource-item-list">`;
    (category.items_zh_TW || category.items).forEach(item => {
      htmlContent += `<li class="resource-item">
                        <h4><a href="${item.url || '#'}" target="_blank" rel="noopener noreferrer">${item.title_zh_TW || item.title}</a> 
                          ${item.type_zh_TW || item.type ? `<span class="resource-type">(${(item.type_zh_TW || item.type)})</span>` : ''}</h4>
                        ${item.author_zh_TW || item.author ? `<p class="resource-author">作者：${(item.author_zh_TW || item.author)} ${(item.year ? `(${item.year})` : '')}</p>` : ''}
                        <p class="resource-description">${item.description_zh_TW || item.description}</p>
                    </li>`;
    });
    htmlContent += '</ul></div>';
  });
  htmlContent += '</div>';
  container.innerHTML = htmlContent;
}

// 從 data_loader.js 遷移過來並適配
function renderGlossary(glossaryData, container) {
  if (!Array.isArray(glossaryData) || glossaryData.length === 0) {
    container.innerHTML = '<p>目前沒有詞彙可顯示。</p>';
    return;
  }
  let htmlContent = '<h2>詞彙釋義</h2>';
  htmlContent += '<div class="glossary-list modules-grid">';
  glossaryData.forEach(termData => {
    htmlContent += `<div class="glossary-term-card card interactive-card" tabindex="0">
                        <div class="card-inner">
                          <div class="card-front">
                            <h3 class="card-title">${termData.term_zh_TW || termData.term}</h3>
                            <p class="instruction-text">點擊查看定義</p>
                          </div>
                          <div class="card-back">
                            <h3 class="card-title">${termData.term_zh_TW || termData.term}</h3>
                            <div class="card-content">
                                <p>${termData.definition_zh_TW || termData.definition}</p>`;
    if (termData.related_terms_zh_TW && termData.related_terms_zh_TW.length > 0) {
      htmlContent += `<p class="related-terms"><strong>相關術語：</strong>${termData.related_terms_zh_TW.join('，')}</p>`;
    }
    htmlContent += `        </div>
                            <p class="instruction-text">點擊返回術語</p>
                          </div>
                        </div>
                      </div>`;
  });
  htmlContent += '</div>';
  container.innerHTML = htmlContent;

  // 添加事件監聽器以處理卡片翻轉
  const glossaryCards = container.querySelectorAll('.glossary-term-card.interactive-card');
  glossaryCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
    // 鍵盤可訪問性：允許 Enter 或 Space 鍵觸發翻轉
    card.addEventListener('keypress', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        card.classList.toggle('is-flipped');
      }
    });
  });
} 