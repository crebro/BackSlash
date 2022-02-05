export const requestAddress = process.env.NEXT_PUBLIC_BACKEND_REQUEST_ADDRESS;
const requestLocation = `${requestAddress}/api`

export const routes = {
    getUser: `${requestLocation}/user`,
    login: `${requestLocation}/login`,
    register: `${requestLocation}/register`,
    logout: `${requestLocation}/logout`,
    developer_activation: `${requestLocation}/developer_activation`,
    createTemplate: `${requestLocation}/templates/create`,
    ownedTemplates: `${requestLocation}/templates/owned`,
    getTemplateRequirements: (template_id) => `${requestLocation}/templates/${template_id}/requirements`,
    deleteTemplateRequirement: `${requestLocation}/templates/requirements/delete`,
    createTemplateRequirement: `${requestLocation}/templates/requirements/add`,
    updateTemplate: `${requestLocation}/templates/update`,
    deleteTemplate: `${requestLocation}/templates/delete`,
    exploreTemplates: (searchTerm, perpage=10) => `${requestLocation}/templates/search?query=${searchTerm}&perpage=${perpage}`,
    createWorkingTemplate: `${requestLocation}/working_templates/create`,
    getWorkingTemplates: `${requestLocation}/working_templates/owned`,
    updateWorkingTemplate: (workingTemplateId) => `${requestLocation}/working_templates/${workingTemplateId}/update`,
    deleteWorkingTemplate: (workingTemplateId) => `${requestLocation}/working_templates/${workingTemplateId}/delete`,
}

