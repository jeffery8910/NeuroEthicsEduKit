// 互動模擬 JavaScript 

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();

    // --- Logic for Learning Hub Interactive Scenarios ---
    if (currentPage === 'learning_hub.html') {
        const learningHubScenariosData = {
            'ai-tutor-dilemma': {
                choicesContainerId: 'ai-tutor-choices',
                outcomeContainerId: 'ai-tutor-outcome',
                choices: [
                    {
                        id: 'approve_pilot',
                        text: '批准一個有嚴格數據監督和定期審查的試點計畫。',
                        outcome: '試點計畫已啟動。初期回饋好壞參半。數據隱私協定受到密切監控。部分教師報告某些學生的參與度有所提高，而另一些教師則對過度依賴人工智慧和公平取用表示擔憂。'
                    },
                    {
                        id: 'reject_system',
                        text: '由於隱私和偏見的顧慮，拒絕該系統。',
                        outcome: '決定受到尊重。學校繼續採用現有的教學方法。重點轉向加強教師培訓以提供個人化支援。一些社區成員對未採用新技術表示失望，另一些則讚賞這種謹慎的做法。'
                    },
                    {
                        id: 'request_more_info',
                        text: '在決定前，要求更多資訊並對演算法進行透明的稽核。',
                        outcome: '供應商提供了部分資訊。獨立稽核成本高昂且耗時。決定被推遲，引起了一些挫折感，但也為更徹底地調查倫理保障措施贏得了時間。'
                    }
                ]
            },
            'focus-headband': {
                choicesContainerId: 'focus-headband-choices',
                outcomeContainerId: 'focus-headband-outcome',
                choices: [
                    {
                        id: 'allow_voluntary_use',
                        text: '允許學生在知情同意和家長同意的情況下自願使用，並提供替代方案。',
                        outcome: '部分學生選擇使用，部分則否。課堂動態變得複雜，需要管理不同學生的需求。關於公平性和潛在壓力的討論仍在繼續。'
                    },
                    {
                        id: 'ban_use_in_school',
                        text: '基於缺乏確鑿的科學證據和潛在的倫理問題，禁止在校內使用。',
                        outcome: '此決定獲得部分家長和老師的支持，但引起了那些相信其潛在益處的人的失望。關於學校在技術採用中角色的辯論隨之而來。'
                    },
                    {
                        id: 'conduct_internal_review',
                        text: '先暫停使用，組織一個由教師、家長和學生代表組成的小組進行內部審查和討論。',
                        outcome: '審查過程促進了對話，但達成共識具有挑戰性。最終的決定延遲了，但讓更多利益相關者參與進來，增加了決策的透明度。'
                    }
                ]
            },
            'neuro-optimization': {
                choicesContainerId: 'neuro-optimization-choices',
                outcomeContainerId: 'neuro-optimization-outcome',
                choices: [
                    {
                        id: 'use_device',
                        text: '為了競爭優勢，決定使用神經刺激儀器。',
                        outcome: '您在短期內感到認知能力有所提升並在競賽中表現良好，但開始擔心潛在的長期副作用和對公平競爭的影響。'
                    },
                    {
                        id: 'refuse_device',
                        text: '基於倫理考量和對未經驗證技術的擔憂，拒絕使用。',
                        outcome: '您堅持了自己的原則，但看著使用儀器的同學似乎佔據優勢，內心感到掙扎。這促使您更深入地思考成就與手段的關係。'
                    },
                    {
                        id: 'report_concern',
                        text: '向學校或相關機構報告對這類未受管制「神經優化」技術的擔憂。',
                        outcome: '您的報告引起了對認知增強技術倫理規範的討論。雖然短期內對競賽沒有直接影響，但您的行為促進了對更廣泛議題的關注。'
                    }
                ]
            }
        };

        function initializeLearningHubScenario(scenarioId) {
            const scenarioConfig = learningHubScenariosData[scenarioId];
            if (!scenarioConfig) return;

            const choicesContainer = document.getElementById(scenarioConfig.choicesContainerId);
            const outcomeContainer = document.getElementById(scenarioConfig.outcomeContainerId);

            if (choicesContainer && outcomeContainer) {
                displayLearningHubChoices(scenarioConfig, choicesContainer, outcomeContainer);
            }
        }

        function displayLearningHubChoices(scenarioConfig, choicesContainer, outcomeContainer) {
            choicesContainer.innerHTML = ''; 
            outcomeContainer.innerHTML = ''; 
            scenarioConfig.choices.forEach(choice => {
                const button = document.createElement('button');
                button.classList.add('choice-button');
                button.textContent = choice.text;
                button.addEventListener('click', () => displayLearningHubOutcome(choice, scenarioConfig, choicesContainer, outcomeContainer));
                choicesContainer.appendChild(button);
            });
        }

        function displayLearningHubOutcome(choice, scenarioConfig, choicesContainer, outcomeContainer) {
            outcomeContainer.innerHTML = `<h5>您的選擇結果：</h5><p>${choice.outcome}</p>`;
            choicesContainer.querySelectorAll('.choice-button').forEach(button => {
                button.disabled = true;
            });
            const resetButton = document.createElement('button');
            resetButton.textContent = '重新選擇';
            resetButton.classList.add('reset-button');
            resetButton.addEventListener('click', () => displayLearningHubChoices(scenarioConfig, choicesContainer, outcomeContainer));
            outcomeContainer.appendChild(resetButton);
        }

        Object.keys(learningHubScenariosData).forEach(scenarioId => {
            // Ensure the container for the scenario exists before trying to initialize
            if (learningHubScenariosData[scenarioId] && document.getElementById(learningHubScenariosData[scenarioId].choicesContainerId)) {
               initializeLearningHubScenario(scenarioId);
            }
        });
    }

    // --- Code for Privacy Simulation ---
    if (currentPage === 'privacy_simulation.html') {
        const scenarioTitleEl = document.getElementById('scenario-title');
        const scenarioRoleTextEl = document.getElementById('role-text');
        const scenarioDescriptionEl = document.getElementById('scenario-description');
        const choicesContainerEl = document.getElementById('scenario-choices-container');
        const feedbackContainerEl = document.getElementById('scenario-feedback-container');
        const feedbackTextEl = document.getElementById('feedback-text');
        const privacyScoreEl = document.getElementById('privacy-score');
        const nextScenarioButton = document.getElementById('next-scenario-button');
        const restartSimulationButton = document.getElementById('restart-simulation-button');
        const scenarioCardEl = document.getElementById('privacy-scenario-card');
        const initialMessageEl = document.getElementById('simulation-initial-message');
        const startSimulationButton = document.getElementById('start-simulation-button');

        let allPrivacyScenarios = [];
        let currentScenarioIndex = 0;

        async function fetchPrivacyScenarios() {
            try {
                const response = await fetch('../assets/data/module3_privacy_simulation/scenarios.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                allPrivacyScenarios = await response.json();
                if (initialMessageEl && startSimulationButton) { // Check if elements exist
                    if (allPrivacyScenarios.length > 0) {
                        initialMessageEl.querySelector('p').textContent = '隱私模擬情境已就緒。';
                        startSimulationButton.style.display = 'inline-block';
                    } else {
                        initialMessageEl.querySelector('p').textContent = '目前沒有可用的隱私模擬情境。';
                    }
                }
            } catch (error) {
                console.error("無法載入隱私模擬情境:", error);
                if (initialMessageEl) {
                    initialMessageEl.querySelector('p').textContent = '載入隱私模擬情境失敗。請稍後再試。';
                }
            }
        }

        function displayScenario(index) {
            if (!scenarioTitleEl || !scenarioDescriptionEl || !choicesContainerEl || !feedbackContainerEl || !scenarioRoleTextEl) return; // Ensure elements exist

            if (index >= allPrivacyScenarios.length) {
                scenarioTitleEl.textContent = "模擬結束";
                scenarioDescriptionEl.textContent = "您已完成所有情境。";
                choicesContainerEl.innerHTML = '';
                feedbackContainerEl.style.display = 'none';
                if(nextScenarioButton) nextScenarioButton.style.display = 'none';
                if(restartSimulationButton) restartSimulationButton.style.display = 'inline-block';
                return;
            }

            const scenario = allPrivacyScenarios[index];
            scenarioTitleEl.textContent = scenario.title;
            scenarioRoleTextEl.textContent = scenario.role;
            scenarioDescriptionEl.textContent = scenario.description;
            
            choicesContainerEl.innerHTML = ''; 
            scenario.choices.forEach(choice => {
                const button = document.createElement('button');
                button.classList.add('choice-button'); 
                button.textContent = choice.text;
                button.addEventListener('click', () => handleChoice(choice, scenario));
                choicesContainerEl.appendChild(button);
            });

            feedbackContainerEl.style.display = 'none';
            if(scenarioCardEl) scenarioCardEl.style.display = 'block';
            if(initialMessageEl) initialMessageEl.style.display = 'none';
            if(restartSimulationButton) restartSimulationButton.style.display = 'inline-block'; 
            if(nextScenarioButton) nextScenarioButton.style.display = 'none'; 
        }

        function handleChoice(choice, scenario) {
            if (!feedbackTextEl || !privacyScoreEl || !feedbackContainerEl || !choicesContainerEl) return; // Ensure elements exist

            let feedback = '';
            if (choice.privacy_impact_score < 0) {
                feedback = choice.feedback_negative;
                if(choice.feedback_positive) feedback += "<br><br>同時，也可能出現一些正面情況： " + choice.feedback_positive;
            } else if (choice.privacy_impact_score > 0) {
                feedback = choice.feedback_positive;
                if(choice.feedback_negative) feedback += "<br><br>然而，也可能帶來一些負面影響： " + choice.feedback_negative;
            } else {
                feedback = choice.feedback_positive + (choice.feedback_negative ? "<br><br>" + choice.feedback_negative : "");
            }
            feedbackTextEl.innerHTML = feedback;
            privacyScoreEl.textContent = choice.privacy_impact_score;
            
            feedbackContainerEl.style.display = 'block';
            choicesContainerEl.querySelectorAll('.choice-button').forEach(btn => btn.disabled = true);

            if (nextScenarioButton) {
                if (currentScenarioIndex < allPrivacyScenarios.length - 1) {
                    nextScenarioButton.style.display = 'inline-block';
                } else {
                    nextScenarioButton.style.display = 'none'; 
                }
            }
        }

        function startSimulation() {
            currentScenarioIndex = 0;
            displayScenario(currentScenarioIndex);
            if(startSimulationButton) startSimulationButton.style.display = 'none';
        }

        // Initial setup for privacy simulation page
        if (scenarioCardEl && initialMessageEl && startSimulationButton && restartSimulationButton && nextScenarioButton) { 
            fetchPrivacyScenarios();
            startSimulationButton.addEventListener('click', startSimulation);
            
            restartSimulationButton.addEventListener('click', () => {
                scenarioCardEl.style.display = 'none';
                initialMessageEl.style.display = 'block';
                initialMessageEl.querySelector('p').textContent = '正在重新啟動模擬...';
                startSimulationButton.style.display = 'none'; 
                if(allPrivacyScenarios.length > 0){
                    startSimulation();
                } else {
                    fetchPrivacyScenarios(); 
                }
            });

            nextScenarioButton.addEventListener('click', () => {
                currentScenarioIndex++;
                displayScenario(currentScenarioIndex);
            });
        } else {
             // This console log helps if we are on a page that shouldn't run this (e.g. learning_hub)
            // console.log("Privacy simulation elements not found, skipping initialization for it.");
        }
    }
}); 

