using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Web_Site.Startup))]
namespace Web_Site
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
