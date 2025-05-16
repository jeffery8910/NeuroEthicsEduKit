document.addEventListener('DOMContentLoaded', () => {
    if (typeof educatorToolkitData === 'undefined') {
        console.error('educator_toolkit_data.js 未載入或 educatorToolkitData 未定義');
        return;
    }

    function createContentElement(item) {
        let element;
        switch (item.type) {
            case 'paragraph':
                element = document.createElement('p');
                element.textContent = item.text;
                break;
            case 'list':
                element = document.createElement('ul');
                item.items.forEach(liText => {
                    const listItem = document.createElement('li');
                    listItem.textContent = liText;
                    element.appendChild(listItem);
                });
                break;
            case 'note':
                element = document.createElement('p');
                element.className = 'notice-text'; // 可以為備註添加特定樣式
                element.textContent = item.text;
                break;
            case 'resourceLink':
            case 'downloadLink':
            case 'externalLink':
                element = document.createElement('p');
                const anchor = document.createElement('a');
                anchor.href = item.url;
                anchor.textContent = item.text;
                if (item.type === 'externalLink' || item.type === 'downloadLink') {
                    anchor.target = '_blank';
                    anchor.rel = 'noopener noreferrer';
                }
                if (item.type === 'downloadLink') {
                    anchor.setAttribute('download', ''); // 提示瀏覽器下載
                }
                element.appendChild(anchor);
                break;
            default:
                console.warn('未知的內容類型:', item.type);
                element = document.createElement('p');
                element.textContent = item.text || JSON.stringify(item);
        }
        return element;
    }

    function populateSection(sectionId, data) {
        const container = document.getElementById(sectionId);
        if (!container) {
            console.error(`找不到 ID 為 ${sectionId} 的容器`);
            return;
        }

        // 清空現有佔位內容 (如果有的話)
        const placeholder = container.querySelector('p');
        if (placeholder && placeholder.textContent.includes('即將推出')) {
             placeholder.remove();
        }

        if (data.content && Array.isArray(data.content)) {
            data.content.forEach(item => {
                const contentElement = createContentElement(item);
                if (contentElement) {
                    container.appendChild(contentElement);
                }
            });
        } else if (data.description && !data.content) {
            // HTML 結構中已經有 <p> 顯示 description
            // 如果需要用JS控制，可以在此處添加邏輯
        }
    }

    // 填充各個部分
    if (educatorToolkitData.ethicalAssessmentGuides) {
        populateSection('ethical-assessment-guides-container', educatorToolkitData.ethicalAssessmentGuides);
    }
    if (educatorToolkitData.neurodiversityResources) {
        populateSection('neurodiversity-resources-container', educatorToolkitData.neurodiversityResources);
    }
    if (educatorToolkitData.edtechEvaluationRubrics) {
        populateSection('edtech-evaluation-rubrics-container', educatorToolkitData.edtechEvaluationRubrics);
    }
    if (educatorToolkitData.internationalGuidelines) {
        populateSection('international-guidelines-container', educatorToolkitData.internationalGuidelines);
    }
});