document.addEventListener('DOMContentLoaded', () => {
    if (typeof educatorToolkitData === 'undefined' || educatorToolkitData === null) {
        console.error('Educator toolkit data is not loaded.');
        // Display a user-friendly message on the page
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = '<div class="container"><p class="error-message">教育者工具包資料載入失敗，請檢查控制台以獲取更多資訊或稍後再試。</p></div>';
        }
        return;
    }

    const createSectionHTML = (section) => {
        let sectionHtml = `<h5>${section.heading}</h5>`;
        if (section.points) {
            const listItems = section.points.map(point => `<li>${point}</li>`).join('');
            sectionHtml += `<ul>${listItems}</ul>`;
        }
        if (section.list_type === 'checklist' && section.items) {
            const checklistItems = section.items.map(item => `<li><label><input type="checkbox" disabled readonly> ${item}</label></li>`).join('');
            sectionHtml += `<ul class="checklist">${checklistItems}</ul>`;
        }
        if (section.content_type === 'text_with_link' && section.text) {
            sectionHtml += `<p>${section.text}`;
            if (section.link_text && section.url) {
                sectionHtml += ` <a href="${section.url}" target="_blank" rel="noopener noreferrer">${section.link_text}</a>`;
            }
            sectionHtml += `</p>`;
        }
        if (section.content_type === 'resource_list' && section.items) {
            const resourceItems = section.items.map(item => `<li><strong>${item.title}</strong>: ${item.description}</li>`).join('');
            sectionHtml += `<ul class="resource-list">${resourceItems}</ul>`;
        }
        if (section.content_type === 'resource_list_linked' && section.items) {
            const resourceItems = section.items.map(item => 
                `<li>
                    <strong>${item.title}</strong>: ${item.description}
                    ${item.url ? `<br><a href="${item.url}" target="_blank" rel="noopener noreferrer">閱讀更多</a>` : ''}
                 </li>`
            ).join('');
            sectionHtml += `<ul class="resource-list">${resourceItems}</ul>`;
        }
        return sectionHtml;
    };

    const renderSection = (dataKey, containerId) => {
        const data = educatorToolkitData[dataKey];
        const container = document.getElementById(containerId);

        if (!data) {
            console.warn(`Data for ${dataKey} not found in educatorToolkitData.`);
            if (container) container.innerHTML = `<p><em>此區塊內容 (${dataKey}) 暫時無法載入。</em></p>`;
            return;
        }
        if (!container) {
            console.error(`Container with ID ${containerId} not found.`);
            return;
        }

        let content = `<h4>${data.title}</h4>`;
        if (data.introduction) {
            content += `<p>${data.introduction}</p>`;
        }
        
        if (data.sections && Array.isArray(data.sections)) {
            data.sections.forEach(section => {
                content += createSectionHTML(section);
            });
        } else {
            console.warn(`No sections found or sections is not an array for ${dataKey}.`);
        }
        container.innerHTML = content;
    };

    // Render all sections
    renderSection('assessment_guides', 'ethical-assessment-guides-container');
    renderSection('neurodiversity_resources', 'neurodiversity-resources-container');
    renderSection('edtech_checklists', 'edtech-evaluation-rubrics-container');
    renderSection('international_guidelines', 'international-guidelines-container');
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