import { bo as __spreadArray, bM as downloadJSON, I as AdtPusherSimulationType } from './Interfaces-8fb2a33a.js';

var Asset = /** @class */ (function () {
    function Asset(name) {
        var _this = this;
        this.getDoubleValue = function (minValue, maxValue) {
            return function (currentValue) {
                var direction = currentValue > maxValue
                    ? -1
                    : currentValue < minValue
                        ? 1
                        : Math.random() < 0.5
                            ? -1
                            : 1;
                var step = direction * (Math.random() * (maxValue - minValue) * 0.02);
                return (currentValue += step);
            };
        };
        this.getIntegerValue = function (minValue, maxValue) {
            return function (currentValue) {
                var direction = currentValue >= maxValue
                    ? -1
                    : currentValue <= minValue
                        ? 1
                        : Math.random() < 0.5
                            ? -1
                            : 1;
                return (currentValue += direction);
            };
        };
        this.getBooleanValue = function (isTrueThreshold) {
            return function (_currentValue) {
                return Math.random() > isTrueThreshold;
            };
        };
        this.getStringValue = function () {
            return function (_currentValue) {
                var fourDigitNumber = Math.floor(Math.random() * 1000);
                return "Box" + fourDigitNumber;
            };
        };
        this.properties = [];
        this.relationships = [];
        this.twins = [];
        this.name = name;
        switch (name) {
            case 'RobotArm': {
                this.properties = [
                    {
                        id: this.name,
                        propertyName: 'FailedPickupsLastHr',
                        currentValue: 1,
                        getNextValue: this.getIntegerValue(0, 5),
                        schema: 'integer'
                    },
                    {
                        id: this.name,
                        propertyName: 'PickupFailedAlert',
                        currentValue: false,
                        getNextValue: this.getBooleanValue(0.75),
                        schema: 'boolean'
                    },
                    {
                        id: this.name,
                        propertyName: 'PickupFailedBoxID',
                        currentValue: 'Box1',
                        getNextValue: this.getStringValue(),
                        schema: 'string'
                    },
                    {
                        id: this.name,
                        propertyName: 'HydraulicPressure',
                        currentValue: 20,
                        getNextValue: this.getDoubleValue(10, 100)
                    }
                ];
                [1, 2, 3, 4, 5, 6].forEach(function (idx) {
                    _this.twins.push({
                        name: "Arm" + idx,
                        properties: _this.getAssetProperties()
                    });
                });
                break;
            }
            case 'DistributionCenter': {
                this.relationships.push({
                    name: 'contains',
                    target: 'RobotArm'
                });
                this.twins.push({
                    name: 'DistCtr',
                    assetRelationships: [1, 2, 3, 4, 5, 6].map(function (idx) {
                        return {
                            name: 'contains',
                            target: "Arm" + idx,
                            targetModel: 'RobotArm'
                        };
                    }),
                    properties: []
                });
                break;
            }
            case 'Car': {
                this.properties = [
                    {
                        id: this.name,
                        propertyName: 'Speed',
                        currentValue: Math.floor(Math.random() * 20) + 40,
                        getNextValue: this.getDoubleValue(0, 100)
                    },
                    {
                        id: this.name,
                        propertyName: 'OutdoorTemperature',
                        currentValue: Math.floor(Math.random()) + 40,
                        getNextValue: this.getDoubleValue(20, 80)
                    },
                    {
                        id: this.name,
                        propertyName: 'OilPressure',
                        currentValue: Math.floor(Math.random()) + 30,
                        getNextValue: this.getDoubleValue(28, 32)
                    }
                ];
                this.twins.push({
                    name: 'CarTwin',
                    properties: this.getAssetProperties()
                });
                break;
            }
            case 'Windmill': {
                this.properties = [
                    {
                        id: this.name,
                        propertyName: 'OutdoorTemperature',
                        currentValue: Math.floor(Math.random() * 20) + 40,
                        getNextValue: this.getDoubleValue(0, 100)
                    },
                    {
                        id: this.name,
                        propertyName: 'AtmosphericPressure',
                        currentValue: Math.floor(Math.random()) + 30,
                        getNextValue: this.getDoubleValue(29, 31)
                    },
                    {
                        id: this.name,
                        propertyName: 'WindVelocity',
                        currentValue: Math.floor(Math.random() * 30),
                        getNextValue: this.getDoubleValue(0, 70)
                    },
                    {
                        id: this.name,
                        propertyName: 'BearingTemperature',
                        currentValue: Math.floor(Math.random() * 30) + 90,
                        getNextValue: this.getDoubleValue(90, 200)
                    },
                    {
                        id: this.name,
                        propertyName: 'OilViscosity',
                        currentValue: Math.floor(Math.random() * 5) + 10,
                        getNextValue: this.getDoubleValue(10, 80)
                    }
                ];
                this.twins.push({
                    name: 'Windmill_1',
                    properties: this.getAssetProperties()
                });
                break;
            }
            case 'HVACSystem': {
                this.properties = [
                    {
                        id: this.name,
                        propertyName: 'FanSpeed',
                        currentValue: Math.floor(Math.random() * 20) + 40,
                        getNextValue: this.getDoubleValue(0, 100)
                    },
                    {
                        id: this.name,
                        propertyName: 'CoolerTemperature',
                        currentValue: Math.floor(Math.random()) + 40,
                        getNextValue: this.getDoubleValue(20, 60)
                    },
                    {
                        id: this.name,
                        propertyName: 'HeaterTemperature',
                        currentValue: Math.floor(Math.random()) + 50,
                        getNextValue: this.getDoubleValue(40, 100)
                    }
                ];
                this.twins.push({
                    name: 'HVACSystem_1',
                    properties: this.getAssetProperties()
                });
                break;
            }
            case 'PasteurizationMachine': {
                this.properties = [
                    {
                        id: this.name,
                        propertyName: 'InFlow',
                        currentValue: Math.floor(Math.random() * 300) + 50,
                        getNextValue: this.getDoubleValue(50, 600)
                    },
                    {
                        id: this.name,
                        propertyName: 'OutFlow',
                        currentValue: Math.floor(Math.random() * 300) + 50,
                        getNextValue: this.getDoubleValue(50, 600)
                    },
                    {
                        id: this.name,
                        propertyName: 'Temperature',
                        currentValue: Math.floor(Math.random()) + 120,
                        getNextValue: this.getDoubleValue(110, 250)
                    },
                    {
                        id: this.name,
                        propertyName: 'PercentFull',
                        currentValue: Math.floor(Math.random()),
                        getNextValue: this.getDoubleValue(0, 1)
                    }
                ];
                this.relationships.push({
                    name: 'feeds',
                    target: 'SaltMachine'
                });
                this.twins.push({
                    name: 'PasteurizationMachine_A01',
                    assetRelationships: [
                        {
                            name: 'feeds',
                            target: 'SaltMachine_C0',
                            targetModel: 'SaltMachine'
                        }
                    ],
                    properties: this.getAssetProperties()
                });
                this.twins.push({
                    name: 'PasteurizationMachine_A02',
                    assetRelationships: [
                        {
                            name: 'feeds',
                            target: 'SaltMachine_C0',
                            targetModel: 'SaltMachine'
                        }
                    ],
                    properties: this.getAssetProperties()
                });
                this.twins.push({
                    name: 'PasteurizationMachine_A03',
                    assetRelationships: [
                        {
                            name: 'feeds',
                            target: 'SaltMachine_C1',
                            targetModel: 'SaltMachine'
                        }
                    ],
                    properties: this.getAssetProperties()
                });
                this.twins.push({
                    name: 'PasteurizationMachine_A04',
                    assetRelationships: [
                        {
                            name: 'feeds',
                            target: 'SaltMachine_C2',
                            targetModel: 'SaltMachine'
                        }
                    ],
                    properties: this.getAssetProperties()
                });
                break;
            }
            case 'SaltMachine': {
                this.properties = [
                    {
                        id: this.name,
                        propertyName: 'InFlow',
                        currentValue: Math.floor(Math.random() * 300) + 50,
                        getNextValue: this.getDoubleValue(50, 600)
                    },
                    {
                        id: this.name,
                        propertyName: 'OutFlow',
                        currentValue: Math.floor(Math.random() * 300) + 50,
                        getNextValue: this.getDoubleValue(50, 600)
                    }
                ];
                this.twins.push({
                    name: 'SaltMachine_C0',
                    properties: this.getAssetProperties()
                });
                this.twins.push({
                    name: 'SaltMachine_C1',
                    properties: this.getAssetProperties()
                });
                this.twins.push({
                    name: 'SaltMachine_C2',
                    properties: this.getAssetProperties()
                });
                break;
            }
            case 'MaintenancePersonnel': {
                this.relationships.push({ name: 'maintains' });
                this.twins.push({
                    name: 'Xenia',
                    assetRelationships: [
                        {
                            name: 'maintains',
                            target: 'SaltMachine_C0',
                            targetModel: 'SaltMachine'
                        },
                        {
                            name: 'maintains',
                            target: 'SaltMachine_C1',
                            targetModel: 'SaltMachine'
                        }
                    ],
                    properties: []
                });
                this.twins.push({
                    name: 'Amy',
                    assetRelationships: [
                        {
                            name: 'maintains',
                            target: 'SaltMachine_C1',
                            targetModel: 'SaltMachine'
                        },
                        {
                            name: 'maintains',
                            target: 'PasteurizationMachine_A01',
                            targetModel: 'PasteurizationMachine'
                        }
                    ],
                    properties: []
                });
                this.twins.push({
                    name: 'John',
                    assetRelationships: [
                        {
                            name: 'maintains',
                            target: 'PasteurizationMachine_A02',
                            targetModel: 'PasteurizationMachine'
                        },
                        {
                            name: 'maintains',
                            target: 'PasteurizationMachine_A03',
                            targetModel: 'PasteurizationMachine'
                        }
                    ],
                    properties: []
                });
                this.twins.push({
                    name: 'Phillip',
                    assetRelationships: [
                        {
                            name: 'maintains',
                            target: 'SaltMachine_C2',
                            targetModel: 'SaltMachine'
                        },
                        {
                            name: 'maintains',
                            target: 'PasteurizationMachine_A04',
                            targetModel: 'PasteurizationMachine'
                        }
                    ],
                    properties: []
                });
                break;
            }
            case 'Factory': {
                this.relationships.push({ name: 'contains' });
                this.relationships.push({
                    name: 'employs',
                    target: 'MaintenancePersonnel'
                });
                this.twins.push({
                    name: 'OsloFactory',
                    assetRelationships: [
                        {
                            name: 'contains',
                            target: 'SaltMachine_C0',
                            targetModel: 'SaltMachine'
                        },
                        {
                            name: 'contains',
                            target: 'SaltMachine_C1',
                            targetModel: 'SaltMachine'
                        },
                        {
                            name: 'contains',
                            target: 'PasteurizationMachine_A01',
                            targetModel: 'PasteurizationMachine'
                        },
                        {
                            name: 'contains',
                            target: 'PasteurizationMachine_A02',
                            targetModel: 'PasteurizationMachine'
                        },
                        {
                            name: 'contains',
                            target: 'PasteurizationMachine_A03',
                            targetModel: 'PasteurizationMachine'
                        },
                        {
                            name: 'employs',
                            target: 'Amy',
                            targetModel: 'MaintenancePersonnel'
                        },
                        {
                            name: 'employs',
                            target: 'John',
                            targetModel: 'MaintenancePersonnel'
                        },
                        {
                            name: 'employs',
                            target: 'Xenia',
                            targetModel: 'MaintenancePersonnel'
                        }
                    ],
                    properties: []
                });
                this.twins.push({
                    name: 'StockholmFactory',
                    assetRelationships: [
                        {
                            name: 'contains',
                            target: 'SaltMachine_C2',
                            targetModel: 'SaltMachine'
                        },
                        {
                            name: 'contains',
                            target: 'PasteurizationMachine_A04',
                            targetModel: 'PasteurizationMachine'
                        },
                        {
                            name: 'employs',
                            target: 'Phillip',
                            targetModel: 'MaintenancePersonnel'
                        }
                    ],
                    properties: []
                });
                break;
            }
            case 'Country': {
                this.relationships.push({
                    name: 'contains',
                    target: 'Factory'
                });
                this.twins.push({
                    name: 'Norway',
                    assetRelationships: [
                        {
                            name: 'contains',
                            target: 'OsloFactory',
                            targetModel: 'Factory'
                        }
                    ],
                    properties: []
                });
                this.twins.push({
                    name: 'Sweden',
                    assetRelationships: [
                        {
                            name: 'contains',
                            target: 'StockholmFactory',
                            targetModel: 'Factory'
                        }
                    ],
                    properties: []
                });
                break;
            }
        }
    }
    Asset.prototype.getAssetProperties = function () {
        var assetProperties = [];
        this.properties.forEach(function (property) {
            assetProperties.push(new AssetProperty(property));
        });
        return assetProperties;
    };
    return Asset;
}());
var AssetProperty = /** @class */ (function () {
    function AssetProperty(_a) {
        var id = _a.id, propertyName = _a.propertyName, currentValue = _a.currentValue, getNextValue = _a.getNextValue, _b = _a.schema, schema = _b === void 0 ? 'double' : _b;
        this.id = id;
        this.propertyName = propertyName;
        this.currentValue = currentValue;
        this.getNextValue = getNextValue;
        this.schema = schema;
    }
    AssetProperty.prototype.tick = function () {
        this.currentValue = this.getNextValue(this.currentValue);
        var event = {
            op: 'replace',
            path: "/" + this.propertyName,
            value: this.currentValue
        };
        return event;
    };
    return AssetProperty;
}());

