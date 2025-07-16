import Button from "@/components/Button";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col  h-screen justify-center items-center text-4xl font-semibold">
      <h1>Airbnb Application Clone system</h1>
      <Button name="Get Started" />
    </main>
  );
}

export default Home;