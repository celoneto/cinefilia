import Grid from "@/components/templates/Grid";

export default function Home() {
  return (
    <Grid column numCols={3} numRows={5}>
      <p className="w-20 h-20 bg-red-500">Teste 01</p>
      <p className="w-20 h-20 bg-red-500">Teste 01</p>
      <p className="w-20 h-20 bg-red-500">Teste 01</p>
      <p className="w-20 h-20 bg-red-500">Teste 01</p>
      <p className="w-20 h-20 bg-red-500">Teste 01</p>
      <p className="w-20 h-20 bg-red-500">Teste 01</p>
      <p className="w-20 h-20 bg-blue-500">Teste 02</p>
    </Grid>
  );
}
