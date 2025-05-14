document.addEventListener('DOMContentLoaded', async () => {
    if (!window.loadJsonData) {
        console.error('Error: loadJsonData function is not available. Ensure data_loader.js is loaded correctly.');
        return;
    }
    if (!window.initializeSimulation) {
        console.error('Error: initializeSimulation function is not available. Ensure interactive_simulations.js is loaded correctly.');
        return;
    }

    const neuroRightsContainer = document.getElementById('neuro-rights-container');
    const templatesInfoContainer = document.getElementById('consent-templates-info-container');
    const aiDataPathwaySimulationContainer = document.getElementById('ai-data-pathway-simulation-container');

    // --- 1. Load and Render Neuro Rights Education ---
    try {
        const neuroRightsData = await window.loadJsonData('../assets/data/module3_privacy_simulation/neuro_rights_education.json');
        if (neuroRightsData && neuroRightsContainer) {
            renderNeuroRights(neuroRightsData, neuroRightsContainer);
        } else if (!neuroRightsContainer) {
            console.warn('Neuro rights container not found.');
        }
    } catch (error) {
        console.error('Error loading or rendering neuro rights education:', error);
        if (neuroRightsContainer) neuroRightsContainer.innerHTML = '<p class="error-message">無法載入神經權利教育內容。</p>';
    }

    // --- 2. Load and Render Consent and DPIA Templates Info ---
    try {
        const templatesData = await window.loadJsonData('../assets/data/module3_privacy_simulation/consent_and_dpia_templates_info.json');
        if (templatesData && templatesInfoContainer) {
            renderTemplatesInfo(templatesData, templatesInfoContainer);
        } else if (!templatesInfoContainer) {
            console.warn('Consent and DPIA templates info container not found.');
        }
    } catch (error) {
        console.error('Error loading or rendering templates info:', error);
        if (templatesInfoContainer) templatesInfoContainer.innerHTML = '<p class="error-message">無法載入模板資訊內容。</p>';
    }

    // --- 3. Load and Initialize "AI Learning Partner & Your Data Footprint" Simulation ---
    try {
        const aiDataPathwayScenario = await window.loadJsonData('../assets/data/module3_privacy_simulation/interactive_data_simulation_scenarios.json');
        // Assuming interactive_data_simulation_scenarios.json contains a single scenario object directly
        // If it's an array of scenarios, you might need to select one, e.g., aiDataPathwayScenario[0]
        if (aiDataPathwayScenario && aiDataPathwaySimulationContainer) {
            // The initializeSimulation function is expected to be globally available from interactive_simulations.js
            window.initializeSimulation(aiDataPathwayScenario, aiDataPathwaySimulationContainer);
        } else if (!aiDataPathwaySimulationContainer) {
            console.warn('AI Data Pathway simulation container not found.');
        } else if (!aiDataPathwayScenario) {
            console.warn('AI Data Pathway scenario data not found or empty.');
            if (aiDataPathwaySimulationContainer) aiDataPathwaySimulationContainer.innerHTML = '<p class="error-message">無法載入 AI 學習夥伴模擬情境數據。</p>';
        }
    } catch (error) {
        console.error('Error loading or initializing AI Data Pathway simulation:', error);
        if (aiDataPathwaySimulationContainer) aiDataPathwaySimulationContainer.innerHTML = '<p class="error-message">初始化 AI 學習夥伴模擬失敗。</p>';
    }
});

function renderNeuroRights(data, container) {
    let html = `<h2>${data.title_zh_TW || '神經權利教育'}</h2>`;
    if (data.introduction_zh_TW) {
        html += `<p>${data.introduction_zh_TW}</p>`;
    }
    if (data.neuro_rights_zh_TW && data.neuro_rights_zh_TW.length > 0) {
        html += '<div class="cards-container">';
        data.neuro_rights_zh_TW.forEach(right => {
            html += `
                <div class="card neuro-right-card">
                    <h3 class="card-title">${right.name_zh_TW}</h3>
                    <p class="card-content"><strong>定義：</strong> ${right.definition_zh_TW}</p>
                    <p class="card-content"><strong>教育相關性：</strong> ${right.educational_relevance_zh_TW}</p>
                    <div class="discussion-points">
                        <strong>討論點：</strong>
                        <ul>
                            ${right.discussion_points_zh_TW.map(point => `<li>${point}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        });
        html += '</div>';
    } else {
        html += '<p>目前沒有可顯示的神經權利資訊。</p>';
    }
    container.innerHTML = html;
}

function renderTemplatesInfo(data, container) {
    let html = `<h2>${data.title_zh_TW || '資源模板'}</h2>`;
    if (data.introduction_zh_TW) {
        html += `<p>${data.introduction_zh_TW}</p>`;
    }
    if (data.templates_zh_TW && data.templates_zh_TW.length > 0) {
        html += '<ul class="resource-list">';
        data.templates_zh_TW.forEach(template => {
            html += `
                <li class="resource-item">
                    <h3>${template.name_zh_TW}</h3>
                    <p>${template.description_zh_TW}</p>
                    <p><em>${template.note_zh_TW}</em></p>
                    ${template.placeholder_link_zh_TW ? `<a href="${template.placeholder_link_zh_TW}" class="btn" target="_blank" rel="noopener noreferrer">查看範例 (占位符)</a>` : ''}
                </li>
            `;
        });
        html += '</ul>';
    } else {
        html += '<p>目前沒有可顯示的模板資訊。</p>';
    }
    container.innerHTML = html;
} 