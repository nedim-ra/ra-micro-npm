import axios from "axios";
import CaseFile from "../models/CaseFile.ts";

class CaseFileService {
  static getCase = async (
    domain: string,
    casenumber: string
  ): Promise<CaseFile[]> => {
    const result = await axios.get(
      `${domain}/api/akte/akte_by_nr?aktenr=${casenumber}`
    );

    return CaseFile.mapList(result.data);
  };

  static getCaseByName = async (
    domain: string,
    caseFileNameShort: string
  ): Promise<CaseFile[]> => {
    const result = await axios.get(
      `${domain}/api/akte/akte1_suche?query=${encodeURIComponent(caseFileNameShort)}&pool_id=1`
    );

    return CaseFile.mapList(result.data);
  };
}

export default CaseFileService;
