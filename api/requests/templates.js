import { routes } from "@api/constants";
import { getRequest, postRequest, postRequestWithFiles } from "."


export const createTemplate = async ({ name, description, template_url, preview_image }) => {
    const response = await postRequestWithFiles(routes.createTemplate, {
        name: name, description: description, template_url: template_url, preview_image_file: preview_image
    });
    const data = await response.json();
    if (!data.success) {
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
    const response = await postRequest(routes.deleteTemplateRequirement, {
        template_id: template_id,
        requirement_id: requirement_id,
    });
    const data = await response.json();
    return data;
}

export const updateTemplate = async ({template_id, name, description, template_url})  => {
    const response = await postRequest(routes.updateTemplate, {
        _method: 'PUT',
        template_id: template_id,
        name: name,
        description: description,
        template_url: template_url
    });
    const data = await response.json();
    return data;
}

export const deleteTemplate  = async ({template_id}) => {
    console.log(template_id);
    const response = await postRequest(routes.deleteTemplate, {
        _method: "DELETE",
        template_id: template_id
    })
    const data = await response.json();
    return data;
}

export const searchTemplates = async ({query}) => {
    const response = await getRequest(routes.exploreTemplates(query),);
    const data = await response.json();
    return data;
}