var modelTwinsRelationshipsData = {
    versionNumber: 1
};
var AssetSimulation = /** @class */ (function () {
    function AssetSimulation(seedTimeMillis, intervalMillis, simulationType) {
        this.assets = [];
        this.seedTimeMillis = seedTimeMillis;
        this.intervalMillis = intervalMillis;
        if (simulationType === AdtPusherSimulationType.DairyProduction) {
            this.assets.push(new Asset('PasteurizationMachine'));
            this.assets.push(new Asset('SaltMachine'));
            this.assets.push(new Asset('MaintenancePersonnel'));
            this.assets.push(new Asset('Factory'));
            this.assets.push(new Asset('Country'));
        }
        else if (simulationType === AdtPusherSimulationType.RobotArms) {
            this.assets.push(new Asset('RobotArm'));
            this.assets.push(new Asset('DistributionCenter'));
        }
    }
    AssetSimulation.prototype.generateTwinId = function (name) {
        return name + "Twin";
    };
    AssetSimulation.prototype.generateModelId = function (name) {
        return "dtmi:assetGen:" + name + ";" + modelTwinsRelationshipsData.versionNumber;
    };
    AssetSimulation.prototype.tick = function () {
        this.seedTimeMillis += this.intervalMillis;
        var events = [];
        this.assets.forEach(function (asset) {
            asset.twins.forEach(function (twin) {
                var updateTwin = {
                    dtId: twin.name,
                    patchJSON: twin.properties.map(function (d) {
                        return d.tick();
                    })
                };
                events.push(updateTwin);
            });
        });
        return events;
    };
    AssetSimulation.prototype.generateDTModels = function (download) {
        var _this = this;
        if (download === void 0) { download = false; }
        var dtdlModels = this.assets.map(function (asset) {
            var propertyContents = asset.properties.map(function (property) { return ({
                '@type': 'Property',
                name: property.propertyName,
                schema: property.schema || 'double'
            }); });
            var relationshipContents = asset.relationships.map(function (assetRelationship) {
                var relationship = {
                    '@type': 'Relationship',
                    name: assetRelationship.name,
                    properties: [
                        {
                            '@type': 'Property',
                            name: 'targetModel',
                            schema: 'string'
                        }
                    ]
                };
                if (assetRelationship.target) {
                    relationship.target = _this.generateModelId(assetRelationship.target);
                }
                return relationship;
            });
            var model = {
                '@id': _this.generateModelId(asset.name),
                '@type': 'Interface',
                '@context': 'dtmi:dtdl:context;2',
                displayName: asset.name,
                contents: __spreadArray(__spreadArray([], propertyContents), relationshipContents)
            };
            return model;
        });
        if (download) {
            downloadJSON(JSON.stringify(dtdlModels), 'DT_Models.json');
        }
        return dtdlModels;
    };
    AssetSimulation.prototype.generateDTwins = function (download) {
        if (download === void 0) { download = false; }
        var twins = [];
        this.assets.forEach(function (asset) {
            asset.twins.forEach(function (assetTwin) {
                var twin = {
                    $dtId: assetTwin.name,
                    $metadata: {
                        $model: "dtmi:assetGen:" + asset.name + ";" + modelTwinsRelationshipsData.versionNumber
                    }
                };
                asset.properties.forEach(function (property) {
                    twin["" + property.propertyName] = property.currentValue;
                });
                twins.push(twin);
            });
        });
        if (download) {
            downloadJSON(JSON.stringify(twins), 'DT_Twins.json');
        }
        return twins;
    };
    AssetSimulation.prototype.generateTwinRelationships = function () {
        var relationships = [];
        this.assets.forEach(function (asset) {
            asset === null || asset === void 0 ? void 0 : asset.twins.forEach(function (twin) {
                var _a;
                (_a = twin.assetRelationships) === null || _a === void 0 ? void 0 : _a.forEach(function (relationship, relationshipIndex) {
                    relationships.push({
                        $relId: twin.name + "_" + relationship.name + "_Relationship" + relationshipIndex,
                        $dtId: twin.name,
                        $name: relationship.name,
                        $targetId: relationship.target
                            ? relationship.target
                            : '',
                        targetModel: relationship.targetModel
                            ? relationship.targetModel
                            : ''
                    });
                });
            });
        });
        return relationships;
    };
    return AssetSimulation;
}());

export { AssetSimulation as A };
//# sourceMappingURL=AssetSimulation-1892741d.js.map
