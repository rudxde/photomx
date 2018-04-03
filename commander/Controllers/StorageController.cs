using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;

namespace commander.Controllers
{
    [Route("Storage")]
    public class StorageController : Controller
    {
        [HttpGet]
        [Route("{Type}")]
        public IActionResult GetAllEntrys([FromRoute]String Type)
        {
            ensureNameToBeSave(Type);
            ensureDirectory(Type);
            List<string> Files = new List<string>();
            foreach (String file in System.IO.Directory.GetFiles("data/" + Type))
            {
                Files.Add((new System.IO.FileInfo(file)).Name);
            }
            return new OkResult();
        }

        [HttpGet]
        [Route("{Type}/{Entry}")]
        public IActionResult GetEntryData([FromRoute]String Type, [FromRoute]String Entry)
        {
            ensureNameToBeSave(Entry);
            ensureNameToBeSave(Type);
            ensureDirectory(Type);
            if (!System.IO.File.Exists(getFileName(Type, Entry)))
            {
                return new StatusCodeResult(404);
            }
            return Content(System.IO.File.ReadAllText(getFileName(Type, Entry)));
        }

        [HttpPost]
        [Route("{Type}/{Entry}")]
        public IActionResult AddEntryData([FromRoute]String Type, [FromRoute]String Entry, [FromBody]String FileBody)
        {
            ensureNameToBeSave(Entry);
            ensureNameToBeSave(Type);
            ensureDirectory(Type);
            System.IO.File.WriteAllText(getFileName(Type, Entry), FileBody);
            return new OkResult();
        }

        [HttpDelete]
        [Route("{Type}/{Entry}")]
        public IActionResult DeleteEntryData([FromRoute]String Type, [FromRoute]String Entry)
        {
            ensureNameToBeSave(Entry);
            ensureNameToBeSave(Type);
            ensureDirectory(Type);
            if (!System.IO.File.Exists(getFileName(Type, Entry)))
            {
                return new StatusCodeResult(404);
            }
            System.IO.File.Delete(getFileName(Type, Entry));
            return new OkResult();
        }

        private Regex saveName = new Regex("[A-Za-z0-9\\.]+");
        private void ensureNameToBeSave(String Name)
        {
            if (!saveName.Match(Name).Success)
            {
                throw new Exception($"\"${Name}\" does not match the pattern of \"[A-Za-z0-9]+\"");
            }
        }

        private String getFileName(String Type, String Entry)
        {
            return $"data/${Type}/${Entry}.entry";
        }

        private void ensureDirectory(String directory)
        {
            if (!System.IO.Directory.Exists("data"))
            {
                System.IO.Directory.CreateDirectory("data");
            }
            if (!System.IO.Directory.Exists("data/" + directory))
            {
                System.IO.Directory.CreateDirectory("data/" + directory);
            }
        }
    }
}
