import Header from '../components/Header';
import Footer from '../components/Footer';
import TodoForm from '../components/TodoForm';

function Home() {
  return (
    <>
      <Header />
      <main className=' p-4 bg-background py-40'>
        <TodoForm />
      </main>
      <Footer />
    </>
  );
}

export default Home;
