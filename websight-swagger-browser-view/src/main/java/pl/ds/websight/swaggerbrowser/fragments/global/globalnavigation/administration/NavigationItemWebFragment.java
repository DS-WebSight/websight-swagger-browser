package pl.ds.websight.swaggerbrowser.fragments.global.globalnavigation.administration;

import org.osgi.service.component.annotations.Component;
import pl.ds.websight.fragments.registry.WebFragment;

@Component
public class NavigationItemWebFragment implements WebFragment {

    @Override
    public String getKey() {
        return "websight.global.global-navigation.administration";
    }

    @Override
    public String getFragment() {
        return "/apps/websight-swagger-browser/web-resources/fragments/global/global-navigation/administration/NavigationItemFragment.js";
    }

    @Override
    public int getRanking() {
        return 500;
    }
}
