/**
 * EdTech Sandbox 頁面的 JavaScript 功能
 */

document.addEventListener('DOMContentLoaded', function() {
    // 設置目前年份
    updateCurrentYear();
    
    // 初始化頁面互動元素
    initializeRiskDomainCards();
    
    // 初始化倫理評估檢查清單
    initializeEthicalAssessmentTool();
    
    // 初始化討論問題卡片的顏色對比度
    improveCardColorContrast();
    
    // 初始化設計模式庫
    initializeDesignPatternsLibrary();
    
    // 初始化倫理權衡決策模擬器
    initializeEthicalDecisionSimulator();
});

/**
 * 更新頁腳的目前年份
 */
function updateCurrentYear() {
    const yearElements = document.querySelectorAll('#currentYear');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

/**
 * 為風險領域卡片添加懸停和點擊效果
 */
function initializeRiskDomainCards() {
    const riskDomainCards = document.querySelectorAll('.risk-domain-card');
    
    riskDomainCards.forEach(card => {
        // 添加懸停效果
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
        
        // 添加點擊效果 (未來可擴展為顯示更詳細的信息)
        card.addEventListener('click', function() {
            // 移除其他卡片的活動狀態
            riskDomainCards.forEach(c => c.classList.remove('active'));
            
            // 添加此卡片的活動狀態
            this.classList.add('active');
            
            // 在未來版本中，可以在此處添加顯示詳細信息的邏輯
            // showDomainDetails(this.getAttribute('data-domain-id'));
        });
    });
}

/**
 * 提升卡片顏色對比度的函數
 */
function improveCardColorContrast() {
    // 找到所有藍色背景的卡片，確保其文字為白色
    const blueCards = document.querySelectorAll('.card, .scenario-card, div[style*="background-color: #"]');
    
    blueCards.forEach(card => {
        // 獲取背景顏色
        const computedStyle = window.getComputedStyle(card);
        const bgColor = computedStyle.backgroundColor;
        
        // 如果是深色背景
        if (isColorDark(bgColor)) {
            card.style.color = '#ffffff'; // 設置白色文字
        } else {
            card.style.color = '#333333'; // 設置深色文字
        }
    });
}

/**
 * 判斷顏色是否為深色
 * @param {string} color - CSS顏色值
 * @return {boolean} 是否為深色
 */
function isColorDark(color) {
    // 從rgba(r, g, b, a)或rgb(r, g, b)格式解析顏色
    let r, g, b;
    
    if (color.startsWith('rgba')) {
        const parts = color.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/);
        if (parts) {
            r = parseInt(parts[1], 10);
            g = parseInt(parts[2], 10);
            b = parseInt(parts[3], 10);
        }
    } else if (color.startsWith('rgb')) {
        const parts = color.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
        if (parts) {
            r = parseInt(parts[1], 10);
            g = parseInt(parts[2], 10);
            b = parseInt(parts[3], 10);
        }
    } else {
        // 默認為淺色
        return false;
    }
    
    // 計算亮度（亮度 = 0.299r + 0.587g + 0.114b）
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    // 亮度小於128視為深色
    return brightness < 128;
}

/**
 * 初始化設計模式庫
 */
