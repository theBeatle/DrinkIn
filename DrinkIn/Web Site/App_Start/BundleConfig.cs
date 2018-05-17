using System.Web;
using System.Web.Optimization;

namespace Web_Site
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/LibraryScripts").Include(
                        "~/Scripts/bootstrap.js",
                        "~/Scripts/jquery-3.3.1.min.js"));

            bundles.Add(new ScriptBundle("~/Scripts/MapScripts").Include(
                        "~/Scripts/Custom/Map.js"));

            bundles.Add(new StyleBundle("~/Content/css/GeneralStyles").Include(
                      "~/Content/bootstrap.min.css",
                      "~/Content/Custom/navbar.css",
                      "~/Content/Site.css"));

            bundles.Add(new StyleBundle("~/Content/css/MapStyles").Include(
                     "~/Content/Custom/beer2048.css",
                     "~/Content/Custom/hover.css",
                     "~/Content/Custom/navbar.css",
                     "~/Content/Custom/map.css",
                     "~/Content/Custom/fastslide.css",
                     "~/Content/Custom/panels.css"));
        }
    }
}
