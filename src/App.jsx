function App() {
  return (
    <>
      <header className="sticky top-0 z-10 flex flex-row justify-between items-center w-full p-4 bg-amber-300/80">
        <h1 className="text-2xl font-bold text-orange-950">Travelblog 2023</h1>
        <nav className="flex flex-row space-x-2 list-none">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">New Post</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </nav>
      </header>
      <main className="flex flex-col min-h-screen w-full">
        <section className="flex flex-col justify-center items-center space-y-3 text-amber-50 text-4xl  w-full h-screen bg-[url('/footprints-sand.jpg')] bg-cover">
          <h2 className="font-bold">Footprints in the sand</h2>
          <p>are but temporary traces of our yourney</p>
          <p>in direct contact to the ground.</p>
          <p>That is our way to travel!</p>
        </section>

        <div className="flex flex-col md:flex-row min-h-screen w-full">
          <section className="w-1/2 min-h-screen p-2 border-r-2 border-slate-300">
            <h2 className="sticky top-16 text-2xl font-bold text-center text-orange-950">
              Blog Post Previews
            </h2>
          </section>
          <section className="sticky top-16 w-1/2 h-96 p-2">
            <img src="/maps.jpg" alt="" className="object-cover" />
          </section>
        </div>
      </main>
      <footer className="flex flex-row items-center justify-center p-4 bg-amber-200">
        <ul className="flex flex-row space-x-4 list-none">
          <li>Contact</li>
          <li>Credits</li>
          <li>Github</li>
          <li>another item</li>
        </ul>
      </footer>
    </>
  );
}

export default App;
