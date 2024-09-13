import { IComboBoxOption } from "@fluentui/react";

class CaseFileUtils {
  public static formatCaseYear = (value: string) => {
    const caseNumber = value.slice(0, -2);
    const yearNumber = value.slice(-2);
    return `${caseNumber}/${yearNumber}`;
  };

  public static setLastUsedOptions = (
    option: IComboBoxOption,
    item: IComboBoxOption[],
    setItem: (comboOption: IComboBoxOption[]) => void
  ) => {
    // Remember the casenum option
    let lastUsedOptions = item;
    if (!lastUsedOptions || lastUsedOptions.length === 0) {
      lastUsedOptions = [];
    }
    const index = lastUsedOptions.findIndex(
      (lastUsedOption) => lastUsedOption.key === option.key
    );
    if (index >= 0) {
      // if exist same casenum option
      lastUsedOptions.splice(index, 1);
      lastUsedOptions.unshift(option);
    } else {
      lastUsedOptions.unshift(option);
      if (lastUsedOptions.length > 10) {
        lastUsedOptions.pop();
      }
    }
    // Save the case numbers in localStorage
    setItem(lastUsedOptions);
    return lastUsedOptions;
  };
}

export default CaseFileUtils;