let currentScenario = null;
let currentStageIndex = 0;
let simulationDisplayContainer = null; // 用於顯示模擬內容的特定div
let simulationControlsContainer = null; // 用於控制按鈕的容器

/**
 * 初始化互動模擬
 * @param {Object} scenario - 要載入的模擬場景數據。
 * @param {HTMLElement} mainContainer - 模擬界面的主 HTML 容器。
 */
function initializeSimulation(scenario, mainContainer) {
  currentScenario = scenario;
  currentStageIndex = 0;

  if (!mainContainer) {
    console.error('Error: Main container for simulation is not provided or not found.');
    return;
  }

  // 清空主容器並設置基本結構
  mainContainer.innerHTML = `
    <div id=\"simulation-title-description\"></div>
    <div id=\"simulation-stage-wrapper\" class=\"simulation-stage-wrapper\"></div>
    <div id=\"simulation-controls\" class=\"simulation-controls\"></div>
  `;

  const titleDescContainer = mainContainer.querySelector('#simulation-title-description');
  simulationDisplayContainer = mainContainer.querySelector('#simulation-stage-wrapper'); // 存儲對階段內容包裝器的引用
  simulationControlsContainer = mainContainer.querySelector('#simulation-controls');

  if (!currentScenario || typeof currentScenario !== 'object') {
    if (titleDescContainer) titleDescContainer.innerHTML = '<p class=\"error-message\">無法初始化模擬：無效的場景數據。</p>';
    console.error('Invalid scenario data for simulation.', currentScenario);
    return;
  }

  if (titleDescContainer) {
    titleDescContainer.innerHTML = `
      <h2>互動模擬：${currentScenario.title_zh_TW}</h2>
      <p class=\"scenario-description\">${currentScenario.description_zh_TW}</p>
    `;
  }

  renderCurrentStage();
}

