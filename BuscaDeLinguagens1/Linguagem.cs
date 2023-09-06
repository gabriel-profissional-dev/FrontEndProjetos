using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace BuscaDeLinguagens1
{
    class Linguagem
    {
        public int Ano { get; set; }
        public string Nome { get; set; }
        public string DesenvolvedorChefe { get; set; }
        public string Predecessores { get; set; }

        public void Imprimir()
        {
            Console.WriteLine("----------------------------------------------------");
            Console.WriteLine($"Nome: {Nome}");
            Console.WriteLine($"Ano de criação: {Ano}");
            Console.WriteLine($"Desenvolvedor Chefe: {DesenvolvedorChefe}");
            Console.WriteLine($"Predecessores: {Predecessores}");
            Console.WriteLine("----------------------------------------------------");
        }
    }
}


