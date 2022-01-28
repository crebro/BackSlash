import { routes } from "@api/constants";
import { getRequest, postRequest } from "."


export const createTemplate = async ({ name, description, template_url }) => {
    const response = await postRequest(routes.createTemplate, {
        name: name, description: description, template_url: template_url
    });
    const data = await response.json();
    if (!data.success)  {
        return false;
    }
    return data;
}

export const getTemplates = async () => {
    const response = await getRequest(routes.ownedTemplates,);
    const data = await response.json();
    if (!data.success) {
        return false;
    }
    return data
}

export const getTemplateRequirements = async (template_id) => {
    const response = await getRequest(routes.getTemplateRequirements(template_id));
    const data = await response.json();
    return data;
}

export const createTemplateRequirement = async ({template_id, key, is_required, type}) => {
    const response = await postRequest(routes.createTemplateRequirement, {
        template_id: template_id,
        key: key,
        is_required: is_required,
        type: type
    });
    const data = await response.json();
    return data;
}

export const deleteTemplateRequirement = async (template_id, requirement_id) => {
    console.log(requirement_id);
    const response = await postRequest(routes.deleteTemplateRequirement, {
        template_id: template_id,
        requirement_id: requirement_id,
    });
    const data = await response.json();
    return data;
}

