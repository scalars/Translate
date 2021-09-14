import { ApplicationSelect, LanguageSelect, SchemaConnection, SchemaSelect, TranslationSelect } from '@scalars/cli';

const languageSelect: LanguageSelect = {
    id: true,
    isolanguage: true,
    namelanguage: true,
    nativename: true
};

const applicationSelect: ApplicationSelect = {
    id: true,
    name: true,
    defaultLanguage: true,
    root: {
        id: true,
        description: true,
        sectionName: true,
        sectionValues: true
    },
    languages: languageSelect
};

const schemaSelect: SchemaSelect = {
    application: applicationSelect,
    translations: {
        id: true,
        istranslated: true,
        translationValues: true,
        language: languageSelect
    },
    subsections: {
        id: true,
        description: true,
        sectionName: true,
        sectionValues: true,
        translations: {
            id: true,
            istranslated: true,
            translationValues: true,
            language: languageSelect
        }
    },
    id: true,
    description: true,
    sectionName: true,
    sectionValues: true
};

const translationSelect: TranslationSelect = {
    id: true,
    istranslated: true,
    language: languageSelect,
    translationValues: true,
    schema: schemaSelect
};

export {
    languageSelect,
    applicationSelect,
    schemaSelect,
    translationSelect
};
