import { routes } from "@api/constants"
import { getRequest, postRequest } from "."

export const getTemplateRequirements = async (template_id) => {
    const response = await getRequest(routes.getTemplateRequirements(template_id));
    const data = await response.json();
    return data;
}

export const createWorkingTemplate = async (template_id, formData) => {
    const response = await postRequest(routes.createWorkingTemplate, {
        template_id: template_id,
        values: formData 
    });
    const data = await response.json();
    return data;
}

export const getUserWorkingTemplates = async () => {
    const response = await getRequest(routes.getWorkingTemplates);
    const data = await response.json();
    return data;
}

