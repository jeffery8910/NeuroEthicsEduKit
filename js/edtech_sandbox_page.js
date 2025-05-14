document.addEventListener('DOMContentLoaded', async () => {
    if (typeof loadJsonData !== 'function') {
      console.error('Error: loadJsonData function is not defined. Make sure data_loader.js is loaded correctly.');
      return;
    }
  
    const toolkitContainerId = 'ethical-risk-toolkit-container';
    const toolkitContainer = document.getElementById(toolkitContainerId);
  
    if (!toolkitContainer) {
      console.warn(`Warning: Container '${toolkitContainerId}' not found.`);
      return; // If container doesn't exist, no point in loading data for it
    }
  
    try {
      const toolkitData = await loadJsonData('../assets/data/module4_edtech_sandbox/ethical_risk_assessment_toolkit.json');
      if (toolkitData && toolkitContainer) {
        renderEthicalRiskAssessmentToolkit(toolkitData, toolkitContainer);
      } else if (!toolkitData && toolkitContainer) {
        toolkitContainer.innerHTML = '<p class="error-message">載入倫理風險評估工具包時發生錯誤。</p>';
      }
    } catch (error) {
      console.error('Error processing ethical risk assessment toolkit:', error);
      if (toolkitContainer) toolkitContainer.innerHTML = '<p class="error-message">處理倫理風險評估工具包時發生錯誤。</p>';
    }
  });
  
  function renderEthicalRiskAssessmentToolkit(toolkitData, container) {
    // The data is an array with one element which is the toolkit object
    if (!Array.isArray(toolkitData) || toolkitData.length === 0) {
      container.innerHTML = '<p class="error-message">倫理風險評估工具包資料格式錯誤或為空。</p>';
      return;
    }
    const toolkit = toolkitData[0]; // Get the first (and only) toolkit object
  
    let html = `<h2>${toolkit.tool_name_zh_TW}</h2>`;
    html += `<p class="introduction">${toolkit.introduction_zh_TW}</p>`;
  
    if (toolkit.framework_sections_zh_TW && toolkit.framework_sections_zh_TW.length > 0) {
      html += '<div class="framework-sections">';
      toolkit.framework_sections_zh_TW.forEach(section => {
        html += `
          <section class="framework-section card">
            <h3 class="card-title">${section.title_zh_TW}</h3>
            <p>${section.description_zh_TW}</p>
        `;
        if (section.key_questions_zh_TW && section.key_questions_zh_TW.length > 0) {
          html += '<h5>關鍵問題：</h5><ul>';
          section.key_questions_zh_TW.forEach(q => { html += `<li>${q}</li>`; });
          html += '</ul>';
        }
        if (section.risk_domains_zh_TW && section.risk_domains_zh_TW.length > 0) {
          html += '<h5>倫理風險領域：</h5><div class="risk-domains-list">';
          section.risk_domains_zh_TW.forEach(domain => {
            html += `
              <div class="risk-domain-item card-nested">
                <h6>${domain.name_zh_TW}</h6>
                <p><em>${domain.prompt_zh_TW}</em></p>
              </div>
            `;
          });
          html += '</div>';
        }
        if (section.assessment_criteria_zh_TW && section.assessment_criteria_zh_TW.length > 0) {
          html += '<h5>評估標準：</h5><ul>';
          section.assessment_criteria_zh_TW.forEach(criteria => { html += `<li>${criteria}</li>`; });
          html += '</ul>';
        }
        if (section.mitigation_categories_zh_TW && section.mitigation_categories_zh_TW.length > 0) {
          html += '<h5>緩解措施類別：</h5><ul>';
          section.mitigation_categories_zh_TW.forEach(cat => { html += `<li>${cat}</li>`; });
          html += '</ul>';
        }
        if (section.key_activities_zh_TW && section.key_activities_zh_TW.length > 0) {
          html += '<h5>關鍵活動：</h5><ul>';
          section.key_activities_zh_TW.forEach(activity => { html += `<li>${activity}</li>`; });
          html += '</ul>';
        }
        html += '</section>';
      });
      html += '</div>';
    }
  
    if (toolkit.note_zh_TW) {
      html += `<p class="note"><em>註：${toolkit.note_zh_TW}</em></p>`;
    }
    if (toolkit.keywords_zh_TW && toolkit.keywords_zh_TW.length > 0) {
      html += `<p class="keywords"><strong>關鍵詞：</strong>${toolkit.keywords_zh_TW.join('，')}</p>`;
    }
  
    container.innerHTML = html;
  }