const educatorToolkitData = {
  assessment_guides: {
    title: "倫理學生評估指南",
    introduction: "本區塊提供學生評估中倫理考量的實用指南，特別關注新興的神經技術應用。討論其有效性、可靠性、公平性、潛在偏見、學生焦慮、數據隱私等問題。強調神經科學工具應補充而非取代整體的評估方法。",
    sections: [
      {
        heading: "核心原則",
        points: [
          "<strong>公平性與無偏見：</strong> 確保評估工具和流程對所有學生都是公平的，不受其背景、能力或神經特質的影響。",
          "<strong>知情同意：</strong> 在使用任何收集學生數據的評估工具前，應向學生和家長提供清晰透明的資訊，並獲得其同意。",
          "<strong>數據隱私與安全：</strong> 嚴格保護學生評估數據，確保其儲存、傳輸和使用的安全性。",
          "<strong>最小化焦慮：</strong> 設計和實施評估時，應考慮如何減少學生的不必要壓力和焦慮。",
          "<strong>專業責任：</strong> 教育工作者應對評估工具的選擇、使用和結果解釋負責任，並持續進行專業發展。"
        ]
      },
      {
        heading: "神經技術在評估中的考量",
        points: [
          "<strong>科學效度：</strong> 批判性評估聲稱基於神經科學的評估工具的科學證據和研究基礎。",
          "<strong>過度簡化風險：</strong> 避免將複雜的學習過程簡化為單一的神經指標或大腦掃描結果。",
          "<strong>標籤化效應：</strong> 謹慎使用可能導致學生被不當標籤化的評估結果。"
        ]
      },
      {
        heading: "實用清單（範例）",
        list_type: "checklist",
        items: [
          "評估工具是否有經過獨立驗證的效度和信度研究？",
          "數據收集和使用政策是否清晰告知學生和家長？",
          "是否有措施防止演算法偏見影響不同學生群體？",
          "評估結果如何用於支持學生的學習和福祉，而非僅用於排序或篩選？",
          "是否有針對評估結果提出申訴或複議的機制？"
        ]
      }
    ]
  },
  neurodiversity_resources: {
    title: "肯定神經多樣性環境資源庫",
    introduction: "彙集基於證據的策略、資源和最佳實踐，用於創建肯定神經多樣性的包容性學習環境。包括通用學習設計 (UDL) 原則的實際應用、創建感官友善空間的指南等。",
    sections: [
      {
        heading: "通用學習設計 (UDL) 應用",
        content_type: "text_with_link",
        text: "通用學習設計 (UDL) 提供了一個框架，通過提供多種表徵方式、多種行動與表達方式以及多種參與方式，來創建靈活的學習環境，以滿足所有學習者的需求。深入了解 UDL 指南：",
        link_text: "CAST UDL 指南",
        url: "https://udlguidelines.cast.org/"
      },
      {
        heading: "建立感官友善的課堂",
        points: [
          "提供安靜角或休息區。",
          "允許使用降噪耳機或耳塞。",
          "注意照明（避免過亮或閃爍的燈光）和噪音水平。",
          "提供不同質地的教具或學習用品。",
          "允許學生在需要時進行短暫的活動或伸展。"
        ]
      },
      {
        heading: "推薦閱讀",
        content_type: "resource_list",
        items: [
          { title: "《NeuroTribes: The Legacy of Autism and the Future of Neurodiversity》 by Steve Silberman", description: "探討自閉症歷史和神經多樣性運動的重要著作。" },
          { title: "《The Dyslexic Advantage: Unlocking the Hidden Potential of the Dyslexic Brain》 by Brock L. Eide and Fernette F. Eide", description: "關注閱讀障礙者的優勢和潛力。" }
        ]
      }
    ]
  },
  edtech_checklists: {
    title: "EdTech 評估指標與檢查清單",
    introduction: "提供可客製化的指標和檢查清單，供教育工作者、管理者和開發者評估 EdTech 工具是否符合倫理規範。涵蓋數據隱私與安全、演算法公平性、學生自主性、教學合理性及包容性等。",
    sections: [
      {
        heading: "倫理評估檢查清單（核心問題）",
        list_type: "checklist",
        items: [
          "<strong>數據隱私與安全：</strong>EdTech 工具如何收集、使用、儲存和共享學生數據？是否符合相關法規（如 GDPR、FERPA）？數據是否匿名化或去識別化處理？是否有數據洩露應對計畫？",
          "<strong>演算法透明度與公平性：</strong>如果工具使用演算法進行推薦或決策，演算法的邏輯是否清晰？是否存在潛在偏見，可能對特定學生群體不利？是否有機制審查和修正偏見？",
          "<strong>學生自主性與代理權：</strong>學生是否可以控制自己的數據和學習路徑？工具是否賦予學生選擇權，而非完全由系統主導？",
          "<strong>教學合理性與效益：</strong>該工具是否支持明確的教學目標？是否有證據表明其能有效提升學習成果或教學效率？是否會增加教師不必要的工作負擔？",
          "<strong>包容性與可及性：</strong>工具設計是否考慮到所有學習者的需求，包括有特殊教育需求或來自不同文化背景的學生？是否符合無障礙網頁內容指引 (WCAG) 等標準？",
          "<strong>供應商責任與透明度：</strong>供應商是否對其產品的倫理影響負責？其商業模式和數據使用政策是否透明？",
          "<strong>退出機制與數據可攜性：</strong>如果學校決定停止使用該工具，學生數據如何處理？是否可以方便地匯出或刪除？"
        ]
      },
      {
        heading: "給開發者的額外考量",
        points: [
          "在設計初期就融入倫理考量（Ethics by Design）。",
          "進行多元化的用戶測試，以識別潛在的偏見和可用性問題。",
          "提供清晰的文檔說明工具的功能、數據處理方式和倫理考量。",
          "建立用戶反饋機制，持續改進產品的倫理表現。"
        ]
      }
    ]
  },
  international_guidelines: {
    title: "國際指南與資源中心",
    introduction: "策劃和總結來自聯合國教科文組織、經濟合作暨發展組織（OECD）、歐盟等相關機構的關鍵國際指南、報告和教育資源，幫助教育者理解全球視野下的教育神經倫理議題。",
    sections: [
      {
        heading: "重要國際組織與其倡議",
        content_type: "resource_list_linked",
        items: [
          {
            title: "聯合國教科文組織 (UNESCO) - 人工智慧倫理建議書",
            url: "https://www.unesco.org/en/artificial-intelligence/recommendation-ethics",
            description: "全球首個關於人工智能倫理的規範性文書，其中包含教育相關的指導原則。"
          },
          {
            title: "經濟合作暨發展組織 (OECD) - AI 原則",
            url: "https://oecd.ai/en/ai-principles",
            description: "提出以人為本、值得信賴的 AI 系統應遵循的原則，對教育領域的 AI 應用具有指導意義。"
          },
          {
            title: "歐盟執委會 - 人工智慧法案 (AI Act) 草案",
            url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
            description: "旨在為 AI 系統的開發和使用設定規範，其中將教育領域的某些 AI 應用列為高風險系統。"
          },
          {
            title: "IEEE - Ethically Aligned Design (EAD)",
            url: "https://ethicsinaction.ieee.org/",
            description: "為自主和智能系統的設計者和開發者提供一套實用的倫理指南。"
          }
        ]
      },
      {
        heading: "關鍵報告與出版物（摘要範例）",
        points: [
          "<strong>UNESCO《教育中的人工智能：挑戰與機遇》：</strong> 探討人工智能在教育領域的潛力、風險以及政策建議。",
          "<strong>OECD《AI 與未來教育》系列報告：</strong> 分析 AI 如何改變學習方式、教學方法以及教育系統的治理。"
        ]
      }
    ]
  }
}; 