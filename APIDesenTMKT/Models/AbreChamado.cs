using System;
using System.Collections.Generic;
using System.Linq;

using System.Threading.Tasks;
using APIDesenTMKT.Controllers;
using APIDesenTMKT.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.IO.Compression;

namespace APIDesenTMKT.Models
{
    public class AbreChamado
    {

        private IWebHostEnvironment _env;
        public AbreChamado(IWebHostEnvironment env)
        {

            _env = env;
        }

        public (string fillType, byte[] archiveData, string achiveName) DowloadZip(string directoryName)
        {
            var fileName = "SeuAnexo.zip";
            var files = Directory.GetFiles(Path.Combine(_env.ContentRootPath, directoryName)).ToList();
            using (var memoryStream = new MemoryStream())
            {
                using(var achive = new ZipArchive(memoryStream,ZipArchiveMode.Create))
                {
                    foreach(var file in files)
                    {
                        achive.CreateEntryFromFile(file, Path.GetFileName(file));
                        
                    }
                }
                return ("aplication/zip", memoryStream.ToArray(), fileName);
            }
        }

        //PARÂMETROS

        public int ctrCodigo { get; set; }
        public string agtCodigo { get; set; }
        public int aplCodigo { get; set; }
        public int atcCodigo { get; set; }
        public string descricao { get; set; }
        public string titulo { get; set; }
        public int chaCodigo { get; set; }
    }
    

    
  
}