function initializeDesignPatternsLibrary() {
    const designPatternsContainer = document.getElementById('design-patterns-library');
    if (!designPatternsContainer) return;
    
    // 獲取分類標籤按鈕
    const categoryTabs = designPatternsContainer.querySelectorAll('.category-tab');
    
    // 獲取搜尋輸入框
    const searchInput = designPatternsContainer.querySelector('#pattern-search-input');
    
    // 獲取所有設計模式
    const designPatterns = designPatternsContainer.querySelectorAll('.design-pattern');
    
    // 添加分類標籤點擊事件
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有標籤的 active 狀態
            categoryTabs.forEach(t => t.classList.remove('active'));
            
            // 給當前標籤添加 active 狀態
            this.classList.add('active');
            
            // 取得選擇的分類
            const selectedCategory = this.getAttribute('data-category');
            
            // 過濾設計模式
            filterDesignPatterns(selectedCategory, searchInput.value.trim().toLowerCase());
        });
    });
    
    // 添加搜尋功能
    searchInput.addEventListener('input', function() {
        const activeTab = designPatternsContainer.querySelector('.category-tab.active');
        const selectedCategory = activeTab ? activeTab.getAttribute('data-category') : 'all';
        filterDesignPatterns(selectedCategory, this.value.trim().toLowerCase());
    });
    
    // 為設計模式標題添加點擊事件（展開/折疊內容）
    designPatterns.forEach(pattern => {
        const title = pattern.querySelector('h4');
        const content = pattern.querySelector('.pattern-content');
        
        if (title && content) {
            title.addEventListener('click', function() {
                // 切換內容的顯示狀態
                if (content.style.display === 'none') {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        }
    });
    
    // 過濾設計模式的函數
    function filterDesignPatterns(category, searchText) {
        designPatterns.forEach(pattern => {
            const patternCategories = pattern.getAttribute('data-categories');
            const patternTitle = pattern.querySelector('h4').textContent.toLowerCase();
            const patternContent = pattern.querySelector('.pattern-content').textContent.toLowerCase();
            
            // 判斷是否符合分類條件
            const matchesCategory = category === 'all' || patternCategories.includes(category);
            
            // 判斷是否符合搜尋條件
            const matchesSearch = searchText === '' || 
                                patternTitle.includes(searchText) || 
                                patternContent.includes(searchText);
            
            // 根據過濾結果顯示或隱藏
            if (matchesCategory && matchesSearch) {
                pattern.style.display = 'block';
            } else {
                pattern.style.display = 'none';
            }
        });
    }
}

/**
 * 初始化倫理權衡決策模擬器
 */
function initializeEthicalDecisionSimulator() {
    // 獲取相關元素
    const scenarioContainer = document.getElementById('scenario-container');
    if (!scenarioContainer) return;
    
    const scenarioSelection = document.getElementById('scenario-selection');
    const activeScenario = document.getElementById('active-scenario');
    const scenarioTitle = document.getElementById('scenario-title');
    const scenarioDescription = document.getElementById('scenario-description');
    const dilemmaDescription = document.getElementById('dilemma-description');
    const optionsContainer = document.getElementById('options-container');
    const stakeholderImpact = document.getElementById('stakeholder-impact');
    const impactContainer = document.getElementById('impact-container');
    const principlesAnalysis = document.getElementById('principles-analysis');
    const reflectionQuestion = document.getElementById('reflection-question');
    const resetScenarioButton = document.getElementById('reset-scenario');
    const backToScenariosButton = document.getElementById('back-to-scenarios');
    
    // 場景數據
    const scenarios = {
        "facial-recognition": {
            title: "臉部辨識出席系統",
            description: "您正在為一所大學開發一個使用臉部辨識技術的自動出席追蹤系統。該系統將捕捉教室中的臉部影像，自動識別學生並記錄出席情況，大大提高效率並減少手動點名的時間。",
            dilemma: "然而，這項技術引發了一系列倫理問題。學生的臉部數據是敏感的生物特徵資訊，其收集和存儲需要嚴格的隱私保護措施。此外，有擔憂認為這種持續監控可能創造一種監視文化，影響學習環境的開放性。您需要決定如何平衡效率與隱私保護。",
            options: [
                {
                    text: "全面實施臉部辨識系統，設定嚴格的數據保護措施",
                    impacts: {
                        students: {
                            text: "學生失去匿名性，可能感到被持續監控，但出席記錄更準確。",
                            type: "negative"
                        },
                        teachers: {
                            text: "教師獲得顯著的時間節省和更準確的出席數據。",
                            type: "positive"
                        },
                        administration: {
                            text: "管理者獲得更多數據，但需承擔數據保護的法律責任。",
                            type: "mixed"
                        }
                    },
                    principles: [
                        "效率 vs 隱私：選擇效率優先，但嘗試通過保護措施減輕隱私影響",
                        "資料最小化：需確保只收集必要的面部數據，並有明確的刪除政策",
                        "知情同意：需建立明確的同意機制，告知學生數據如何被使用"
                    ],
                    reflection: "在追求教育效率的過程中，我們應該接受多少監控和隱私犧牲？是否有更尊重隱私的替代技術可以達到類似的目標？"
                },
                {
                    text: "實施基於選擇加入的混合系統，允許學生選擇傳統點名方式",
                    impacts: {
                        students: {
                            text: "學生擁有自主選擇權，但可能出現不平等或社交壓力。",
                            type: "mixed"
                        },
                        teachers: {
                            text: "教師需管理兩套出席系統，增加了複雜性。",
                            type: "negative"
                        },
                        administration: {
                            text: "管理者需處理更複雜的系統，但降低了法律和倫理風險。",
                            type: "mixed"
                        }
                    },
                    principles: [
                        "自主權：尊重學生選擇的權利，平衡個人自主權與系統效率",
                        "公平性：需確保選擇不使用臉部辨識的學生不會受到不公平對待",
                        "透明度：清晰說明兩種系統的優缺點，以便學生做出明智選擇"
                    ],
                    reflection: "給予選擇是否足以保護自主權？在同儕壓力下，選擇退出的自由是否真的存在？如何確保兩組學生得到平等對待？"
                },
                {
                    text: "放棄臉部辨識，改用較不侵入性的替代技術（如ID卡掃描或QR碼）",
                    impacts: {
                        students: {
                            text: "學生隱私受到更多保護，但需要記得攜帶ID或設備。",
                            type: "positive"
                        },
                        teachers: {
                            text: "教師獲得部分自動化，但仍需處理遺忘ID的情況。",
                            type: "mixed"
                        },
                        administration: {
                            text: "管理者在法律和倫理風險較低的情況下實現部分效率提升。",
                            type: "positive"
                        }
                    },
                    principles: [
                        "隱私優先：選擇保護學生隱私高於最大效率",
                        "技術適度：使用足以滿足需求而不過度收集數據的技術",
                        "風險比例：採用與目標相比風險更低的解決方案"
                    ],
                    reflection: "在教育技術中，我們應該如何確定「足夠好」和「過度」的平衡點？效率和便利性的增益是否足以證明引入更具侵入性技術的合理性？"
                }
            ]
        },
        "predictive-analytics": {
            title: "預測性學習分析",
            description: "您正在設計一個使用 AI 分析學生歷史數據，預測其學業成功可能性的系統。該系統旨在識別可能需要額外支持的高風險學生，以便教師和輔導員能夠及早干預。",
            dilemma: "這種預測模型可能有助於提高學生成功率，但也存在標籤學生和強化已有偏見的風險。預測可能成為自我實現的預言，特別是如果教師知道學生被系統標記為「高風險」。您需要決定如何平衡早期干預的益處與潛在的負面標籤效應。",
            options: [
                {
                    text: "全面實施，但僅向輔導員而非教師顯示風險預測",
                    impacts: {
                        students: {
                            text: "高風險學生可能獲得額外支持，但可能不知道自己被系統標記。",
                            type: "mixed"
                        },
                        teachers: {
                            text: "教師獲得干預建議，但不受預測結果偏見影響。",
                            type: "positive"
                        },
                        counselors: {
                            text: "輔導員獲得豐富工具，但需判斷預測的準確性和適當干預。",
                            type: "mixed"
                        }
                    },
                    principles: [
                        "最小化傷害：限制預測訪問以減少標籤效應",
                        "公正公平：通過限制信息訪問來降低偏見風險",
                        "支持自主性：保護學生不受自動預測的潛在影響"
                    ],
                    reflection: "誰應有權查看關於學生的預測數據？隱藏信息是否比開放透明更符合倫理？如何確保這些系統不會強化既有不平等？"
                },
                {
                    text: "以透明方式實施，向所有利益相關者（包括學生本人）顯示預測及其依據",
                    impacts: {
                        students: {
                            text: "學生獲得自我了解工具，但可能受到消極預測的心理影響。",
                            type: "mixed"
                        },
                        teachers: {
                            text: "教師獲得豐富信息，但需培訓以避免基於預測的偏見。",
                            type: "mixed"
                        },
                        parents: {
                            text: "家長更了解子女情況，但可能對負面預測反應過度。",
                            type: "mixed"
                        }
                    },
                    principles: [
                        "透明度：向所有人開放系統運作方式和決策依據",
                        "賦權：為學生提供關於自己學習軌跡的信息",
                        "責任共擔：讓所有參與者共同負責適當使用預測"
                    ],
                    reflection: "透明是否總是最佳政策？學生得知自己被歸類為「高風險」會如何反應？這種標籤如何影響學生的自我認知和教師的期望？"
                },
                {
                    text: "實施更有限的系統，僅識別可能需要特定支持的具體學習困難領域，而非整體「風險評級」",
                    impacts: {
                        students: {
                            text: "學生獲得針對性支持，避免籠統標籤的負面影響。",
                            type: "positive"
                        },
                        teachers: {
                            text: "教師獲得實用的干預指南，而非籠統預測。",
                            type: "positive"
                        },
                        administration: {
                            text: "管理者獲得更精確的資源分配工具，但系統複雜性提高。",
                            type: "mixed"
                        }
                    },
                    principles: [
                        "精確性：避免籠統標籤，專注於具體、可行的干預點",
                        "有目的性：限制系統範圍以匹配明確的教育目標",
                        "尊重：避免將學生簡化為單一風險分數"
                    ],
                    reflection: "AI 預測在教育中應如何發揮最佳作用？如何衡量預測系統潛在好處與傷害的平衡點？技術複雜度與實用性之間的適當平衡是什麼？"
                }
            ]
        },
        "emotional-analysis": {
            title: "學生情緒分析工具",
            description: "您正在開發一個分析學生在線學習參與度和情緒狀態的工具。該系統能夠通過分析用戶在學習平台上的互動模式、文字輸入和（可選）網絡攝像頭捕捉的面部表情，評估學生的注意力、困惑或挫折等情緒狀態。",
            dilemma: "這個工具可以幫助教師提供更具針對性的情感支持和指導，特別是在遠程學習環境中。然而，它涉及收集和分析高度敏感的心理和行為數據，引發重大隱私和自主權問題。您需要決定如何平衡教育支持與情感監控的倫理界限。",
            options: [
                {
                    text: "實施完整系統，包括基於文字和可選的面部分析，但需明確選擇加入",
                    impacts: {
                        students: {
                            text: "學生可能獲得更好的情感支持，但面臨隱私和自我表達自由的顧慮。",
                            type: "mixed"
                        },
                        teachers: {
                            text: "教師獲得新的學生困難洞察，但需謹慎解釋情緒數據。",
                            type: "mixed"
                        },
                        parents: {
                            text: "家長可能獲得子女情緒參與度的新洞察，但可能過度監控。",
                            type: "mixed"
                        }
                    },
                    principles: [
                        "選擇權：尊重學生選擇參與程度的自主權",
                        "資料審慎：收集情緒數據時採取最高隱私保護標準",
                        "明確目的：確保情緒數據僅用於支持教育目標"
                    ],
                    reflection: "情感監控在教育中的道德界限在哪裡？選擇加入模式在權力不平等的師生關係中是否有效？如何確保情感數據不被濫用？"
                },
                {
                    text: "僅實施基於文字和學習互動的分析，完全排除面部或音頻分析",
                    impacts: {
                        students: {
                            text: "學生隱私得到更好保護，減少感知的監控感。",
                            type: "positive"
                        },
                        teachers: {
                            text: "教師仍獲得部分洞察，但缺乏面部表情等重要情感線索。",
                            type: "mixed"
                        },
                        developers: {
                            text: "開發團隊需面對技術挑戰，但減輕倫理和法律風險。",
                            type: "mixed"
                        }
                    },
                    principles: [
                        "比例性：選擇侵入性較低但仍有用的監控水平",
                        "理性限制：設置清晰的數據收集界限",
                        "透明度：清晰說明如何從行為和文字推斷情緒"
                    ],
                    reflection: "我們可以從數字足跡中推斷出多少關於學生內在狀態的信息是適當的？情感分析技術的準確性和文化偏見如何影響其教育價值？"
                },
                {
                    text: "徹底重新設計為一個以學生為主導的反思工具，而非教師監控工具",
                    impacts: {
                        students: {
                            text: "學生獲得自我反思工具，保持情緒數據的完全控制權。",
                            type: "positive"
                        },
                        teachers: {
                            text: "教師失去直接洞察，但培養學生自我調節能力。",
                            type: "mixed"
                        },
                        institutions: {
                            text: "機構推動更以學生為中心的方法，減輕法律風險。",
                            type: "positive"
                        }
                    },
                    principles: [
                        "賦能而非監控：改變工具基本目的",
                        "自主權：將控制權交給學生自己",
                        "教育目的：將情緒認識整合為學習目標本身"
                    ],
                    reflection: "情緒智能技術最好作為監控工具還是自我反思工具？如何設計技術增強而非取代情感理解的人際互動？誰應該擁有學生情緒數據？"
                }
            ]
        }
    };
    
    // 為每個場景卡添加點擊事件
    const scenarioCards = scenarioSelection.querySelectorAll('.scenario-card');
    scenarioCards.forEach(card => {
        const selectButton = card.querySelector('.scenario-select-btn');
        if (selectButton) {
            selectButton.addEventListener('click', function() {
                const scenarioId = card.getAttribute('data-scenario');
                if (scenarios[scenarioId]) {
                    showScenario(scenarioId);
                }
            });
        }
    });
    
    // 點擊「返回情境列表」按鈕
    if (backToScenariosButton) {
        backToScenariosButton.addEventListener('click', function() {
            scenarioSelection.style.display = 'block';
            activeScenario.style.display = 'none';
            stakeholderImpact.style.display = 'none';
        });
    }
    
    // 點擊「嘗試不同決策」按鈕
    if (resetScenarioButton) {
        resetScenarioButton.addEventListener('click', function() {
            const currentScenarioId = activeScenario.getAttribute('data-current-scenario');
            if (currentScenarioId && scenarios[currentScenarioId]) {
                showScenario(currentScenarioId);
            }
        });
    }
    
    // 顯示特定場景
    function showScenario(scenarioId) {
        const scenario = scenarios[scenarioId];
        if (!scenario) return;
        
        // 設置當前場景ID（用於重置按鈕）
        activeScenario.setAttribute('data-current-scenario', scenarioId);
        
        // 更新場景標題和描述
        scenarioTitle.textContent = scenario.title;
        scenarioDescription.textContent = scenario.description;
        dilemmaDescription.textContent = scenario.dilemma;
        
        // 生成決策選項
        optionsContainer.innerHTML = '';
        scenario.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.classList.add('decision-btn');
            button.addEventListener('click', function() {
                showImpact(scenarioId, index);
            });
            optionsContainer.appendChild(button);
        });
        
        // 隱藏利益相關者影響區域，顯示活動場景
        stakeholderImpact.style.display = 'none';
        scenarioSelection.style.display = 'none';
        activeScenario.style.display = 'block';
    }
    
    // 顯示決策影響
    function showImpact(scenarioId, optionIndex) {
        const scenario = scenarios[scenarioId];
        if (!scenario || !scenario.options[optionIndex]) return;
        
        const option = scenario.options[optionIndex];
        
        // 生成利益相關者影響HTML
        impactContainer.innerHTML = '';
        Object.keys(option.impacts).forEach(stakeholder => {
            const impact = option.impacts[stakeholder];
            const div = document.createElement('div');
            div.classList.add('stakeholder-group', `${impact.type}-impact`);
            div.innerHTML = `
                <h6>${capitalizeFirstLetter(stakeholder)}</h6>
                <p>${impact.text}</p>
            `;
            impactContainer.appendChild(div);
        });
        
        // 生成倫理原則分析HTML
        principlesAnalysis.innerHTML = '';
        option.principles.forEach(principle => {
            const div = document.createElement('div');
            div.classList.add('principle-item');
            div.innerHTML = `<p>${principle}</p>`;
            principlesAnalysis.appendChild(div);
        });
        
        // 設置反思問題
        reflectionQuestion.textContent = option.reflection;
        
        // 顯示影響區域，禁用決策按鈕
        stakeholderImpact.style.display = 'block';
        const decisionButtons = optionsContainer.querySelectorAll('.decision-btn');
        decisionButtons.forEach(btn => {
            btn.disabled = true;
        });
    }
    
    // 輔助函數：首字母大寫
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

/**
 * 教育科技倫理評估檢查清單工具
 */
function initializeEthicalAssessmentTool() {
    // 獲取元素引用
    const questionContainer = document.getElementById('question-container');
    const prevButton = document.getElementById('prevQuestion');
    const nextButton = document.getElementById('nextQuestion');
    const generateReportButton = document.getElementById('generateReport');
    const assessmentResults = document.getElementById('assessment-results');
    const reportContent = document.getElementById('report-content');
    const restartButton = document.getElementById('restartAssessment');
    
    // 問題數據（完全在客戶端，避免跨域請求）
    const questions = [
        {
            id: 1,
            title: "數據收集與隱私",
            description: "您的 EdTech 解決方案如何處理學生數據收集和隱私保護？",
            options: [
                { id: "1a", text: "我們收集最少必要的數據，有明確的隱私政策，並獲得明確同意", score: 3 },
                { id: "1b", text: "我們收集一些數據用於功能運作，有基本的隱私政策", score: 2 },
                { id: "1c", text: "我們廣泛收集數據以提升產品，用戶可以選擇退出部分數據收集", score: 1 },
                { id: "1d", text: "我們根據需要收集用戶數據，目前沒有詳細的隱私政策", score: 0 }
            ],
            category: "privacy",
            weight: 1.5
        },
        {
            id: 2,
            title: "用戶同意機制",
            description: "您的解決方案如何獲取用戶（包括學生和教師）對數據使用的同意？",
            options: [
                { id: "2a", text: "採用分層式、清晰易懂的同意流程，針對不同年齡段學生有不同處理方式", score: 3 },
                { id: "2b", text: "有標準的同意機制，包括選擇退出的選項", score: 2 },
                { id: "2c", text: "通過服務條款和隱私政策獲取同意，但缺乏精細控制", score: 1 },
                { id: "2d", text: "使用產品默認表示同意所有數據收集和使用", score: 0 }
            ],
            category: "privacy",
            weight: 1.2
        },
        {
            id: 3,
            title: "演算法透明度",
            description: "您的 EdTech 解決方案中的演算法（如推薦系統、學習分析等）對用戶的透明度如何？",
            options: [
                { id: "3a", text: "完全透明的演算法邏輯，用戶可以理解為何獲得特定推薦或評估", score: 3 },
                { id: "3b", text: "提供演算法工作原理的高層次說明，但不涉及具體技術細節", score: 2 },
                { id: "3c", text: "僅提供有限的信息說明系統如何工作", score: 1 },
                { id: "3d", text: "演算法作為商業機密，不向用戶公開其工作原理", score: 0 }
            ],
            category: "transparency",
            weight: 1.0
        },
        {
            id: 4,
            title: "偏見與公平性",
            description: "您的解決方案如何確保不產生或加劇針對不同群體的偏見和不公平？",
            options: [
                { id: "4a", text: "我們定期進行偏見審計，有多元化團隊參與設計，並採取積極措施解決發現的問題", score: 3 },
                { id: "4b", text: "我們考慮了偏見問題，並在設計中採取了一些減輕措施", score: 2 },
                { id: "4c", text: "我們認識到可能存在偏見，但尚未系統性地處理", score: 1 },
                { id: "4d", text: "我們的系統是基於數據運作的，如果存在偏見，那是因為現實世界本身有偏見", score: 0 }
            ],
            category: "fairness",
            weight: 1.3
        },
        {
            id: 5,
            title: "使用者自主權",
            description: "您的解決方案如何確保學生和教師保持對技術使用的自主權和控制權？",
            options: [
                { id: "5a", text: "我們提供完全控制和自定義選項，包括使用範圍、數據控制和退出機制", score: 3 },
                { id: "5b", text: "我們提供多種設置選項，用戶可以調整主要功能和數據共享偏好", score: 2 },
                { id: "5c", text: "用戶可以進行一些基本設置，但核心功能和數據收集不可調整", score: 1 },
                { id: "5d", text: "我們的解決方案設計為標準化體驗，定制選項有限", score: 0 }
            ],
            category: "autonomy",
            weight: 1.2
        },
        {
            id: 6,
            title: "可及性與包容性",
            description: "您的解決方案如何確保不同能力、背景和資源水平的學生都能有效使用？",
            options: [
                { id: "6a", text: "我們採用通用設計原則，符合可及性標準，並與多元用戶群體測試", score: 3 },
                { id: "6b", text: "我們實施了主要可及性功能，但未經不同用戶群體全面測試", score: 2 },
                { id: "6c", text: "我們意識到可及性的重要性，計劃在未來版本改進", score: 1 },
                { id: "6d", text: "我們專注於主流用戶，目前可及性不是優先事項", score: 0 }
            ],
            category: "inclusivity",
            weight: 1.1
        },
        {
            id: 7,
            title: "問責機制",
            description: "如果您的解決方案產生負面影響或出現問題，有哪些問責和補救機制？",
            options: [
                { id: "7a", text: "我們有完整的問責框架，包括監督、反饋渠道、定期審計和公開報告", score: 3 },
                { id: "7b", text: "我們有基本的反饋機制和內部審查流程", score: 2 },
                { id: "7c", text: "我們有客戶支持渠道處理問題，但沒有正式的問責框架", score: 1 },
                { id: "7d", text: "我們按照行業標準慣例運營，負責任地處理出現的問題", score: 0 }
            ],
            category: "accountability",
            weight: 1.0
        }
    ];
    
    // 用戶回答
    let userAnswers = {};
    
    // 目前問題索引
    let currentQuestionIndex = 0;
    
    // 載入第一個問題
    loadQuestion(currentQuestionIndex);
    
    // 事件監聽器
    prevButton.addEventListener('click', function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
            updateButtonState();
        }
    });
    
    nextButton.addEventListener('click', function() {
        // 保存目前問題的回答
        saveCurrentAnswer();
        
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
            updateButtonState();
        } else {
            // 如果是最後一個問題，顯示生成報告按鈕
            nextButton.style.display = 'none';
            generateReportButton.style.display = 'block';
        }
    });
    
    generateReportButton.addEventListener('click', function() {
        // 保存最後一個問題的回答
        saveCurrentAnswer();
        
        // 生成並顯示報告
        generateReport();
        
        // 隱藏問題表單，顯示結果
        document.getElementById('assessment-form').style.display = 'none';
        assessmentResults.style.display = 'block';
    });
    
    restartButton.addEventListener('click', function() {
        // 重置評估
        userAnswers = {};
        currentQuestionIndex = 0;
        loadQuestion(currentQuestionIndex);
        updateButtonState();
        
        // 隱藏結果，顯示問題表單
        assessmentResults.style.display = 'none';
        document.getElementById('assessment-form').style.display = 'block';
        
        // 重置按鈕狀態
        nextButton.style.display = 'block';
        generateReportButton.style.display = 'none';
    });
    
    // 載入問題函數
    function loadQuestion(index) {
        const question = questions[index];
        
        let html = `
            <div class="question-title">問題 ${index + 1}/${questions.length}: ${question.title}</div>
            <div class="question-description">${question.description}</div>
            <div class="options-container">
        `;
        
        question.options.forEach(option => {
            const checked = userAnswers[question.id] === option.id ? 'checked' : '';
            html += `
                <div class="option-item">
                    <input type="radio" id="${option.id}" name="question${question.id}" value="${option.id}" ${checked}>
                    <label for="${option.id}">${option.text}</label>
                </div>
            `;
        });
        
        html += `</div>`;
        
        questionContainer.innerHTML = html;
        
        // 確保點擊整個選項區域都能選中單選按鈕
        document.querySelectorAll('.option-item').forEach(item => {
            item.addEventListener('click', function() {
                const radio = this.querySelector('input[type="radio"]');
                if (radio) {
                    radio.checked = true;
                }
            });
        });
    }
    
    // 保存目前問題的回答
    function saveCurrentAnswer() {
        const question = questions[currentQuestionIndex];
        const selectedOption = document.querySelector(`input[name="question${question.id}"]:checked`);
        
        if (selectedOption) {
            userAnswers[question.id] = selectedOption.value;
        }
    }
    
    // 更新按鈕狀態
    function updateButtonState() {
        prevButton.disabled = currentQuestionIndex === 0;
        nextButton.style.display = 'block';
        generateReportButton.style.display = 'none';
    }
    
    // 生成評估報告
    function generateReport() {
        // 計算各類別得分
        let scores = {
            privacy: { total: 0, count: 0 },
            transparency: { total: 0, count: 0 },
            fairness: { total: 0, count: 0 },
            autonomy: { total: 0, count: 0 },
            inclusivity: { total: 0, count: 0 },
            accountability: { total: 0, count: 0 }
        };
        
        let totalScore = 0;
        let maxPossibleScore = 0;
        
        questions.forEach(question => {
            const answerId = userAnswers[question.id];
            if (answerId) {
                const option = question.options.find(opt => opt.id === answerId);
                if (option) {
                    const weightedScore = option.score * question.weight;
                    scores[question.category].total += weightedScore;
                    scores[question.category].count++;
                    totalScore += weightedScore;
                    maxPossibleScore += 3 * question.weight; // 3 是每個問題的最高分
                }
            }
        });
        
        // 計算百分比總分
        const percentageScore = Math.round((totalScore / maxPossibleScore) * 100);
        
        // 確定風險級別
        let riskLevel, riskColor;
        if (percentageScore >= 80) {
            riskLevel = "低";
            riskColor = "risk-low";
        } else if (percentageScore >= 50) {
            riskLevel = "中";
            riskColor = "risk-medium";
        } else {
            riskLevel = "高";
            riskColor = "risk-high";
        }
        
        // 生成風險項目
        let riskItems = [];
        
        Object.keys(scores).forEach(category => {
            if (scores[category].count > 0) {
                const categoryScore = scores[category].total / scores[category].count;
                
                // 根據類別和得分生成風險評估
                if (category === 'privacy' && categoryScore < 2) {
                    riskItems.push({
                        category: '數據隱私',
                        description: '您的解決方案在數據隱私保護方面存在顯著風險。建議重新評估數據收集政策和同意機制。',
                        level: 'risk-high'
                    });
                } else if (category === 'transparency' && categoryScore < 2) {
                    riskItems.push({
                        category: '透明度',
                        description: '用戶可能對系統如何工作和決策如何做出缺乏理解，增加演算法的透明度將提高信任度和接受度。',
                        level: categoryScore < 1 ? 'risk-high' : 'risk-medium'
                    });
                } else if (category === 'fairness' && categoryScore < 2) {
                    riskItems.push({
                        category: '公平性與偏見',
                        description: '您的解決方案可能存在對某些用戶群體的偏見風險，建議進行偏見審計和多元化測試。',
                        level: categoryScore < 1 ? 'risk-high' : 'risk-medium'
                    });
                } else if (category === 'autonomy' && categoryScore < 2) {
                    riskItems.push({
                        category: '用戶自主權',
                        description: '增強用戶對系統使用和數據控制的自主權，可以提高接受度並減少潛在的倫理問題。',
                        level: categoryScore < 1 ? 'risk-high' : 'risk-medium'
                    });
                } else if (category === 'inclusivity' && categoryScore < 2) {
                    riskItems.push({
                        category: '可及性與包容性',
                        description: '您的解決方案可能無法滿足所有潛在用戶的需求，特別是有特殊需求的用戶。',
                        level: categoryScore < 1 ? 'risk-high' : 'risk-medium'
                    });
                } else if (category === 'accountability' && categoryScore < 2) {
                    riskItems.push({
                        category: '問責機制',
                        description: '建立更健全的問責和反饋機制，確保能及時發現和解決潛在問題。',
                        level: categoryScore < 1 ? 'risk-high' : 'risk-medium'
                    });
                }
            }
        });
        
        // 生成建議
        let recommendations = [];
        
        if (scores.privacy.count > 0 && scores.privacy.total / scores.privacy.count < 2.5) {
            recommendations.push('制定更全面的隱私政策，明確說明數據收集、使用和保護措施。');
            recommendations.push('實施數據最小化原則，只收集實現教育目標所必需的數據。');
        }
        
        if (scores.transparency.count > 0 && scores.transparency.total / scores.transparency.count < 2.5) {
            recommendations.push('提供關於系統如何運作的更透明解釋，特別是涉及學生評估或內容推薦的演算法。');
            recommendations.push('考慮開發教師和學生友好的文檔，解釋系統決策的基本原理。');
        }
        
        if (scores.fairness.count > 0 && scores.fairness.total / scores.fairness.count < 2.5) {
            recommendations.push('對您的系統進行偏見審計，特別關注對不同背景和能力學生的影響。');
            recommendations.push('確保多元化團隊參與產品設計和測試過程。');
        }
        
        if (scores.autonomy.count > 0 && scores.autonomy.total / scores.autonomy.count < 2.5) {
            recommendations.push('增加用戶控制選項，讓教師和學生能夠更靈活地調整系統行為。');
            recommendations.push('提供明確的退出機制，確保用戶能夠選擇不使用特定功能。');
        }
        
        if (scores.inclusivity.count > 0 && scores.inclusivity.total / scores.inclusivity.count < 2.5) {
            recommendations.push('實施通用設計原則，確保所有學生都能有效使用您的解決方案。');
            recommendations.push('與具有不同能力和背景的學生一起測試您的產品，確保沒有群體被排除在外。');
        }
        
        if (scores.accountability.count > 0 && scores.accountability.total / scores.accountability.count < 2.5) {
            recommendations.push('建立明確的問責框架，包括定期審查和改進機制。');
            recommendations.push('設立用戶反饋渠道，並確保反饋能夠轉化為實際改進。');
        }
        
        // 構建報告 HTML
        let reportHtml = `
            <div class="report-overview">
                <h5>評估總覽</h5>
                <p>基於您的回答，您的 EdTech 解決方案的倫理設計得分為 <strong>${percentageScore}%</strong>，整體風險級別為 <strong class="${riskColor}">${riskLevel}</strong>。</p>
            </div>
            
            <div class="report-section">
                <h5>風險領域</h5>
        `;
        
        if (riskItems.length === 0) {
            reportHtml += `<p>恭喜！您的解決方案在評估的倫理領域中沒有發現顯著風險。</p>`;
        } else {
            riskItems.forEach(item => {
                reportHtml += `
                    <div class="risk-item ${item.level}">
                        <strong>${item.category}：</strong> ${item.description}
                    </div>
                `;
            });
        }
        
        reportHtml += `
            </div>
            
            <div class="report-section">
                <h5>改進建議</h5>
        `;
        
        if (recommendations.length === 0) {
            reportHtml += `<p>您的解決方案在倫理設計方面表現優秀。繼續保持這些良好實踐！</p>`;
        } else {
            recommendations.forEach(recommendation => {
                reportHtml += `<div class="recommendation-item">${recommendation}</div>`;
            });
        }
        
        reportHtml += `
            </div>
            
            <div class="report-section">
                <h5>後續步驟</h5>
                <p>我們建議您：</p>
                <ul>
                    <li>與您的團隊分享這份報告，討論如何實施改進建議</li>
                    <li>將倫理風險評估納入您的常規產品開發流程</li>
                    <li>考慮諮詢教育倫理專家，進一步改進您的解決方案</li>
                </ul>
            </div>
        `;
        
        // 更新報告內容
        reportContent.innerHTML = reportHtml;
    }
}

