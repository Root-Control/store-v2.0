interface IEnvironmentConfig {
    rootPath: string;
    db: string;
    httpPort: number;
    wsPort: number;
    jwtSecret: string;
    domain: string;
    httpProtocol: string;
    wsProtocol: string;
    awsKey: string;
    awsSecret: string;
}
interface IConfig {
    [key: string]: IEnvironmentConfig;
    development: IEnvironmentConfig;
    production: IEnvironmentConfig;
}
declare const Config: IConfig;
export { IEnvironmentConfig, IConfig, Config };
