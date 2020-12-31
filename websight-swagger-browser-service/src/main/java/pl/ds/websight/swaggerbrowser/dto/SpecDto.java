package pl.ds.websight.swaggerbrowser.dto;

public class SpecDto {

    private String location;
    private String bundleName;
    private String bundleSymbolicName;

    public SpecDto(String location, String bundleName, String bundleSymbolicName) {
        this.location = location;
        this.bundleName = bundleName;
        this.bundleSymbolicName = bundleSymbolicName;
    }

    public String getLocation() {
        return location;
    }

    public String getBundleName() {
        return bundleName;
    }

    public String getBundleSymbolicName() {
        return bundleSymbolicName;
    }
}