/**
 * 渲染當前模擬階段的內容。
 */
function renderCurrentStage() {
  if (!simulationDisplayContainer || !simulationControlsContainer) {
    console.error('Simulation display or controls container not found during renderCurrentStage.');
    return;
  }

  if (!currentScenario || currentStageIndex >= currentScenario.simulation_stages_zh_TW.length) {
    simulationDisplayContainer.innerHTML = '<p class=\"text-center\">模擬結束，感謝您的參與！</p>';
    simulationControlsContainer.innerHTML = ''; // 清除控制按鈕
    return;
  }

  const stage = currentScenario.simulation_stages_zh_TW[currentStageIndex];
  let stageHtml = `
    <div class=\"simulation-stage card\">
      <h3 class=\"card-title\">階段 ${currentStageIndex + 1}：${stage.stage_title_zh_TW}</h3>
      <p class=\"card-content\">${stage.description_zh_TW}</p>
  `;

  if (stage.data_points_collected_zh_TW && stage.data_points_collected_zh_TW.length > 0) {
    stageHtml += `<div class=\"data-points-info info-box\"><p><strong>此階段可能收集的數據點：</strong></p><ul>${stage.data_points_collected_zh_TW.map(d => `<li>${d}</li>`).join('')}</ul></div>`;
  }
  if (stage.potential_inferences_zh_TW && stage.potential_inferences_zh_TW.length > 0) {
    stageHtml += `<div class=\"inferences-info info-box\"><p><strong>基於數據可能產生的推斷：</strong></p><ul>${stage.potential_inferences_zh_TW.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
  }

  if (stage.player_choices_zh_TW && stage.player_choices_zh_TW.length > 0) {
    stageHtml += '<div class=\"choices button-group\">';
    stage.player_choices_zh_TW.forEach((choice, index) => {
      stageHtml += `<button class=\"choice-button btn\" data-choice-index=\"${index}\">${choice.text_zh_TW}</button>`;
    });
    stageHtml += '</div>';
  }

  stageHtml += '<div class=\"stage-feedback feedback-box\" style=\"display:none; margin-top: 15px;\"></div>'; // 用於顯示選擇後果和學習點
  stageHtml += '</div>';

  simulationDisplayContainer.innerHTML = stageHtml; // 替換整個階段的內容
  simulationControlsContainer.innerHTML = ''; // 清空控制按鈕，稍後按需添加

  if (!(stage.player_choices_zh_TW && stage.player_choices_zh_TW.length > 0)) {
    simulationControlsContainer.innerHTML = '<button id=\"next-stage-button\" class=\"btn btn-primary\">下一階段</button>';
    const nextButton = document.getElementById('next-stage-button');
    if (nextButton) nextButton.addEventListener('click', moveToNextStage);
  }

  addChoiceButtonListeners();
}

