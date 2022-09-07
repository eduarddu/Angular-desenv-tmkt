﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using APIDesenTMKT.Models;
using System.Linq;
using System.Web.Http;
using System.Net.Http;
using System.Threading.Tasks;
using System.Data;
using System.Net;
using System.Net.Http.Formatting;

namespace APIDesenTMKT.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class CentroResultadoController : ControllerBase
    {

        private readonly IConfiguration configuration;
        public CentroResultadoController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        [HttpGet]
        [Route("GetCentroResultado")]

        public List<CentroResultado> GetCentroResultado(int tipoBusca, int ctrCodigo, string agtCodigo)
        {
            List<CentroResultado> resultado = new List<CentroResultado>();
            DAL.CentroResultadoDAL dal = new DAL.CentroResultadoDAL(this.configuration);
            resultado = dal.GetCentroResultado(tipoBusca, ctrCodigo, agtCodigo);
            return resultado;
        }

    }

}

