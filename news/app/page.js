import Image from 'next/image'
import { Container } from 'postcss';

const getData = async() => {

  const data = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-05-05&sortBy=publishedAt&apiKey=9fca3633446141eca52b62d2899baf95")
  console.log(data)

  if (!data.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  
  const result = data.json()

  return result
} 

export default async function Home() {

  const contents = await getData()
  const [ content ] = await Promise.all([contents]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>{content.title}</h1>
      </div>
    </main>
  )
}