/**
 * 為選項按鈕添加事件監聽器。
 */
function addChoiceButtonListeners() {
  const choiceButtons = simulationDisplayContainer.querySelectorAll('.choice-button');
  choiceButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const choiceIndex = parseInt(event.target.dataset.choiceIndex);
      handlePlayerChoice(choiceIndex);
    });
  });
}

/**
 * 處理玩家的選擇。
 * @param {number} choiceIndex - 玩家選擇的選項索引。
 */
function handlePlayerChoice(choiceIndex) {
  const stage = currentScenario.simulation_stages_zh_TW[currentStageIndex];
  const choice = stage.player_choices_zh_TW[choiceIndex];
  const feedbackContainer = simulationDisplayContainer.querySelector('.stage-feedback');

  if (feedbackContainer) {
    let feedbackHtml = `<div class=\"consequence-summary\"><p><strong>您的選擇結果：</strong> ${choice.consequence_summary_zh_TW}</p></div>`;
    if (stage.learning_points_zh_TW && stage.learning_points_zh_TW.length > 0) {
      feedbackHtml += `<div class=\"learning-points\"><p><strong>本階段學習點：</strong></p><ul>`;
      stage.learning_points_zh_TW.forEach(point => {
        feedbackHtml += `<li>${point}</li>`;
      });
      feedbackHtml += '</ul></div>';
    }
    feedbackContainer.innerHTML = feedbackHtml;
    feedbackContainer.style.display = 'block';
  }

  // 禁用所有選項按鈕
  simulationDisplayContainer.querySelectorAll('.choice-button').forEach(b => b.disabled = true);

  // 顯示「下一階段」按鈕
  if (simulationControlsContainer) {
    simulationControlsContainer.innerHTML = '<button id=\"next-stage-button\" class=\"btn btn-primary\">下一階段</button>';
    const nextButton = document.getElementById('next-stage-button');
    if (nextButton) nextButton.addEventListener('click', moveToNextStage);
  }
}

