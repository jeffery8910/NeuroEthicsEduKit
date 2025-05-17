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