import { IComboBoxOption } from '@fluentui/react';
declare class CaseFileUtls {
    static formatCaseYear: (value: string) => string;
    static setLastUsedOptions: (option: IComboBoxOption, item: IComboBoxOption[], setItem: (item: IComboBoxOption[]) => void) => IComboBoxOption[];
}
export default CaseFileUtls;
