document.addEventListener('DOMContentLoaded', async () => {
    // Removed checks for window.loadJsonData and window.initializeSimulation as we are moving away from them for some parts.

    const neuroRightsContainer = document.getElementById('neuro-rights-container');
    const templatesInfoContainer = document.getElementById('consent-templates-info-container');
    const aiDataPathwaySimulationContainer = document.getElementById('ai-data-pathway-simulation-container');

    // --- 1. Static Content for Neuro Rights Education (Placeholder) ---
    if (neuroRightsContainer) {
        neuroRightsContainer.innerHTML = `
            <h2>神經權利教育 (內容加載說明)</h2>
            <p>此區塊旨在提供神經權利的相關教育資訊。在完整的伺服器環境中，詳細內容將從外部數據源動態載入。</p>
            <p><em>目前為靜態佔位內容。</em></p>
        `;
    }

    // --- 2. Static Content for Consent and DPIA Templates Info (Placeholder) ---
    if (templatesInfoContainer) {
        templatesInfoContainer.innerHTML = `
            <h2>資源模板 (內容加載說明)</h2>
            <p>此區塊旨在提供同意書和數據保護影響評估 (DPIA) 的相關模板資訊。在完整的伺服器環境中，詳細內容將從外部數據源動態載入。</p>
            <p><em>目前為靜態佔位內容。</em></p>
        `;
    }

    // --- 3. Static Content/Placeholder for "AI Learning Partner & Your Data Footprint" Simulation ---
    // OR, if interactive_simulations.js and its data are self-contained and don't use fetch for *this specific one*,
    // it might still be callable. For now, let's assume it also relied on fetched data or is too complex to integrate directly.
    if (aiDataPathwaySimulationContainer) {
        // Check if a global initializeSimulation function for *this specific container* is available from interactive_simulations.js
        // and if its data is also directly available or embedded, not fetched.
        // For now, providing a placeholder as direct invocation might be complex without full context of interactive_simulations.js
        aiDataPathwaySimulationContainer.innerHTML = `
            <h3>AI 學習夥伴與您的數據足跡 (模擬說明)</h3>
            <p>此處將有一個互動模擬，探索 AI 學習夥伴如何收集和使用您的數據。在完整的伺服器環境中，模擬情境將動態載入。</p>
            <p><em>目前為靜態佔位內容。您下方的「互動模擬區」將使用另一組直接嵌入的數據。</em></p>
        `;
        // If window.initializeSimulation FOR THIS SPECIFIC SIMULATION was meant to be called and its data is NOT fetched,
        // you might try to call it here, e.g.:
        // if (typeof someSpecificAIData !== 'undefined' && window.initializeSimulation) {
        //     window.initializeSimulation(someSpecificAIData, aiDataPathwaySimulationContainer);
        // } else {
        //     aiDataPathwaySimulationContainer.innerHTML = '<p>AI 學習夥伴模擬的動態內容準備中。</p>';
        // }
    }

    // --- Flip Cards Logic (for "討論問題") ---
    const flipCards = document.querySelectorAll('.flip-card');
    if (flipCards.length > 0) {
        console.log('翻牌卡片數量:', flipCards.length);
        flipCards.forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('is-flipped');
            });
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });

        const revealAllAnswersButton = document.getElementById('revealAllAnswers');
        const hideAllAnswersButton = document.getElementById('hideAllAnswers');

        if (revealAllAnswersButton) {
            revealAllAnswersButton.addEventListener('click', () => {
                flipCards.forEach(card => card.classList.add('is-flipped'));
            });
        }
        if (hideAllAnswersButton) {
            hideAllAnswersButton.addEventListener('click', () => {
                flipCards.forEach(card => card.classList.remove('is-flipped'));
            });
        }
    } else {
        console.warn('未找到翻牌卡片 (flip-card)。');
    }

    // --- Reflection Cards Logic (for expandable cards like "相關資源") ---
    const reflectionCards = document.querySelectorAll('.reflection-card');
    if (reflectionCards.length > 0) {
        console.log('可展開式反思卡片數量:', reflectionCards.length);
        reflectionCards.forEach(card => {
            const header = card.querySelector('.reflection-card-header');
            const toggle = card.querySelector('.reflection-card-toggle');
            if (header) {
                header.addEventListener('click', () => {
                    card.classList.toggle('active');
                    if (toggle) toggle.textContent = card.classList.contains('active') ? '−' : '+';
                });
                header.setAttribute('role', 'button');
                header.setAttribute('tabindex', '0');
                header.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.click();
                    }
                });
            }
        });

        const expandAllResourcesButton = document.getElementById('expandAllResources');
        const collapseAllResourcesButton = document.getElementById('collapseAllResources');

        if (expandAllResourcesButton) {
            expandAllResourcesButton.addEventListener('click', () => {
                reflectionCards.forEach(card => {
                    card.classList.add('active');
                    const toggle = card.querySelector('.reflection-card-toggle');
                    if (toggle) toggle.textContent = '−';
                });
            });
        }
        if (collapseAllResourcesButton) {
            collapseAllResourcesButton.addEventListener('click', () => {
                reflectionCards.forEach(card => {
                    card.classList.remove('active');
                    const toggle = card.querySelector('.reflection-card-toggle');
                    if (toggle) toggle.textContent = '+';
                });
            });
        }
    } else {
        console.warn('未找到可展開式反思卡片 (reflection-card)。');
    }

    // --- Case Study Cards Logic (for expandable cards like "案例分析") ---
    const caseStudyCards = document.querySelectorAll('.case-study-card');
    if (caseStudyCards.length > 0) {
        console.log('案例分析卡片數量:', caseStudyCards.length);
        caseStudyCards.forEach(card => {
            const header = card.querySelector('.case-study-card-header');
            const toggle = card.querySelector('.case-study-card-toggle');
            const body = card.querySelector('.case-study-card-body');

            if (header && body) { // Make sure body exists as well
                // Initially collapse all case study cards
                // card.classList.remove('active'); // Active class will be added on click
                // if (toggle) toggle.textContent = '+';
                // body.style.display = 'none'; // Collapse body

                header.addEventListener('click', () => {
                    card.classList.toggle('active');
                    if (toggle) toggle.textContent = card.classList.contains('active') ? '−' : '+';
                    // body.style.display = card.classList.contains('active') ? '' : 'none'; // Toggle body display
                });
                header.setAttribute('role', 'button');
                header.setAttribute('tabindex', '0');
                header.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.click();
                    }
                });
            }
        });

        const expandAllCasesButton = document.getElementById('expandAllCases');
        const collapseAllCasesButton = document.getElementById('collapseAllCases');

        if (expandAllCasesButton) {
            expandAllCasesButton.addEventListener('click', () => {
                caseStudyCards.forEach(card => {
                    card.classList.add('active');
                    const toggle = card.querySelector('.case-study-card-toggle');
                    if (toggle) toggle.textContent = '−';
                    // const body = card.querySelector('.case-study-card-body');
                    // if (body) body.style.display = '';
                });
            });
        }
        if (collapseAllCasesButton) {
            collapseAllCasesButton.addEventListener('click', () => {
                caseStudyCards.forEach(card => {
                    card.classList.remove('active');
                    const toggle = card.querySelector('.case-study-card-toggle');
                    if (toggle) toggle.textContent = '+';
                    // const body = card.querySelector('.case-study-card-body');
                    // if (body) body.style.display = 'none';
                });
            });
        }
    } else {
        console.warn('未找到案例分析卡片 (case-study-card)。');
    }

    // --- Main Interactive Simulation Area Logic (using privacySimulationScenarios from global scope) ---
    const simulationContentContainer = document.getElementById('simulation-content-container');
    let currentScenario;

    function displayScenario(scenarioId) {
        if (typeof privacySimulationScenarios === 'undefined' || !privacySimulationScenarios) {
            console.error('privacySimulationScenarios is not defined. Cannot display scenario.');
            if (simulationContentContainer) simulationContentContainer.innerHTML = '<p class="error-message">主要模擬數據遺失，無法顯示情境。</p>';
            return;
        }
        currentScenario = privacySimulationScenarios.find(s => s.id === scenarioId);
        if (!currentScenario) {
            console.error(`找不到 ID 為 ${scenarioId} 的主要模擬情境。`);
            if (simulationContentContainer) simulationContentContainer.innerHTML = `<p class="error-message">載入主要模擬情境 ${scenarioId} 失敗。</p>`;
            return;
        }

        if (simulationContentContainer) {
            simulationContentContainer.innerHTML = ''; 
            const scenarioTitleElement = document.createElement('h4');
            const scenarioRoleElement = document.createElement('p');
            const scenarioDescriptionElement = document.createElement('p');
            const choicesContainerElement = document.createElement('div');
            choicesContainerElement.className = 'choices-container';
            const feedbackContainerElement = document.createElement('div');
            feedbackContainerElement.className = 'feedback-container';

            scenarioTitleElement.textContent = currentScenario.title;
            scenarioRoleElement.innerHTML = `<strong>您的角色：</strong> ${currentScenario.role}`;
            scenarioDescriptionElement.textContent = currentScenario.description;
            
            simulationContentContainer.appendChild(scenarioTitleElement);
            simulationContentContainer.appendChild(scenarioRoleElement);
            simulationContentContainer.appendChild(scenarioDescriptionElement);
            simulationContentContainer.appendChild(choicesContainerElement);
            simulationContentContainer.appendChild(feedbackContainerElement);
            feedbackContainerElement.style.display = 'none';

            currentScenario.choices.forEach(choice => {
                const choiceButton = document.createElement('button');
                choiceButton.className = 'choice-button';
                choiceButton.textContent = choice.text;
                choiceButton.addEventListener('click', () => handleChoice(choice, choicesContainerElement, feedbackContainerElement));
                choicesContainerElement.appendChild(choiceButton);
            });
        } else {
            console.error('Main simulation content container not found for displaying scenario.');
        }
    }

    function handleChoice(choice, choicesContainer, feedbackContainer) {
        if (!currentScenario) {
            console.error("currentScenario is not defined in handleChoice for main simulation");
            return;
        }
        if (feedbackContainer) {
            feedbackContainer.innerHTML = '';
            const feedbackText = document.createElement('p');
            feedbackText.innerHTML = `<strong>結果：</strong> ${choice.feedback}`;
            feedbackContainer.appendChild(feedbackText);
            if (choice.privacyImpact) {
                const privacyImpactText = document.createElement('p');
                privacyImpactText.innerHTML = `<strong>隱私影響：</strong> ${choice.privacyImpact}`;
                feedbackContainer.appendChild(privacyImpactText);
            }
            feedbackContainer.style.display = 'block';
        } else {
            console.error('Main simulation feedback container not found for handling choice.');
        }
        if (choicesContainer) {
            const buttons = choicesContainer.querySelectorAll('.choice-button');
            buttons.forEach(button => button.disabled = true);
        } else {
            console.error('Main simulation choices container not found for disabling buttons.');
        }
        if (choice.nextScenarioId) {
            const nextButton = document.createElement('button');
            nextButton.textContent = '繼續下一個情境';
            nextButton.className = 'cta-button';
            nextButton.addEventListener('click', () => displayScenario(choice.nextScenarioId));
            if (feedbackContainer) feedbackContainer.appendChild(nextButton);
        } else if (currentScenario.defaultNextScenarioId) {
            const nextButton = document.createElement('button');
            nextButton.textContent = '繼續';
            nextButton.className = 'cta-button';
            nextButton.addEventListener('click', () => displayScenario(currentScenario.defaultNextScenarioId));
            if (feedbackContainer) feedbackContainer.appendChild(nextButton);
        } else {
            const endMessage = document.createElement('p');
            endMessage.textContent = "模擬結束。感謝您的參與！";
            if (feedbackContainer) {
                feedbackContainer.appendChild(endMessage);
                addRestartButton(feedbackContainer, simulationContentContainer, initializeMainSimulation);
            }
        }
    }

    function addRestartButton(feedbackContainer, simContainer, initializerFunc) {
        const restartButton = document.createElement('button');
        restartButton.textContent = '重新開始模擬';
        restartButton.className = 'cta-button secondary';
        restartButton.addEventListener('click', () => {
            if (simContainer) simContainer.innerHTML = '<p><em>模擬內容載入中...</em></p>';
            setTimeout(initializerFunc, 50);
        });
        if (feedbackContainer) feedbackContainer.appendChild(restartButton);
    }

    function initializeMainSimulation() {
        if (typeof privacySimulationScenarios !== 'undefined' && privacySimulationScenarios && privacySimulationScenarios.length > 0) {
            if (simulationContentContainer) {
                if (privacySimulationScenarios[0] && privacySimulationScenarios[0].id) {
                    displayScenario(privacySimulationScenarios[0].id);
                } else {
                    simulationContentContainer.innerHTML = '<p class="error-message">無法找到起始主要模擬情境的ID。</p>';
                }
            } else {
                console.error('Main simulation content container not found for initializing simulation.');
            }
        } else {
            console.warn('privacySimulationScenarios is not defined or empty. Main simulation cannot start.');
            if (simulationContentContainer) {
                simulationContentContainer.innerHTML = '<p class="error-message">主要隱私模擬數據載入失敗，無法啟動。請確保 `privacy_simulation_data.js` 正確載入且 `privacySimulationScenarios` 數據可用。</p>';
            }
        }
    }

    if (simulationContentContainer) {
         initializeMainSimulation();
    } else {
        console.warn("Element with ID 'simulation-content-container' not found at DOMContentLoaded. Main simulation will not start automatically.");
    }

    // Removed renderNeuroRights and renderTemplatesInfo function definitions as their calls were removed.
    // If they were used elsewhere, they should be kept or managed appropriately.
}); 