/**
 * 移動到模擬的下一個階段。
 */
function moveToNextStage() {
  currentStageIndex++;
  const feedbackContainer = simulationDisplayContainer.querySelector('.stage-feedback');
  if (feedbackContainer) {
    feedbackContainer.innerHTML = ''; // 清空反饋
    feedbackContainer.style.display = 'none'; // 隱藏上一階段的反饋
  }
  renderCurrentStage();
}

// 將需要從外部調用的函數附加到 window 物件，以便其他腳本可以訪問
if (typeof window !== 'undefined') {
  window.initializeSimulation = initializeSimulation;
} 

/**
 * interactive_simulations.js
 * 處理專案中的互動式模擬，例如隱私模擬或 EdTech 沙盒組件。
 */

const InteractiveSimulations = {
    /**
     * 初始化特定模擬。
     * @param {string} simulationId - 模擬的唯一標識符。
     * @param {HTMLElement} containerElement - 用於承載模擬介面的 HTML 元素。
     * @param {Object} params - 模擬所需的參數 (可選，從 DataLoader 加載)。
     */
    initSimulation(simulationId, containerElement, params = {}) {
        if (!containerElement) {
            console.error(`模擬 '${simulationId}' 的容器元素未提供。`);
            return;
        }

        console.log(`初始化模擬: ${simulationId}`);
        containerElement.innerHTML = `<p class="simulation-placeholder">模擬 '${simulationId}' 正在準備中...</p>`;

        switch (simulationId) {
            case 'privacy_scenario_1':
                this.setupPrivacyScenario1(containerElement, params);
                break;
            case 'edtech_sandbox_tool_A':
                this.setupEdTechSandboxToolA(containerElement, params);
                break;
            // 添加更多模擬案例
            default:
                console.warn(`未找到 ID 為 '${simulationId}' 的模擬設置。`);
                containerElement.innerHTML = `<p class="simulation-placeholder error-message">錯誤：無法識別的模擬 '${simulationId}'。</p>`;
        }
    },

    /**
     * 設置隱私模擬場景1。
     * @param {HTMLElement} container - 模擬容器。
     * @param {Object} params - 參數。
     */
    setupPrivacyScenario1(container, params) {
        // 示例：params 可能包含場景描述、選項、後果等
        container.innerHTML = `
            <div class="simulation privacy-simulation">
                <h3>隱私決策模擬</h3>
                <p>場景：${params.scenarioDescription || '一個常見的線上互動情境。'}</p>
                <p>你的選擇將如何影響你的數位足跡和個人隱私？</p>
                <div class="choices">
                    <button data-choice="A">選擇 A</button>
                    <button data-choice="B">選擇 B</button>
                </div>
                <div class="feedback"></div>
            </div>
        `;
        // 此處應添加事件監聽器和處理邏輯
        this.addChoiceListeners(container, params.outcomes || {});
        console.log('隱私模擬場景1已設置。', params);
    },

    /**
     * 設置 EdTech 沙盒工具 A。
     * @param {HTMLElement} container - 模擬容器。
     * @param {Object} params - 參數。
     */
    setupEdTechSandboxToolA(container, params) {
        container.innerHTML = `
            <div class="simulation edtech-sandbox">
                <h3>EdTech 工具分析沙盒</h3>
                <p>工具名稱：${params.toolName || '示例工具'}</p>
                <p>探索此工具如何收集和使用數據，以及潛在的倫理影響。</p>
                <textarea placeholder="輸入你的分析和顧慮..."></textarea>
                <button>提交分析</button>
            </div>
        `;
        // 此處應添加事件監聽器和處理邏輯
        console.log('EdTech 沙盒工具A已設置。', params);
    },

    /**
     * 為模擬中的選項按鈕添加事件監聽器。
     * @param {HTMLElement} container - 包含選項按鈕的容器。
     * @param {Object} outcomes - 選項對應的結果描述。
     */
    addChoiceListeners(container, outcomes) {
        const choiceButtons = container.querySelectorAll('.choices button');
        const feedbackArea = container.querySelector('.feedback');

        choiceButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const choice = event.target.dataset.choice;
                if (feedbackArea) {
                    feedbackArea.innerHTML = `<p>你選擇了 ${choice}。<br>${outcomes[choice] || '處理中...'}</p>`;
                }
                console.log(`用戶選擇: ${choice}, 結果: ${outcomes[choice]}`);
                // 可以在此處觸發更複雜的邏輯，例如更新狀態、顯示下一步等
            });
        });
    }

    // 更多模擬相關的輔助函數...
};

// 使 InteractiveSimulations 可在其他腳本中使用
window.InteractiveSimulations = InteractiveSimulations;

// 示例：在特定頁面加載後初始化模擬
// document.addEventListener('DOMContentLoaded', () => {
//     const simulationContainer = document.getElementById('privacy-simulation-area');
//     if (simulationContainer) {
//         // 假設參數已通過 DataLoader 或其他方式獲取
//         const simParams = { scenarioDescription: "你收到一封要求提供個人信息的郵件。", outcomes: { A: "提供信息可能導致隱私洩露。", B: "忽略郵件是謹慎的選擇。" } };
//         InteractiveSimulations.initSimulation('privacy_scenario_1', simulationContainer, simParams);
//     }
// }); 