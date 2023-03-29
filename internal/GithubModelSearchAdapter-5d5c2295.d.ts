import { ao as IBaseStandardModelSearchAdapter, m as AdapterResult, dv as StandardModelIndexData, dw as StandardModelData, aq as IStandardModelSearchAdapter, ap as IModelSearchStringParams, dx as StandardModelSearchData } from './ADTAdapter-69d7e03f';
import { m as modelActionType } from './ADT3DScenePage-dc80dd59';

declare class BaseStandardModelSearchAdapter implements IBaseStandardModelSearchAdapter {
    CdnUrl: string;
    constructor(CdnUrl: string);
    getModelSearchIndex(): Promise<AdapterResult<StandardModelIndexData>>;
    fetchModelJsonFromCDN(dtmi: string, actionType: modelActionType): Promise<AdapterResult<StandardModelData>>;
    parseModelsIntoArray(models: any): any[];
}

declare class CdnModelSearchAdapter extends BaseStandardModelSearchAdapter implements IStandardModelSearchAdapter {
    private pageSize;
    constructor(CdnUrl: string, pageSize?: number);
    searchString({ modelIndex, pageIdx, queryString }: IModelSearchStringParams): Promise<AdapterResult<StandardModelSearchData>>;
}

declare class GithubModelSearchAdapter extends BaseStandardModelSearchAdapter implements IStandardModelSearchAdapter {
    githubRepo: string;
    private pageSize;
    constructor(CdnUrl: string, githubRepo: string, pageSize?: number);
    searchString({ queryString, pageIdx }: IModelSearchStringParams): Promise<AdapterResult<StandardModelSearchData>>;
}

export { CdnModelSearchAdapter as C, GithubModelSearchAdapter as G };
