using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuscaDeLinguagens1
{
    class Program
    {
        static void Main(string[] args)
        {
            Linguagens linguagens = new Linguagens();

            linguagens.AdicionarLinguagem(new Linguagem
            {
                Ano = 1990,
                Nome = "AMOS BASIC",
                DesenvolvedorChefe = "François Lionet, Constantin Sotiropoulos.",
                Predecessores = "STO BASIC"
            });

            linguagens.AdicionarLinguagem(new Linguagem
            {
                Ano = 1991,
                Nome = "Visual Basic",
                DesenvolvedorChefe = "Alan Cooper",
                Predecessores = "QuickBasic"
            });

            linguagens.AdicionarLinguagem(new Linguagem
            {
                Ano = 1995,
                Nome = "Ruby",
                DesenvolvedorChefe = "Yukihiro Matsumoto",
                Predecessores = "Smalltalk;Perl"
            });

            linguagens.AdicionarLinguagem(new Linguagem
            {
                Ano = 2009,
                Nome = "Go",
                DesenvolvedorChefe = "Google",
                Predecessores = "C;Oberon;Limbo;Smalltalk"
            });

            int escolha = -1;

            while (escolha != 0)
            {
                Console.WriteLine("Escolha uma opção:");
                Console.WriteLine("1. Buscar por nome: ");
                Console.WriteLine("0. Sair");

                if (int.TryParse(Console.ReadLine(), out escolha))
                {
                    switch (escolha)
                    {
                        case 1:
                            Console.WriteLine("----------------------------------------------------");
                            Console.WriteLine("Linguagens:");
                            Console.WriteLine("AMOS BASIC");
                            Console.WriteLine("Visual Basic");
                            Console.WriteLine("Ruby");
                            Console.WriteLine("Go");
                            Console.WriteLine("----------------------------------------------------");
                            Console.WriteLine(" ");
                            Console.Write("Digite o nome da linguagem: ");
                            string nomeBusca = Console.ReadLine();

                            var linguagemEncontrada = linguagens.BuscarLinguagemPorNome(nomeBusca);
                            if (linguagemEncontrada != null)
                            {
                                linguagemEncontrada.Imprimir();
                            }
                            else
                            {
                                Console.WriteLine("Linguagem não encontrada.");
                            }
                            break;

                        case 0:
                            Console.WriteLine("Saindo do programa.");
                            break;

                        default:
                            Console.WriteLine("Opção inválida. Digite novamente.");
                            break;
                    }
                }
                else
                {
                    Console.WriteLine("Entrada inválida. Digite um número.");
                }
            }
        }
    }
}