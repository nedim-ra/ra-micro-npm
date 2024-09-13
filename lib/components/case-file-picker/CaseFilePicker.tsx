import {
  ComboBox,
  IComboBox,
  IComboBoxOption,
  IComboBoxProps,
  IComboBoxStyles,
} from "@fluentui/react";
import React, { FormEvent } from "react";
import { CaseFile, CaseFileUtils } from "../../main.ts";

interface CaseControlProps extends Partial<IComboBoxProps> {
  label: string;
  handleComboBoxChange: (options: IComboBoxOption[]) => void;
  showErrorMessage: (errorMsg: string) => void;
  styles: Partial<IComboBoxStyles>;
  selectedOption: IComboBoxOption;
  caseOptions: IComboBoxOption[];
  setSelectedOption: (option: IComboBoxOption) => void;
  disabled?: boolean;
  getCase: (numValue: string) => Promise<CaseFile[]>;
  getCaseByName: (input: string) => Promise<CaseFile[]>;
}

function CaseFilePicker({
  label,
  handleComboBoxChange,
  showErrorMessage,
  styles,
  selectedOption,
  caseOptions,
  setSelectedOption,
  disabled = false,
  getCase,
  getCaseByName,
}: CaseControlProps): JSX.Element {
  const comboBoxRef = React.useRef<IComboBox>(null);
  const initialStyle = Object.assign(styles || {});

  // Update styles to include the background color
  const comboBoxStyles: Partial<IComboBoxStyles> = {
    ...initialStyle, // Spread existing styles
    root: {
      ...initialStyle.root, // Spread existing container styles
      backgroundColor: "#ffffd0", // Add the background color
    },
    input: {
      ...initialStyle.input, // Spread existing container styles
      backgroundColor: "#ffffd0",
    },
  };

  const onChangeValue = async (input: string) => {
    const numValue = input.replace(/\D/g, "");
    const formattedValue = CaseFileUtils.formatCaseYear(numValue);
    let caseData = await getCase(numValue);

    console.log(caseData);
    if (caseData && caseData.length > 0) {
      const fullText = `${formattedValue} - ${caseData[0].akt_name}`;
      const options = [{ key: numValue, text: fullText }];
      comboBoxRef?.current?.focus(true);
      console.log(options);
      handleComboBoxChange(options);
    } else {
      caseData = await getCaseByName(input);
      if (!caseData || caseData.length === 0) {
        showErrorMessage("Es gibt keine Suchergebnisse"); // TEMP
      } else {
        const options = caseData.map((item) => ({
          key: CaseFileUtils.formatCaseYear(item.akt_nr || ""),
          text: `${CaseFileUtils.formatCaseYear(item.akt_nr || "")} - ${item.akt_name}`,
        }));
        comboBoxRef?.current?.focus(true);
        console.log(options);
        handleComboBoxChange(options);
      }
    }
  };

  return (
    <ComboBox
      componentRef={comboBoxRef}
      allowFreeform
      label={label}
      onChange={(
        event: FormEvent<IComboBox>,
        _option,
        _index,
        value?: string
      ) => {
        if (event && value) {
          onChangeValue(value);
        }
      }}
      onItemClick={(_, option?: IComboBoxOption) => {
        if (option) {
          setSelectedOption(option);
        }
      }}
      styles={comboBoxStyles}
      options={caseOptions}
      selectedKey={selectedOption ? selectedOption.key : undefined}
      useComboBoxAsMenuWidth
      disabled={disabled}
    />
  );
}

CaseFilePicker.defaultProps = {
  disabled: false,
};

export default CaseFilePicker;
