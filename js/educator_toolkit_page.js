document.addEventListener('DOMContentLoaded', async () => {
    if (!window.loadJsonData) {
        console.error('Error: loadJsonData function is not available. Ensure data_loader.js is loaded correctly.');
        return;
    }

    const assessmentGuidesContainer = document.getElementById('ethical-assessment-guides-container');
    const neurodiversityContainer = document.getElementById('neurodiversity-resources-container');
    const rubricsContainer = document.getElementById('edtech-evaluation-rubrics-container');
    const guidelinesContainer = document.getElementById('international-guidelines-container');

    // --- 1. Load and Render Ethical Assessment Guides ---
    try {
        const assessmentData = await window.loadJsonData('../assets/data/module2_educator_toolkit/ethical_assessment_guides.json');
        if (assessmentData && assessmentGuidesContainer) {
            renderEthicalAssessmentGuides(assessmentData, assessmentGuidesContainer);
        } else if (!assessmentGuidesContainer) {
            console.warn('Ethical assessment guides container not found.');
        }
    } catch (error) {
        console.error('Error loading or rendering ethical assessment guides:', error);
        if (assessmentGuidesContainer) assessmentGuidesContainer.innerHTML = '<p class="error-message">無法載入倫理評估指南內容。</p>';
    }

    // --- 2. Load and Render Neurodiversity Resources ---
    try {
        const neurodiversityData = await window.loadJsonData('../assets/data/module2_educator_toolkit/neurodiversity_resources.json');
        if (neurodiversityData && neurodiversityContainer) {
            renderNeurodiversityResources(neurodiversityData, neurodiversityContainer);
        } else if (!neurodiversityContainer) {
            console.warn('Neurodiversity resources container not found.');
        }
    } catch (error) {
        console.error('Error loading or rendering neurodiversity resources:', error);
        if (neurodiversityContainer) neurodiversityContainer.innerHTML = '<p class="error-message">無法載入神經多樣性資源內容。</p>';
    }

    // --- 3. Load and Render EdTech Evaluation Rubrics ---
    try {
        const rubricsData = await window.loadJsonData('../assets/data/module2_educator_toolkit/edtech_evaluation_rubrics.json');
        if (rubricsData && rubricsContainer) {
            renderEdTechEvaluationRubrics(rubricsData, rubricsContainer);
        } else if (!rubricsContainer) {
            console.warn('EdTech evaluation rubrics container not found.');
        }
    } catch (error) {
        console.error('Error loading or rendering EdTech evaluation rubrics:', error);
        if (rubricsContainer) rubricsContainer.innerHTML = '<p class="error-message">無法載入 EdTech 評估指標內容。</p>';
    }

    // --- 4. Load and Render International Guidelines ---
    try {
        const guidelinesData = await window.loadJsonData('../assets/data/module2_educator_toolkit/international_guidelines.json');
        if (guidelinesData && guidelinesContainer) {
            renderInternationalGuidelines(guidelinesData, guidelinesContainer);
        } else if (!guidelinesContainer) {
            console.warn('International guidelines container not found.');
        }
    } catch (error) {
        console.error('Error loading or rendering international guidelines:', error);
        if (guidelinesContainer) guidelinesContainer.innerHTML = '<p class="error-message">無法載入國際指南內容。</p>';
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
            `;
        });
        html += '</div>';
    }
    container.innerHTML = html;
}

function renderInternationalGuidelines(data, container) {
    let html = `<h2>${data.title_zh_TW || '相關國際倫理指南與框架'}</h2>`;
    if (data.introduction_zh_TW) {
        html += `<p>${data.introduction_zh_TW}</p>`;
    }
    if (data.guidelines_zh_TW && data.guidelines_zh_TW.length > 0) {
        html += '<ul class="resource-list">';
        data.guidelines_zh_TW.forEach(guideline => {
            html += `
                <li class="resource-item">
                    <h3>${guideline.organization_zh_TW} - ${guideline.document_title_zh_TW}</h3>
                    <p>${guideline.summary_zh_TW}</p>
                    <a href="${guideline.link_zh_TW}" target="_blank" rel="noopener noreferrer" class="btn">閱讀更多</a>
                </li>
            `;
        });
        html += '</ul>';
    }
    container.innerHTML = html;
}