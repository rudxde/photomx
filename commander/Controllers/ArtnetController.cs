using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace commander.Controllers
{
    [Route("Artnet")]
    public class ArtnetController : Controller
    {
        [HttpPut]
        [Route("DMX/{Universe}")]
        public IActionResult PutDmx([FromRoute]int Universe, [FromBody]byte[] DMXdata)
        {
            Program.myArtnetService.universes[Universe].DMXdata = DMXdata;
            return new OkResult();
        }

        [HttpGet]
        [Route("client")]
        public IActionResult GetAllClients()
        {
            return new ObjectResult(Program.myArtnetService.clientHolder.ListClients().ToArray());
        }

        [HttpPost]
        [Route("client/{ip}/{universe}")]
        public IActionResult AddNewClient([FromRoute]String ip, [FromRoute]int universe)
        {
            Program.myArtnetService.clientHolder.addClient(ip, universe);
            return new OkResult();
        }
        [HttpDelete]
        [Route("client/{ip}/{universe}")]
        public IActionResult RemoveClient([FromRoute]String ip, [FromRoute]int universe)
        {
            Program.myArtnetService.clientHolder.removeClient(ip, universe);
            return new OkResult();
        }
    }
}
