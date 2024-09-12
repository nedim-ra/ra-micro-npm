declare class CaseFile {
    akt_nr?: string;
    akt_name?: string;
    constructor(props: any);
    static mapList: (list: Record<string, unknown>[]) => CaseFile[];
}
export default CaseFile;
