using System.Web;
using System.Web.Optimization;

namespace Web_Site
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new StyleBundle("~/Content/css/GeneralStyles").Include(
                      "~/Content/bootstrap.min.css",
                      "~/Content/Custom/navbar.css",
                      "~/Content/Site.css"));

            bundles.Add(new StyleBundle("~/Content/css/MapStyles").Include(
                     "~/Content/Custom/beer2048.css",
                     "~/Content/Custom/hover.css",
                     "~/Content/Custom/navbar.css",
                     "~/Content/Custom/map.css",
                     "~/Content/Custom/fastslide.css"));
        }
    }
}
