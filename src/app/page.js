export default function Home() {
  return (
    <>
      <div className="flex mt-16">
                <div className="md:w-3/4 px-4 ">
                    <div className="rounded-xl">
      <h2 className="text-blue-600 text-2xl mt-16">Tentang Saya</h2>
      <p class="text-left">Haii ! Nama saya M Hanif Ilyas, Mahasiswa Jurusan Informatika di Politeknik LP3I. 
        Saya memiliki ketertarikan yang mendalam dalam dunia teknologi dan pemrograman.</p>
      <div>
        <button className="mt-14 rounded-lg bg-sky-500/100 w-48 min-h-12 text-white">START</button>
      </div>
                        
                    </div>
                </div>
                <div className="md:w-1/3">
                <img class="object-fill h-68 w-96" src="/images/1234.jpg" alt="image description">
                </img>
                </div>
            </div>
    </>
  );
}