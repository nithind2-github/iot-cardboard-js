import { useRef, useEffect } from 'react';
import { u as useGuid } from './useRuntimeSceneData-51255ff9.js';

var useTSIChartComponentRender = function (component, renderParameters) {
    var chartContainerGUID = useGuid();
    var chart = useRef(null);
    useEffect(function () {
        if (chart.current === null) {
            chart.current = new component(document.getElementById(chartContainerGUID));
        }
        if (renderParameters.data) {
            chart.current.render(renderParameters.data, renderParameters.chartOptions, renderParameters.chartDataOptions);
        }
    }, [renderParameters]);
    return chartContainerGUID;
};

export { useTSIChartComponentRender as u };
//# sourceMappingURL=useRenderTSIChartComponent-2e0aba06.js.map
