using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuscaDeLinguagens1
{
    class Linguagens
    {
        private List<Linguagem> listaLinguagens = new List<Linguagem>();

        public void AdicionarLinguagem(Linguagem l)
        {
            listaLinguagens.Add(l);
        }

        public void RemoverLinguagem(Linguagem l)
        {
            listaLinguagens.Remove(l);
        }

        public Linguagem BuscarLinguagemPorNome(string nome)
        {
            return listaLinguagens.FirstOrDefault(l => l.Nome.StartsWith(nome, StringComparison.OrdinalIgnoreCase));
        }

        public Linguagem BuscarPorAno(int ano)
        {
            return listaLinguagens.FirstOrDefault(l => l.Ano == ano);
        }

        public Linguagem BuscarPorDesenvolvedorChefe(string nomeDesenvolvedorChefe)
        {
            return listaLinguagens.FirstOrDefault(l => l.DesenvolvedorChefe.IndexOf(nomeDesenvolvedorChefe, StringComparison.OrdinalIgnoreCase) >= 0);
        }

        public Linguagem BuscarPorPredecessor(string nomePredecessor)
        {
            return listaLinguagens.FirstOrDefault(l => l.Predecessores.IndexOf(nomePredecessor, StringComparison.OrdinalIgnoreCase) >= 0);
        }
    }
}


