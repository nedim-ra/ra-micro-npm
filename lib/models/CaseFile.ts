class CaseFile {
  akt_nr?: string;

  akt_name?: string;

  constructor(props: any) {
    this.akt_nr = props?.akt_nr;
    this.akt_name = props?.akt_name;
  }

  public static mapList = (list: Record<string, unknown>[]): CaseFile[] =>
    list.map((item) => new CaseFile(item));
}

export default CaseFile;
