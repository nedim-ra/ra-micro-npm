class EssentialsSettings {
  accessToken: string;

  id: number;

  username: string;

  email: string;

  roles: string[];

  domain: string;

  password: string;

  remember: boolean;

  constructor(props: {
    accessToken: string;
    id: number;
    username: string;
    email: string;
    roles: string[];
    domain: string;
    password: string;
    remember: boolean;
  }) {
    this.accessToken = props.accessToken;
    this.id = props.id;
    this.username = props.username;
    this.email = props.email;
    this.roles = props.roles;
    this.domain = props.domain;
    this.password = props.password;
    this.remember = props.remember;
  }
}

export default EssentialsSettings;
