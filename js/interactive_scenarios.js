document.addEventListener('DOMContentLoaded', () => {
    const scenariosData = {
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

    function initializeScenario(scenarioId) {
        const scenarioConfig = scenariosData[scenarioId];
        if (!scenarioConfig) return;

        const choicesContainer = document.getElementById(scenarioConfig.choicesContainerId);
        const outcomeContainer = document.getElementById(scenarioConfig.outcomeContainerId);

        if (choicesContainer && outcomeContainer) {
            displayChoices(scenarioConfig, choicesContainer, outcomeContainer);
        }
    }

    function displayChoices(scenarioConfig, choicesContainer, outcomeContainer) {
        choicesContainer.innerHTML = ''; 
        outcomeContainer.innerHTML = ''; 
        scenarioConfig.choices.forEach(choice => {
            const button = document.createElement('button');
            button.classList.add('choice-button');
            button.textContent = choice.text;
            button.addEventListener('click', () => displayOutcome(choice, scenarioConfig, choicesContainer, outcomeContainer));
            choicesContainer.appendChild(button);
        });
    }

    function displayOutcome(choice, scenarioConfig, choicesContainer, outcomeContainer) {
        outcomeContainer.innerHTML = `<h5>您的選擇結果：</h5><p>${choice.outcome}</p>`;
        choicesContainer.querySelectorAll('.choice-button').forEach(button => {
            button.disabled = true;
        });
        const resetButton = document.createElement('button');
        resetButton.textContent = '重新選擇';
        resetButton.classList.add('reset-button');
        resetButton.addEventListener('click', () => displayChoices(scenarioConfig, choicesContainer, outcomeContainer));
        outcomeContainer.appendChild(resetButton);
    }

    // Initialize all scenarios
    Object.keys(scenariosData).forEach(scenarioId => {
        initializeScenario(scenarioId);
    });
}); 