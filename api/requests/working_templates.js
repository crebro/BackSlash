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

export const updateWorkingTemplate = async (workingTemplateId, formData) => {
    const response = await postRequest(routes.updateWorkingTemplate(workingTemplateId), {values: formData, _method: 'PUT'});
    const data = await response.json();
    return data;
}

export const deleteWorkingTemplate = async (workingTemplateId) => {
    const response = await postRequest(routes.deleteWorkingTemplate(workingTemplateId), {
        _method: "DELETE"
    });
    const data = await response.json();
    return data;
}