/**
 * 未來功能：從服務器獲取最新的風險評估工具包數據
 */
function fetchEthicalRiskAssessmentToolkit() {
    fetch('../assets/data/module4_edtech_sandbox/ethical_risk_assessment_toolkit.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('網絡錯誤，無法獲取風險評估工具包數據');
            }
            return response.json();
        })
        .then(data => {
            // 處理獲取的數據
            // updateRiskAssessmentContent(data);
            console.log('成功載入風險評估工具包數據');
        })
        .catch(error => {
            console.error('獲取風險評估工具包數據時發生錯誤:', error);
        });
}

/**
 * 未來功能：為即將推出的互動工具添加計時器顯示
 */
function initializeFeatureTimers() {
    const featureStatusElements = document.querySelectorAll('.feature-status');
    
    featureStatusElements.forEach(element => {
        const releaseDate = element.getAttribute('data-release-date');
        if (releaseDate) {
            updateCountdown(element, new Date(releaseDate));
            
            // 每天更新一次倒計時
            setInterval(() => {
                updateCountdown(element, new Date(releaseDate));
            }, 86400000); // 24小時 = 86400000毫秒
        }
    });
}

/**
 * 未來功能：顯示到指定日期的倒計時
 */
function updateCountdown(element, targetDate) {
    const currentDate = new Date();
    const timeDiff = targetDate - currentDate;
    
    if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        element.textContent = `即將推出 - 還有${days}天`;
    } else {
        element.textContent = '即將推出！';
    }
} 