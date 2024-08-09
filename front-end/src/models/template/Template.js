export class TemplateItem 
{
    constructor(templateId, userKey, templateName, templateStructure, dateCreated, dateModified, dateUsed, comment)
    {
        this.templateId = templateId;
        this.userKey = userKey;
        this.templateName = templateName;
        this.templateStructure = templateStructure;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
        this.dateUsed = dateUsed;
        this.comment = comment;
    }
}