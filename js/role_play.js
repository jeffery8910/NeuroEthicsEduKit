// Scenario Data for learning_hub.html
const scenarios = {
    crossroads: {
        title: "教育的十字路口",
        description: "面對學生心理健康問題增多、學業競爭壓力加劇的現狀，市教育局召開研討會，討論未來的教育發展方向。兩種主要的教育哲學產生碰撞：一種觀點（傾向「設計兒童」）認為應更積極地引入神經科學工具和生物醫學手段來「優化」學生的認知和行為；另一種觀點（傾向「養育兒童」）則主張回歸教育本質，強調通過改善師生關係、提供人文關懷來「培育」學生的全面發展。",
        roles: {
            director: {
                name: "教育局局長",
                perspective: "作為局長，我需要在各種壓力和期望中找到平衡點，既要回應社會對教育成果的期待，也要關注學生和教師的福祉。這次研討會的目的是探索出一條可持續發展的教育路徑。",
                initial_situation: "會議即將開始，您需要引導討論，並在不同的意見中權衡，最終為市教育政策的走向提出建議。",
                options: [
                    { text: "選項一：支持引入更多神經科學工具，制定試點計畫。", consequence: "crossroads_director_option1" },
                    { text: "選項二：強調人文關懷，增加對教師培訓和心理輔導的投入。", consequence: "crossroads_director_option2" },
                    { text: "選項三：嘗試整合兩種觀點，尋找技術輔助與人文關懷並行的方案。", consequence: "crossroads_director_option3" }
                ]
            },
            scientist: {
                name: "神經科學家",
                perspective: "神經科學的發展為我們理解和改善學習過程提供了前所未有的工具。我相信，合理應用這些技術可以顯著提升教育效率和學生的認知能力。",
                initial_situation: "您準備在研討會上展示最新的研究成果，說明神經技術如何幫助學生克服學習障礙，並提升專注力和記憶力。",
                options: [
                    { text: "選項一：強調技術的潛力，建議大規模推廣腦電反饋等訓練工具。", consequence: "crossroads_scientist_option1" },
                    { text: "選項二：提出謹慎的應用方案，建議先從輔助有特殊學習需求的學生開始。", consequence: "crossroads_scientist_option2" },
                    { text: "選項三：回應倫理擔憂，強調技術透明度和數據保護的重要性。", consequence: "crossroads_scientist_option3" }
                ]
            },
            principal: {
                name: "資深校長",
                perspective: "教育不僅僅是知識的傳授，更是人格的培養。我擔心過度依賴技術會削弱師生之間的情感連結，忽略了學生的個體差異和全面發展的需求。",
                initial_situation: "您將在研討會上分享多年的一線教育經驗，強調「養育」模式的重要性，並對「設計兒童」的理念提出質疑。",
                options: [
                    { text: "選項一：堅決反對過度技術化，呼籲回歸傳統教育價值。", consequence: "crossroads_principal_option1" },
                    { text: "選項二：承認技術的某些益處，但主張其應嚴格限制在輔助角色。", consequence: "crossroads_principal_option2" },
                    { text: "選項三：分享成功案例，說明人文關懷如何有效提升學生福祉與學業表現。", consequence: "crossroads_principal_option3" }
                ]
            },
            parent: {
                name: "家長聯盟代表",
                perspective: "我們家長既希望孩子能在競爭中脫穎而出，也擔心他們的身心健康和自主發展。對於新技術，我們既有期待，也有很多困惑和擔憂。",
                initial_situation: "您代表廣大家長發言，希望了解不同教育模式對孩子的具體影響，並表達家長在教育選擇上的訴求。",
                options: [
                    { text: "選項一：表達對提升學業成績的迫切需求，詢問技術應用的具體效果。", consequence: "crossroads_parent_option1" },
                    { text: "選項二：強調對孩子個性和快樂童年的重視，擔憂技術可能帶來的副作用。", consequence: "crossroads_parent_option2" },
                    { text: "選項三：要求教育局在推行任何新政策前，充分徵求家長意見並提供透明信息。", consequence: "crossroads_parent_option3" }
                ]
            },
            ethicist: {
                name: "倫理學家",
                perspective: "技術的發展必須在倫理的框架內進行。教育領域的任何變革，都應首先考慮其對學生自主性、公平性和潛在社會影響。",
                initial_situation: "您的任務是從倫理角度分析「設計兒童」與「養育兒童」兩種模式的利弊，並提醒與會者注意潛在的倫理風險。",
                options: [
                    { text: "選項一：深入剖析「設計兒童」可能引發的優生學擔憂和社會分化。", consequence: "crossroads_ethicist_option1" },
                    { text: "選項二：討論「養育兒童」模式中，如何平衡關懷與學生個體自由的界限。", consequence: "crossroads_ethicist_option2" },
                    { text: "選項三：提出建立嚴格倫理審查機制的建議，確保技術應用的公正和透明。", consequence: "crossroads_ethicist_option3" }
                ]
            },
            student: {
                name: "學生代表",
                perspective: "我們每天都處在學習的壓力和對未來的迷茫中。我們希望教育能更關注我們的真實感受，而不是僅僅追求分數。",
                initial_situation: "您將代表學生群體發聲，分享在當前教育體制下的體驗，並表達對未來教育的期望和擔憂。",
                options: [
                    { text: "選項一：控訴過重的學業負擔，呼籲減負和更多自主發展空間。", consequence: "crossroads_student_option1" },
                    { text: "選項二：對新技術表示好奇，但擔心隱私洩露和被過度監控。", consequence: "crossroads_student_option2" },
                    { text: "選項三：期望教育能更多元化，提供發展不同興趣和能力的機會。", consequence: "crossroads_student_option3" }
                ]
            }
        }
    },
    guardians: {
        title: "未來教室的「神經守護者」",
        description: "學校計劃引入包括情緒識別系統、注意力追蹤頭戴設備、以及基於學習行為分析的AI輔導系統等一系列涉及收集和使用學生（神經）數據的技術。為確保技術的負責任使用，倫理委員會需要制定一套《學生神經數據使用倫理守則》。",
        roles: {
            cto: {
                name: "學校技術長",
                perspective: "技術是推動教育進步的關鍵動力。這些新系統將幫助我們更了解學生的學習狀態，實現個性化教學，提升整體教育質量。",
                initial_situation: "您需要在倫理委員會上推動這些技術的應用，同時也要說服其他委員這些技術是安全且有益的。",
                options: [
                    { text: "選項一：強調技術的巨大潛力，主張盡快部署以獲取先發優勢。", consequence: "guardians_cto_option1" },
                    { text: "選項二：展示技術的詳細數據和預期效益，回應對數據安全的擔憂。", consequence: "guardians_cto_option2" },
                    { text: "選項三：提議成立技術監督小組，確保數據使用的合規性與透明度。", consequence: "guardians_cto_option3" }
                ]
            },
            lawyer: {
                name: "數據隱私律師",
                perspective: "學生的神經數據是高度敏感的個人信息，必須受到最嚴格的法律保護。任何數據的收集和使用都必須以明確的知情同意和最小化原則為前提。",
                initial_situation: "您的職責是確保學校制定的倫理守則完全符合現行法律法規，並最大限度地保護學生的隱私權。",
                options: [
                    { text: "選項一：堅持最嚴格的數據收集和使用標準，要求匿名化所有數據。", consequence: "guardians_lawyer_option1" },
                    { text: "選項二：要求對家長和學生進行詳細的風險告知，並獲得書面同意。", consequence: "guardians_lawyer_option2" },
                    { text: "選項三：建議引入第三方獨立審計，監督守則的執行情況。", consequence: "guardians_lawyer_option3" }
                ]
            },
            teacher: {
                name: "教師代表",
                perspective: "作為一線教師，我希望能有更多工具幫助我了解學生的學習困難。但同時，我也擔心這些數據可能被誤解或濫用，增加我們的工作負擔。",
                initial_situation: "您需要在委員會上表達教師們的期望和顧慮，確保新技術能真正幫助教學，而不是成為新的枷鎖。",
                options: [
                    { text: "選項一：支持引入能提供具體教學建議的AI輔導系統。", consequence: "guardians_teacher_option1" },
                    { text: "選項二：擔憂情緒識別等系統可能對學生造成標籤化影響。", consequence: "guardians_teacher_option2" },
                    { text: "選項三：要求為教師提供充足的培訓，確保能正確理解和使用數據。", consequence: "guardians_teacher_option3" }
                ]
            },
            'student-rep': { //  HTML data-role is "student-rep"
                name: "學生會代表",
                perspective: "我們擔心這些技術會讓我們在教室裡感覺像在被監視。我們的想法和情緒應該是私密的，不應該被隨意收集和分析。",
                initial_situation: "您代表學生群體，對這些新技術可能侵犯學生隱私和自主性表達嚴重關切。",
                options: [
                    { text: "選項一：明確反對在教室內使用情緒識別和注意力追蹤設備。", consequence: "guardians_student-rep_option1" },
                    { text: "選項二：要求學生有權查看自己的數據，並可以選擇退出數據收集計畫。", consequence: "guardians_student-rep_option2" },
                    { text: "選項三：提議成立由學生參與的監督小組，確保學生的聲音被聽見。", consequence: "guardians_student-rep_option3" }
                ]
            },
            'parent-rep': { // HTML data-role is "parent-rep"
                name: "家長教師協會代表",
                perspective: "我們希望學校能利用最好的技術來幫助孩子學習，但前提是必須確保他們的安全和隱私。我們需要知道這些數據將如何被使用和保護。",
                initial_situation: "您需要在委員會上代表家長們提出問題，確保學校在引入新技術時，充分考慮到家長的關切並提供清晰的解釋。",
                options: [
                    { text: "選項一：詢問學校將採取哪些具體措施來保護學生數據安全。", consequence: "guardians_parent-rep_option1" },
                    { text: "選項二：要求學校定期向家長匯報數據使用情況和效果評估。", consequence: "guardians_parent-rep_option2" },
                    { text: "選項三：建議在守則中加入家長對子女數據的訪問和控制權條款。", consequence: "guardians_parent-rep_option3" }
                ]
            },
            neuroethicist: {
                name: "神經倫理學研究員",
                perspective: "神經數據具有其特殊性，可能揭示個體的深層認知特徵和潛在傾向。我們必須警惕這些數據被濫用，並倡導保護個體的「神經權利」。",
                initial_situation: "您將從專業角度分析學生神經數據的倫理敏感性，並為委員會提供制定守則的倫理指導原則。",
                options: [
                    { text: "選項一：強調「神經權利」的重要性，如認知自由、精神隱私權等。", consequence: "guardians_neuroethicist_option1" },
                    { text: "選項二：分析不同神經技術（如情緒識別、腦機接口）的特定倫理風險。", consequence: "guardians_neuroethicist_option2" },
                    { text: "選項三：建議守則應包含對數據算法偏見的審查和修正機制。", consequence: "guardians_neuroethicist_option3" }
                ]
            }
        }
    }
};

