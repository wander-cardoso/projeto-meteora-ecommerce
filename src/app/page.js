import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";

async function fetchProdutosApi() {
  const res = await fetch(
    "https://api.npoint.io/d787e12e7ee2f6cb7267/produtos"
  );

  

  if (!res.ok) {
    throw new Error("Não foi possivel obter os dados");
  }

  const produtos = await res.json();

  return produtos;
}

async function fetchCategoriasApi() {
  const res = await fetch(
    "https://api.npoint.io/cfb064f82f9cff944f66/categorias"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const produtos = await res.json();

  return produtos;
}

export default async function Home() {
  const produtos = await fetchProdutosApi();
  const categorias = await fetchCategoriasApi();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
