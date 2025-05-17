const scenarios = {
    "crossroads": {
        title: "教育的十字路口",
        description: "面對學生心理健康問題增多、學業競爭壓力加劇的現狀，市教育局召開研討會，討論未來的教育發展方向。兩種主要的教育哲學產生碰撞...",
        roles: [
            { id: "director", name: "教育局局長", icon: "👨‍💼", perspective: "尋求能快速提升教育質量、應對社會輿論的政策方案。", options: [
                { text: "優先推動神經技術試點，提升效率與創新形象。", outcomeKey: "option_tech_focus" },
                { text: "強調人文關懷與教師賦能，回歸教育本質。", outcomeKey: "option_holistic_focus" },
                { text: "嘗試平衡技術引進與人文關懷，雙管齊下。", outcomeKey: "option_balanced_approach" },
                { text: "暫緩大規模調整，進行更多調研，觀察情況。", outcomeKey: "option_wait_and_see" }
            ] },
            { id: "scientist", name: "神經科學家", icon: "🧠", perspective: "介紹神經技術在提升學習效率方面的潛力。", options: [
                { text: "積極倡導神經技術的潛力與應用前景。", outcomeKey: "option_advocate_potential" },
                { text: "強調技術的局限性，建議謹慎開展研究。", outcomeKey: "option_warn_limitations" },
                { text: "提出具體的、有倫理監督的試點研究方案。", outcomeKey: "option_propose_pilot" }
            ] },
            { id: "principal", name: "資深校長", icon: "👩‍🏫", perspective: "強調教育的整體性和複雜性，主張「養育」模式。", options: [
                { text: "堅定支持人文關懷，強調教育的溫度。", outcomeKey: "option_stress_human_touch" },
                { text: "建議整合科技優勢與人文關懷，尋求平衡點。", outcomeKey: "option_suggest_integrated_approach" },
                { text: "公開表達對過度技術化的擔憂，呼籲社會反思。", outcomeKey: "option_share_concerns_publicly" }
            ] },
            { id: "parent", name: "家長聯盟代表", icon: "👨‍👩‍👧‍👦", perspective: "對新技術抱有期待，但也擔憂孩子的自主性受損。", options: [
                { text: "要求學校展示新技術能帶來可衡量的學業成果提升。", outcomeKey: "option_demand_results" },
                { text: "強烈表達對學生數據隱私和心理健康的擔憂。", outcomeKey: "option_voice_privacy_concerns" },
                { text: "呼籲學校、家長、專家之間進行更多公開對話和共同決策。", outcomeKey: "option_seek_more_dialogue" }
            ] },
            { id: "ethicist", name: "倫理學家", icon: "⚖️", perspective: "分析兩種模式背後的哲學假設和倫理風險。", options: [
                { text: "重點警示「設計兒童」模式對學生自主性的潛在侵害。", outcomeKey: "option_highlight_risks_autonomy" },
                { text: "提出一個包含多方觀點的教育倫理決策框架。", outcomeKey: "option_propose_framework" },
                { text: "呼籲決策過程透明化，並納入更廣泛的公眾參與。", outcomeKey: "option_facilitate_deliberation" }
            ] },
            { id: "student", name: "學生代表", icon: "👨‍🎓", perspective: "表達對當前教育壓力的感受和對未來的期望。", options: [
                { text: "坦誠表達當前教育環境帶來的巨大壓力與焦慮。", outcomeKey: "option_express_pressure" },
                { text: "期望教育能更關注個體差異和未來真正所需的能力。", outcomeKey: "option_desire_relevant_learning" },
                { text: "呼籲學校和社會更加重視學生的身心健康與全面發展。", outcomeKey: "option_concern_wellbeing" }
            ] }
        ]
    },
    "guardians": {
        title: "未來教室的「神經守護者」",
        description: "學校計劃引入一系列涉及收集和使用學生（神經）數據的技術。倫理委員會需要制定一套《學生神經數據使用倫理守則》。",
        roles: [
            { id: "cto", name: "學校技術長", icon: "👩‍💻", perspective: "負責推動技術創新，希望守則能促進技術應用。", options: [
                { text: "主張守則應鼓勵創新，最大限度發揮技術潛力。", outcomeKey: "option_push_innovation" },
                { text: "強調制定清晰倫理框架優先於快速引進未成熟技術。", outcomeKey: "option_prioritize_ethics_framework" },
                { text: "建議積極尋求與領先科技公司合作，加速技術落地。", outcomeKey: "option_seek_external_partnerships" }
            ] },
            { id: "lawyer", name: "數據隱私律師", icon: "👨‍⚖️", perspective: "強調法律合規、數據最小化和知情同意的嚴格性。", options: [
                { text: "堅持所有數據操作必須嚴格遵守現有法律法規的最高標準。", outcomeKey: "option_strict_compliance" },
                { text: "建議在法律框架內尋求彈性，避免扼殺必要的教育創新。", outcomeKey: "option_flexible_interpretation" },
                { text: "主導制定詳細的內部數據使用指南和培訓計劃。", outcomeKey: "option_develop_internal_guidelines" }
            ] },
            { id: "teacher", name: "教師代表", icon: "👩‍🏫", perspective: "希望能利用數據改善教學，但擔心數據誤讀的風險。", options: [
                { text: "積極探索如何利用數據分析工具改進個性化教學。", outcomeKey: "option_utilize_data_improve_teaching" },
                { text: "表達對數據誤讀、增加工作負擔以及潛在標籤化學生的擔憂。", outcomeKey: "option_voice_concerns_data_misinterpretation" },
                { text: "建議與技術開發者緊密合作，確保工具的教育實用性。", outcomeKey: "option_collaborate_devs_provide_feedback" }
            ] },
            { id: "student-rep", name: "學生會代表", icon: "👨‍🎓", perspective: "關注同學的隱私權和對技術監控的潛在反感。", options: [
                { text: "堅決主張保護學生個人數據隱私，反對任何形式的濫用。", outcomeKey: "option_advocate_privacy_rights" },
                { text: "表達對持續性技術監控可能造成的心理壓力和不適感。", outcomeKey: "option_express_discomfort_surveillance" },
                { text: "要求學校對學生數據的使用方式、目的和範圍保持完全透明。", outcomeKey: "option_request_transparency_data_usage" }
            ] },
            { id: "parent-rep", name: "家長教師協會代表", icon: "👨‍👩‍👧", perspective: "希望安全有效地使用技術，但對數據流向表示關切。", options: [
                { text: "堅持要求學校確保所引進技術的安全性和明確的教育有效性。", outcomeKey: "option_demand_security_effectiveness" },
                { text: "對學生數據可能與第三方共享表示嚴重關切，要求明確政策。", outcomeKey: "option_concern_data_sharing_third_parties" },
                { text: "提議成立由家長參與的數據倫理監督小組。", outcomeKey: "option_propose_parent_oversight_committee" }
            ] },
            { id: "neuroethicist", name: "神經倫理學研究員", icon: "🧠", perspective: "提供關於神經數據特殊性和「神經權利」的專業意見。", options: [
                { text: "詳細解釋神經數據的特殊敏感性及其對個人身份的影響。", outcomeKey: "option_explain_neurodata_sensitivity" },
                { text: "警告新技術潛在的雙重用途及非預期後果。", outcomeKey: "option_warn_dual_use_potential" },
                { text: "引入國際「神經權利」概念，建議納入守則核心原則。", outcomeKey: "option_introduce_neurorights_concept" }
            ] }
        ]
    }
};

