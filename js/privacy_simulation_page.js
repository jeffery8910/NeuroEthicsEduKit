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

document.addEventListener('DOMContentLoaded', () => {
    if (typeof privacySimulationScenarios === 'undefined' || !privacySimulationScenarios || privacySimulationScenarios.length === 0) {
        console.error('privacy_simulation_data.js 未載入或 privacySimulationScenarios 未定義或為空');
        const simulationContainer = document.getElementById('simulation-content-container');
        if (simulationContainer) {
            simulationContainer.innerHTML = '<p class="error-message">隱私模擬數據載入失敗，請檢查控制台或稍後再試。</p>';
        }
        return;
    }

    const scenarioTitleElement = document.createElement('h4'); // 用於顯示情境標題
    const scenarioRoleElement = document.createElement('p');  // 用於顯示角色
    const scenarioDescriptionElement = document.createElement('p'); // 用於顯示情境描述
    const choicesContainerElement = document.createElement('div'); // 用於放置選項按鈕
    choicesContainerElement.className = 'choices-container';
    const feedbackContainerElement = document.createElement('div'); // 用於顯示回饋
    feedbackContainerElement.className = 'feedback-container';
    const simulationContentContainer = document.getElementById('simulation-content-container');

    let currentScenario;

    function displayScenario(scenarioId) {
        currentScenario = privacySimulationScenarios.find(s => s.id === scenarioId);
        if (!currentScenario) {
            console.error(`找不到 ID 為 ${scenarioId} 的情境。`);
            simulationContentContainer.innerHTML = `<p class="error-message">載入情境 ${scenarioId} 失敗。</p>`;
            return;
        }

        scenarioTitleElement.textContent = currentScenario.title;
        scenarioRoleElement.innerHTML = `<strong>您的角色：</strong> ${currentScenario.role}`;
        scenarioDescriptionElement.textContent = currentScenario.description;

        choicesContainerElement.innerHTML = ''; // 清空之前的選項
        feedbackContainerElement.innerHTML = ''; // 清空之前的回饋
        feedbackContainerElement.style.display = 'none';

        currentScenario.choices.forEach(choice => {
            const choiceButton = document.createElement('button');
            choiceButton.className = 'choice-button'; // 可以為按鈕添加樣式
            choiceButton.textContent = choice.text;
            choiceButton.addEventListener('click', () => handleChoice(choice));
            choicesContainerElement.appendChild(choiceButton);
        });

        // 將元素添加到容器中 (如果它們還沒被添加的話)
        if (!simulationContentContainer.contains(scenarioTitleElement)) {
            simulationContentContainer.innerHTML = ''; // 清空初始的"載入中"訊息
            simulationContentContainer.appendChild(scenarioTitleElement);
            simulationContentContainer.appendChild(scenarioRoleElement);
            simulationContentContainer.appendChild(scenarioDescriptionElement);
            simulationContentContainer.appendChild(choicesContainerElement);
            simulationContentContainer.appendChild(feedbackContainerElement);
        }
    }

    function handleChoice(choice) {
        feedbackContainerElement.innerHTML = ''; // 清空舊回饋

        const feedbackText = document.createElement('p');
        feedbackText.innerHTML = `<strong>結果：</strong> ${choice.feedback}`;
        feedbackContainerElement.appendChild(feedbackText);

        if (choice.privacyImpact) {
            const privacyImpactText = document.createElement('p');
            privacyImpactText.innerHTML = `<strong>隱私影響：</strong> ${choice.privacyImpact}`;
            feedbackContainerElement.appendChild(privacyImpactText);
        }
        feedbackContainerElement.style.display = 'block';

        // 禁用選項按鈕
        const buttons = choicesContainerElement.querySelectorAll('.choice-button');
        buttons.forEach(button => button.disabled = true);

        if (choice.nextScenarioId) {
            const nextButton = document.createElement('button');
            nextButton.textContent = '繼續下一個情境';
            nextButton.className = 'cta-button'; // 使用現有的按鈕樣式
            nextButton.addEventListener('click', () => displayScenario(choice.nextScenarioId));
            feedbackContainerElement.appendChild(nextButton);
        } else if (currentScenario.defaultNextScenarioId) {
            // 如果選項沒有指定 nextScenarioId，但情境本身有 defaultNextScenarioId
            const nextButton = document.createElement('button');
            nextButton.textContent = '繼續';
            nextButton.className = 'cta-button'; 
            nextButton.addEventListener('click', () => displayScenario(currentScenario.defaultNextScenarioId));
            feedbackContainerElement.appendChild(nextButton);
        } else {
            // 模擬結束
            const endMessage = document.createElement('p');
            endMessage.textContent = "模擬結束。感謝您的參與！";
            feedbackContainerElement.appendChild(endMessage);
            // 可以添加一個重置按鈕
            addRestartButton();
        }
    }
    
    function addRestartButton() {
        const restartButton = document.createElement('button');
        restartButton.textContent = '重新開始模擬';
        restartButton.className = 'cta-button secondary'; // 使用次要按鈕樣式
        restartButton.addEventListener('click', () => {
            // 清理並重新開始
            simulationContentContainer.innerHTML = '<p><em>模擬內容載入中...</em></p>'; 
            // 延遲一點以確保innerHTML更新後再加載，避免競爭條件
            setTimeout(() => initializeSimulation(), 50); 
        });
        feedbackContainerElement.appendChild(restartButton);
    }

    function initializeSimulation() {
        if (privacySimulationScenarios.length > 0) {
            displayScenario(privacySimulationScenarios[0].id); // 載入第一個情境
        } else {
             simulationContentContainer.innerHTML = '<p class="error-message">沒有可用的模擬情境。</p>';
        }
    }

    // 初始化模擬
    initializeSimulation();

}); 