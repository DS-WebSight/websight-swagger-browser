package pl.ds.websight.swaggerbrowser.fragments.administration.contentnavigation.main;

import org.osgi.service.component.annotations.Component;
import pl.ds.websight.fragments.registry.WebFragment;

@Component
public class PageNavigationItemWebFragment implements WebFragment {

    @Override
    public String getKey() {
        return "websight.administration.content-navigation.main";
    }

    @Override
    public String getFragment() {
        return "/apps/websight-swagger-browser/web-resources/fragments/administration/content-navigation/main/NavigationItemFragment.js";
    }

    @Override
    public int getRanking() {
        return 500;
    }
}