// Store the active scenario and role globally for simpler access
let currentScenarioId = null;
let currentRoleId = null;

// Initialization: Adapts to learning_hub.html structure
function initRolePlay() {
    console.log("Role Play for learning_hub.html initializing...");

    const scenarioSelectorCards = document.querySelectorAll('.scenario-selector .scenario-card');
    scenarioSelectorCards.forEach(card => {
        card.addEventListener('click', () => {
            // Deactivate other scenario cards
            scenarioSelectorCards.forEach(c => c.classList.remove('active'));
            // Activate clicked card
            card.classList.add('active');
            
            const scenarioId = card.dataset.scenario; // "crossroads" or "guardians"
            if (scenarioId) {
                switchScenario(scenarioId);
            }
        });
    });

    // Initialize with the default active scenario if any
    const initiallyActiveCard = document.querySelector('.scenario-selector .scenario-card.active');
    if (initiallyActiveCard) {
        const initialScenarioId = initiallyActiveCard.dataset.scenario;
        if (initialScenarioId) {
            switchScenario(initialScenarioId);
        }
    } else if (scenarioSelectorCards.length > 0) {
        // Or default to the first scenario card if none are active
        scenarioSelectorCards[0].click(); // Simulate a click to activate and load
    }
    console.log("Role Play for learning_hub.html initialized.");
}

