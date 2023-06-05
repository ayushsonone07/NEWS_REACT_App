const getData = async() => {

  const data = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-05-05&sortBy=publishedAt&apiKey=9fca3633446141eca52b62d2899baf95")
  console.log(data)

  if (!data.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  
  const result = await data.json()

  return result;
}

export default async function Home() {

  const contents = await getData();
  const content = await Promise.all([contents])[0];

  return (
    <main>
        <section className="bg-indigo-700 h-[100vh] text-white">
          <h1 className="font-bold">SECTION 1</h1>
          <p>Tailwind CSS Navbar - Flowbite
The navbar component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns

Get started with the responsive navbar component from Flowbite to quickly set up a navigation menu for your website and set up the logo, list of pages, CTA button, search input, user profile options with a dropdown, and more.

Default navbar #
Use this example of a navigation bar built with the utility classes from Tailwind CSS to enable users to navigate across the pages of your website.</p>
        </section>
        <section className="bg-cyan-700 h-[100vh] text-white">
          <h1 className="font-bold" >SECTION 2</h1>
          <p>Tailwind CSS Navbar - Flowbite
The navbar component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns

Get started with the responsive navbar component from Flowbite to quickly set up a navigation menu for your website and set up the logo, list of pages, CTA button, search input, user profile options with a dropdown, and more.

Default navbar #
Use this example of a navigation bar built with the utility classes from Tailwind CSS to enable users to navigate across the pages of your website.</p>
        </section>
        <section className="bg-green-700 h-[100vh] text-white">
          <h1 className="font-bold" >SECTION 3</h1>
          <p>Tailwind CSS Navbar - Flowbite
The navbar component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns

Get started with the responsive navbar component from Flowbite to quickly set up a navigation menu for your website and set up the logo, list of pages, CTA button, search input, user profile options with a dropdown, and more.

Default navbar #
Use this example of a navigation bar built with the utility classes from Tailwind CSS to enable users to navigate across the pages of your website.</p>
        </section>
    </main>
  );
}