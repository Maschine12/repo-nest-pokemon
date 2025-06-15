export interface HttpAdapter{
    get(url:string):Promise<any>;
}