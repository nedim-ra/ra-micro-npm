import { IComboBoxOption, IComboBoxProps, IComboBoxStyles } from '@fluentui/react';
interface CaseControlProps extends Partial<IComboBoxProps> {
    label: string;
    handleComboBoxChange: (options: IComboBoxOption[]) => void;
    showErrorMessage: (errorMsg: string) => void;
    styles: Partial<IComboBoxStyles>;
    selectedOption: IComboBoxOption;
    caseOptions: IComboBoxOption[];
    setSelectedOption: (option: IComboBoxOption) => void;
    disabled?: boolean;
    domain: string;
}
declare function CaseFilePicker({ label, handleComboBoxChange, styles, showErrorMessage, selectedOption, caseOptions, setSelectedOption, disabled, domain, }: CaseControlProps): JSX.Element;
declare namespace CaseFilePicker {
    var defaultProps: {
        disabled: boolean;
    };
}
export default CaseFilePicker;
