import { default as CaseFile } from '../models/CaseFile.ts';
declare class CaseFileService {
    static getCase: (domain: string, casenumber: string) => Promise<CaseFile[]>;
    static getCaseByName: (domain: string, caseFileNameShort: string) => Promise<CaseFile[]>;
}
export default CaseFileService;
