import { IComboBoxOption } from '@fluentui/react';
declare class CaseFileUtils {
    static formatCaseYear: (value: string) => string;
    static setLastUsedOptions: (option: IComboBoxOption, item: IComboBoxOption[], setItem: (comboOption: IComboBoxOption[]) => void) => IComboBoxOption[];
}
export default CaseFileUtils;
