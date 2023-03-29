import { H as HierarchyNodeType } from './ADT3DScenePage-dc80dd59';
import { P as IHierarchyNode, a0 as IADTModel, a2 as IADTTwin, aG as IAdtPusherSimulation, aH as AdtPusherSimulationType, aD as DTModel, aE as DTwin, aF as DTwinRelationship } from './ADTAdapter-69d7e03f';

declare class HierarchyNode implements IHierarchyNode {
    name: string;
    id: string;
    parentNode?: IHierarchyNode;
    nodeData: any;
    nodeType: HierarchyNodeType;
    children?: Record<string, IHierarchyNode>;
    childrenContinuationToken?: string;
    onNodeClick?: (node?: IHierarchyNode) => void;
    isCollapsed?: boolean;
    isSelected?: boolean;
    isLoading?: boolean;
    static createNodesFromADTModels: (models: Array<IADTModel>, nodeType?: HierarchyNodeType, newlyAddedModelIds?: Array<string>) => Record<string, IHierarchyNode> | Record<string, never>;
    static createNodesFromADTTwins: (twins: Array<IADTTwin>, modelNode: IHierarchyNode) => Record<string, IHierarchyNode> | Record<string, never>;
}

declare function I18nProviderWrapper({ children, locale, localeStrings, i18n }: {
    children: any;
    locale: any;
    localeStrings?: any;
    i18n: any;
}): JSX.Element;

declare class AssetSimulation implements IAdtPusherSimulation {
    private assets;
    seedTimeMillis: number;
    private intervalMillis;
    constructor(seedTimeMillis: number, intervalMillis: number, simulationType: AdtPusherSimulationType);
    generateTwinId(name: string): string;
    generateModelId(name: string): string;
    tick(): any;
    generateDTModels(download?: boolean): DTModel[];
    generateDTwins(download?: boolean): DTwin[];
    generateTwinRelationships(): DTwinRelationship[];
}

export { AssetSimulation as A, HierarchyNode as H, I18nProviderWrapper as I };
