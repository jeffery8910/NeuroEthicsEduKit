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
            // 如果只有 description 且沒有 content，則顯示 description
            // HTML 結構中已經有 <p> 顯示 description，這裡不再重複添加
            // 但可以根據需要調整，例如如果想用 JS 控制 description 的顯示
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

function renderEthicalAssessmentGuides(data, container) {
    let html = `<h2>${data.title_zh_TW || '學生評估的倫理考量'}</h2>`;
    if (data.overall_ethical_considerations_zh_TW) {
        html += `<h3>${data.overall_ethical_considerations_zh_TW.title_zh_TW}</h3>`;
        html += `<p>${data.overall_ethical_considerations_zh_TW.introduction_zh_TW}</p>`;
        html += '<ul>';
        data.overall_ethical_considerations_zh_TW.points_zh_TW.forEach(point => {
            html += `<li><strong>${point.point_title_zh_TW}:</strong> ${point.description_zh_TW}</li>`;
        });
        html += '</ul>';
    }
    if (data.neurotech_based_assessment_guidelines_zh_TW) {
        html += `<h3>${data.neurotech_based_assessment_guidelines_zh_TW.title_zh_TW}</h3>`;
        html += `<p>${data.neurotech_based_assessment_guidelines_zh_TW.introduction_zh_TW}</p>`;
        html += '<ul>';
        data.neurotech_based_assessment_guidelines_zh_TW.guidelines_zh_TW.forEach(guideline => {
            html += `<li><strong>${guideline.guideline_title_zh_TW}:</strong> ${guideline.description_zh_TW}</li>`;
        });
        html += '</ul>';
    }
    container.innerHTML = html;
}

function renderNeurodiversityResources(data, container) {
    let html = `<h2>${data.title_zh_TW || '支持神經多樣性學生的資源'}</h2>`;
    if (data.sections_zh_TW && data.sections_zh_TW.length > 0) {
        data.sections_zh_TW.forEach(section => {
            html += `
                <div class="content-card resource-card">
                    <h3 class="card-title">${section.title_zh_TW}</h3>
                    <p class="card-content">${section.introduction_zh_TW}</p>
                    <ul>
                        ${section.points_zh_TW.map(point => `<li><strong>${point.point_title_zh_TW || ''}</strong> ${point.description_zh_TW}</li>`).join('')}
                    </ul>
                    ${section.additional_notes_zh_TW ? `<p><em>${section.additional_notes_zh_TW}</em></p>` : ''}
                </div>
            `;
        });
    }
    container.innerHTML = html;
}

function renderEdTechEvaluationRubrics(data, container) {
    let html = `<h2>${data.title_zh_TW || 'EdTech 倫理評估指標'}</h2>`;
    if (data.introduction_zh_TW) {
        html += `<p>${data.introduction_zh_TW}</p>`;
    }
    if (data.evaluation_areas_zh_TW && data.evaluation_areas_zh_TW.length > 0) {
        html += '<div class="cards-container">';
        data.evaluation_areas_zh_TW.forEach(area => {
            html += `
                <div class="card rubric-card">
                    <h3 class="card-title">${area.area_name_zh_TW}</h3>
                    <p class="card-content"><strong>目標：</strong> ${area.goal_zh_TW}</p>
                    <div class="criteria">
                        <strong>關鍵評估標準：</strong>
                        <ul>
                            ${area.key_criteria_zh_TW.map(criterion => `<li>${criterion.criterion_zh_TW}: ${criterion.description_zh_TW}</li>`).join('')}
                        </ul>
                    </div>
                    <p class="card-content"><strong>提示性問題：</strong> ${area.prompting_questions_zh_TW.join(', ')}</p>
                </div>
            `