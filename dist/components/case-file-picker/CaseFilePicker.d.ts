import { IComboBoxOption, IComboBoxProps, IComboBoxStyles } from '@fluentui/react';
import { CaseFile } from '../../main.ts';
interface CaseControlProps extends Partial<IComboBoxProps> {
    label: string;
    handleComboBoxChange: (options: IComboBoxOption[]) => void;
    showErrorMessage: (errorMsg: string) => void;
    styles: Partial<IComboBoxStyles>;
    selectedOption: IComboBoxOption;
    caseOptions: IComboBoxOption[];
    setSelectedOption: (option: IComboBoxOption) => void;
    disabled?: boolean;
    getDomain: () => Promise<string>;
    getCase: (domain: string, numValue: string) => Promise<CaseFile[]>;
}
declare function CaseFilePicker({ label, handleComboBoxChange, showErrorMessage, styles, selectedOption, caseOptions, setSelectedOption, disabled, getDomain, getCase, }: CaseControlProps): JSX.Element;
declare namespace CaseFilePicker {
    var defaultProps: {
        disabled: boolean;
    };
}
export default CaseFilePicker;