// Scenario Switching for learning_hub.html
function switchScenario(scenarioId) {
    currentScenarioId = scenarioId;
    currentRoleId = null; // Reset role when scenario changes

    console.log(`Switching to scenario: ${scenarioId}`);

    // Hide all scenario content sections
    document.querySelectorAll('.role-play-simulation .scenario-content').forEach(sc => {
        sc.classList.remove('active'); // Assuming 'active' class controls visibility
        // Or use sc.style.display = 'none'; if 'active' is not solely for display
    });

    // Show the selected scenario content section
    const activeScenarioContent = document.getElementById(`${scenarioId}-scenario`);
    if (activeScenarioContent) {
        activeScenarioContent.classList.add('active'); // Show content
        
        // Update scenario title and description if elements exist within the new structure
        // (learning_hub.html already has static titles/descriptions in its scenario-header)
        // For now, we rely on the static HTML for this.

        // Clear previous role details and interaction area for this scenario
        const interactionContainer = activeScenarioContent.querySelector('.role-interaction-container');
        if (interactionContainer) {
            interactionContainer.innerHTML = '<div class="role-perspective-container"><p>請選擇一個角色開始模擬。</p></div>'; // Reset
        }
        
        // Attach listeners to role cards within this specific scenario
        const roleCards = activeScenarioContent.querySelectorAll('.role-card');
        roleCards.forEach(roleCard => {
            // Remove old listeners to prevent multiple triggers if any
            const newRoleCard = roleCard.cloneNode(true);
            roleCard.parentNode.replaceChild(newRoleCard, roleCard);
            
            newRoleCard.addEventListener('click', () => {
                // Optionally, highlight the selected role card
                roleCards.forEach(rc => rc.classList.remove('selected')); // 'selected' is a hypothetical class
                newRoleCard.classList.add('selected');

                const roleId = newRoleCard.dataset.role;
                if (roleId) {
                    selectRole(scenarioId, roleId);
                }
            });
        });

    } else {
        console.error(`Scenario content for ID '${scenarioId}-scenario' not found.`);
    }
}

