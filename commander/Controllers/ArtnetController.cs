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
        [Route("DMX/")]
        public IActionResult PutDmx([FromBody]IRawArtnetData rawArtnetData)
        {
            ArtnetData artnetData = new ArtnetData(rawArtnetData);
            Program.myArtnetService.universes[artnetData.artnet, artnetData.subnet].DMXdata = artnetData.data;
            return new OkResult();
        }

        [HttpGet]
        [Route("client")]
        public IActionResult GetAllClients()
        {
            return new ObjectResult(Program.myArtnetService.clientHolder.ListClients().ToArray());
        }

        [HttpPost]
        [Route("client/{ip}/{artnet}:{subnet}")]
        public IActionResult AddNewClient([FromRoute]String ip, [FromRoute]int artnet, [FromRoute]int subnet)
        {
            Program.myArtnetService.clientHolder.addClient(ip, artnet, subnet);
            return new OkResult();
        }
        [HttpDelete]
        [Route("client/{ip}/{artnet}:{subnet}")]
        public IActionResult RemoveClient([FromRoute]String ip, [FromRoute]int artnet, [FromRoute]int subnet)
        {
            Program.myArtnetService.clientHolder.removeClient(ip, artnet, subnet);
            return new OkResult();
        }
    }
}