// 添加波紋效果的輔助函數
function createRippleEffect(event, button) {
    // 創建波紋元素
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    button.appendChild(ripple);
    
    // 設置波紋位置
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    // 動畫結束後移除波紋元素
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

const interactionOutcomes = {
    "crossroads": {
        "director": {
            "option_tech_focus": {
                "summary": "市教育局開始推動一系列基於神經技術的試點項目。",
                "elements": [
                    { "type": "quote", "source": "家長代表", "text": "「我們對孩子們的數據隱私非常擔憂，這一切發生得太快了！」" },
                    { "type": "news_snippet", "source": "市日報", "text": "「教育局的創新科技試點計劃今日啟動，局長表示此舉旨在提升教學質量，但有專家指出潛在倫理風險不容忽視。」" },
                    { "type": "impact_assessment", "area": "公眾反應", "assessment": "褒貶不一，部分支持創新，部分擔憂倫理。" },
                    { "type": "reflection_prompt", "prompt": "面對初步的社會反響，您作為局長，下一步會優先考慮什麼？（例如：加強公眾溝通、啟動獨立倫理評估、或擴大試點範圍？）" }
                ]
            },
            "option_holistic_focus": {
                "summary": "教育局政策重心轉向加強教師培訓與人文素養課程，獲得普遍支持。",
                "elements": [
                    { "type": "quote", "source": "資深教師", "text": "「這才是回歸教育的本質，我們感到非常振奮！」" },
                    { "type": "news_snippet", "source": "教育頻道評論", "text": "「教育局的『人文關懷優先』政策受到廣泛好評，但也有聲音質疑其在科技時代的長遠影響力及改革效率。」" },
                    { "type": "impact_assessment", "area": "教師士氣", "assessment": "顯著提升。" },
                    { "type": "impact_assessment", "area": "改革速度", "assessment": "部分人士認為較慢。" },
                    { "type": "reflection_prompt", "prompt": "在推動人文關懷政策的同時，如何回應關於改革速度和科技整合的顧慮？" }
                ]
            },
            "option_balanced_approach": {
                "summary": "教育局試圖平衡技術引進與人文關懷，但資源分配和政策協調面臨挑戰。",
                "elements": [
                    { "type": "quote", "source": "教育委員會委員", "text": "「平衡是理想的，但實際操作中，資源往往向見效快的技術傾斜，人文關懷的投入需要持續且堅定的支持。」" },
                    { "type": "news_snippet", "source": "市府觀察報", "text": "「教育局新策『雙軌並行』引發熱議。支持者認為能兼顧創新與傳統，反對者則擔心政策目標模糊，最終可能導致資源分散，兩頭不到岸。」" },
                    { "type": "impact_assessment", "area": "教師反應", "assessment": "部分教師對新技術工具表示期待，但更多教師呼籲加強人文培訓和減輕非教學負擔。" },
                    { "type": "reflection_prompt", "prompt": "在資源有限的情況下，您將如何劃定優先順序，確保技術和人文至少有一個方面能取得突破性進展？還是堅持兩者同步但進展較慢？" }
                ]
            },
            "option_wait_and_see": {
                "summary": "教育局決定暫緩大規模政策調整，優先進行更多調研，導致部分改革期望落空。",
                "elements": [
                    { "type": "quote", "source": "改革派學者", "text": "「調研是必要的，但不應成為拖延改革的藉口。教育問題刻不容緩，錯過時機可能導致問題進一步惡化。」" },
                    { "type": "news_snippet", "source": "教育論壇", "text": "「教育局宣布將展開為期半年的深度調研，再行決定改革方向。此舉被保守派視為穩健，但不少家長和學生表示失望。」" },
                    { "type": "impact_assessment", "area": "社會信任度", "assessment": "短期內可能下降，公眾期望快速有效的解決方案。" },
                    { "type": "reflection_prompt", "prompt": "在進行調研的同時，您可以推出哪些小規模、立即可行的措施來回應公眾的部分關切，以維持改革的動力與信任？" }
                ]
            }
        },
        "scientist": {
            "option_advocate_potential": {
                "summary": "科學家成功說服部分決策者關注神經技術的潛力。",
                "elements": [
                    {"type": "news_snippet", "source": "科技論壇報導", "text": "「神經科學家在教育研討會上展示了最新研究，強調了腦科學在個性化學習上的突破性進展。」"},
                    { "type": "quote", "source": "懷疑論者", "text": "「潛力歸潛力，我們更關心實際應用中的倫理風險和可能被誇大的效果。」"},
                    { "type": "impact_assessment", "area": "政策制定影響", "assessment": "部分決策者開始傾向於支持相關研究和試點項目。" },
                    {"type": "reflection_prompt", "prompt": "技術潛力已獲關注，如何確保其倫理應用和社會效益的最大化，並回應公眾的合理疑慮？"}
                ]
            },
            "option_warn_limitations": {
                "summary": "科學家強調了神經技術的局限性和潛在風險，使得決策者態度更為謹慎。",
                "elements": [
                    { "type": "quote", "source": "教育局官員", "text": "「感謝您的坦誠，我們確實需要更全面地評估這些新技術的雙面性。」" },
                    { "type": "news_snippet", "source": "行業分析", "text": "「神經技術的熱潮中出現冷靜聲音，專家呼籲重視其發展初期的不確定性和潛在倫理挑戰，避免盲目樂觀。」" },
                    { "type": "impact_assessment", "area": "技術引進速度", "assessment": "可能會減緩，審批流程將更加嚴格。" },
                    { "type": "reflection_prompt", "prompt": "在強調風險的同時，如何避免扼殺所有創新？您能否提出一個既能鼓勵探索又能有效控制風險的發展路徑建議？" }
                ]
            },
            "option_propose_pilot": {
                "summary": "科學家提出的嚴謹試點計劃獲得了初步認可，細節仍在討論中。",
                "elements": [
                    { "type": "quote", "source": "倫理審查委員會成員", "text": "「這份試點計劃考慮得比較周全，特別是在數據隱私和知情同意方面，但我們還有一些具體問題需要釐清。」" },
                    { "type": "news_snippet", "source": "教育科技快訊", "text": "「本地科學家團隊提交的『未來學習』神經技術試點計劃已通過初步評估，預計將小範圍展開，重點關注學習效率與學生福祉的平衡。」" },
                    { "type": "impact_assessment", "area": "研究進展", "assessment": "有望取得實際數據，為後續決策提供依據。" },
                    { "type": "reflection_prompt", "prompt": "試點計劃的成功不僅在於技術本身，還在於過程的透明和參與性。您將如何確保試點過程對所有利益相關者開放，並積極回應他們的關切？" }
                ]
            }
        },
        "principal": {
            "option_stress_human_touch": {
                "summary": "校長的人文關懷主張獲得了許多教師的共鳴，但在追求效率的氛圍中有時顯得力量不足。",
                "elements": [
                    { "type": "quote", "source": "年輕教師", "text": "「校長的理念讓我們感到溫暖，但在巨大的升學和行政壓力下，我們有時感到力不從心。」" },
                    { "type": "news_snippet", "source": "教育評論文章", "text": "「在科技浪潮席捲教育界的今天，依然有教育者堅守人文關懷的核心價值。然而，如何在績效考核和資源分配中體現這一點，是制度設計者需要思考的問題。」" },
                    { "type": "impact_assessment", "area": "學校氛圍", "assessment": "師生關係更為融洽，但面臨外部評價體系的壓力。" },
                    { "type": "reflection_prompt", "prompt": "人文關懷如何量化並納入評價體系，以爭取更多制度層面的支持？您有哪些具體的策略？" }
                ]
            },
            "option_suggest_integrated_approach": {
                "summary": "校長提出整合技術與人文關懷的方案，試圖尋找平衡點。",
                "elements": [
                    {"type": "quote", "source": "教育局官員", "text": "「這是一個富有建設性的提議，但具體實施細節需要仔細考量。」"},
                    {"type": "impact_assessment", "area": "方案可行性", "assessment": "中等，挑戰在於資源整合與教師培訓。"},
                    { "type": "news_snippet", "source": "教育研討會報導", "text": "「資深校長提出『科技賦能人文，人文引領科技』的整合教育模式，引起與會者廣泛討論。關鍵在於如何避免技術成為新的枷鎖，而是真正服務於人的全面發展。」" },
                    {"type": "reflection_prompt", "prompt": "如何將抽象的「整合方案」轉化為具體可操作的教學實踐，並培訓教師掌握必要的技能與理念？"}
                ]
            },
            "option_share_concerns_publicly": {
                "summary": "校長公開表達對過度技術化的擔憂，引發了社會對教育本質的討論。",
                "elements": [
                    { "type": "quote", "source": "家長", "text": "「校長說出了我們的心聲！我們不希望孩子成為技術的試驗品。」" },
                    { "type": "news_snippet", "source": "電視辯論節目", "text": "「一位資深校長對教育技術化的公開質疑，成為了近期社會熱點。節目邀請了支持方與反對方，就教育的未來展開激烈辯論。」" },
                    { "type": "impact_assessment", "area": "公眾意識", "assessment": "提高了公眾對教育技術倫理問題的關注度。" },
                    { "type": "reflection_prompt", "prompt": "公開表達擔憂後，您如何建設性地參與到後續的政策制定和社會對話中，以推動更健康的教育發展？" }
                ]
            }
        },
         "parent": {
            "option_demand_results": {
                "summary": "家長代表強調，任何新技術的引進都必須證明其能帶來可衡量的學業成果提升，並要求學校公開相關數據。",
                "elements": [
                    { "type": "quote", "source": "學校技術推廣負責人", "text": "「我們理解家長的期望，正在設計一套透明的評估體系來追蹤新技術的成效，並會定期公佈。」" },
                    { "type": "news_snippet", "source": "家長論壇熱帖", "text": "「『不看廣告看療效！』家長們普遍支持對教育新科技進行嚴格的成果檢驗，拒絕盲目跟風。」" },
                    { "type": "impact_assessment", "area": "學校決策壓力", "assessment": "增加，學校需要在推廣新技術與證明其有效性之間找到平衡。" },
                    { "type": "reflection_prompt", "prompt": "在追求可衡量的學業成果時，如何避免過度強調應試指標，而忽略了學生其他能力的發展？您認為哪些非學業成果也應該被納入評估？" }
                ]
            },
            "option_voice_privacy_concerns": {
                "summary": "家長代表強烈表達了對學生數據隱私和心理健康的擔憂，要求學校提供明確的保障措施。",
                "elements": [
                    { "type": "quote", "source": "數據倫理專家", "text": "「家長的擔憂是完全合理的。學校在使用學生數據時，必須將隱私保護置於最高優先級，並建立獨立的監督機制。」" },
                    { "type": "news_snippet", "source": "兒童保護組織聲明", "text": "「我們呼籲所有學校在引進監測學生數據的技術時，必須進行全面的倫理評估，並確保家長和學生擁有真正的知情同意權。」" },
                    { "type": "impact_assessment", "area": "技術引進門檻", "assessment": "提高，學校需要投入更多資源於數據安全和倫理合規。" },
                    { "type": "reflection_prompt", "prompt": "除了技術層面的保障，學校可以通過哪些方式來建立家長對數據隱私保護的信任？您會建議哪些具體的溝通和參與機制？" }
                ]
            },
            "option_seek_more_dialogue": {
                "summary": "家長代表呼籲學校、家長、專家之間進行更多公開對話和共同決策，建立常態化的溝通平台。",
                "elements": [
                    { "type": "quote", "source": "教育局局長", "text": "「我們非常贊同這一提議。教育的未來需要所有利益相關者的共同智慧和努力，教育局將支持建立這樣的對話機制。」" },
                    { "type": "news_snippet", "source": "社區報紙", "text": "「在教育變革的十字路口，多方對話成為共識。本地家長聯盟的倡議得到了積極響應，首次聯席會議定於下月召開。」" },
                    { "type": "impact_assessment", "area": "決策包容性", "assessment": "有望提升，有助於形成更具共識的教育政策。" },
                    { "type": "reflection_prompt", "prompt": "作為家長代表，在未來的多方對話中，您認為哪些議題應該被優先討論？您將如何確保家長的聲音能被充分聽取並得到重視？" }
                ]
            }
        },
        "ethicist": {
            "option_highlight_risks_autonomy": {
                "summary": "倫理學家重點警示「設計兒童」模式對學生自主性的潛在侵害，引發決策者對技術倫理的深度思考。",
                "elements": [
                    { "type": "quote", "source": "神經科學家", "text": "「倫理學家的觀點非常重要。技術發展必須以人為本，我們科學家也需要時刻警惕潛在的倫理風險，確保技術向善。」" },
                    { "type": "news_snippet", "source": "哲學期刊特稿", "text": "「『設計兒童』還是『賦能兒童』？教育技術的發展正將這一倫理學上的經典難題推向現實。倫理學家呼籲警惕技術可能帶來的非預期後果。」" },
                    { "type": "impact_assessment", "area": "技術應用方向", "assessment": "可能促使決策者更傾向於選擇那些能增強而非取代學生自主性的技術路徑。" },
                    { "type": "reflection_prompt", "prompt": "除了警示風險，您認為可以提出哪些具體的倫理原則或指導方針，來幫助教育者和技術開發者在實踐中更好地保護和培養學生的自主性？" }
                ]
            },
            "option_propose_framework": {
                "summary": "倫理學家提出一個包含多方觀點的教育倫理決策框架，為複雜的教育決策提供指引。",
                "elements": [
                    { "type": "quote", "source": "政策研究員", "text": "「這個框架提供了一個系統性的思考工具，有助於我們在引入新技術或推行教育改革時，更全面地評估其倫理影響。」" },
                    { "type": "news_snippet", "source": "學術研討會總結", "text": "「面對日趨複雜的教育挑戰，倫理學家提出的多維度決策框架成為本次研討會的一大亮點，為如何在創新與倫理之間取得平衡提供了有益思路。」" },
                    { "type": "impact_assessment", "area": "決策質量", "assessment": "有望提升，通過結構化的倫理分析減少盲點。" },
                    { "type": "reflection_prompt", "prompt": "一個好的決策框架需要易於理解和應用。您將如何向非倫理學專業的教育工作者和管理者有效地介紹和推廣這個框架？" }
                ]
            },
            "option_facilitate_deliberation": {
                "summary": "倫理學家呼籲決策過程透明化，並納入更廣泛的公眾參與，促進審慎的集體反思。",
                "elements": [
                    { "type": "quote", "source": "公民團體代表", "text": "「我們完全支持！教育關乎每個人的未來，公眾有權了解並參與相關決策。」" },
                    { "type": "news_snippet", "source": "政府公報", "text": "「市教育局響應專家呼籲，承諾未來在重大教育政策出台前，將舉行公開聽證會，並設立專門渠道收集公眾意見。」" },
                    { "type": "impact_assessment", "area": "政策合法性與接受度", "assessment": "通過增加透明度和公眾參與，可以顯著提升。" },
                    { "type": "reflection_prompt", "prompt": "促進有效的公眾審議不僅僅是開放渠道，更需要信息的對稱和理性的討論氛圍。您認為可以採取哪些措施來提升公眾審議的質量？" }
                ]
            }
        },
        "student": {
            "option_express_pressure": {
                "summary": "學生代表坦誠表達當前教育環境帶來的巨大壓力與焦慮，引起了與會者對學生心理健康問題的重視。",
                "elements": [
                    { "type": "quote", "source": "心理健康顧問", "text": "「學生的聲音非常關鍵。我們必須正視過度競爭帶來的心理負擔，並為他們提供足夠的支持系統。」" },
                    { "type": "news_snippet", "source": "青年報特寫", "text": "「『我們不是學習機器！』學生代表在教育研討會上的發言引發強烈共鳴，再次將青少年心理健康推向公眾視野。」" },
                    { "type": "impact_assessment", "area": "政策關注點", "assessment": "促使教育部門和學校開始更認真地考慮如何在教育體系中整合心理健康支持。" },
                    { "type": "reflection_prompt", "prompt": "除了表達壓力，您認為學生可以如何更主動地參與到改善學習環境、減輕學業負擔的行動中？您會向同學們提出哪些建議？" }
                ]
            },
            "option_desire_relevant_learning": {
                "summary": "學生代表期望教育能更關注個體差異和未來真正所需的能力，呼籲課程改革。",
                "elements": [
                    { "type": "quote", "source": "課程設計專家", "text": "「學生的需求是課程改革的重要驅動力。我們正在研究如何設計更具彈性、更能激發學生內在動力的課程體系。」" },
                    { "type": "news_snippet", "source": "未來教育論壇", "text": "「『我們想學真正有用的東西！』學生對個性化和實用性學習內容的呼聲日益高漲，推動教育界反思現行課程設置的有效性。」" },
                    { "type": "impact_assessment", "area": "課程改革動力", "assessment": "增強，來自學生的直接反饋為改革提供了明確方向。" },
                    { "type": "reflection_prompt", "prompt": "您認為哪些「面向未來的能力」（例如批判性思維、創造力、協作能力、數字素養等）對當代學生最為重要？學校可以如何系統地培養這些能力？" }
                ]
            },
            "option_concern_wellbeing": {
                "summary": "學生代表呼籲學校和社會更加重視學生的身心健康與全面發展，而不僅僅是學業成績。",
                "elements": [
                    { "type": "quote", "source": "知名教育家", "text": "「孩子的幸福感和全面發展是教育的終極目標。成績很重要，但絕不是唯一標準。我們需要一個更平衡的教育觀。」" },
                    { "type": "news_snippet", "source": "社會觀察評論", "text": "「從『唯分數論』到『全面育人』，教育觀念的轉變非一日之功。學生對自身福祉的關切，是推動這一轉變的重要力量。」" },
                    { "type": "impact_assessment", "area": "教育評價體系改革", "assessment": "可能促進更多非學業因素被納入考量，但面臨傳統觀念和實際操作的挑戰。" },
                    { "type": "reflection_prompt", "prompt": "為了促進學生的全面發展，您認為學校、家庭和社會各自應該扮演怎樣的角色？有哪些具體的措施可以共同推動？" }
                ]
            }
        }
    },
    "guardians": {
        "cto": {
            "option_push_innovation": {
                "summary": "技術長成功推動倫理守則向鼓勵創新和技術應用傾斜，部分試點項目加速上馬。",
                "elements": [
                    { "type": "quote", "source": "學校董事會成員", "text": "「我們支持技術長的前瞻性思維，學校需要擁抱創新才能保持領先。」" },
                    { "type": "news_snippet", "source": "教育科技雜誌", "text": "「本地學校在技術長的推動下，大膽嘗試多項前沿教育技術，旨在打造『未來教室』，但也引發了關於數據安全和學生福祉的討論。」" },
                    { "type": "impact_assessment", "area": "技術採納速度", "assessment": "顯著加快，但也可能伴隨風險管理滯後的擔憂。" },
                    { "type": "reflection_prompt", "prompt": "在快速推動技術創新的同時，您將如何建立一個動態的風險評估和應對機制，以確保技術應用始終在可控和合乎倫理的軌道上？" }
                ]
            },
            "option_prioritize_ethics_framework": {
                "summary": "技術長強調制定清晰倫理框架優先於快速引進未成熟技術，贏得了教師和家長的信任。",
                "elements": [
                    { "type": "quote", "source": "教師代表", "text": "「技術長的謹慎態度讓我們感到安心。一個好的倫理框架是我們放心使用新技術的前提。」" },
                    { "type": "news_snippet", "source": "行業觀察", "text": "「在教育技術一片喧囂之際，該校技術長選擇了『倫理先行』的策略，強調在充分評估和建立規範之前，不應倉促引進尚不成熟的數據密集型技術。」" },
                    { "type": "impact_assessment", "area": "學校聲譽", "assessment": "因其負責任的態度而提升，尤其在關注隱私和倫理的群體中。" },
                    { "type": "reflection_prompt", "prompt": "一個有效的倫理框架應該包含哪些核心原則和具體的操作指南？您將如何確保這個框架能夠真正落地並指導日常的技術決策？" }
                ]
            },
            "option_seek_external_partnerships": {
                "summary": "技術長積極尋求與領先科技公司合作，引進了先進技術，但也帶來了對數據控制權和供應商鎖定的擔憂。",
                "elements": [
                    { "type": "quote", "source": "數據隱私律師", "text": "「與外部合作夥伴共享學生數據需要極其謹慎，必須確保合同條款充分保護學校和學生的權益，避免數據被濫用。」" },
                    { "type": "news_snippet", "source": "商業科技評論", "text": "「本地學校與多家科技巨頭達成合作協議，旨在引進最新AI教育解決方案。此舉被視為教育數字化轉型的大膽一步，但數據主權問題也隨之浮現。」" },
                    { "type": "impact_assessment", "area": "技術能力", "assessment": "快速提升，但可能增加對特定供應商的依賴。" },
                    { "type": "reflection_prompt", "prompt": "在與外部科技公司合作時，您將如何設計合作協議和數據治理機制，以最大限度地保護學校的數據主權和學生的隱私，同時又能充分利用合作夥伴的技術優勢？" }
                ]
            }
        },
        "lawyer": {
            "option_strict_compliance": {
                "summary": "律師堅持所有數據操作必須嚴格遵守現有法律法規的最高標準，確保了學校的合規性，但可能減緩了部分創新項目的進程。",
                "elements": [
                    { "type": "quote", "source": "學校管理層", "text": "「律師的專業意見對我們至關重要，確保合規是我們所有工作的底線。我們需要在合規的前提下尋求創新。」" },
                    { "type": "news_snippet", "source": "法律事務期刊", "text": "「面對教育數據化的新挑戰，法律專業人士強調，學校必須將數據保護和隱私合規放在首位，任何技術創新都不能逾越法律紅線。」" },
                    { "type": "impact_assessment", "area": "法律風險", "assessment": "顯著降低，但可能因過於嚴格的解釋而錯失一些合理的創新機會。" },
                    { "type": "reflection_prompt", "prompt": "在堅持嚴格合規的同時，您如何幫助學校識別和理解法律框架內的彈性空間，以便在不犧牲合規性的前提下，支持必要的教育創新？" }
                ]
            },
            "option_flexible_interpretation": {
                "summary": "律師建議在法律框架內尋求彈性解釋，以避免扼殺必要的教育創新，但此舉引發了關於何為「必要」創新的討論。",
                "elements": [
                    { "type": "quote", "source": "倫理委員會成員", "text": "「彈性是需要的，但我們必須警惕『彈性』成為降低倫理標準的藉口。每一項創新都應經過嚴格的風險效益評估。」" },
                    { "type": "news_snippet", "source": "政策解讀論壇", "text": "「如何在確保學生權益與鼓勵教育創新之間找到平衡？法律專家提出對現有法規進行適度彈性解讀的可能性，引發了業界對『灰色地帶』的廣泛討論。」" },
                    { "type": "impact_assessment", "area": "創新活躍度", "assessment": "可能提升，但也增加了法律和倫理上的不確定性。" },
                    { "type": "reflection_prompt", "prompt": "當您建議對法律條文進行「彈性解釋」時，您會依據哪些原則來界定彈性的合理邊界？如何確保這種彈性不會損害學生的基本權益？" }
                ]
            },
            "option_develop_internal_guidelines": {
                "summary": "律師主導制定了詳細的內部數據使用指南和培訓計劃，提高了全校教職員工的數據保護意識和操作規範性。",
                "elements": [
                    { "type": "quote", "source": "教師", "text": "「這些指南非常實用，讓我們清楚地知道了在日常工作中如何處理學生數據才是安全和合規的。」" },
                    { "type": "news_snippet", "source": "學校內部通訊", "text": "「為響應日益嚴格的數據保護要求，我校法律顧問團隊牽頭制定並發布了《學生數據使用與保護指南》，並將陸續開展全員培訓。」" },
                    { "type": "impact_assessment", "area": "內部數據管理水平", "assessment": "顯著提升，減少了因操作不當導致的數據洩露風險。" },
                    { "type": "reflection_prompt", "prompt": "除了制定指南和提供培訓，您認為還可以建立哪些長效機制（如定期審計、案例分享、獎懲措施等）來確保持續的數據保護合規文化在學校內部生根發芽？" }
                ]
            }
        },
        "teacher": {
            "option_utilize_data_improve_teaching": {
                "summary": "教師積極探索利用數據分析工具改進個性化教學，部分班級試點效果良好，學生參與度有所提升。",
                "elements": [
                    { "type": "quote", "source": "學生", "text": "「老師好像更了解我的學習困難了，現在的練習更有針對性。」" },
                    { "type": "news_snippet", "source": "教育創新實踐案例", "text": "「本地教師通過引入智能數據分析平台，成功實現了對學生學習進度的精準追蹤和個性化輔導，教學效果初步顯現。」" },
                    { "type": "impact_assessment", "area": "教學效率與個性化水平", "assessment": "在試點範圍內有所提高。" },
                    { "type": "reflection_prompt", "prompt": "在利用數據改進教學的過程中，您如何確保數據分析的結果能夠被正確解讀，避免對學生產生刻板印象或標籤化？您會如何與學生溝通數據的使用情況？" }
                ]
            },
            "option_voice_concerns_data_misinterpretation": {
                "summary": "教師表達了對數據誤讀、增加工作負擔以及潛在標籤化學生的擔憂，促使學校在推廣數據工具時更加謹慎。",
                "elements": [
                    { "type": "quote", "source": "學校管理層", "text": "「教師們的顧慮非常重要。我們在引進任何新技術時，都會充分考慮其對教師工作和學生髮展的實際影響。」" },
                    { "type": "news_snippet", "source": "教師工會通訊", "text": "「教師代表在最近的會議上就教育數據化問題發聲，強調需要警惕數據的誤用可能帶來的負面影響，呼籲為教師提供充足的培訓和支持。」" },
                    { "type": "impact_assessment", "area": "數據工具推廣策略", "assessment": "學校可能會更注重教師培訓、減輕額外負擔，並建立數據解讀的輔助機制。" },
                    { "type": "reflection_prompt", "prompt": "除了表達擔憂，您認為教師可以如何主動參與到數據工具的選擇、設計和評估過程中，以確保這些工具真正服務於教學，而不是增加負擔或帶來負面影響？" }
                ]
            },
            "option_collaborate_devs_provide_feedback": {
                "summary": "教師建議與技術開發者緊密合作，提供一線教學反饋，以確保工具的教育實用性和易用性。",
                "elements": [
                    { "type": "quote", "source": "教育科技公司CEO", "text": "「來自教師的直接反饋對我們來說是無價之寶。我們非常樂意與一線教育者建立更緊密的合作關係，共同打磨產品。」" },
                    { "type": "news_snippet", "source": "行業合作動態", "text": "「教育界與科技界正尋求更深度的融合。本地學校教師代表近日與多家教育科技公司舉行座談，就如何提升技術產品的教育價值交換了意見。」" },
                    { "type": "impact_assessment", "area": "教育技術產品的適用性", "assessment": "通過用戶反饋驅動的迭代，有望得到改善。" },
                    { "type": "reflection_prompt", "prompt": "作為教師，當您與技術開發者合作時，您會優先反饋哪些方面的問題？（例如：用戶界面、功能設計、與課程的契合度、對學生學習的實際幫助等）您期望通過合作達成什麼樣的改進？" }
                ]
            }
        },
        "student-rep": {
            "option_advocate_privacy_rights": {
                "summary": "學生會代表堅決主張保護學生個人數據隱私，反對任何形式的濫用，成功推動學校在數據政策中加入更嚴格的學生隱私保護條款。",
                "elements": [
                    { "type": "quote", "source": "校長", "text": "「我們聽到了學生們的聲音，並將採取一切必要措施來保護他們的數據隱私。學生的信任是我們最珍視的財富。」" },
                    { "type": "news_snippet", "source": "校園新聞", "text": "「在學生會的積極倡導下，學校董事會投票通過了新的學生數據隱私保護政策修正案，明確禁止未經明確同意的數據商業化使用。」" },
                    { "type": "impact_assessment", "area": "學生數據保護水平", "assessment": "得到加強，學生的隱私權益得到更好保障。" },
                    { "type": "reflection_prompt", "prompt": "除了政策層面的倡導，您認為學生個體可以做些什麼來提高自身的數據隱私保護意識和能力？學生會可以組織哪些相關的教育活動？" }
                ]
            },
            "option_express_discomfort_surveillance": {
                "summary": "學生會代表表達了對持續性技術監控可能造成的心理壓力和不適感，促使學校重新評估部分監控技術的必要性。",
                "elements": [
                    { "type": "quote", "source": "心理輔導老師", "text": "「學生的感受很重要。持續的監控確實可能給部分學生帶來焦慮感，我們需要找到一個平衡點。」" },
                    { "type": "news_snippet", "source": "青少年權益論壇", "text": "「『我們不想生活在鏡頭下！』學生對校園監控技術的普遍擔憂引發關注。專家呼籲，技術的應用應以不損害學生心理健康為前提。」" },
                    { "type": "impact_assessment", "area": "校園監控技術部署", "assessment": "學校可能會更審慎，並優先考慮侵入性較小的替代方案。" },
                    { "type": "reflection_prompt", "prompt": "在保障校園安全和秩序的同時，如何最大限度地減少技術監控對學生心理的負面影響？您認為哪些監控措施是合理且必要的，哪些則可能過度？" }
                ]
            },
            "option_request_transparency_data_usage": {
                "summary": "學生會代表要求學校對學生數據的使用方式、目的和範圍保持完全透明，學校承諾建立數據使用情況的定期通報機制。",
                "elements": [
                    { "type": "quote", "source": "學校信息中心主任", "text": "「透明化是建立信任的基礎。我們將開發一個門戶網站，學生和家長可以查詢到相關數據的使用政策和概要情況。」" },
                    { "type": "news_snippet", "source": "教育透明度觀察", "text": "「應學生代表要求，本地學校承諾將提高學生數據使用的透明度，包括公開數據收集的類型、存儲方式以及主要的分析應用方向。」" },
                    { "type": "impact_assessment", "area": "學校數據治理的透明度", "assessment": "提升，有助於增強學生和家長的信任感。" },
                    { "type": "reflection_prompt", "prompt": "除了定期通報和信息門戶，您認為還有哪些方式可以有效地向學生和家長解釋複雜的數據使用情況，確保他們真正理解而不是僅僅被告知？" }
                ]
            }
        },
        "parent-rep": {
            "option_demand_security_effectiveness": {
                "summary": "家長教師協會代表堅持要求學校確保所引進技術的安全性和明確的教育有效性，學校承諾進行更嚴格的技術選型和效果評估。",
                "elements": [
                    { "type": "quote", "source": "教育技術評估專家", "text": "「家長的要求是合理的。學校在採購教育技術時，不僅要看功能，更要看安全性、數據保護能力以及是否有實證的教育效果。」" },
                    { "type": "news_snippet", "source": "消費者權益保護報導", "text": "「『安全第一，效果至上！』家長對學校引進新技術的呼聲，促使教育部門開始考慮制定更嚴格的教育技術產品准入標準。」" },
                    { "type": "impact_assessment", "area": "學校技術採購標準", "assessment": "提高，有助於引進更高質量、更安全的技術產品。" },
                    { "type": "reflection_prompt", "prompt": "作為家長代表，在評估一項教育技術的「有效性」時，您最看重哪些指標？（例如：學業成績提升、學習興趣激發、批判性思維培養、操作便捷性等）" }
                ]
            },
            "option_concern_data_sharing_third_parties": {
                "summary": "家長教師協會代表對學生數據可能與第三方共享表示嚴重關切，要求學校制定明確政策並嚴格限制此類共享。",
                "elements": [
                    { "type": "quote", "source": "數據隱私律師", "text": "「與第三方共享學生數據是極高風險的行為，必須有強有力的法律依據和監管措施。學校應默認不共享，除非獲得明確、獨立的知情同意且符合極其嚴格的條件。」" },
                    { "type": "news_snippet", "source": "數據安全快訊", "text": "「學生數據頻遭洩露和濫用，引發家長對學校與第三方數據共享行為的強烈擔憂。監管機構已介入調查部分案例。」" },
                    { "type": "impact_assessment", "area": "學校數據共享政策", "assessment": "將趨於收緊，對第三方合作夥伴的審查將更加嚴格。" },
                    { "type": "reflection_prompt", "prompt": "如果學校確實需要與第三方（如在線學習平台、研究機構）共享某些去標識化的數據以改進教育服務，您認為應該滿足哪些前提條件和保障措施才能讓家長放心？" }
                ]
            },
            "option_propose_parent_oversight_committee": {
                "summary": "家長教師協會代表提議成立由家長參與的數據倫理監督小組，學校表示將積極研究其可行性。",
                "elements": [
                    { "type": "quote", "source": "學校董事會主席", "text": "「讓家長參與監督是一個有益的建議，有助於提升決策的透明度和公信力。我們將認真考慮如何構建這樣一個委員會。」" },
                    { "type": "news_snippet", "source": "社區共治新聞", "text": "「家校合作共築數據安全防線！本地家長教師協會提議成立獨立的數據倫理監督小組，讓家長在學生數據保護中發揮更積極作用。」" },
                    { "type": "impact_assessment", "area": "學校數據治理的監督機制", "assessment": "有望得到加強，提升利益相關者的參與度。" },
                    { "type": "reflection_prompt", "prompt": "如果這個家長參與的數據倫理監督小組得以成立，您認為它應該擁有哪些職權？（例如：審查數據政策、調查投訴、對新技術引進提出建議等）如何確保其獨立性和有效性？" }
                ]
            }
        },
        "neuroethicist": {
            "option_explain_neurodata_sensitivity": {
                "summary": "神經倫理學研究員詳細解釋了神經數據的特殊敏感性及其對個人身份、思想和情感的潛在揭示能力，加深了委員會對這一新興領域倫理挑戰的理解。",
                "elements": [
                    { "type": "quote", "source": "倫理委員會主席", "text": "「您的講解讓我們大開眼界，也更感責任重大。神經數據的確需要比一般個人數據更嚴格的保護和倫理考量。」" },
                    { "type": "news_snippet", "source": "前沿科技倫理研討會報導", "text": "「神經倫理學家警告：隨著腦機接口等技術的發展，『讀心術』不再是科幻。我們迫切需要為神經數據的保護立法並建立倫理圍欄。」" },
                    { "type": "impact_assessment", "area": "倫理守則對神經數據的重視程度", "assessment": "顯著提升，可能會為神經數據設立專門的、更嚴格的處理規則。" },
                    { "type": "reflection_prompt", "prompt": "鑑於神經數據的極端敏感性，您認為在教育場景下，哪些類型的神經數據收集和應用是絕對應該禁止的？哪些可以在嚴格條件下被允許？界限在哪裡？" }
                ]
            },
            "option_warn_dual_use_potential": {
                "summary": "神經倫理學研究員警告新技術（尤其是神經技術）潛在的雙重用途及非預期後果，提醒委員會警惕技術被誤用或濫用的風險。",
                "elements": [
                    { "type": "quote", "source": "學校安全主管", "text": "「雙重用途的風險確實值得警惕。我們引進任何技術，都需要評估其是否可能被用於偏離教育初衷的目的。」" },
                    { "type": "news_snippet", "source": "科技與社會評論", "text": "「潘多拉的盒子一旦打開就很難關上。專家指出，許多旨在改善生活的新技術，都潛藏著被用於監控、歧視甚至操縱的風險，教育領域也不例外。」" },
                    { "type": "impact_assessment", "area": "技術引進的風險評估", "assessment": "將更加重視對潛在濫用和非預期負面影響的考量。" },
                    { "type": "reflection_prompt", "prompt": "針對神經技術在教育領域的應用，您能預見哪些潛在的「非預期負面後果」或「雙重用途」風險？（例如：加劇教育不平等、學生思想被引導、數據被用於商業剖析等）" }
                ]
            },
            "option_introduce_neurorights_concept": {
                "summary": "神經倫理學研究員引入國際上新興的「神經權利」概念（如認知自由、心理隱私、精神完整性、心理連續性等），建議將其核心原則納入學生數據使用倫理守則。",
                "elements": [
                    { "type": "quote", "source": "人權律師", "text": "「『神經權利』的提出非常及時且必要。隨著技術的發展，我們對基本人權的理解和保護也需要與時俱進，將大腦和心智活動的自由與隱私納入其中。」" },
                    { "type": "news_snippet", "source": "聯合國教科文組織報告摘錄", "text": "「面對神經技術的飛速發展，國際社會正積極探討『神經權利』的理念框架，旨在保護個人的大腦信息和心智活動不受侵犯和操縱。」" },
                    { "type": "impact_assessment", "area": "倫理守則的理論基礎和前瞻性", "assessment": "得到加強，使其更能夠應對未來神經技術發展帶來的挑戰。" },
                    { "type": "reflection_prompt", "prompt": "如果要在學校的倫理守則中體現「神經權利」，您會建議加入哪些具體的條款來保護學生的認知自由（如免受不當思想干預的權利）和心理隱私（如個人思想和情緒不被窺探的權利）？" }
                ]
            }
        }
    }
};

// 用於跟蹤當前選擇的角色卡片元素
let currentSelectedRoleCard = null;

let currentScenarioId = null;
let currentRole = null;

function initRolePlay() {
    console.log("%%%%% [DEBUG] initRolePlay CALLED from js/role_play.js %%%%%");
    const scenarioCards = document.querySelectorAll('.scenario-selector .scenario-card');
    scenarioCards.forEach(card => {
        card.addEventListener('click', () => {
            scenarioCards.forEach(sc => sc.classList.remove('active'));
            card.classList.add('active');
            switchScenario(card.dataset.scenarioId);
        });
    });

    const activeCard = document.querySelector('.scenario-selector .scenario-card.active');
    if (activeCard) {
        switchScenario(activeCard.dataset.scenarioId);
    } else if (scenarioCards.length > 0) {
        scenarioCards[0].classList.add('active');
        switchScenario(scenarioCards[0].dataset.scenarioId);
    }
}

function switchScenario(scenarioId) {
    console.log("Switching to scenario (from js/role_play.js):", scenarioId);
    currentScenarioId = scenarioId;
    currentRole = null; 

    // 這部分代碼假設存在 id 為 "crossroads-scenario" 或 "guardians-scenario" 的元素，
    // 這與 role_play_interactive.html 的結構不符。
    // HTML 中的角色卡片由其內嵌腳本在 #role-selection-area 中生成。
    // 因此，移除或重構以下與 activeScenarioContent 和 roleCards 相關的邏輯，
    // 以避免與 HTML 內嵌腳本的衝突。

    // document.querySelectorAll('.scenario-content').forEach(content => {
    //     content.classList.remove('active');
    // });
    // const activeScenarioContent = document.getElementById(`${scenarioId}-scenario`);
    // if (activeScenarioContent) {
    //     activeScenarioContent.classList.add('active');
        
    //     const interactionContainer = activeScenarioContent.querySelector('.role-interaction-container');
    //     if (interactionContainer) {
    //         interactionContainer.innerHTML = '<div class="role-perspective-container"><p>請選擇一個角色開始模擬。</p></div>';
    //     }

    //     // 以下處理 roleCards 的邏輯與 HTML 內嵌腳本衝突，且基於錯誤的DOM假設
    //     // const roleCards = activeScenarioContent.querySelectorAll('.role-card');
    //     // roleCards.forEach(card => {
    //     //     const newCard = card.cloneNode(true);
    //     //     card.parentNode.replaceChild(newCard, card);
            
    //     //     newCard.addEventListener('click', () => {
    //     //         // roleCards.forEach(rc => rc.classList.remove('selected')); // 舊的 roleCards 集合
    //     //         document.querySelectorAll(`#${scenarioId}-scenario .role-card`).forEach(rc => rc.classList.remove('selected'));
    //     //         newCard.classList.add('selected');
    //     //         selectRole(scenarioId, newCard.dataset.role);
    //     //     });
    //     // });
    // } else {
    //     console.error("Error in js/role_play.js switchScenario: Scenario content container like '" + scenarioId + "-scenario' not found.");
    // }
    
    // switchScenario 的主要職責應是更新狀態，DOM 的主要更新（如角色卡片列表）由 HTML 內嵌腳本處理
    // 當主場景卡片被點擊時，HTML內嵌腳本會處理顯示 #scenario-details-view 並填充角色。
    // 這裡可以確保 #scenario-details-view 是可見的，如果它先前被隱藏的話。
    // 但主場景切換的邏輯主要由HTML內嵌腳本處理。
}

function selectRole(scenarioId, roleId, clickedCardElement) {
    console.log(`%%% [DEBUG] selectRole CALLED with scenarioId: ${scenarioId}, roleId: ${roleId} %%%`);
    currentScenarioId = scenarioId; // Store current scenario
    currentRole = roleId; // Store current role

    if (clickedCardElement) {
        console.log("%%% [DEBUG] selectRole received clickedCardElement. OuterHTML:", clickedCardElement.outerHTML.substring(0, 100) + "...");
        console.log("%%% [DEBUG] clickedCardElement.dataset.role:", clickedCardElement.dataset.role);
    } else {
        console.warn("[selectRole] clickedCardElement was not provided. This might lead to issues if querySelector fails.");
    }

    // 首先移除所有角色卡片的 'active' 狀態
    // Differentiate between learning_hub.html and role_play_interactive.html context
    const activeScenarioContent = document.getElementById(`${scenarioId}-scenario`);
    let cardsToDeactivate;
    if (activeScenarioContent) { // likely learning_hub.html
        cardsToDeactivate = activeScenarioContent.querySelectorAll('.role-card');
    } else { // likely role_play_interactive.html or general case
        cardsToDeactivate = document.querySelectorAll('.role-card');
    }
    cardsToDeactivate.forEach(card => {
        card.classList.remove('active', 'selected'); // Ensure both are removed
    });

    if (!roleId) {
        console.error("[selectRole] Error: roleId is undefined or null. Cannot activate card.");
        return;
    }

    let cardToActivate;
    if (clickedCardElement && clickedCardElement.dataset.role === roleId) {
        console.log("[selectRole] Using provided card element for activation.");
        cardToActivate = clickedCardElement;
    } else {
        console.warn(`[selectRole] Attempting to find card with querySelector: .scenario-content.active .role-card[data-role='${roleId}'] or #${scenarioId}-scenario .role-card[data-role='${roleId}']`);
        // Try to find within the active scenario first (more specific)
        const specificCard = document.querySelector(`#${scenarioId}-scenario .role-card[data-role='${roleId}']`);
        if (specificCard) {
            cardToActivate = specificCard;
        } else {
            // Fallback for role_play_interactive.html structure or if the above fails
            cardToActivate = document.querySelector(`.role-card[data-role='${roleId}']`);
        }
    }

    if (cardToActivate) {
        cardToActivate.classList.add('active', 'selected');
        console.log("[selectRole] Successfully activated card:", cardToActivate);
    } else {
        console.error(`[selectRole] Critical: Role card for roleId '${roleId}' in scenario '${scenarioId}' not found.`);
        return;
    }

    // --- NEW LOGIC for learning_hub.html using the template ---
    const roleDetailsTemplate = document.getElementById('role-details-view');
    const scenarioData = scenarios[scenarioId];
    if (!scenarioData) {
        console.error(`[selectRole] Scenario data for '${scenarioId}' not found.`);
        return;
    }
    const roleData = scenarioData.roles.find(r => r.id === roleId);
    if (!roleData) {
        console.error(`[selectRole] Role data for '${roleId}' in scenario '${scenarioId}' not found.`);
        return;
    }

    // Determine the correct interaction container for the current scenario
    let interactionContainer;
    const activeScenarioElement = document.getElementById(`${scenarioId}-scenario`);
    if (activeScenarioElement) { // learning_hub.html context
        interactionContainer = activeScenarioElement.querySelector('.role-interaction-container');
        if(interactionContainer){
            // Clear previous content (e.g., "請選擇一個角色開始模擬。" or previous role details)
            const perspectiveContainer = interactionContainer.querySelector('.role-perspective-container');
            if(perspectiveContainer) perspectiveContainer.innerHTML = ''; // Clear placeholder
            else interactionContainer.innerHTML = ''; // Fallback clear
        }
    } else { // role_play_interactive.html context (or fallback)
        interactionContainer = document.getElementById('role-interaction-container'); // This ID might be specific to role_play_interactive.html
    }
    
    if (!interactionContainer) {
        console.error(`[selectRole] Interaction container for scenario '${scenarioId}' (or generic) not found.`);
        return;
    }
    
    if (!roleDetailsTemplate) {
        // This block is for the original role_play_interactive.html which has direct elements
        console.log("[selectRole] #role-details-view template not found. Assuming role_play_interactive.html structure.");
        const roleNameEl = document.getElementById('role-name');
        const roleDescriptionEl = document.getElementById('role-description');
        const rolePerspectiveEl = document.getElementById('role-perspective'); // Error here in learning_hub
        const initialSituationEl = document.getElementById('initial-situation'); // Error here in learning_hub
        const interactionOptionsListEl = document.getElementById('interaction-options-list'); // Error here in learning_hub
        const interactionOutcomeViewEl = document.getElementById('interaction-outcome-view'); // Error here in learning_hub

        if (roleNameEl) roleNameEl.textContent = roleData.name;
        else console.error("[selectRole] #role-name element not found.");

        if (roleDescriptionEl) roleDescriptionEl.textContent = roleData.description;
        else console.error("[selectRole] #role-description element not found.");
        
        if (rolePerspectiveEl) rolePerspectiveEl.innerHTML = roleData.perspective;
        else console.error("[selectRole] #role-perspective element not found.");

        if (initialSituationEl) { // Optional element
            initialSituationEl.innerHTML = scenarioData.initialSituation || "";
            initialSituationEl.style.display = scenarioData.initialSituation ? 'block' : 'none';
        } else console.warn("[selectRole] #initial-situation element not found (optional).");


        if (interactionOptionsListEl) {
            interactionOptionsListEl.innerHTML = ''; // Clear previous options
            roleData.options.forEach(option => {
                const button = document.createElement('button');
                button.classList.add('btn', 'btn-primary', 'interaction-option');
                button.textContent = option.text;
                button.dataset.interactionId = option.outcomeKey;
                button.addEventListener('click', (event) => {
                    createRippleEffect(event, button);
                    handleInteraction(scenarioId, roleId, option.outcomeKey);
                });
                interactionOptionsListEl.appendChild(button);
            });
        } else {
            console.error("[selectRole] #interaction-options-list element not found.");
        }

        if (interactionOutcomeViewEl) interactionOutcomeViewEl.style.display = 'none'; // Hide outcome from previous interaction
        else console.warn("[selectRole] #interaction-outcome-view element not found (optional for hiding).");

        document.getElementById('role-selection-view').classList.add('hidden');
        const roleDetailsViewDirect = document.getElementById('role-details-view'); // This would be the container in role_play_interactive.html
        if(roleDetailsViewDirect) roleDetailsViewDirect.classList.remove('hidden');

        // Event listener for back button in role_play_interactive.html
        const backButtonDirect = document.getElementById('back-to-role-selection');
        if (backButtonDirect) {
            const newBackButton = backButtonDirect.cloneNode(true); // Re-clone to remove old listeners
            backButtonDirect.parentNode.replaceChild(newBackButton, backButtonDirect);
            newBackButton.addEventListener('click', (event) => {
                createRippleEffect(event, newBackButton);
                showRoleSelection(scenarioId);
            });
        }

    } else {
        // This block is for learning_hub.html using the #role-details-view template
        console.log("[selectRole] Using #role-details-view template for learning_hub.html.");
        const newDetailsView = roleDetailsTemplate.cloneNode(true);
        newDetailsView.id = `role-details-active-${scenarioId}-${roleId}`; // Make ID unique if needed, though it's appended
        newDetailsView.style.display = 'block';

        const roleNameEl = newDetailsView.querySelector('#role-name-display');
        const roleDescriptionEl = newDetailsView.querySelector('#role-description-display');
        const rolePerspectiveEl = newDetailsView.querySelector('#role-perspective-display');
        const interactionOptionsContainerEl = newDetailsView.querySelector('#role-interaction-options');
        // const interactionResultDisplayEl = newDetailsView.querySelector('#interaction-result-display'); // Used in handleInteraction

        if (roleNameEl) roleNameEl.textContent = roleData.name;
        else console.error("[selectRole Template] #role-name-display not found in template clone.");
        
        if (roleDescriptionEl) roleDescriptionEl.textContent = roleData.description;
        else console.error("[selectRole Template] #role-description-display not found in template clone.");

        if (rolePerspectiveEl) rolePerspectiveEl.innerHTML = roleData.perspective; // Use innerHTML for rich text
        else console.error("[selectRole Template] #role-perspective-display not found in template clone.");
        
        // For initialSituation, decide if it's part of description or perspective, or needs its own field in template
        // For now, let's assume it's part of the scenario description, usually displayed when scenario is chosen.
        // If scenarioData.initialSituation exists and needs to be shown per role, it should be part of roleData or handled differently.
        // We can inject scenario's initialSituation if needed:
        // const scenarioInitialSituationEl = newDetailsView.querySelector('#scenario-initial-situation-display'); // Requires this ID in template
        // if (scenarioInitialSituationEl && scenarioData.initialSituation) {
        //     scenarioInitialSituationEl.innerHTML = scenarioData.initialSituation;
        // }


        if (interactionOptionsContainerEl) {
            interactionOptionsContainerEl.innerHTML = ''; // Clear previous
            roleData.options.forEach(option => {
                const button = document.createElement('button');
                button.classList.add('btn', 'btn-primary', 'interaction-option', 'role-action-button');
                button.textContent = option.text;
                button.dataset.interactionId = option.outcomeKey;
                button.addEventListener('click', (event) => {
                    createRippleEffect(event, button);
                    handleInteraction(scenarioId, roleId, option.outcomeKey, newDetailsView);
                });
                interactionOptionsContainerEl.appendChild(button);
            });
        } else {
            console.error("[selectRole Template] #role-interaction-options not found in template clone.");
        }
        
        // Ensure the interaction result area in the clone is initially hidden
        const resultContainerInClone = newDetailsView.querySelector('#interaction-result-display');
        if (resultContainerInClone) {
            resultContainerInClone.style.display = 'none';
            resultContainerInClone.querySelector('.result-text-block').innerHTML = '';
        }


        // Clear the target container (e.g., .role-interaction-container in learning_hub.html)
        // interactionContainer is already defined and checked above for learning_hub.html
        interactionContainer.innerHTML = '';
        interactionContainer.appendChild(newDetailsView);

        // Add event listener for the "Back to Roles" button within the cloned template
        const backButtonInClone = newDetailsView.querySelector('#back-to-roles-button');
        if (backButtonInClone) {
            backButtonInClone.addEventListener('click', (event) => {
                createRippleEffect(event, backButtonInClone);
                // In learning_hub, "showing role selection" means clearing this dynamic content
                // and letting the static role cards in the HTML be the selection.
                interactionContainer.innerHTML = '<div class="role-perspective-container"><p>請選擇一個角色開始模擬。</p></div>'; // Reset to placeholder
                // Deactivate the current role card
                if(cardToActivate) cardToActivate.classList.remove('active', 'selected');
                currentRole = null; // Reset current role
            });
        } else {
            console.error("[selectRole Template] #back-to-roles-button not found in template clone.");
        }
    }
}

// Updated handleInteraction to accept the current view context (for learning_hub.html)
function handleInteraction(scenarioId, roleId, outcomeKey, currentRoleDetailsView) {
    console.log(`[handleInteraction] Scenario: ${scenarioId}, Role: ${roleId}, OutcomeKey: ${outcomeKey}`);
    const scenarioData = scenarios[scenarioId];
    if (!scenarioData) {
        console.error(`[handleInteraction] Scenario data for '${scenarioId}' not found.`);
        return;
    }
    const roleData = scenarioData.roles.find(r => r.id === roleId);
    if (!roleData) {
        console.error(`[handleInteraction] Role data for '${roleId}' in scenario '${scenarioId}' not found.`);
        return;
    }
    // The 'interactionId' parameter is actually the outcomeKey from the button's dataset
    // Now, fetch the actual outcome from the interactionOutcomes object
    const outcomeData = interactionOutcomes[scenarioId]?.[roleId]?.[outcomeKey];

    if (!outcomeData) {
        console.error(`[handleInteraction] Outcome data for outcomeKey '${outcomeKey}' in scenario '${scenarioId}', role '${roleId}' not found in interactionOutcomes.`);
        // Display a generic message if outcome is missing
        const genericOutcome = { summary: `選擇了 "${outcomeKey}"，但未找到具體的結果詳情。` };
        displayOutcome(genericOutcome, currentRoleDetailsView, scenarioId, roleId, outcomeKey); 
        return;
    }

    displayOutcome(outcomeData, currentRoleDetailsView, scenarioId, roleId, outcomeKey);
}

// Helper function to display outcome
function displayOutcome(outcomeData, currentRoleDetailsView, scenarioId, roleId, outcomeKey) {
    let resultDisplayParent;
    let resultTextBlock;
    let resultTitleElement;

    if (currentRoleDetailsView) { // learning_hub.html context
        resultDisplayParent = currentRoleDetailsView.querySelector('#interaction-result-display');
        if (resultDisplayParent) {
            resultTextBlock = resultDisplayParent.querySelector('.result-text-block');
            resultTitleElement = resultDisplayParent.querySelector('.result-title');
        } else {
            console.error("[displayOutcome] #interaction-result-display not found in provided currentRoleDetailsView for learning_hub.");
            return;
        }
    } else { // role_play_interactive.html context
        resultDisplayParent = document.getElementById('interaction-outcome-view');
        if (resultDisplayParent) {
            resultTextBlock = resultDisplayParent.querySelector('.outcome-content') || resultDisplayParent; // Adjust as needed
            resultTitleElement = resultDisplayParent.querySelector('.outcome-title');
        } else {
            console.error("[displayOutcome] Fallback #interaction-outcome-view element not found for role_play_interactive.");
            return;
        }
    }

    if (resultDisplayParent && resultTextBlock) {
        if (resultTitleElement) {
            // Default to "互動結果：" unless outcomeData explicitly provides a different title
            resultTitleElement.textContent = outcomeData.title || "互動結果："; 
        }

        if (typeof outcomeData === 'string') {
            resultTextBlock.innerHTML = `<p>${outcomeData}</p>`;
        } else if (typeof outcomeData === 'object' && outcomeData.summary) {
            // Handle complex outcome with summary and elements
            let html = `<p><strong>${outcomeData.summary}</strong></p>`;
            if (outcomeData.elements && Array.isArray(outcomeData.elements)) {
                html += '<div class="outcome-details-list">';
                outcomeData.elements.forEach(element => {
                    switch(element.type) {
                        case 'quote':
                            html += `<div class="outcome-detail-item outcome-quote"><strong>${element.source}：</strong> ${element.text}</div>`;
                            break;
                        case 'news_snippet':
                            html += `<div class="outcome-detail-item outcome-news"><strong>${element.source}：</strong> ${element.text}</div>`;
                            break;
                        case 'impact_assessment':
                            html += `<div class="outcome-detail-item outcome-impact"><strong>${element.area}：</strong> ${element.assessment}</div>`;
                            break;
                        case 'reflection_prompt':
                            html += `<div class="outcome-detail-item outcome-reflection"><strong>思考問題：</strong> ${element.prompt}</div>`;
                            break;
                        default:
                            html += `<div class="outcome-detail-item"><p>${JSON.stringify(element)}</p></div>`;
                    }
                });
                html += '</div>';
            }
            resultTextBlock.innerHTML = html;
        } else {
            // Fallback for other object structures or if summary is missing
            resultTextBlock.innerHTML = `<p>${JSON.stringify(outcomeData)}</p>`;
        }
        resultDisplayParent.style.display = 'block';

        // Optionally, manage interaction buttons state (e.g., disable/hide)
        let interactionOptionsContainer;
        if (currentRoleDetailsView) {
            interactionOptionsContainer = currentRoleDetailsView.querySelector('#role-interaction-options');
        } else {
            interactionOptionsContainer = document.getElementById('interaction-options-list');
        }
        if (interactionOptionsContainer) {
            // Example: Hide interaction options after an outcome is shown
            // interactionOptionsContainer.style.display = 'none';
            // Or disable buttons:
            // interactionOptionsContainer.querySelectorAll('button').forEach(btn => btn.disabled = true);
        }
    } else {
        console.error("[displayOutcome] Could not find elements to display outcome.");
    }
}

// Function to show role selection (used by back buttons)
// Needs to differentiate context for learning_hub.html vs role_play_interactive.html
function showRoleSelection(scenarioIdToMakeActive) {
    // For role_play_interactive.html
    const roleDetailsView = document.getElementById('role-details-view'); // This is the main container in role_play_interactive.html
    const roleSelectionView = document.getElementById('role-selection-view');

    if (roleDetailsView && roleSelectionView) { // role_play_interactive.html context
        roleDetailsView.classList.add('hidden');
        roleSelectionView.classList.remove('hidden');
        currentRole = null; // Reset current role

        // Ensure the correct scenario's roles are shown if that page has multiple scenarios in one view (unlikely for role_play_interactive.html)
        // This function might be simpler for role_play_interactive.html as it usually shows one scenario's roles at a time
    } else {
        // For learning_hub.html, this function is effectively handled by the back button inside the cloned template,
        // which clears the interactionContainer and resets currentRole.
        // If called globally, it might try to reset a specific scenario view.
        console.log("[showRoleSelection] Called. Context might be learning_hub.html if specific elements not found.");
        if (scenarioIdToMakeActive) {
            const activeScenarioContent = document.getElementById(`${scenarioIdToMakeActive}-scenario`);
            if (activeScenarioContent) {
                const interactionContainer = activeScenarioContent.querySelector('.role-interaction-container');
                if (interactionContainer) {
                     interactionContainer.innerHTML = '<div class="role-perspective-container"><p>請選擇一個角色開始模擬。</p></div>'; // Reset to placeholder
                }
                // Deactivate any active role cards in this specific scenario
                activeScenarioContent.querySelectorAll('.role-card.active').forEach(card => card.classList.remove('active', 'selected'));
            }
        }
        currentRole = null; // Reset current role
    }
}

// Ensure initRolePlay does NOT run automatically if it's meant to be page-specific
// Comment out the direct call or ensure it's conditional
// document.addEventListener('DOMContentLoaded', initRolePlay); // Check if this is appropriate for all pages or should be in specific page scripts

// Example of how initRolePlay might be called from a specific page:
// In learning_hub.html's inline script:
// document.addEventListener('DOMContentLoaded', function() {
//     // ... other learning_hub specific setup ...
//     if (typeof initRolePlay === 'function') {
//         // initRolePlay(); // Call it if role_play.js's init is generic enough
//         // OR, learning_hub.html already has its own more specific init logic for scenarios/roles
//     }
// });

// Make sure scenarios data is loaded/available
// This is a placeholder, actual data should be in a .js file or fetched
// const scenarios = { /* ... your scenario data ... */ };
// Ensure 'scenarios' is loaded from its data file like 'interactive_scenarios.js'
// For example, if interactive_scenarios.js defines a global 'scenarios' variable.

// ... rest of the file