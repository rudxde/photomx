using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace commander.Controllers
{
    [Route("Storage")]
    public class StorageController : Controller
    {
        [HttpGet]
        [Route("{Type}")]
        public IActionResult GetAllEntrys([FromRoute]String Type)
        {
            return new OkResult();
        }

        [HttpGet]
        [Route("{Type}/{Entry}")]
        public IActionResult GetEntryData([FromRoute]String Type, [FromRoute]String Entry)
        {
            return new OkResult();
        }
        [HttpPost]
        [Route("{Type}/{Entry}")]
        public IActionResult AddEntryData([FromRoute]String Type, [FromRoute]String Entry)
        {
            return new OkResult();
        }
        [HttpPut]
        [Route("{Type}/{Entry}")]
        public IActionResult UpdateEntryData([FromRoute]String Type, [FromRoute]String Entry)
        {
            return new OkResult();
        }

        [HttpDelete]
        [Route("{Type}/{Entry}")]
        public IActionResult DeleteEntryData([FromRoute]String Type, [FromRoute]String Entry)
        {
            return new OkResult();
        }
    }
}
