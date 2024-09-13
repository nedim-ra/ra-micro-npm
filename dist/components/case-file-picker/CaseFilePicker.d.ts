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
    getDomain: () => Promise<string>;
}
declare function CaseFilePicker({ label, handleComboBoxChange, showErrorMessage, styles, selectedOption, caseOptions, setSelectedOption, disabled, getDomain, }: CaseControlProps): JSX.Element;
declare namespace CaseFilePicker {
    var defaultProps: {
        disabled: boolean;
    };
}
export default CaseFilePicker;
