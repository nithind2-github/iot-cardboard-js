import { dE as parseLinkedTwinExpression, cT as isNumericType, bp as ViewerConfigUtility } from './Interfaces-8fb2a33a.js';

/**
 * Function to determine if visual will be shown based on an evaluated expression
 */
function shouldShowVisual(propertyType, twins, valueExpression, values) {
    var evaluatedExpression = parseLinkedTwinExpression(valueExpression, twins);
    if (propertyType === 'boolean') {
        return values[0] === evaluatedExpression;
    }
    else if (propertyType === 'string') {
        return values.includes(evaluatedExpression);
    }
    else if (isNumericType(propertyType)) {
        return ViewerConfigUtility.isValueWithinRange(values, evaluatedExpression);
    }
    else {
        // Return false since other property types are not yet supported
        return false;
    }
}
/** Utility that returns if a Condition contains or not a badge icon */
var hasBadge = function (condition) {
    var _a;
    return !!((_a = condition === null || condition === void 0 ? void 0 : condition.visual) === null || _a === void 0 ? void 0 : _a.iconName);
};

export { hasBadge as h, shouldShowVisual as s };
//# sourceMappingURL=VisualRuleUtils-57055cf0.js.map
