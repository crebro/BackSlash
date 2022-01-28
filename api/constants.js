const requestAddress = "localhost:8000";
const requestLocation = `http://${requestAddress}/api`

export const routes = {
    getUser: `${requestLocation}/user`,
    login: `${requestLocation}/login`,
    register: `${requestLocation}/register`,
    logout: `${requestLocation}/logout`,
    developer_activation: `${requestLocation}/developer_activation`,
    createTemplate: `${requestLocation}/templates/create`,
    ownedTemplates: `${requestLocation}/templates/owned`,
    getFileContents: (full_path) => `${requestLocation}/templates/getfile/${full_path}`,
    getTemplateLocation: (template_identifier) => `http://${template_identifier}.${requestAddress}/index.html`,
    getTemplateFiles: (template_identifier) => `${requestLocation}/templates/${template_identifier}/files`,
    updateTemplateFile: `${requestLocation}/templates/files/update`
}

