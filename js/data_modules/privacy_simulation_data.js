const privacySimulationScenarios = [
    {
        id: "scenario1",
        title: "情境一：新型學習輔助頭帶",
        role: "學生",
        description: "您的學校引進了一款新型的學習輔助頭帶，聲稱可以通過監測腦波活動來優化您的學習效率。使用條款中提到，部分匿名化的數據將用於產品改進。您是否同意使用這款頭帶？",
        choices: [
            {
                text: "同意使用，我相信這能幫助我學習，且數據是匿名的。",
                feedback: "您選擇了信任新技術。雖然匿名化是一個保護措施，但完全的匿名化在技術上可能很難實現，且大量數據的聚合仍可能產生意想不到的洞察。",
                privacyImpact: "中度風險", // 可以用文字或數值表示
                nextScenarioId: "scenario2_optionA"
            },
            {
                text: "拒絕使用，我擔心腦波數據的隱私問題，即使是匿名的。",
                feedback: "您對個人數據的隱私表示了高度的關注。這是一個重要的考量，尤其對於敏感的生物識別數據。您的決定可能會讓您錯過一些潛在的學習益處，但也保護了您的數據。",
                privacyImpact: "低風險",
                nextScenarioId: "scenario2_optionB"
            },
            {
                text: "尋求更多資訊，我想了解更多關於數據如何被收集、儲存和使用的細節。",
                feedback: "尋求更多資訊是一個非常明智的選擇。充分了解數據處理方式是做出知情同意的關鍵。在現實中，您應該有權利獲得這些資訊。",
                privacyImpact: "資訊收集階段",
                nextScenarioId: "scenario1_more_info" // 跳轉到一個提供更多資訊的情境或階段
            }
        ]
    },
    {
        id: "scenario1_more_info",
        title: "情境一追加資訊：數據處理詳情",
        role: "學生",
        description: "學校提供了更多關於頭帶數據處理的資訊：數據在本地設備加密，僅傳輸聚合後的匿名化統計數據到開發商伺服器，用於演算法改進。原始腦波數據不會離開學校的本地網路，除非得到監護人明確的額外同意用於特定研究項目。",
        choices: [
            {
                text: "了解詳情後，我同意使用。",
                feedback: "在獲得更清晰的資訊後，您做出了選擇。這顯示了透明度和知情同意的重要性。",
                privacyImpact: "較低風險（基於提供的資訊）",
                nextScenarioId: "scenario2_optionA"
            },
            {
                text: "即使有這些保證，我仍然對潛在風險感到不安，選擇不使用。",
                feedback: "即使有額外的保護措施，個人對風險的接受程度也不同。保護個人隱私的權利應得到尊重。",
                privacyImpact: "低風險",
                nextScenarioId: "scenario2_optionB"
            }
        ]
    },
    {
        id: "scenario2_optionA", // 示例：選擇同意後的發展
        title: "情境二：數據的意外用途？",
        role: "學生",
        description: "幾個月後，您發現學校開始使用頭帶監測的專注度數據，作為評估課堂參與度的一部分。這在最初的同意條款中並未明確說明。您有何感受？",
        choices: [
            {
                text: "感到驚訝和不安，這超出了我的預期。",
                feedback: "數據用途的擴展（scope creep）是一個常見的隱私問題。最初的同意範圍非常重要。",
                privacyImpact: "負面影響",
                nextScenarioId: "scenario_end_A1"
            },
            {
                text: "可以理解，如果這能幫助老師更好地了解學生狀況。",
                feedback: "您認為數據的額外用途可能帶來益處。然而，這也引發了關於數據控制權和透明度的問題。",
                privacyImpact: "潛在益處與風險並存",
                nextScenarioId: "scenario_end_A2"
            }
        ]
    },
    {
        id: "scenario2_optionB", // 示例：選擇拒絕後的發展
        title: "情境二：觀察與比較",
        role: "學生",
        description: "您沒有使用頭帶，但觀察到一些同學在使用後似乎在某些課程上表現更好。同時，您也聽說有些同學擔心頭帶的準確性和數據問題。您對此有何看法？",
        choices: [
            {
                text: "我堅持我的決定，數據隱私對我更重要。",
                feedback: "堅守個人價值觀是值得肯定的。每個人的權衡不同。",
                privacyImpact: "未受影響",
                nextScenarioId: "scenario_end_B1"
            },
            {
                text: "或許我可以重新考慮，如果能確保數據安全和用途明確。",
                feedback: "情況是動態變化的，重新評估是合理的。關鍵在於能否獲得足夠的保障和透明度。",
                privacyImpact: "考慮中",
                nextScenarioId: "scenario_end_B2"
            }
        ]
    },
    {
        id: "scenario_end_A1",
        title: "模擬結束：數據用途的警示",
        role: "學生",
        description: "您對數據超出預期用途表示不安。這提醒我們，在同意任何數據收集之前，仔細審查條款並考慮潛在的未來用途至關重要。即使是出於好意，數據用途的擴展也應重新獲得您的明確同意。",
        choices: []
    },
    {
        id: "scenario_end_A2",
        title: "模擬結束：平衡潛在益處與風險",
        role: "學生",
        description: "您認為數據的額外用途可能有其益處，但這也引發了關於數據控制權、透明度以及最初同意範圍有效性的重要倫理討論。如何在創新和個人隱私之間取得平衡是一個持續的挑戰。",
        choices: []
    },
    {
        id: "scenario_end_B1",
        title: "模擬結束：堅持個人隱私選擇",
        role: "學生",
        description: "您選擇了優先保護自己的數據隱私，即使這可能意味著錯過一些潛在的技術益處。這是一個完全有效的個人選擇，強調了個人自主權在數字時代的重要性。",
        choices: []
    },
    {
        id: "scenario_end_B2",
        title: "模擬結束：動態評估與再次選擇的權利",
        role: "學生",
        description: "您考慮在特定條件下重新評估是否使用新技術。這表明了在面對新興技術時，持續評估、尋求保障措施以及在獲得充分資訊後做出選擇的重要性。",
        choices: []
    }
];

// 確保在其他腳本中可以使用此數據
if (typeof module !== 'undefined' && module.exports) {
    module.exports = privacySimulationScenarios;
} 