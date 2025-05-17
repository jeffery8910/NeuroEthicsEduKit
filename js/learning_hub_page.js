document.addEventListener('DOMContentLoaded', async () => {
  // 學習中心資料物件 (從 learning_hub_data.js 引入)
  // 假設 learningHubData 已在全域作用域或透過 <script> 標籤正確載入
  if (typeof learningHubData === 'undefined') {
    console.error('Error: learningHubData is not defined. Make sure learning_hub_data.js is loaded before this script.');
    // 可以在此處為所有容器顯示錯誤訊息
    const containerIds = ['principles-container', 'case-studies-container', 'neuromyths-container', 'interactive-role-play-container', 'resource-library-container', 'glossary-container'];
    containerIds.forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            container.innerHTML = '<p class="error-message">核心資料檔案 (learning_hub_data.js) 遺失，無法載入內容。</p>';
        }
    });
    return;
  }

  // 學習中心各內容區塊的容器 ID
  const principlesContainerId = 'principles-container';
  const caseStudiesContainerId = 'case-studies-container';
  const neuromythsContainerId = 'neuromyths-container';
  const rolePlayContainerId = 'role-play-scenarios-list-container'; // 更新：指向新的子容器ID
  const resourceLibraryContainerId = 'resource-library-container';
  const glossaryContainerId = 'glossary-container';

  // 獲取容器元素
  const principlesContainer = document.getElementById(principlesContainerId);
  const caseStudiesContainer = document.getElementById(caseStudiesContainerId);
  const neuromythsContainer = document.getElementById(neuromythsContainerId);
  const rolePlayContainer = document.getElementById(rolePlayContainerId); // 獲取角色扮演容器
  const resourceLibraryContainer = document.getElementById(resourceLibraryContainerId);
  const glossaryContainer = document.getElementById(glossaryContainerId);

  // 輔助函數：檢查容器是否存在並記錄警告
  function checkContainer(container, id) {
    if (!container) {
      // console.warn(`Warning: Container with ID '${id}' not found in learning_hub.html.`); // 已由使用者報告，此處可暫時移除或保留用於其他容器的警告
      return false;
    }
    return true;
  }

  // 渲染神經倫理原則 (從 learningHubData)
  if (checkContainer(principlesContainer, principlesContainerId)) {
    try {
      if (learningHubData.principles) {
        renderNeuroethicalPrinciples(learningHubData.principles, principlesContainer);
      } else {
        principlesContainer.innerHTML = '<p class="error-message">無法從本地資料中找到神經倫理原則數據。</p>';
      }
    } catch (error) {
      console.error('Error processing neuroethical principles from local data:', error);
      principlesContainer.innerHTML = '<p class="error-message">處理神經倫理原則內容時發生錯誤。</p>';
    }
  }

  // 渲染案例研究 (從 learningHubData)
  if (checkContainer(caseStudiesContainer, caseStudiesContainerId)) {
    try {
      if (learningHubData.caseStudies) {
        renderCaseStudies(learningHubData.caseStudies, caseStudiesContainer);
      } else {
        caseStudiesContainer.innerHTML = '<p class="error-message">無法從本地資料中找到案例研究數據。</p>';
      }
    } catch (error) {
      console.error('Error processing case studies from local data:', error);
      caseStudiesContainer.innerHTML = '<p class="error-message">處理案例研究內容時發生錯誤。</p>';
    }
  }

  // 渲染神經迷思 (從 learningHubData)
  if (checkContainer(neuromythsContainer, neuromythsContainerId)) {
    try {
      if (learningHubData.neuroMyths) {
        renderNeuromyths(learningHubData.neuroMyths, neuromythsContainer);
      } else {
        neuromythsContainer.innerHTML = '<p class="error-message">無法從本地資料中找到神經迷思數據。</p>';
      }
    } catch (error) {
      console.error('Error processing neuromyths from local data:', error);
      neuromythsContainer.innerHTML = '<p class="error-message">處理神經迷思內容時發生錯誤。</p>';
    }
  }

  // 渲染互動式角色扮演 (從 learningHubData) - 新增
  // --- MODIFICATION START ---
  // 檢查 learning_hub.html 是否有其自訂的角色扮演區域
  const customRolePlayArea = document.getElementById('role-play-simulation-area'); 
  
  if (customRolePlayArea) {
    console.log('[learning_hub_page.js] Detected custom role-play area in learning_hub.html. Skipping dynamic loading of role-play scenarios by learning_hub_page.js.');
  } else if (checkContainer(rolePlayContainer, rolePlayContainerId)) { 
    // 只有在 customRolePlayArea 不存在，且 rolePlayContainer (舊ID) 存在時才執行
    // 這段代碼實際上因為 rolePlayContainerId 指向的元素不存在，所以 checkContainer(rolePlayContainer, rolePlayContainerId) 會是 false
    // 但保留這個結構以防未來需要這個舊邏輯
    try {
      if (learningHubData.rolePlayScenarios) {
        renderRolePlayScenarios(learningHubData.rolePlayScenarios, rolePlayContainer);
      } else {
        if(rolePlayContainer) rolePlayContainer.innerHTML = '<p class="error-message">無法從本地資料中找到互動式角色扮演數據。</p>';
      }
    } catch (error) {
      console.error('Error processing role-play scenarios from local data:', error);
      if(rolePlayContainer) rolePlayContainer.innerHTML = '<p class="error-message">處理互動式角色扮演內容時發生錯誤。</p>';
    }
  }
  // --- MODIFICATION END ---
  
  // 載入並渲染資源庫 (從 learningHubData)
  if (checkContainer(resourceLibraryContainer, resourceLibraryContainerId)) {
    try {
      if (learningHubData.resourceLibrary) {
        renderResourceLibrary(learningHubData.resourceLibrary, resourceLibraryContainer);
      } else {
        resourceLibraryContainer.innerHTML = '<p class="error-message">無法从本地資料中找到資源庫數據。</p>';
      }
    } catch (error) {
      console.error('Error processing resource library from local data:', error);
      resourceLibraryContainer.innerHTML = '<p class="error-message">處理資源庫內容時發生錯誤。</p>';
    }
  }

  // 載入並渲染詞彙表 (從 learningHubData)
  if (checkContainer(glossaryContainer, glossaryContainerId)) {
    try {
      if (learningHubData.glossary) {
        renderGlossary(learningHubData.glossary, glossaryContainer);
      } else {
        glossaryContainer.innerHTML = '<p class="error-message">無法從本地資料中找到詞彙表數據。</p>';
      }
    } catch (error) {
      console.error('Error processing glossary from local data:', error);
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
          <i class="fas ${principle.icon || 'fa-brain'} card-icon"></i> ${principle.title}
          <span class="toggle-icon"></span>
        </summary>
        <div class="card-content-collapsible">
          <p class="card-description">${principle.description}</p>
          <p><strong>對K-12與高等教育的意涵：</strong>${principle.implications_k12_higher_ed}</p>
          <p><strong>對終身學習的意涵：</strong>${principle.implications_lifelong_learning}</p>
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
            <h3 class="card-title">迷思：${myth.myth}</h3>
            <p class="instruction-text">點擊查看破解</p>
          </div>
          <div class="card-back">
            <h3 class="card-title">迷思：${myth.myth}</h3>
            <div class="card-content">
              <p><strong>破解：</strong>${myth.reality}</p>
              <p><strong>科學證據/來源：</strong>${myth.evidence_source}</p>
              <p><strong>教育意涵：</strong>${myth.educational_implication}</p>
              ${myth.references && myth.references.length > 0 ? `<p><strong>參考資料：</strong>${myth.references.map(ref => typeof ref === 'string' && ref.startsWith('http') ? `<a href="${ref}" target="_blank" rel="noopener noreferrer">${ref}</a>` : ref).join(', ')}</p>` : ''}
            </div>
            <p class="instruction-text">點擊返回迷思</p>
          </div>
        </div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;

  const mythCards = container.querySelectorAll('.neuromyth-card.interactive-card');
  mythCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
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
          <i class="fas ${study.icon || 'fa-balance-scale-left'} card-icon"></i> ${study.title}
          <span class="toggle-icon"></span>
        </summary>
        <div class="card-content-collapsible">
          <p><strong>案例描述：</strong>${study.description}</p>
          ${study.questions && study.questions.length > 0 ?
            `<div><strong>思考問題：</strong>
               <ul>${study.questions.map(q => `<li>${q}</li>`).join('')}</ul>
             </div>` : ''}
          <p><strong>分析：</strong>${study.analysis || '暫無分析'}</p>
        </div>
      </details>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

// 新增：渲染互動式角色扮演場景
function renderRolePlayScenarios(scenarios, container) {
  if (!Array.isArray(scenarios)) {
    console.error('Role-play scenarios data is not an array:', scenarios);
    container.innerHTML = '<p class="error-message">互動式角色扮演資料格式錯誤。</p>';
    return;
  }
  let html = '<h2>互動式角色扮演與倫理決策</h2>';
  html += '<div class="role-play-list modules-grid">';
  scenarios.forEach(scenario => {
    html += `
      <div class="role-play-card card">
        <h3 class="card-title">${scenario.title}</h3>
        <div class="card-content">
          <p><strong>場景設定：</strong>${scenario.setting}</p>
          <p><strong>場景描述：</strong>${scenario.description}</p>
          ${scenario.roles && scenario.roles.length > 0 ?
            `<div><strong>扮演角色：</strong>
               <ul>${scenario.roles.map(role => `<li><strong>${role.name}：</strong>${role.perspective}</li>`).join('')}</ul>
             </div>` : ''}
          <p><strong>目標：</strong>${scenario.objective}</p>
        </div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

// 更新：載入資源庫的函數，使用 learningHubData 中的英文鍵名，並處理扁平結構
function renderResourceLibrary(resources, container) {
  if (!Array.isArray(resources) || resources.length === 0) {
    container.innerHTML = '<p>目前沒有資源可顯示。</p>';
    return;
  }
  let htmlContent = '<h2>資源庫</h2>'; // 修正標題，因爲不再有分類
  htmlContent += '<ul class="resources-list">'; // 使用單純的列表
  resources.forEach(item => { // 直接迭代資源項目
    htmlContent += `<li class="resource-item card">
                      <h4><a href="${item.link || '#'}" target="_blank" rel="noopener noreferrer">${item.title}</a>
                        ${item.type ? `<span class="resource-type">(${item.type})</span>` : ''}</h4>
                      ${item.author ? `<p class="resource-author">作者/機構：${item.author}</p>` : ''}
                      <p class="resource-description">${item.description}</p>
                      ${item.keywords && item.keywords.length > 0 ?
                        `<p class="keywords"><strong>關鍵詞：</strong>${item.keywords.join('，')}</p>` : ''}
                    </li>`;
  });
  htmlContent += '</ul>';
  container.innerHTML = htmlContent;
}

// 更新：載入詞彙表的函數，使用 learningHubData 中的英文鍵名
function renderGlossary(glossaryData, container) {
  if (!Array.isArray(glossaryData) || glossaryData.length === 0) {
    container.innerHTML = '<p>目前沒有詞彙可顯示。</p>';
    return;
  }
  let htmlContent = '<h2>詞彙釋義</h2>';
  htmlContent += '<div class="glossary-list modules-grid">';
  glossaryData.forEach(term => {
    htmlContent += `
      <div class="glossary-term-card card">
        <h3 class="card-title">${term.term}</h3>
        <div class="card-content">
          <p><strong>定義：</strong>${term.definition}</p>
          ${term.source ? `<p><em>來源：${term.source}</em></p>` : ''}
          ${term.related_terms && term.related_terms.length > 0 ?
            `<p class="keywords"><strong>相關詞彙：</strong>${term.related_terms.join('，')}</p>` : ''}
        </div>
      </div>
    `;
  });
  htmlContent += '</div>';
  container.innerHTML = htmlContent;
} 