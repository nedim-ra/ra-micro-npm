class SpaceSettings {
  kdnr: string;

  benutzernr: number;

  passwordEnc: string;

  passwordIv: string;

  constructor(props: {
    kdnr: string;
    benutzernr: number;
    passwordEnc: string;
    passwordIv: string;
  }) {
    this.kdnr = props.kdnr;
    this.benutzernr = props.benutzernr;
    this.passwordEnc = props.passwordEnc;
    this.passwordIv = props.passwordIv;
  }
}

export default SpaceSettings;
