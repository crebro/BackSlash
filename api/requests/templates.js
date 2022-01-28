import { routes } from "@api/constants";
import { getRequest, postRequest } from "."


export const createTemplate = async ({ name, description }) => {
    const response = await postRequest(routes.createTemplate, {
        name: name, description: description
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

export const getTemplateFiles = async (template_identifier) => {
    const response = await getRequest(routes.getTemplateFiles(template_identifier));
    const data = await response.json();
    return data;
}

export const updateTemplateFile = async (template_identifier, file_location, contents) => {
    const response = await postRequest(routes.updateTemplateFile, {
        template_identifier: template_identifier,
        file_location: file_location,
        contents: contents
    })
    const data = await response.json();
    return data;
}