// Role Selection for learning_hub.html
function selectRole(scenarioId, roleId) {
    currentRoleId = roleId;
    console.log(`Selected role: ${roleId} in scenario: ${scenarioId}`);

    const scenarioData = scenarios[scenarioId];
    if (!scenarioData || !scenarioData.roles[roleId]) {
        console.error("Role data not found for:", scenarioId, roleId);
        return;
    }
    const roleData = scenarioData.roles[roleId];
    const scenarioContent = document.getElementById(`${scenarioId}-scenario`);
    if (!scenarioContent) {
        console.error(`Scenario content ${scenarioId}-scenario not found for displaying role.`);
        return;
    }

    const interactionContainer = scenarioContent.querySelector('.role-interaction-container');
    if (!interactionContainer) {
        console.error("Interaction container not found in scenario:", scenarioId);
        return;
    }

    // Build the HTML for role perspective, initial situation, and options
    let htmlContent = `
        <div class="role-perspective-container active-role">
            <h4>您選擇的角色：${roleData.name}</h4>
            <p><strong>觀點：</strong> ${roleData.perspective}</p>
            <p><strong>初始情境：</strong> ${roleData.initial_situation}</p>
        </div>
        <div class="interaction-options-container section">
            <h5>您的選項：</h5>
            <ul class="interaction-options-list">
    `;

    roleData.options.forEach(option => {
        htmlContent += `
            <li>
                <button class="interaction-option-button" data-consequence="${option.consequence}">
                    ${option.text}
                </button>
            </li>
        `;
    });

    htmlContent += `
            </ul>
        </div>
        <div class="interaction-outcome-display section" style="display: none;">
            <h6>互動結果：</h6>
            <p></p>
        </div>
    `;

    interactionContainer.innerHTML = htmlContent;

    // Add event listeners to the newly created option buttons
    interactionContainer.querySelectorAll('.interaction-option-button').forEach(button => {
        button.addEventListener('click', () => {
            const consequence = button.dataset.consequence;
            handleInteraction(scenarioId, roleId, consequence);
        });
    });
}

