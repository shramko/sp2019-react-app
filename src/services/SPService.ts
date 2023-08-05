import {sp} from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";

export class SPService {
    constructor() {
        sp.setup({
            sp: {
                headers: {
                    Accept: "application/json;odata=verbose",
                },
                baseUrl: this.getWebUrl()
            }
        });
    }

    private getWebUrl(){
        // @ts-ignore
        if (typeof _spPageContextInfo !== 'undefined') {
            // @ts-ignore
            return  _spPageContextInfo?.webAbsoluteUrl;
        }
        return  "http://localhost:8080";
    }

    public async getCurrentUser() {
        return await sp.web.currentUser.get();
    }
}