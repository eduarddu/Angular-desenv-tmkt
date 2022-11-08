﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using APIDesenTMKT.Models;

namespace APIDesenTMKT.Controllers
{
    [Route("api/demoUpdate")]
    public class UploadControllerUpdate : Controller
    {

        private IWebHostEnvironment webHostEnvironment;
        private IHttpContextAccessor httpContextAccessor;
        public UploadControllerUpdate(IWebHostEnvironment _webHostEnvironment, IHttpContextAccessor _httpContextAccessor)
        {
            webHostEnvironment = _webHostEnvironment;
            httpContextAccessor = _httpContextAccessor;
        }

        [Produces("application/json")]
        [HttpPost("uploadUpdate")]
        public IActionResult Uploads(IFormFile file)
        {
            try
            {


                var path = Path.Combine(webHostEnvironment.WebRootPath, "uploads", file.FileName);
                using (var fileStream = new FileStream(path, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }

                var baseURL = httpContextAccessor.HttpContext.Request.Scheme + "://" +
                httpContextAccessor.HttpContext.Request.Host +
                httpContextAccessor.HttpContext.Request.PathBase;

                return Ok(new
                {
                    fileName = baseURL + "/uploads/" + file.FileName,
                    fileSize = file.Length

                });
            }

            catch
            {
                return BadRequest();
            }

        }
    }
}
