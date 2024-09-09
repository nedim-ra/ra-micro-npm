class BeaSettings {
  mailForwardingEnabled: boolean;

  beaCertificates: string[];

  lastSyncId: number;

  constructor(props: {
    mailForwardingEnabled: boolean;
    beaCertificates: string[];
    lastSyncId: number;
  }) {
    this.mailForwardingEnabled = props.mailForwardingEnabled;
    this.beaCertificates = props.beaCertificates;
    this.lastSyncId = props.lastSyncId;
  }
}

export default BeaSettings;
