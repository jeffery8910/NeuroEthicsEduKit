const educatorToolkitData = {
  ethicalAssessmentGuides: {
    title: "倫理學生評估指南",
    description: "本區塊將提供學生評估中倫理考量的實用指南，特別關注新興的神經技術應用，討論其有效性、可靠性、公平性、潛在偏見、學生焦慮、數據隱私等問題。強調神經科學工具應補充而非取代整體的評估方法。",
    content: [
      {
        type: "paragraph",
        text: "隨著教育領域神經技術的興起，教育工作者必須具備評估這些工具倫理影響的能力。本指南旨在提供一個框架，幫助教育者做出明智的決策。"
      },
      {
        type: "list",
        items: [
          "評估工具的科學有效性和可靠性。",
          "識別和減輕潛在的演算法偏見。",
          "確保學生數據的隱私和安全。",
          "考慮對學生焦慮和福祉的影響。",
          "將神經技術作為輔助工具，而非唯一評估手段。"
        ]
      },
      {
        type: "note",
        text: "詳細的案例研究和評估清單將在後續版本中提供。"
      }
    ]
  },
  neurodiversityResources: {
    title: "肯定神經多樣性環境資源庫",
    description: "彙集基於證據的策略、資源和最佳實踐，用於創建肯定神經多樣性的包容性學習環境。包括通用學習設計 (UDL) 原則的實際應用、創建感官友善空間的指南等。",
    content: [
      {
        type: "paragraph",
        text: "創建一個肯定神經多樣性的學習環境對於所有學生的成功至關重要。本資源庫提供實用工具和策略，以支持教育者實現這一目標。"
      },
      {
        type: "resourceLink",
        text: "通用學習設計 (UDL) 指南",
        url: "#" // 替換為實際連結
      },
      {
        type: "resourceLink",
        text: "創建感官友善教室的技巧",
        url: "#" // 替換為實際連結
      }
    ]
  },
  edtechEvaluationRubrics: {
    title: "EdTech 評估指標與檢查清單",
    description: "提供可客製化的指標和檢查清單，供教育工作者、管理者和開發者評估 EdTech 工具是否符合倫理規範。涵蓋數據隱私與安全、演算法公平性、學生自主性、教學合理性及包容性等。",
    content: [
      {
        type: "paragraph",
        text: "在選擇和實施教育技術時，倫理考量是首要的。這些評估指標和檢查清單旨在協助您系統地評估 EdTech 工具的各個方面。"
      },
      {
        type: "downloadLink",
        text: "EdTech 倫理評估指標 (PDF)",
        url: "#" // 替換為實際下載連結
      },
      {
        type: "downloadLink",
        text: "EdTech 採購檢查清單 (Word)",
        url: "#" // 替換為實際下載連結
      }
    ]
  },
  internationalGuidelines: {
    title: "國際指南與資源中心",
    description: "策劃和總結來自聯合國教科文組織、經濟合作暨發展組織（OECD）等相關機構的關鍵國際指南、報告和教育資源。",
    content: [
      {
        type: "paragraph",
        text: "了解國際上關於教育神經倫理的最新發展和指導方針，對於制定本地化策略至關重要。本中心匯總了來自權威機構的關鍵文件。"
      },
      {
        type: "externalLink",
        text: "聯合國教科文組織 (UNESCO) - 教育中的人工智能與倫理",
        url: "https://www.unesco.org/en/artificial-intelligence/ethics-education" // 示例連結
      },
      {
        type: "externalLink",
        text: "經濟合作暨發展組織 (OECD) - AI 原則",
        url: "https://oecd.ai/en/ai-principles" // 示例連結
      }
    ]
  }
};

// 確保在其他腳本中可以使用此數據
if (typeof module !== 'undefined' && module.exports) {
  module.exports = educatorToolkitData;
} 