// Interaction Handling for learning_hub.html
function handleInteraction(scenarioId, roleId, optionConsequence) {
    console.log(`Handling interaction: ${optionConsequence} for role ${roleId} in scenario ${scenarioId}`);
    
    const outcomeData = interactionOutcomes[optionConsequence];
    const scenarioContent = document.getElementById(`${scenarioId}-scenario`);
    if (!scenarioContent) return;

    const outcomeDisplayContainer = scenarioContent.querySelector('.interaction-outcome-display');
    const outcomeTextElement = outcomeDisplayContainer ? outcomeDisplayContainer.querySelector('p') : null;

    if (outcomeData && outcomeDisplayContainer && outcomeTextElement) {
        outcomeTextElement.textContent = outcomeData.text;
        outcomeDisplayContainer.style.display = 'block';
        
        // Optionally hide options after selection
        const optionsContainer = scenarioContent.querySelector('.interaction-options-container');
        if (optionsContainer) {
            // optionsContainer.style.display = 'none';
        }
        // Potentially scroll to outcome or provide a "next step" button
    } else {
        console.error("Outcome data or display element not found for:", optionConsequence);
        if (outcomeTextElement) {
            outcomeTextElement.textContent = "此選擇的結果尚未定義，或顯示區域出錯。";
            if(outcomeDisplayContainer) outcomeDisplayContainer.style.display = 'block';
        }
    }
}

// Ensure the init function is called when the DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRolePlay);
} else {
    // DOMContentLoaded has already fired
    initRolePlay();
}

