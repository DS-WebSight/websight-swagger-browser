package pl.ds.websight.swaggerbrowser.rest;

import org.osgi.framework.Bundle;
import org.osgi.framework.FrameworkUtil;
import org.osgi.service.component.annotations.Component;
import pl.ds.websight.rest.framework.RestAction;
import pl.ds.websight.rest.framework.RestActionResult;
import pl.ds.websight.rest.framework.annotations.SlingAction;
import pl.ds.websight.swaggerbrowser.dto.SpecDto;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Component
@SlingAction(SlingAction.HttpMethod.GET)
public class FindSpecsRestAction implements RestAction<Void, List<SpecDto>> {

    private static final String SPEC_MANIFEST_HEADER = "WebSight-Swagger-Index";
    private static final String BUNDLE_NAME_HEADER = "Bundle-Name";

    @Override
    public RestActionResult<List<SpecDto>> perform(Void noModel) {
        List<SpecDto> result = Arrays.stream(FrameworkUtil.getBundle(this.getClass()).getBundleContext().getBundles()).filter(bundle ->
                bundle.getHeaders().get(SPEC_MANIFEST_HEADER) != null)
                .map(bundle -> new SpecDto(getBundleHeader(bundle, SPEC_MANIFEST_HEADER), getBundleHeader(bundle, BUNDLE_NAME_HEADER),
                        bundle.getSymbolicName()))
                .collect(Collectors.toList());
        return RestActionResult.success(result);
    }

    private String getBundleHeader(Bundle bundle, String headerName) {
        return bundle.getHeaders().get(headerName);
    }
}
