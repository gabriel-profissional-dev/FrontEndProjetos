using TreinamentoWeb.Models;
using System.Collections.Generic;
using System.Web.Mvc;

namespace TreinamentoWeb.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Exercicio1()
        {
            return View();
        }

        [HttpGet]
        public JsonResult Greetings()
        {
            //var json = new JsonResult();

            var json = new
            {
                Message = "Bem vindos ao tópico de MVC! =)"
            };

            return Json(json, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        public JsonResult ListarAlunos()
        {

            var alunos = new List<Aluno>();
            var count = 0;
            do
            {

                var aluno = new Aluno
                {
                    Nome = "Aluno " + count,
                    Matricula = "00000" + count
                };
                count++;
                alunos.Add(aluno);
            } while (alunos.Count < 10);





            var json = new JsonResponse
            {
                Result = alunos
            };

            return Json(json, JsonRequestBehavior.AllowGet);
        }
    }
}