// 互動模擬 JavaScript 

document.addEventListener('DOMContentLoaded', () => {
    // --- Code for Learning Hub Scenarios (if this file is shared) ---
    // Example: if (document.getElementById('ai-tutor-choices')) { ... learning hub logic ... }
    const scenariosDataFromLearningHub = {
        'ai-tutor-dilemma': { /* ... content ... */ },
        'focus-headband': { /* ... content ... */ },
        'neuro-optimization': { /* ... content ... */ }
    };
    // (Initialize learning hub scenarios if on learning_hub.html - logic omitted for brevity here but should be present if file is shared)
    function initializeLearningHubScenario(scenarioId) {
        const scenarioConfig = scenariosDataFromLearningHub[scenarioId];
        if (!scenarioConfig || !document.getElementById(scenarioConfig.choicesContainerId)) return;
        // ... rest of the learning hub scenario initialization logic ...
    }
    Object.keys(scenariosDataFromLearningHub).forEach(id => initializeLearningHubScenario(id));


    // --- Code for Privacy Simulation --- 
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
            if (allPrivacyScenarios.length > 0) {
                initialMessageEl.querySelector('p').textContent = '隱私模擬情境已就緒。';
                startSimulationButton.style.display = 'inline-block';
            } else {
                initialMessageEl.querySelector('p').textContent = '目前沒有可用的隱私模擬情境。';
            }
        } catch (error) {
            console.error("無法載入隱私模擬情境:", error);
            initialMessageEl.querySelector('p').textContent = '載入隱私模擬情境失敗。請稍後再試。';
        }
    }

    function displayScenario(index) {
        if (index >= allPrivacyScenarios.length) {
            // Handle end of simulation later
            scenarioTitleEl.textContent = "模擬結束";
            scenarioDescriptionEl.textContent = "您已完成所有情境。";
            choicesContainerEl.innerHTML = '';
            feedbackContainerEl.style.display = 'none';
            nextScenarioButton.style.display = 'none';
            restartSimulationButton.style.display = 'inline-block';
            return;
        }

        const scenario = allPrivacyScenarios[index];
        scenarioTitleEl.textContent = scenario.title;
        scenarioRoleTextEl.textContent = scenario.role;
        scenarioDescriptionEl.textContent = scenario.description;
        
        choicesContainerEl.innerHTML = ''; // Clear previous choices
        scenario.choices.forEach(choice => {
            const button = document.createElement('button');
            button.classList.add('choice-button'); // Reuse styling from learning_hub if applicable
            button.textContent = choice.text;
            button.addEventListener('click', () => handleChoice(choice, scenario));
            choicesContainerEl.appendChild(button);
        });

        feedbackContainerEl.style.display = 'none';
        scenarioCardEl.style.display = 'block';
        initialMessageEl.style.display = 'none';
        restartSimulationButton.style.display = 'inline-block'; // Show restart button during scenario
        nextScenarioButton.style.display = 'none'; // Hide next initially
    }

    function handleChoice(choice, scenario) {
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

        if (currentScenarioIndex < allPrivacyScenarios.length - 1) {
            nextScenarioButton.style.display = 'inline-block';
        } else {
            nextScenarioButton.style.display = 'none'; // No next if it's the last scenario
        }
    }

    function startSimulation() {
        currentScenarioIndex = 0;
        displayScenario(currentScenarioIndex);
        startSimulationButton.style.display = 'none';
    }

    if (scenarioCardEl) { // Only run if on privacy_simulation.html
        fetchPrivacyScenarios();
        startSimulationButton.addEventListener('click', startSimulation);
        
        restartSimulationButton.addEventListener('click', () => {
             // Reset to initial state before fetching/re-displaying scenario 0
            scenarioCardEl.style.display = 'none';
            initialMessageEl.style.display = 'block';
            initialMessageEl.querySelector('p').textContent = '正在重新啟動模擬...';
            startSimulationButton.style.display = 'none'; 
            // If scenarios are already fetched, we can just call startSimulation
            if(allPrivacyScenarios.length > 0){
                startSimulation();
            } else {
                 // Or fetch again if needed, though ideally they are already in memory
                fetchPrivacyScenarios(); 
            }
        });

        nextScenarioButton.addEventListener('click', () => {
            currentScenarioIndex++;
            displayScenario(currentScenarioIndex);
        });
    }
}); 