// Example interaction outcomes (needs to be populated for 'crossroads' and 'guardians')
const interactionOutcomes = {
    crossroads_director_option1: { text: "市教育局決定推進神經科學工具的試點計畫，初步選定幾所學校進行小規模實驗，並成立專項小組追蹤評估效果與倫理問題。" },
    crossroads_director_option2: { text: "教育局決定加大對教師人文素養培訓和學生心理輔導資源的投入，強調通過改善教育環境來提升學生福祉。" },
    crossroads_director_option3: { text: "教育局嘗試尋求平衡，計劃引入部分經嚴格評估的神經輔助工具，同時大力加強人文關懷教育，並鼓勵學校探索兩者結合的模式。" },
    crossroads_scientist_option1: { text: "您關於大規模推廣的建議引起了較大爭議，部分與會者對潛在風險表示擔憂，教育局表示將謹慎考慮。" },
    crossroads_scientist_option2: { text: "您提出的從特殊需求學生開始試點的建議獲得了較多認同，被認為是更穩妥和符合倫理的方式。" },
    crossroads_scientist_option3: { text: "您對技術透明度和數據保護的強調，緩解了部分與會者的疑慮，為技術的進一步討論創造了良好氛圍。" },
    // ... (add all other outcomes for crossroads)
    crossroads_principal_option1: { text: "您的堅定立場引發了對教育本質的深入思考，但也被一些人認為過於保守，未能正視新技術的潛力。" },
    crossroads_principal_option2: { text: "您認為技術應嚴格限制在輔助角色的觀點，得到了一些與會者的贊同，認為這是一種務實的平衡。" },
    crossroads_principal_option3: { text: "您分享的人文關懷成功案例，深刻打動了與會者，證明了傳統教育智慧的價值。" },
    crossroads_parent_option1: { text: "您對學業成績的關切代表了許多家長的心聲，教育局表示會重視技術在提升學業方面的應用研究。" },
    crossroads_parent_option2: { text: "您對孩子個性和快樂童年的呼籲引起了共鳴，提醒了決策者不應唯分數論。" },
    crossroads_parent_option3: { text: "您要求政策透明和家長參與的訴求得到了教育局的積極回應，承諾將加強溝通。" },
    crossroads_ethicist_option1: { text: "您對「設計兒童」的倫理風險分析，讓與會者對此類技術的應用更加警惕和審慎。" },
    crossroads_ethicist_option2: { text: "您對「養育兒童」模式中平衡關懷與自由的討論，拓展了研討會的思考維度。" },
    crossroads_ethicist_option3: { text: "您提出的建立倫理審查機制的建議，被認為是確保新技術負責任應用的重要保障措施。" },
    crossroads_student_option1: { text: "學生的心聲讓與會者深受觸動，教育局承諾將更重視學生的學習壓力和心理健康問題。" },
    crossroads_student_option2: { text: "學生對新技術的好奇與擔憂並存，反映了年輕一代對科技發展的複雜態度，提示需要加強引導。" },
    crossroads_student_option3: { text: "學生對多元化發展的期望，啟示教育改革應更注重個性化和多樣性選擇。" },

    guardians_cto_option1: { text: "您的積極推動使得學校決定加快部分技術的試點部署，但倫理委員會強調必須同步制定嚴格的數據監管措施。" },
    guardians_cto_option2: { text: "詳細的數據和效益展示增加了透明度，但隱私律師和學生代表仍對數據收集的範圍和必要性提出質疑。" },
    guardians_cto_option3: { text: "成立技術監督小組的提議獲得普遍認可，被視為增強信任和確保合規的有效途徑。" },
    guardians_lawyer_option1: { text: "您對最嚴格標準的堅持，使得守則初稿在數據匿名化和最小化收集方面設置了較高門檻。" },
    guardians_lawyer_option2: { text: "關於詳細風險告知和書面同意的要求，被納入守則草案，但執行細節仍需進一步討論。" },
    guardians_lawyer_option3: { text: "引入第三方獨立審計的建議受到重視，倫理委員會將探討其可行性。" },
    // ... (add all other outcomes for guardians)
    guardians_teacher_option1: { text: "教師們對AI輔導系統表示期待，希望其能真正減輕負擔並提供個性化支持。" },
    guardians_teacher_option2: { text: "對情緒識別等系統可能造成標籤化的擔憂，促使委員會在守則中加入防止數據誤用的條款。" },
    guardians_teacher_option3: { text: "為教師提供充足培訓的要求被採納，以確保教師能有效且負責任地使用新技術。" },
    'guardians_student-rep_option1': { text: "學生的明確反對使得委員會對情緒識別和注意力追蹤設備的引入持更加審慎的態度，要求進行更充分的倫理評估。" },
    'guardians_student-rep_option2': { text: "學生對數據的知情權和退出權的要求，被認為是合理的，將在守則中予以體現。" },
    'guardians_student-rep_option3': { text: "讓學生參與監督小組的提議，被視為提升守則公平性和接受度的重要舉措。" },
    'guardians_parent-rep_option1': { text: "學校承諾將公佈詳細的數據保護措施，並接受家長的監督。" },
    'guardians_parent-rep_option2': { text: "定期向家長匯報數據使用情況和效果的建議被採納，以增強家校互信。" },
    'guardians_parent-rep_option3': { text: "在家長對子女數據的訪問和控制權方面，委員會同意在法律框架內給予最大程度的保障。" },
    guardians_neuroethicist_option1: { text: "您對「神經權利」的闡述，提升了委員會對神經數據倫理特殊性的認識，對守則的指導思想產生了重要影響。" },
    guardians_neuroethicist_option2: { text: "對不同神經技術特定倫理風險的分析，有助於委員會制定更具針對性的規範條款。" },
    guardians_neuroethicist_option3: { text: "關於算法偏見審查和修正機制的建議，被納入守則，以促進技術的公平應用。" }
}; 